import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  projectId: "chatty-e90ae",
  appId: "1:987449726994:web:9825bc44bc6e0ddd3ea0cb",
  storageBucket: "chatty-e90ae.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyC_0PRqwrWGBgpPYOzh7FBlvTxpaf9Uei8",
  authDomain: "chatty-e90ae.firebaseapp.com",
  messagingSenderId: "987449726994",
  measurementId: "G-MQBSH39KD3",
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();