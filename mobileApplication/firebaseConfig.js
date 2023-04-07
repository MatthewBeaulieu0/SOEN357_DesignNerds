// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIIwsK-5UHEkhE1PR6iq2qCnF35cr7oR8",
  authDomain: "soen-357-project-d1990.firebaseapp.com",
  projectId: "soen-357-project-d1990",
  storageBucket: "soen-357-project-d1990.appspot.com",
  messagingSenderId: "476476828887",
  appId: "1:476476828887:web:ce94d6af8d1c08652c1492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Other exports
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const auth =  () => getAuth(app);


export {app, provider, db, auth};
