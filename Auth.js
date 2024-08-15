// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js"
const firebaseConfig = {
  apiKey: "AIzaSyC4Q5C-rHwqJTHdkrkfr3TaHx_O8l2A50Y",
  authDomain: "wchat-55495.firebaseapp.com",
  projectId: "wchat-55495",
  storageBucket: "wchat-55495.appspot.com",
  messagingSenderId: "414607502356",
  appId: "1:414607502356:web:e420d3d0a27a36f437cb01",
  measurementId: "G-K8YEQ2V53R",
  databaseURL: "https://wchat-55495-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const DataSetResult = true;

function AddData() {
  const user = document.getElementById("user");
  if (user.value === "") {
    alert("Please enter a username");
    DataSetResult = false;
    window.location.href = "./Index.html";
    return;
  }
 
  if (DataSetResult === true){
  set(ref(db, 'USERS/' + user.value), {
    username: {name: user.value}
  }).then(() => {
    // Data saved successfully
    alert("Account And User Created successfully");
  }).catch((error) => {
    alert(errorMessage);
  });
  }}

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  //inputs
  const email = document.getElementById("emailid").value;
  const password = document.getElementById("password").value;
  //create user
  Promise.all([
    AddData(),
    createUserWithEmailAndPassword()
  ])
  if (DataSetResult === true) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user; 
      window.location.href = "./App.html";
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
  }

});

  


const submitlog = document.getElementById("submitlog");
submitlog.addEventListener("click", function (event) {
  event.preventDefault();
  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
      window.location.href = "./App.html";

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
});