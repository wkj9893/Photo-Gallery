import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAME5L7hgwX-Hn9lBvTWwlDIjeYgJVTa3Y",
    authDomain: "photo-gallery-d7bec.firebaseapp.com",
    projectId: "photo-gallery-d7bec",
    storageBucket: "photo-gallery-d7bec.appspot.com",
    messagingSenderId: "144611402579",
    appId: "1:144611402579:web:b2b7a46a1bd28f251077a6",
};
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
