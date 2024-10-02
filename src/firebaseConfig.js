// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Importa Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7D5CtIBZzbEUE3uCQhPBUq9HRti7LSyg",
  authDomain: "desafio-firebase-1-b2d62.firebaseapp.com",
  projectId: "desafio-firebase-1-b2d62",
  storageBucket: "desafio-firebase-1-b2d62.appspot.com",
  messagingSenderId: "566294495633",
  appId: "1:566294495633:web:7a42a6c6d80db03d23da30"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);  

export { db };  
