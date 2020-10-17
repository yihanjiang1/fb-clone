import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBuCdq10Pz8gYuoN-iWFf-AJaqNI3v1RVQ",
    authDomain: "fb-clone-99b27.firebaseapp.com",
    databaseURL: "https://fb-clone-99b27.firebaseio.com",
    projectId: "fb-clone-99b27",
    storageBucket: "fb-clone-99b27.appspot.com",
    messagingSenderId: "431323001472",
    appId: "1:431323001472:web:e52f5ff7378ce033a5ac65"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth =firebase.auth();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
