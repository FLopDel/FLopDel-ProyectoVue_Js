import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDGiyMFiA0SF-y3nMroqJO0QeGACCKi6wM",
    authDomain: "proyecto2trimestre-a991f.firebaseapp.com",
    projectId: "proyecto2trimestre-a991f",
    storageBucket: "proyecto2trimestre-a991f.appspot.com",
    messagingSenderId: "183029550961",
    appId: "1:183029550961:web:c379e951bddc12bb2d70d0"
});
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

