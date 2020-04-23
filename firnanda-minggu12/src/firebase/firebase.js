import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpd0HfsOcY3v0zOHdDgQGPVgCxmsKkX8M",
  authDomain: "fir-login-6bae3.firebaseapp.com",
  databaseURL: "https://fir-login-6bae3.firebaseio.com",
  projectId: "fir-login-6bae3",
  storageBucket: "fir-login-6bae3.appspot.com",
  messagingSenderId: "844791486238",
  appId: "1:844791486238:web:14a977e63d295b25e75b0f",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
