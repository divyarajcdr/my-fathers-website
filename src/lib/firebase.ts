// Import the functions you need from the SDKs
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ0psie-HGOk43MO8IBudcOX0lYNJOxwA",
    authDomain: "fatherscompanywebsite.firebaseapp.com",
    projectId: "fatherscompanywebsite",
    storageBucket: "fatherscompanywebsite.firebasestorage.app",
    messagingSenderId: "194941407340",
    appId: "1:194941407340:web:e0f2fcd222d55d0292c849"
};

// Initialize Firebase
// We add a check to see if the app is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };