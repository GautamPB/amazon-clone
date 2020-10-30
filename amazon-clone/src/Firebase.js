import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWgL_fTyoMkmL396zkDmRTEmh5rZftvFc",
    authDomain: "fir-86433.firebaseapp.com",
    databaseURL: "https://fir-86433.firebaseio.com",
    projectId: "fir-86433",
    storageBucket: "fir-86433.appspot.com",
    messagingSenderId: "1010871504814",
    appId: "1:1010871504814:web:fe8820e0d3a59c9718823f",
    measurementId: "G-KBLSLZ5ZMM"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};