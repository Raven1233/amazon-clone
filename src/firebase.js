import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqSEZP-c795jMnU7disQ0qfHmdikK8f5Q",
    authDomain: "clone-1871c.firebaseapp.com",
    projectId: "clone-1871c",
    storageBucket: "clone-1871c.appspot.com",
    messagingSenderId: "375901102141",
    appId: "1:375901102141:web:bae13f92328401b9490a54",
    measurementId: "G-EFS4JYG3X9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth=firebase.auth();

export{db,auth};