// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore}  from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuFvP2h5I1YRPjipZDl-ruRicrnPqOozo",
  authDomain: "fir-6db8e.firebaseapp.com",
  projectId: "fir-6db8e",
  storageBucket: "fir-6db8e.appspot.com",
  messagingSenderId: "776808111230",
  appId: "1:776808111230:web:6998077180703212898c2f",
  measurementId: "G-KR6DSMGQME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const database = getFirestore(app);