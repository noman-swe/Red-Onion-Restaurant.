// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClHJlbO38co4jbq8GZIR3qOA6uZsIRHPk",
  authDomain: "red-onion-online-restaurant.firebaseapp.com",
  projectId: "red-onion-online-restaurant",
  storageBucket: "red-onion-online-restaurant.appspot.com",
  messagingSenderId: "396728226300",
  appId: "1:396728226300:web:7781a32f7ed8b4abff6279",
  measurementId: "G-T39H04ZYYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;