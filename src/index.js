import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWZ_KtP0si3Gnd5W4XdOBCjXiQ0XA3REk",
  authDomain: "craftbeer-ae7a4.firebaseapp.com",
  projectId: "craftbeer-ae7a4",
  storageBucket: "craftbeer-ae7a4.appspot.com",
  messagingSenderId: "873465670843",
  appId: "1:873465670843:web:242ae3f84fd98090c4cd9e"
};

// Initialize Firebase
initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
