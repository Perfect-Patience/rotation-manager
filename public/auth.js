
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';
const firebaseConfig = {
    apiKey: "AIzaSyBCyU2SY6rP_nVTcO0jP10heLRqrtzqyqE",
    authDomain: "rotation-manager-a2a38.firebaseapp.com",
    projectId: "rotation-manager-a2a38",
    storageBucket: "rotation-manager-a2a38.appspot.com",
    messagingSenderId: "182447693723",
    appId: "1:182447693723:web:24313e46f5dd36d86b0b3e",
    measurementId: "G-D6DTFM2F84"
  };
  
document.addEventListener('DOMContentLoaded', event => {
    console.log("opened DOMContentLoaded");
    const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
    // function signInWithEmailAndPassword(auth, email, password) {
    //     console.log('Signing in with email and password:', email, password);
    //     return auth.signInWithEmailAndPassword(email, password);
    // } 

    document.getElementById('signInForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('User signed in:', user);
                alert('User signed in successfully!');
                window.location.href = "dashboard.html"; // Redirect to dashboard
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error signing in:', errorCode, errorMessage);
                alert('Error signing in: ' + errorMessage);
            });
    });

});