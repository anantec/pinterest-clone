// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSrFqV9RxLVbBjp3KrfaEUkZh96GjN1bQ",
  authDomain: "anant-singh-ba19c.firebaseapp.com",
  projectId: "anant-singh-ba19c",
  storageBucket: "anant-singh-ba19c.appspot.com",
  messagingSenderId: "692639401695",
  appId: "1:692639401695:web:f2f70e84ae4aa9a6730b6a",
  measurementId: "G-D9F4C4M06H"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;