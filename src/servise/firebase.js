import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDK2oxZNKcnLQ4zdENonMTmvtu49wHDElc",
    authDomain: "reactlesson9-402ff.firebaseapp.com",
    projectId: "reactlesson9-402ff",
    storageBucket: "reactlesson9-402ff.appspot.com",
    messagingSenderId: "883308700565",
    appId: "1:883308700565:web:b00dbbde12602243884c9c"
};

const firebaseDb = firebase.initializeApp(firebaseConfig);
export const db = firebaseDb.database().ref;
export const auth = firebase.auth();