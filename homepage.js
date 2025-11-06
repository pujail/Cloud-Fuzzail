// GANTI SELURUH ISI FILE homepage.js DENGAN KODE INI

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// SAYA SALIN KONFIGURASI DARI file firebaseauth.js ANDA KE SINI
const firebaseConfig = {
    apiKey: "AIzaSyD-rzvgH5zU9QgjkHovHM_7tush7QfycUo",
    authDomain: "cloud-fuzzail.firebaseapp.com",
    projectId: "cloud-fuzzail",
    storageBucket: "cloud-fuzzail.firebasestorage.app",
    messagingSenderId: "246825800611",
    appId: "1:246825800611:web:ee9722939fd90361cf0016",
    measurementId: "G-M3ZX7EYXPT"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// LOGIKA onAuthStateChanged YANG DIPERBAIKI
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Jika user login, AMBIL user.uid
        console.log("User is logged in:", user.uid);
        const docRef = doc(db, "users", user.uid); // Gunakan user.uid
        
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    document.getElementById('loggedUserFName').innerText = userData.firstName;
                    document.getElementById('loggedUserEmail').innerText = userData.email;
                    document.getElementById('loggedUserLName').innerText = userData.lastName;
                } else {
                    console.log("No document found for this user in Firestore!");
                }
            })
            .catch((error) => {
                console.error("Error getting document:", error);
            });
    } else {
        // Jika tidak ada user, paksa kembali ke halaman index.html
        console.log("No user is signed in. Redirecting to login page.");
        window.location.href = 'index.html';
    }
});

// KODE LOGOUT YANG DIPERBAIKI
const logoutButton = document.getElementById('logout');

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUserId'); // Hapus item localStorage (opsional tapi bagus)
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful.");
                window.location.href = 'index.html'; // Redirect ke halaman login
            })
            .catch((error) => {
                console.error('Error Signing out:', error);
            });
    });
} else {
    console.error("Logout button element not found!");
}
// TIDAK ADA '}' TAMBAHAN DI SINI
