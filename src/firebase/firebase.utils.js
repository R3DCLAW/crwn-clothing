import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvG2mseXhSdvSIqYyZWOTGbWt9VTuXKfQ",
  authDomain: "crwn-clothing-ddd3d.firebaseapp.com",
  projectId: "crwn-clothing-ddd3d",
  storageBucket: "crwn-clothing-ddd3d.appspot.com",
  messagingSenderId: "548971238649",
  appId: "1:548971238649:web:81cd43b7f3df627deabe28",
  measurementId: "G-905XT46RJF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
