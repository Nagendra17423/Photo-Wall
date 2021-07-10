

import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAs5XOQ33tUDxxi5w5TA9VaJNhKyrRfXNY",
    authDomain: "photowall-88ea9.firebaseapp.com",
    databaseURL: "https://photowall-88ea9-default-rtdb.firebaseio.com",
    projectId: "photowall-88ea9",
    storageBucket: "photowall-88ea9.appspot.com",
    messagingSenderId: "599182356993",
    appId: "1:599182356993:web:6086d541d53969eb024600",
    measurementId: "G-G9YMP08481"
  };

  firebase.initializeApp(firebaseConfig) ;
  const database = firebase.database() ;
  

  export {database};