import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCm-xRye3ZnbohNtdn9vlS0Gx55ANF_TnU",
    authDomain: "crwn-db-e47de.firebaseapp.com",
    projectId: "crwn-db-e47de",
    storageBucket: "crwn-db-e47de.appspot.com",
    messagingSenderId: "109821320533",
    appId: "1:109821320533:web:f43d177f16dc894bcfa3dc",
    measurementId: "G-YXRX4D0G6Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  /** Google authentication settings */

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
