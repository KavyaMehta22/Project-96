import firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCF3keQr5dyWDo9DZEIksAGRAGmcOVje6g",
    authDomain: "debugging-part-1.firebaseapp.com",
    databaseURL: "https://debugging-part-1.firebaseio.com",
    projectId: "debugging-part-1",
    storageBucket: "debugging-part-1.appspot.com",
    messagingSenderId: "7531587856",
    appId: "1:7531587856:web:8d57efbc7a71f3c0b35d95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
