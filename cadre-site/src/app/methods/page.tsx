"use client";
import React, { useState, useEffect, useRef } from 'react';
import { openDB } from 'idb';
import { useRecoilState, useRecoilValue } from 'recoil';
import { adminState, current } from '../Atom';
import { initializeApp } from 'firebase/app';
import {auth, firestore, storage} from '../firebaseConfig'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';



export default function Methods() {
  const [headerHeight, setHeaderHeight] = useState(0);
  // const [pdfFiles, setPdfFiles] = useState<string[]>([]);
  // const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
  // const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentPdfUrl, setCurrentPdfUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isAdmin, setAdmin] = useRecoilState(adminState);
  const [currentUser, setCurrentUser] = useRecoilState(current)
  const username = useRecoilValue(current)

  // const firebaseConfig = {
  //   apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
  //   authDomain: 'meyers-lab.firebaseapp.com',
  //   projectId: 'meyers-lab',
  //   storageBucket: 'meyers-lab.appspot.com',
  //   messagingSenderId: process.env.NEXT_PUBLIC_APP_MSG,
  //   appId: process.env.NEXT_PUBLIC_APP_APP,
  //   measurementId: process.env.NEXT_PUBLIC_APP_MSR,
  // };

  // const app = initializeApp(firebaseConfig);
  // const firestore = getFirestore(app);
  // const auth = getAuth(app);
  
  useEffect(() => {
    console.log('isAdmin in Methods:', isAdmin);
    console.log('Email:', username);
  }, [isAdmin, username]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //User is signed in
        const userId = user.uid;
        const email = user.email;
        const name = user.displayName;
        if (email) {
          const document = doc(firestore, 'users', email);
          getDoc(document).then((gotDoc) => {
            if (gotDoc.exists()) {
              setAdmin(gotDoc.data().admin);
              setCurrentUser(email);
            }
          });
        }
      } else {
        console.log('Authentication error:', user);
      }
    });
  }, [auth]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  useEffect(() => {
    const fetchPdfUrl = async () => {
      const docRef = doc(firestore, 'methods', 'currentPdf');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCurrentPdfUrl(docSnap.data().url);
      } else {
        console.log('No such document!');
      }
    };

    fetchPdfUrl();
  }, []);

  // const file = event.target.files[0];
  // const fileUrl = URL.createObjectURL(file);
  // setPdfFiles((prev) => [fileUrl, ...prev]); // Prepend the new file URL to the array
  // setCurrentPdfIndex(0);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const storageRef = ref(storage, `methods/${file.name}`);
      console.log("test: ", file)

      try {
        await uploadBytes(storageRef, file);
        const fileUrl = await getDownloadURL(storageRef);
        console.log("url: ", fileUrl)

        const previousDocRef = doc(firestore, 'methods', 'currentPdf');
        const previousDocSnap = await getDoc(previousDocRef);
        if (previousDocSnap.exists()) {
          console.log('exists')
          const previousPdfUrl = previousDocSnap.data().url;
          console.log("url2: ", previousPdfUrl)
          const fileName = previousPdfUrl.split('/').pop().split('?')[0]; // Extracts fileName from the URL
          console.log('File Name:', fileName);

          const previousPdfRef = ref(storage, previousPdfUrl);
          console.log("prev pdf ref: ", previousPdfRef)

          await deleteObject(previousPdfRef)
            .then(() => {
              console.log('Previous PDF deleted successfully');
            })
            .catch((error) => {
              console.error('Error deleting previous PDF:', error);
            });

          await deleteDoc(previousDocRef)
            .then(() => {
              console.log('Previous document deleted successfully');
            })
            .catch((error) => {
              console.error('Error deleting previous document:', error);
            });
        }

        const document = doc(firestore, 'methods', 'currentPdf');
        // await setDoc(document, {fileUrl,
        // });
        const data = {url: fileUrl}

        setDoc(document, data).then(() => {
          alert('PDF uploaded successfully')
          setCurrentPdfUrl(fileUrl);
        });
        
      } catch (error) {
        console.error('Error uploading PDF:', error);
        alert('Failed to upload PDF');
      }
    }
  };

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//         const file = event.target.files[0];
//         const fileUrl = URL.createObjectURL(file);
//         setPdfFiles(prev => [fileUrl, ...prev]); // Prepend the new file URL to the array
//         setCurrentPdfIndex(0); // Reset the index to display the newest upload
//     }
// };


  // useEffect(() => {
  //   const initDB = async () => {
  //       const db = await openDB('pdfDB', 1, {
  //           upgrade(db) {
  //               if (!db.objectStoreNames.contains('pdfs')) {
  //                   db.createObjectStore('pdfs', { keyPath: 'id' });
  //               }
  //           },
  //       });
  //       return db;
  //   };

  //   initDB();
  // }, []);

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // const goToNextPdf = () => {
  //   setCurrentPdfIndex((currentIndex) => (currentIndex + 1) % pdfFiles.length);
  // };

  // const goToPreviousPdf = () => {
  //   setCurrentPdfIndex((currentIndex) => currentIndex === 0 ? pdfFiles.length - 1 : currentIndex - 1);
  // };

  return (
    <div className="flex h-auto min-h-screen w-full flex-col px-6 pt-2">
      {/* Dynamic spacer based on header height */}
      <div style={{ minHeight: `${headerHeight}px` }}></div>
      <div className="my-[5vh] min-h-[10vh]">
        <h1 className="mb-3 mr-[3vw] text-center font-circ-std text-4.5xl-responsive font-bold text-primary">
          Methods
        </h1>
        <p className="px-[20vw] font-circ-std text-lg text-primary">
          The PDF below includes detailed methods specifications for how our
          measures are calculated. We will update this document with additional
          versions as we release more data.
        </p>
      </div>

      {/* PDF Carousel */}
      {/* {pdfFiles.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '67vh',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={pdfFiles[currentPdfIndex]}
            style={{ width: '60%', height: '100%', border: 'none' }}
            frameBorder="0"
          ></iframe>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '10px',
            }}
          >
            <button
              onClick={goToPreviousPdf}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              &#8592;
            </button>
            <button
              onClick={goToNextPdf}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              &#8594;
            </button>
          </div>
        </div>
      )} */}

      {currentPdfUrl && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '80vh',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={currentPdfUrl}
            style={{ width: '60%', height: '100%', border: '5px solid rgb(78, 54, 41)' }}
          ></iframe>
        </div>
      )}

      {/* Upload button with extra padding below */}
      {isAdmin ? (
        <div
          className="mt-4 flex items-center justify-center"
          style={{ paddingBottom: '20px' }}
        >
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
          <button
            className="focus:shadow-outline mr-[3vw] rounded bg-primary-red px-4 py-2 font-circ-std font-bold 
          text-white hover:bg-primary-red_light focus:outline-none"
            onClick={triggerFileInput}
          >
            Upload PDF
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <div style={{
        minHeight: `${headerHeight}px`
      }}></div>
    </div>
  );
}
