// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-S2d8dYQ4W228bDAUabEY-JS7XVjPKU4",
  authDomain: "ultimate-firebase-react-router.firebaseapp.com",
  projectId: "ultimate-firebase-react-router",
  storageBucket: "ultimate-firebase-react-router.firebasestorage.app",
  messagingSenderId: "787553107290",
  appId: "1:787553107290:web:90b8cffc630894873b0763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;