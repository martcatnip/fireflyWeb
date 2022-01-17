// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0FN39rxVYECxB0bHH9EQRWE6U3tYVous",
    authDomain: "firefly-reading-project.firebaseapp.com",
    projectId: "firefly-reading-project",
    storageBucket: "firefly-reading-project.appspot.com",
    messagingSenderId: "19572080150",
    appId: "1:19572080150:web:047cbb89c89497b2643f37"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore();
