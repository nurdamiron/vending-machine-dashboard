// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACI7HmnVk1VyIlqllnHM52-4CzPAGY6JM",
  authDomain: "clean-point-ala.firebaseapp.com",
  projectId: "clean-point-ala",
  storageBucket: "clean-point-ala.appspot.com",
  messagingSenderId: "163279299650",
  appId: "1:163279299650:web:098f4868d44b338148f9db",
  measurementId: "G-VXWQ68D4PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);