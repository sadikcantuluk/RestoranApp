import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvzyqn16j-RkPFKRegmCAEaVqrJqLyF3Q",
  authDomain: "login-408b9.firebaseapp.com",
  projectId: "login-408b9",
  storageBucket: "login-408b9.appspot.com",
  messagingSenderId: "268590462315",
  appId: "1:268590462315:web:5a9c78087e1bd60364c82e",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };
