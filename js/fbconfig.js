// Configuração do Firebase para este App
var firebaseConfig = {
    apiKey: "AIzaSyC57OfvjROQZws0OV5-pPtDYG3XOOGRfP4",
    authDomain: "scriptando-8a5e3.firebaseapp.com",
    databaseURL: "https://scriptando-8a5e3.firebaseio.com",
    projectId: "scriptando-8a5e3",
    storageBucket: "scriptando-8a5e3.appspot.com",
    messagingSenderId: "947663870520",
    appId: "1:947663870520:web:63e25cca64d7159c69a4cd"
};

// Initializa o Firebase
firebase.initializeApp(firebaseConfig);

// Conexão com o Firestore
var db = firebase.firestore();