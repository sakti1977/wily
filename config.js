import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAB9r0PVRJSvGrCMZw_TLVM-D8x_3VYo7w",
  authDomain: "wili-39049.firebaseapp.com",
  databaseURL: "https://wili-39049.firebaseio.com",
  projectId: "wili-39049",
  storageBucket: "wili-39049.appspot.com",
  messagingSenderId: "314548313926",
  appId: "1:314548313926:web:e8ea180384dd7ca30a0f47"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
