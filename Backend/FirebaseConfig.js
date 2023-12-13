// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";

import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	signInWithRedirect,
} from "firebase/auth";
import { useState } from "react";
//import { FirebaseError } from "firebase/";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
	apiKey: "AIzaSyACPQ_QZsABHT2EtjV72MiqqIIOmaXdRgA",
	authDomain: "fitness-app-87517.firebaseapp.com",
	projectId: "fitness-app-87517",
	storageBucket: "fitness-app-87517.appspot.com",
	messagingSenderId: "638981424547",
	appId: "1:638981424547:web:722dae521a788dc02f8616",
	measurementId: "G-8HZM94QM1C",
	databaseURL:
		"https://fitness-app-87517-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export { app, FirebaseConfig, auth, provider, db };
