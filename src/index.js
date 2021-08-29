import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCMo0j3bEkaMUi6n-ThtGU4PrE4QFf6Vdg",
  authDomain: "fireflyweb-8ce10.firebaseapp.com",
  databaseURL: "https://fireflyweb-8ce10-default-rtdb.firebaseio.com",
  projectId: "fireflyweb-8ce10",
  storageBucket: "fireflyweb-8ce10.appspot.com",
  messagingSenderId: "1004666038917",
  appId: "1:1004666038917:web:ea793065abe6a45f4197ec",
  measurementId: "G-XVBPFCSS51"
};

// Initialize Firebase
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
const app = initializeApp(config);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
