// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCyU2SY6rP_nVTcO0jP10heLRqrtzqyqE",
  authDomain: "rotation-manager-a2a38.firebaseapp.com",
  projectId: "rotation-manager-a2a38",
  storageBucket: "rotation-manager-a2a38.appspot.com",
  messagingSenderId: "182447693723",
  appId: "1:182447693723:web:24313e46f5dd36d86b0b3e",
  measurementId: "G-D6DTFM2F84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();