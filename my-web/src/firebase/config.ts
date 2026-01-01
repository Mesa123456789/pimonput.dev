// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvnR_hmxQUfkClRqhTV5LG8VcIPsSjZV8",
  authDomain: "pimonput-dev-af320.firebaseapp.com",
  projectId: "pimonput-dev-af320",
  storageBucket: "pimonput-dev-af320.firebasestorage.app",
  messagingSenderId: "437142524330",
  appId: "1:437142524330:web:03980a6c6aaf38d2d39bd3",
  measurementId: "G-Y4FVYXX992"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);