// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2M_wtbbpj8e34xNdTVJK2QfD7EnKUKPM",
  authDomain: "authentication-3be54.firebaseapp.com",
  projectId: "authentication-3be54",
  storageBucket: "authentication-3be54.appspot.com",
  messagingSenderId: "552757413459",
  appId: "1:552757413459:web:36a6580448af0039e468a6",
  measurementId: "G-LDGXNW01VX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
