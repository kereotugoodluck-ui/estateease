// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsfHjgFSCWFQz2IxtY8a22kjEJ4uLocuE",
  authDomain: "estateease-c38a2.firebaseapp.com",
  projectId: "estateease-c38a2",
  storageBucket: "estateease-c38a2.firebasestorage.app",
  messagingSenderId: "148625069916",
  appId: "1:148625069916:web:9c62300a6345f0f50a5399",
  measurementId: "G-G20TTCQ4HR"
};

// Initialize Firebase

const app = getApps().length ? getApp() :initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();