// import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAUhm-_rI7SuUbQcr3r12SSgtUiOw1X9nQ",
    authDomain: "netflix-ui-clone-6a7da.firebaseapp.com",
    projectId: "netflix-ui-clone-6a7da",
    storageBucket: "netflix-ui-clone-6a7da.appspot.com",
    messagingSenderId: "137685829401",
    appId: "1:137685829401:web:3c33f3ca9eff67550e6788",
    databaseURL: "https://netflix-ui-clone-6a7da-default-rtdb.firebaseio.com",
}
// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig)

// Use these for db & auth
const db = getDatabase(firebaseApp)
const auth = getAuth(firebaseApp)

export { auth, db }
