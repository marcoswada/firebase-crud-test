// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1amabyXoTxN6KjAhcXp-XRJro7Gs5AyA",
  authDomain: "sandbox-a9eaf.firebaseapp.com",
  databaseURL: "https://sandbox-a9eaf.firebaseio.com",
  projectId: "sandbox-a9eaf",
  storageBucket: "sandbox-a9eaf.appspot.com",
  messagingSenderId: "884893440431",
  appId: "1:884893440431:web:2c48fccd8a5ffdd907f75a",
  measurementId: "G-WXV0L501G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);