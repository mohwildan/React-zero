import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCx4TLpn1UJ3KFO2jSa8DKezeHtCMsITD4",
  authDomain: "nextjs-auth-980bc.firebaseapp.com",
  projectId: "nextjs-auth-980bc",
  storageBucket: "nextjs-auth-980bc.appspot.com",
  messagingSenderId: "712149369013",
  appId: "1:712149369013:web:54b34704b89da20a387efc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()


export function singup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}