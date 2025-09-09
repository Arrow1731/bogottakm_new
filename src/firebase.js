// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa5nlYTIbOcLJ2epN297SI6-yHfcL_OCA",
  authDomain: "bogottakm-cff4e.firebaseapp.com",
  projectId: "bogottakm-cff4e",
  storageBucket: "bogottakm-cff4e.appspot.com",
  messagingSenderId: "1040412705357",
  appId: "1:1040412705357:web:d0def55649b368eb69d204",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);