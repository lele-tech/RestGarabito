import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYbiZJZmimqc655MvA7GuJTKS_rB7QJyg",
    authDomain: "restgarabito.firebaseapp.com",
    projectId: "restgarabito",
    storageBucket: "restgarabito.firebasestorage.app",
    messagingSenderId: "110065524762",
    appId: "1:110065524762:web:e2a95f3a5551888dab31a3"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
