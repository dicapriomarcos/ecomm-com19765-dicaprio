import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCxbP8VTPIyfr6MFbVhEICHiR46eJi04zI",
    authDomain: "reactive-movil-shop.firebaseapp.com",
    projectId: "reactive-movil-shop",
    storageBucket: "reactive-movil-shop.appspot.com",
    messagingSenderId: "322936690785",
    appId: "1:322936690785:web:6ba72fbda9f8093c5f7220"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
    return firebase.firestore(app)
  }



