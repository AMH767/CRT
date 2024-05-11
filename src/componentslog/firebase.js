// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-uU36chfsoR9SpnmorRRHk2n2KW5VSZI",
  authDomain: "login-auth-4a807.firebaseapp.com",
  projectId: "login-auth-4a807",
  storageBucket: "login-auth-4a807.appspot.com",
  messagingSenderId: "531256810009",
  appId: "1:531256810009:web:e19c0a194ae100e43ae888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;