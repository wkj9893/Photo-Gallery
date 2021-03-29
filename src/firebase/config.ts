import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8yj0tBOIw9Fpfj6DVPQXF_Bqn2bW5ZG0",
    authDomain: "photo-gallery-119c2.firebaseapp.com",
    projectId: "photo-gallery-119c2",
    storageBucket: "photo-gallery-119c2.appspot.com",
    messagingSenderId: "329833046663",
    appId: "1:329833046663:web:e2a85eb0f785ae16214e22",
};
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
