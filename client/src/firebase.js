// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase} from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdalC1EdZWY1WWQZbhONM2IeDe2H7VaSo",
  authDomain: "portfolio-4826f.firebaseapp.com",
  databaseURL: "https://portfolio-4826f-default-rtdb.firebaseio.com/",
  projectId: "portfolio-4826f",
  storageBucket: "portfolio-4826f.appspot.com",
  messagingSenderId: "735326680531",
  appId: "1:735326680531:web:a1a821404c2539ff7d2b26",
  measurementId: "G-RTE0VTG3CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
const signInWithGithub = () => signInWithPopup(auth, githubProvider);
const logout = () => signOut(auth);

export { auth, db, signInWithGoogle, signInWithGithub, logout };