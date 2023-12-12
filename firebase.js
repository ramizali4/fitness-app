// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from "firebase/auth";
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
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
// 	app = firebase.initializeApp(firebaseConfig);
// } else {
// 	app = firebase.app();
// }

// const app = firebase.initializeApp(firebaseConfig);
// //const auth = firebase.au;
// //const getauth = auth.getAuth(app);
// //const analytics = getAnalytics(app);
// export { auth };

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
//firebase.FirebaseError

// export const signup = async (email, password) => {
// 	try {
// 		await auth.createUserWithEmailAndPassword(email, password);
// 		console.log("User signed up successfully");
// 	} catch (error) {
// 		console.error("Sign up failed:", error);
// 	}
// };

export const SignUp = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		const user = userCredential.user;
		console.log(user.email);
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

// export const login = (email, password) => {
// 	//console.log(email, password);
// 	signInWithEmailAndPassword(auth, email, password)
// 		.then((userCredential) => {
// 			// Signed in
// 			const user = userCredential.user;
// 			console.log("User signed in:", user.email);
// 			return user;
// 			//navigation.navigate("Tab");
// 		})
// 		.catch((error) => {
// 			const errorCode = error.code;
// 			let errorMessage = error.message;
// 			console.log("Login error:", errorCode, errorMessage);

// 			switch (errorCode) {
// 				case "auth/invalid-email":
// 					errorMessage = "Invalid email format.";
// 					break;
// 				case "auth/user-not-found":
// 					errorMessage = "User account with this email does not exist.";
// 					break;
// 				case "auth/wrong-password":
// 					errorMessage = "Incorrect password.";
// 					break;
// 				case "auth/invalid-credential":
// 					errorMessage = "Invalid Credentials.";
// 					break;
// 				case "auth/too-many-requests":
// 					errorMessage = "Too many requests";
// 					break;
// 				default:
// 					errorMessage = "An error occurred.";
// 			}

// 			return { error: { code: errorCode, message: errorMessage } };
// 		});
// };
