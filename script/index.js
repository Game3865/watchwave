// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Get a reference to the Firebase auth
const auth = getAuth();

// getElementById function
const getElementById = (id) => {
    return document.getElementById(id);
};


onAuthStateChanged(auth, (user) => {

    const loggedIn = localStorage.getItem('user');
    console.log(loggedIn);

    if (loggedIn) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const docRef = doc(db, "users/" + loggedIn);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {

                    const userData = docSnap.data();
                    if (userData.logged == true) {
                        // used to display the name of the user
                        //---------------------------------------
                        // used by fuction getElementById
                        getElementById('userName').innerText = userData.name;
                        
                        //---------------------------------------
                        // direct method to display the name of the user
                        // document.getElementById('userName').innerText = userData.name;
                    }
                    else {
                        window.location.href = "login.html";
                    }


                }
                else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }else{
        console.log("No user found in database.");
    }
})

getElementById('signOut').addEventListener('click', function () {
    signOut(auth).then(() => {
        localStorage.removeItem('user');
        // Sign-out successful.
        window.location.href = "login.html";
    }).catch((error) => {
        // An error happened.
        console.log("Error signing out: ", error);
    });
});