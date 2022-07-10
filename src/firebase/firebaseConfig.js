// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Fi frrebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE_I60znDMPfKY9QBNR3RB-WSo7ezCAxA",
    authDomain: "no-name-cc488.firebaseapp.com",
    projectId: "no-name-cc488",
    storageBucket: "no-name-cc488.appspot.com",
    messagingSenderId: "124103157398",
    appId: "1:124103157398:web:cb7e8e698fab50bf5484b7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, db, auth, facebook };
