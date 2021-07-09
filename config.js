import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyAgwWjiMDdovkCA90FrFp9CCbS_fx6-H6w",
    authDomain: "news-letter-app-ccc9b.firebaseapp.com",
    projectId: "news-letter-app-ccc9b",
    storageBucket: "news-letter-app-ccc9b.appspot.com",
    messagingSenderId: "987970166403",
    appId: "1:987970166403:web:61456857fffb28cb5cc5b6",
    measurementId: "G-0QHYDGDTMR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database
