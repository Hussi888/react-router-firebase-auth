import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCK4l5p9kg0yb19qz5tgSIE2A3eWAvOmNw",
  authDomain: "mursaf-db.firebaseapp.com",
  databaseURL: 'mursaf-db-default-rtdb.firebaseio.com',
  projectId: "mursaf-db",
  storageBucket: "mursaf-db.appspot.com",
  messagingSenderId: "15629674794",
  appId: "1:15629674794:web:86ba4fcee130a734915653",
  measurementId: "G-VP5LGHMT9W"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const auth = firebase.auth();

export const database = firebase.database();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
export const currentUser = firebase.auth().currentUser;