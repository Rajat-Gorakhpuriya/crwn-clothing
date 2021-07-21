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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    /** if user doesnot exist we have to make entry of that user in db */
    if(!snapShot.exists) {
      /** for CRUD oprations we have to use 'DocumentRef'  Object , as Snapshot only 
       * represents the data in the "Firebase"
       */
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error) {
        console.log("error in creating user", error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  /** Google authentication settings */

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
