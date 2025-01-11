// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, onSnapshot} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHYv_ES8FL8atImc6En3a-1CdBgh71x7A",
  authDomain: "kandels1.firebaseapp.com",
  projectId: "kandels1",
  storageBucket: "kandels1.firebasestorage.app",
  messagingSenderId: "568489439967",
  appId: "1:568489439967:web:de2f45ace36f02cdb6ef6a",
  measurementId: "G-120M9LL9DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize the firestore
const db = getFirestore(app)

//export the Firestore database
export {db, collection, addDoc, getDocs, onSnapshot};