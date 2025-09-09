// // src/firebase/firebase.js
// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyAFdGaB2AuIe7gCwcHwuIpKs76I1g_bI3s",
//   authDomain: "library-project-61478.firebaseapp.com",
//   projectId: "library-project-61478",
//   storageBucket: "library-project-61478.firebasestorage.app",
//   messagingSenderId: "330918447891",
//   appId: "1:330918447891:web:f0eddbd1197ddb786828e6",
//   measurementId: "G-6BM21T1QQ7"
// }

// const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa5nlYTIbOcLJ2epN297SI6-yHfcL_OCA",
  authDomain: "bogottakm-cff4e.firebaseapp.com",
  projectId: "bogottakm-cff4e",
  storageBucket: "bogottakm-cff4e.firebasestorage.app",
  messagingSenderId: "1040412705357",
  appId: "1:1040412705357:web:d0def55649b368eb69d204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);