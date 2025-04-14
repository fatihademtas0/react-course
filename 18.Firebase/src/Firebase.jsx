// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIJzEV6f9rsB2iZDoRAD1LBpG6-BEfZ_I",
    authDomain: "fir-project-b25d7.firebaseapp.com",
    projectId: "fir-project-b25d7",
    storageBucket: "fir-project-b25d7.firebasestorage.app",
    messagingSenderId: "879712131251",
    appId: "1:879712131251:web:501e42cc2129a244e9f8c6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
