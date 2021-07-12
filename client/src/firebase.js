import firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBokdD6um_1Fh6ZjBbB7EgHUHT-XvAEMjc",
    authDomain: "gqlreactnodemel.firebaseapp.com",
    projectId: "gqlreactnodemel",
    storageBucket: "gqlreactnodemel.appspot.com",
    messagingSenderId: "70557860411",
    appId: "1:70557860411:web:0cd190aae446b918da921e",
    measurementId: "G-HJ59YJQZM7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()