// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore , addDoc ,collection} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
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

console.log(db);

try {
    const docRef = await addDoc(collection(db, "users/"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    console.log("good");
    
} catch (err) {
    console.log(err);
    
}

 