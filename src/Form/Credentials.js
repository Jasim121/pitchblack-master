import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYNeLeI4RM2rd9CBFRmU3HpbVqeu98a3I",
  authDomain: "pitchblack-608ed.firebaseapp.com",
  projectId: "pitchblack-608ed",
  storageBucket: "pitchblack-608ed.appspot.com",
  messagingSenderId: "49618985507",
  appId: "1:49618985507:web:975ad5ed274b5601944796",
  measurementId: "G-G4J23XLWG1",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db as default };
