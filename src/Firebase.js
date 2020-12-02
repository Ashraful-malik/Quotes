import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCE_nNtboemer3T3NRgxvTOhPX--CgfmLE",
  authDomain: "react-contactus.firebaseapp.com",
  databaseURL: "https://react-contactus.firebaseio.com",
  projectId: "react-contactus",
  storageBucket: "react-contactus.appspot.com",
  messagingSenderId: "151802061586",
  appId: "1:151802061586:web:23e4ab6cf8ff490b6649cb",
  measurementId: "G-2LV8L2NM6N",
});
const dataBase = firebaseApp.firestore();
export default dataBase;
