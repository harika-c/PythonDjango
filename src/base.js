import firebase from "firebase/app";
import "firebase/auth";
        
var firebaseConfig = {
    apiKey: "AIzaSyDWQHpGV8zRHOvpP-YoWYm_PjxJOpNbQKc",
    authDomain: "login-faff0.firebaseapp.com",
    databaseURL: "https://login-faff0.firebaseio.com",
    projectId: "login-faff0",
    storageBucket: "login-faff0.appspot.com",
    messagingSenderId: "71230187096",
    appId: "1:71230187096:web:0dcf21b3c74f66ab138c2d",
    measurementId: "G-GCE8SD4S0Z"
  };
  // Initialize Firebase
  const app=firebase.initializeApp(firebaseConfig);
export default app