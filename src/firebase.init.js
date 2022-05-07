// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAectpPFK0MSJPzlUCKJWFd1bc8aQ6v-bg",
  authDomain: "splab-87a88.firebaseapp.com",
  projectId: "splab-87a88",
  storageBucket: "splab-87a88.appspot.com",
  messagingSenderId: "280053388999",
  appId: "1:280053388999:web:495a580fc0b901e48c10e2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


