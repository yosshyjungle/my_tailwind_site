import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdMp4vRviECqGP6myaGQNn_M1zrpzbU2Q",
    authDomain: "tailwindcss-portfolio.firebaseapp.com",
    projectId: "tailwindcss-portfolio",
    storageBucket: "tailwindcss-portfolio.appspot.com",
    messagingSenderId: "150595742082",
    appId: "1:150595742082:web:3ed479cd7eff5c4e7d079b"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };