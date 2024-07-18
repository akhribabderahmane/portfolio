// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgUTJoM2nWZBbJtRtI4NJX_kN_n0bNPwk",
  authDomain: "guestbook-24567.firebaseapp.com",
  projectId: "guestbook-24567",
  storageBucket: "guestbook-24567.appspot.com",
  messagingSenderId: "283331661015",
  appId: "1:283331661015:web:dc2a3ed8eb0f4b089ef492",
  measurementId: "G-LN4RNJ64ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGithub = () => signInWithPopup(auth, githubProvider);
export const logout = () => signOut(auth);
