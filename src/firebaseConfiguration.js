// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB26hEuEZJ_D1jelpLbIjtrLBLeIGgGpfE",
  authDomain: "prine-naif-chair.firebaseapp.com",
  projectId: "prine-naif-chair",
  storageBucket: "prine-naif-chair.appspot.com",
  messagingSenderId: "283592202186",
  appId: "1:283592202186:web:452c290da89a0008632133",
  measurementId: "G-Q62EGNKWG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();