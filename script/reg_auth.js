// // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqCipDDYTtLzhn6V6NUWVfGu-bKfK-Rhs",
    authDomain: "watchwave-a9868.firebaseapp.com",
    databaseURL: "https://watchwave-a9868-default-rtdb.firebaseio.com",
    projectId: "watchwave-a9868",
    storageBucket: "watchwave-a9868.appspot.com",
    messagingSenderId: "141246936270",
    appId: "1:141246936270:web:9b5fb04d1786951ee64c9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the Firebase Realtime Database
const usersdb = getDatabase();
// Get a reference to the Firebase auth
const auth = getAuth();

// getElementById function
const getElementById = (id) => {
    return document.getElementById(id).value;
};


// link to the html btn
document.getElementById('model-reg').addEventListener('submit',submitform);

// fuction to create user
function submitform(e){
    e.preventDefault();
    // link to the html
    
    var name = getElementById('signup-name');
    var email = getElementById('signup-email');
    var phone = getElementById('signup-phone');
    var password = getElementById('signup-pass');
    var confirmpass = getElementById('signup-Cpass');
     // to check whether the info you are getting is correct
    // console.log(name , email, phone, password,confirmpass);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            saveuser(name, email, phone, password, confirmpass);
            alert("User created successfully");
            // window.location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
        
    document.getElementById('model-reg').reset();
}
const saveuser = (name, email, phone, password, confirmpass) => {
    set(ref(usersdb, 'usersdb' + name) , {
        name: name,
        email: email,
        phone: phone,
        password: password,
        confirmpass: confirmpass
    });
};


