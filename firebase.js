import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCoUVmt7tWx5ZZk4V6ZpFVmKl9TNaebKSU",
    authDomain: "booking-project-e018f.firebaseapp.com",
    projectId: "booking-project-e018f",
    storageBucket: "booking-project-e018f.appspot.com",
    messagingSenderId: "736949291810",
    appId: "1:736949291810:web:d4e806ed3b0df65516f37b"
};

const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

const db= getFirestore();

export {auth,db};