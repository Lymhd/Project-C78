import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyDsBwMeVtNGYptSCiDAEekopmQ3a7zR0gg",
    authDomain: "projeto-c78.firebaseapp.com",
    projectId: "projeto-c78",
    storageBucket: "projeto-c78.appspot.com",
    messagingSenderId: "860527237288",
    appId: "1:860527237288:web:6719d2777620f963f20a9d"
  },

firebase,initializeApp(firebaseConfig),

export: default firebase.firestore();
