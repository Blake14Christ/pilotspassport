import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN1NPGSnxz8srd6nL0Je4IFCD5D3Z86aU",
  authDomain: "pilotspassport.firebaseapp.com",
  projectId: "pilotspassport",
  storageBucket: "pilotspassport.firebasestorage.app",
  messagingSenderId: "830142665066",
  appId: "1:830142665066:web:ce0a353721cfd7a9069513",
  measurementId: "G-G6XYYFM50H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);