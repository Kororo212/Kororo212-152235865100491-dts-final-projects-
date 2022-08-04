// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GithubAuthProvider,} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "learn-ea485.firebaseapp.com",
  projectId: "learn-ea485",
  storageBucket: "learn-ea485.appspot.com",
  messagingSenderId: "658645882214",
  appId: "1:658645882214:web:97a2b06d4f1c64604ea4a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const GAuth = new GoogleAuthProvider();
export const GitAuth = new GithubAuthProvider()
