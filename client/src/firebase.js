
  // import firebase from "firebase";
  import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCY0vZ44804VsvRC1Dzi7lT6VZOHP6i4zc",
    authDomain: "ecommerce-4313c.firebaseapp.com",
    projectId: "ecommerce-4313c",
    storageBucket: "ecommerce-4313c.appspot.com",
    messagingSenderId: "242718976578",
    appId: "1:242718976578:web:3d0a5e3248d085423d5bdb"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
