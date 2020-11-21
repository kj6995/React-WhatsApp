import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBEvevrB9tp39sGC0wN8vIueZ6JrFg5M_Y",
    authDomain: "whatsapp-clone-e34b4.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-e34b4.firebaseio.com",
    projectId: "whatsapp-clone-e34b4",
    storageBucket: "whatsapp-clone-e34b4.appspot.com",
    messagingSenderId: "798321134253",
    appId: "1:798321134253:web:a551e7bba160f537029424",
    measurementId: "G-PWD39M0W0X"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;