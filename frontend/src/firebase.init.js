import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLNn1fd1OdsMKZvvfUvzhMX70ptRYSCEk",
  authDomain: "twitter-clone-ed1bc.firebaseapp.com",
  projectId: "twitter-clone-ed1bc",
  storageBucket: "twitter-clone-ed1bc.appspot.com",
  messagingSenderId: "346850408691",
  appId: "1:346850408691:web:957569a5fc3faf89cadf86",
  measurementId: "G-8RVZBL294C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;