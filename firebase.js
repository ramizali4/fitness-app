// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

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
const firebaseConfig = {
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

// States
const userState = {
	ID: "",
	email: "",
	password: "",
	gender: true, // true | male, false | female
	weight: 0,
	height: 0,
	age: 0,
	level: 0,
};
export const setEmail = (newEmail) => {
	userState.email = newEmail || "";

	const atIndex = newEmail.indexOf("@");
	userState.ID = atIndex !== -1 ? newEmail.substring(0, atIndex) : "";
};

export const setPassword = (newPassword) => {
	userState.password = newPassword || "";
};

export const setGender = (newGender) => {
	userState.gender = newGender !== undefined ? newGender : true;
};

export const setWeight = (newWeight) => {
	userState.weight = newWeight || 0;
};

export const setHeight = (newHeight) => {
	userState.height = newHeight || 0;
};

export const setAge = (newAge) => {
	userState.age = newAge || 0;
};

export const setLevel = (newLevel) => {
	userState.level = newLevel || 0;
};
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// export const [gender, setGender] = useState(true); // true | male , false | female
// export const [weight, setWeight] = useState(0);
// export const [height, setHeight] = useState(0);
// export const [age, setAge] = useState(0);
// export const [level, setLevel] = useState(0);

export const SignUp = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		const user = userCredential.user;
		console.log(user.email);
		setEmail(email);
		setPassword(password);
		return user;
	} catch (error) {
		let errorMessage = error.message;
		const errorCode = error.code;
		switch (error.code) {
			case "auth/email-already-in-use":
				errorMessage =
					"The email address is already in use. Use a different email address.";
				break;
			case "auth/invalid-email":
				errorMessage = "Please enter a valid email address.";
				break;
			case "auth/weak-password":
				errorMessage = "Please use a password that is at least 6 characters.";
				break;
			case "auth/operation-not-allowed":
				errorMessage = "Sign-up is not allowed for this email address.";
				break;
			case "auth/too-many-requests":
				errorMessage =
					"Too many requests have been made. Please try again later.";
				break;
			case "auth/network-request-failed":
				errorMessage = "A network error occurred.";
				break;
			case "auth/internal-error":
				errorMessage = "An unexpected error occurred.";
				break;
			case "auth/invalid-api-key":
				errorMessage = "The API key provided is invalid.";
				break;
			case "auth/invalid-app-id":
				errorMessage = "The app ID provided is invalid.";
				break;
			default:
				errorMessage =
					"An error occurred during signup. Please try again later.";
		}
		return { error: { code: errorCode, message: errorMessage } };
	}
};
// Function to sign in an existing user
export const createProfile = async () => {
	//db().ref('/users/${res')
	console.log("userState", userState);
	try {
		await set(ref(db, "users/" + userState.ID), {
			email: userState.email,
			password: userState.password,
			gender: userState.gender,
			weight: userState.weight,
			height: userState.height,
			age: userState.age,
			level: userState.level,
		});
		console.log("Profile created successfully!");
	} catch (error) {
		console.error("Error creating profile:", error);
	}
};
export const SignInUsingGoogle = async (email, password) => {
	try {
		const result = await signInWithRedirect(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		console.log("result", result);
		// The signed-in user info.
		const user = result.user;
		console.log("user", user);
		return user;
	} catch (error) {
		let errorMessage = error.message;
		const errorCode = error.code;

		return { error: { code: errorCode, message: errorMessage } };
	}
};
export const login = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);
		// Signed in
		const user = userCredential.user;
		console.log("User signed in:", user.email);
		return user;
	} catch (error) {
		const errorCode = error.code;
		let errorMessage = error.message;
		console.log("error", email, password);
		switch (errorCode) {
			case "auth/invalid-email":
				errorMessage = "Invalid email format.";
				break;
			case "auth/user-not-found":
				errorMessage = "User account with this email does not exist.";
				break;
			case "auth/wrong-password":
				errorMessage = "Incorrect password.";
				break;
			case "auth/invalid-credential":
				errorMessage = "Invalid Credentials.";
				break;
			default:
				errorMessage = "An error occurred.";
		}
		return { error: { code: errorCode, message: errorMessage } };
	}
};
