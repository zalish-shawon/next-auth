// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuoP0wRqzo6F2yxfwTf9TomLn97EvpxfU",
  authDomain: "nextjs-auth-aa8d2.firebaseapp.com",
  projectId: "nextjs-auth-aa8d2",
  storageBucket: "nextjs-auth-aa8d2.firebasestorage.app",
  messagingSenderId: "861454042626",
  appId: "1:861454042626:web:9abd2288cea18ebd27c91b",
  measurementId: "G-0M54E0SF18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
