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
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
var usersdb = firebase.database().ref('usersdb');

document.getElementById('model-reg').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();
    var name = getElementById('signup-name');
    var email = getElementById('signup-email');
    var phone = getElementById('signup-phone');
    var password = getElementById('signup-pass');
    var confirmpass = getElementById('signup-Cpass');

    // to check whether the info you are getting is correct
    // console.log(name , email, phone, password,confirmpass);

    saveuser(name, email, phone, password, confirmpass);
    alert("User data Successfully");
    document.getElementById('model-reg').reset();
};

const saveuser = (name, email, phone, password, confirmpass) => {
    var newUser = usersdb.push();
    newUser.set({
        name: name,
        email: email,
        phone: phone,
        password: password,
        confirmpass: confirmpass
    });
};

const getElementById = (id) => {
    return document.getElementById(id).value;
};