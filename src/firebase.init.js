// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCfRKBU4v3ny3-Oj-o2CH1SFIESqCOhgE",
  authDomain: "genious-car-services-b4432.firebaseapp.com",
  projectId: "genious-car-services-b4432",
  storageBucket: "genious-car-services-b4432.appspot.com",
  messagingSenderId: "151432427186",
  appId: "1:151432427186:web:5c5a29260dcb1ff216fbab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export  default auth;