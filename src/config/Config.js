import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBleEH-AgEIyNbnMeacUynYGgTDM484vCg",
    authDomain: "reactfilm-24746.firebaseapp.com",
    databaseURL: "https://reactfilm-24746.firebaseio.com",
    projectId: "reactfilm-24746",
    storageBucket: "reactfilm-24746.appspot.com",
    messagingSenderId: "1072640784024",
    appId: "1:1072640784024:web:92f8169555c0843cb202ed",
    measurementId: "G-FJ2BNN1R8R"
  };

  firebase.initializeApp(config);
  export default firebase;