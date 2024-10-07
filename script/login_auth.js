// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, doc ,updateDoc} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqCipDDYTtLzhn6V6NUWVfGu-bKfK-Rhs",
    authDomain: "watchwave-a9868.firebaseapp.com",
    projectId: "watchwave-a9868",
    storageBucket: "watchwave-a9868.appspot.com",
    messagingSenderId: "141246936270",
    appId: "1:141246936270:web:9b5fb04d1786951ee64c9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// link to the html
const login_submit = document.getElementById('login_submit');


// fuction to create user
login_submit.addEventListener('click', function (event) {
    event.preventDefault();

    // link to the html
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-pass').value;

    // console.log(password , email);


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            const  docRef = doc(db, "users/" + user.uid);
            updateDoc(docRef, {
                logged: true,
            }).then(() => {
                // Document successfully updated!
                console.log("Document successfully updated!");
                localStorage.setItem('user' , user.uid);
                window.location.href = "index.html";
            }).catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
})
