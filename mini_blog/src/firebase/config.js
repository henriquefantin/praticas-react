import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtOGzHotZKwRFI4WvyztSlGtK1ljIfLWM",
    authDomain: "mini-blog-bbfe7.firebaseapp.com",
    projectId: "mini-blog-bbfe7",
    storageBucket: "mini-blog-bbfe7.firebasestorage.app",
    messagingSenderId: "931989126712",
    appId: "1:931989126712:web:f4c0f25bee96cc686230cd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };