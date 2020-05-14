import "firebase/auth";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBs2xEjoAT8LHS3QJNQDMwFl1OpJ2fQlJg",
  authDomain: "uaspbf-d6325.firebaseapp.com",
  databaseURL: "https://uaspbf-d6325.firebaseio.com",
  projectId: "uaspbf-d6325",
  storageBucket: "uaspbf-d6325.appspot.com",
  messagingSenderId: "977690034745",
  appId: "1:977690034745:web:fb6bc2cee57e06777cc3e8",
  measurementId: "G-938FV1675P",
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
