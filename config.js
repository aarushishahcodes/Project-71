// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR0GDd-rxXun9i2AA3TuvMonIlIFx-pYE",
  authDomain: "project-71-3acf4.firebaseapp.com",
  projectId: "project-71-3acf4",
  storageBucket: "project-71-3acf4.appspot.com",
  messagingSenderId: "400375713910",
  appId: "1:400375713910:web:bb73629aa21d345b178f57",
  measurementId: "G-J52V0RVT8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);