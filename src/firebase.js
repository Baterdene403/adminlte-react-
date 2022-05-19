import firebase from "firebase/app";
import "firebase/storage";


    const firebaseConfig = {
        apiKey: "AIzaSyBr910EOVjzdDiGUQdjhvs9mpEWJ3geYE4",
        authDomain: "hi-learn-299ac.firebaseapp.com",
        databaseURL: "https://hi-learn-299ac-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "hi-learn-299ac",
        storageBucket: "hi-learn-299ac.appspot.com",
        messagingSenderId: "418410032183",
        appId: "1:418410032183:web:a1bbf275760e2d8ce4a3b2",
        measurementId: "G-VB1B2WCEE0"
      };


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
