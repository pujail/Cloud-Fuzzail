import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyD-rzvgH5zU9QgjkHovHM_7tush7QfycUo",
    authDomain: "twofactor-login.firebaseapp.com",
    projectId: "twofactor-login",
    storageBucket: "twofactor-login.appspot.com",
    messagingSenderId: "XXXXXXXXXX",
    appId: "1:XXXXXXXXXXXX:web:XXXXXXXXXX"
  };

// Inisialisasi Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);