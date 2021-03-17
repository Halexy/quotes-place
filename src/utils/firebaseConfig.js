import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg-vJV5brjAZN8L44APRrLEu9fcKC8UZA",
    authDomain: "photo-place-a352c.firebaseapp.com",
    databaseURL: "https://photo-place-a352c-default-rtdb.firebaseio.com",
    projectId: "photo-place-a352c",
    storageBucket: "photo-place-a352c.appspot.com",
    messagingSenderId: "324975264213",
    appId: "1:324975264213:web:08eaea6e4712c229547d5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export { firebase as default };