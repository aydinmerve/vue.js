import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDw4ORT2XZscxbtfItSiFZbb0KrUHjr2PM",
    authDomain: "instagram-cdda1.firebaseapp.com",
    databaseURL: "https://instagram-cdda1.firebaseio.com",
    projectId: "instagram-cdda1",
    storageBucket: "instagram-cdda1.appspot.com",
    messagingSenderId: "473278720716",
    appId: "1:473278720716:web:bf453d4f7abed3d8d6f069",
    measurementId: "G-ER4E1V9T9C"
};

firebase.initializeApp(firebaseConfig);

export class Auth {
    signup(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email,password);
    }
}