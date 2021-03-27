
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp ({
  apiKey: "AIzaSyB-ecHHojY6eUeWlFrLPeKlNFlnEl521Uw",
  authDomain: "clone-mar21-73643.firebaseapp.com",
  databaseURL: "https://clone-mar21-73643-default-rtdb.firebaseio.com",
  projectId: "clone-mar21-73643",
  storageBucket: "clone-mar21-73643.appspot.com",
  messagingSenderId: "801860967153",
  appId: "1:801860967153:web:8cd0b486e1ff4f314d2750",
  measurementId: "G-2H4KT264KG"
});

  const db = firebase.firestore();
  export { db }