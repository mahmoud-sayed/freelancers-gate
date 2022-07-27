// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFhN2ElPRiJ93_uf1G6q0NandFOi2FdA0",
  authDomain: "freelancers-gate.firebaseapp.com",
  projectId: "freelancers-gate",
  storageBucket: "freelancers-gate.appspot.com",
  messagingSenderId: "505785686663",
  appId: "1:505785686663:web:7b4f3b1b8cf4a4c1373622",
  measurementId: "G-ZFX2CT32P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // for Auth operation
//const analytics = getAnalytics(app); // for analytics operation
export const db = getFirestore(app); // for CRUD operations