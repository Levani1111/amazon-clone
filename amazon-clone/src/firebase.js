import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsAMqb1pGo6KM2S323ExsHKfBapSBNQgo",
  authDomain: "clone-34dd8.firebaseapp.com",
  databaseURL: "https://clone-34dd8.firebaseio.com",
  projectId: "clone-34dd8",
  storageBucket: "clone-34dd8.appspot.com",
  messagingSenderId: "966587276783",
  appId: "1:966587276783:web:04b5d6a85a34e39b452a1a",
  measurementId: "G-SLJR0WDLJX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

