import  firebase from 'firebase'

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA6v-ZWOZh5-s5ZoxfKDfynl7wpvS0sWPo",
  authDomain: "react-utn-15a1d.firebaseapp.com",
  databaseURL: "https://react-utn-15a1d-default-rtdb.firebaseio.com",
  projectId: "react-utn-15a1d",
  storageBucket: "react-utn-15a1d.appspot.com",
  messagingSenderId: "744604743935",
  appId: "1:744604743935:web:e6ebe6607d39eadbcb34ca"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db=db;
export default firebase;