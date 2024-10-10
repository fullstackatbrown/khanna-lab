'use client';
import React, { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, UserCredential } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import 'firebaseui/dist/firebaseui.css';
import { useRecoilState } from 'recoil';
import { adminState } from '../Atom';
import { auth, firestore } from '../firebaseConfig';

export default function AuthEmail() {
  const [isAdmin, setAdmin] = useRecoilState(adminState);

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window !== 'undefined') {
      // Import firebaseui only on the client-side
      const firebaseui = require('firebaseui');

      const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          {
            provider: GoogleAuthProvider.PROVIDER_ID,
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            requireDisplayName: false,
          },
        ],
        credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
        callbacks: {
          signInSuccessWithAuthResult: (authResult: UserCredential) => {
            (async () => {
              if (authResult.user) {
                const email = authResult.user.email;
                if (email) {
                  const document = doc(firestore, 'users', email);
                  const gotDoc = await getDoc(document);
                  if (gotDoc.exists()) {
                    setAdmin(true);
                  }
                }
              }
              window.location.assign('/admin');
            })();
            return false; // Return false to prevent automatic redirect
          },
        },
      };

      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(auth);
      ui.start('.firebase-auth-container', uiConfig);
    }
  }, [setAdmin]);

  return (
    <div>
      <div className="firebase-auth-container"></div>
    </div>
  );
}
// 'use client';
// import React, { useEffect, useState } from 'react';
// // Import the functions you need from the SDKs you need
// import * as firebaseui from 'firebaseui';
// import 'firebaseui/dist/firebaseui.css';
// import firebase from 'firebase/compat/app';
// import {
//   GoogleAuthProvider,
//   UserCredential,
//   getAuth,
// } from 'firebase/auth';
// import {
//   getFirestore,
//   doc,
//   getDoc,
// } from 'firebase/firestore';
// import {
//   useRecoilState,
// } from 'recoil';
// import { adminState } from '../Atom';
// import {firestore, auth} from '../firebaseConfig'

// /**
//  * Auth object that is shared between firestore authentication and database.
//  */
// interface authProps {
//   auth: ReturnType<typeof getAuth>;
// }

// /**
//  * Defines settings and display for Google authentication.
//  * @param props authProps
//  * @returns firebase auth ui component
//  */
// export default function AuthEmail() {
//   const [isAdmin, setAdmin] = useRecoilState(adminState);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const uiConfig = {
//         signInFlow: 'popup',
//         signInOptions: [
//           {
//             provider: GoogleAuthProvider.PROVIDER_ID,
//             clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//             requireDisplayName: false,
//           },
//         ],
//         credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
//         callbacks: {
//           signInSuccessWithAuthResult: (authResult: UserCredential) => {
//             (async () => {
//               if (authResult.user) {
//                 const email = authResult.user.email;
//                 if (email) {
//                   const document = doc(firestore, 'users', email);
//                   const gotDoc = await getDoc(document);
//                   if (gotDoc.exists()) {
//                     setAdmin(true);
//                   }
//                 }
//               }
//               window.location.assign('/admin');
//             })();
//             return false; // Return false to prevent automatic redirect
//           },
//         },
//       };

//       const ui =
//         firebaseui.auth.AuthUI.getInstance() ||
//         new firebaseui.auth.AuthUI(auth);
//       ui.start('.firebase-auth-container', uiConfig);
//     }
//   }, []);

//   return (
//     <div>
//       <div className="firebase-auth-container"></div>
//     </div>
//   );
// }
// // export default function AuthEmail() {
// //   const [isAdmin, setAdmin] = useRecoilState(adminState);

// //   const firebaseConfig = {
// //     apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
// //     authDomain: 'meyers-lab.firebaseapp.com',
// //     projectId: 'meyers-lab',
// //     storageBucket: 'meyers-lab.appspot.com',
// //     messagingSenderId: process.env.NEXT_PUBLIC_APP_MSG,
// //     appId: process.env.NEXT_PUBLIC_APP_APP,
// //     measurementId: process.env.NEXT_PUBLIC_APP_MSR,
// //   };

// //   if (!firebase.apps.length) {
// //     firebase.initializeApp(firebaseConfig);
// //   } else {
// //     firebase.app();
// //   }

// //   const firestore = getFirestore();

// //   var uiConfig = {
// //     // signInSuccessUrl: '/adminDash',
// //     //popup
// //     signInFlow: 'popup',
// //     signInOptions: [
// //       {
// //         provider: GoogleAuthProvider.PROVIDER_ID,
// //         clientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
// //         requireDisplayName: false,
// //       },
// //       // {
// //       //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
// //       //   requireDisplayName: false,
// //       // },
// //     ],
// //     credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
// //     tosUrl: 'your terms of service url',
// //     // Privacy policy url/callback.
// //     privacyPolicyUrl: function () {
// //       window.location.assign('<your-privacy-policy-url>');
// //     },
// //     callbacks: {
// //       signInSuccessWithAuthResult: (
// //         authResult: firebase.auth.UserCredential,
// //         redirectURL?: string,
// //       ) => {
// //         // You can add your own logic here if needed after a successful sign-in

// //         if (authResult.user) {
// //           const userId = authResult.user.uid;
// //           const email = authResult.user.email;
// //           if (email) {
// //             const document = doc(firestore, 'users', email);
// //             getDoc(document).then((gotDoc) => {
// //               if (gotDoc.exists()) {
// //                 setAdmin(true);
// //                 return true;
// //               }
// //             });
// //           }
// //         }
// //         // console.log('User signed in:', authResult.user);

// //         // Return false to prevent a redirect
// //         window.location.assign('/admin');
// //         return false;
// //       },
// //     },
// //   };

// //   useEffect(() => {
// //     const ui =
// //       firebaseui.auth.AuthUI.getInstance() ||
// //       new firebaseui.auth.AuthUI(auth);
// //     ui.start('.firebase-auth-container', uiConfig);
// //   }, [auth]);

// //   return (
// //     <div>
// //       <div className="firebase-auth-container"></div>
// //     </div>
// //   );
// // }
