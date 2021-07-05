import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCoAlRTyufIRJ66rOSuMhHQKxC7AyPCl4A",
    authDomain: "onlinegame-c76a2.firebaseapp.com",
    databaseURL: "https://onlinegame-c76a2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "onlinegame-c76a2",
    storageBucket: "onlinegame-c76a2.appspot.com",
    messagingSenderId: "144691442525",
    appId: "1:144691442525:web:b6b6f0cecf6052d72e6eb4"
  };
  const firebaseApp = firebase.apps && firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
