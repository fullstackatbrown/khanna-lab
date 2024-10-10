'use client';
import React, { useEffect, useState } from 'react';
// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';
import {
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';
import AuthEmail from './AuthEmail';
import {
  atom,
  RecoilRoot,
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
} from 'recoil';
import { adminState, current } from '../Atom';
import { useGlobalState } from '../createContext';
import { recoilPersist } from 'recoil-persist';
import { useRouter } from 'next/router';
import AdminDash from './AdminDash';
import {firestore, auth} from '../firebaseConfig'

/**
 * Defines settings and display for Google authentication.
 * @param props authProps
 * @returns firebase auth ui component
 */
export default function Page() {
  // const { isAdmin, setAdmin } = useGlobalState();

  // var isAdmin = useRecoilValue(admin);
  // var setAdmin = useSetRecoilState(admin);
  const [isAdmin, setAdmin] = useRecoilState(adminState);
  const [currentUser, setCurrentUser] = useRecoilState(current);
  const [name, setName] = useState<string>('');

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
    authDomain: 'meyers-lab.firebaseapp.com',
    projectId: 'meyers-lab',
    storageBucket: 'meyers-lab.appspot.com',
    messagingSenderId: process.env.NEXT_PUBLIC_APP_MSG,
    appId: process.env.NEXT_PUBLIC_APP_APP,
    measurementId: process.env.NEXT_PUBLIC_APP_MSR,
  };

    useEffect(() => {
      console.log('isAdmin in Admin:', isAdmin);
    }, [isAdmin]);

   if (!getApps().length) {
     initializeApp(firebaseConfig);
   }

  const firestore = getFirestore();

  const Auth = () => {
    return <AuthEmail></AuthEmail>;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      auth.onAuthStateChanged((user) => {
        if (user) {

          const userId = user.uid;
          const email = user.email;
          const name = user.displayName;
          if (name) {
            setName(name);
          }
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
    }
  }, []);

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById('header');
      if (header) {
        setHeaderHeight(header.offsetHeight + 50);
      }
    };
    if (typeof window !== 'undefined') {
      updateHeaderHeight();
      window.addEventListener('resize', updateHeaderHeight);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateHeaderHeight);
      }
    };
  }, []);

  return (
    <div>
      <div style={{ minHeight: `${headerHeight}px` }}></div>
      {isAdmin ? (
        <AdminDash />
      ) : (
        // Render this block if isAdmin is false
        <div>
          {/* <div>Sign in here for admin access.</div> */}
          <div className="firebase-auth-container">{Auth()}</div>
        </div>
      )}
    </div>
    // <div>
    //   <div style={{ minHeight: `${headerHeight}px` }}></div>
    //   <div className="firebase-auth-container">{Auth()}</div>
    // </div>
  );
}
