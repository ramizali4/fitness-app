import {
	Text,
	View,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
	KeyboardAvoidingView,
	KeyboardAvoidingViewBase,
} from "react-native";
import React, { Component, useState } from "react";
import img from "../assets/rect1.png";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";
import values from "../config/values";
import MyTextInput from "../Components/MyTextInput";
import { AntDesign } from "@expo/vector-icons";
import {
	getAuth,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from "firebase/auth";
import { login, login_, signup } from "../firebase";
import ErrorMessage from "../Components/ErrorMessage";
// import { initializeApp } from "firebase/app";
// import { auth } from "../firebase";

// const firebaseConfig = {
// 	apiKey: "AIzaSyACPQ_QZsABHT2EtjV72MiqqIIOmaXdRgA",
// 	authDomain: "fitness-app-87517.firebaseapp.com",
// 	projectId: "fitness-app-87517",
// 	storageBucket: "fitness-app-87517.appspot.com",
// 	messagingSenderId: "638981424547",
// 	appId: "1:638981424547:web:722dae521a788dc02f8616",
// 	measurementId: "G-8HZM94QM1C",
// };
// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	// const auth = getAuth(app);

	// const handleSignIn = () => {
	// 	signInWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			// Signed in
	// 			const user = userCredential.user;
	// 			console.log(user.email);
	// 			navigation.navigate("Tab");
	// 		})
	// 		.catch((error) => {
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 		});
	// };
	// const signInWithGoogle = () => {
	// signInWithPopup(auth, provider)
	// 	.then((result) => {
	// 		// This gives you a Google Access Token. You can use it to access the Google API.
	// 		const credential = GoogleAuthProvider.credentialFromResult(result);
	// 		const token = credential.accessToken;
	// 		// The signed-in user info.
	// 		const user = result.user;
	// 		// IdP data available using getAdditionalUserInfo(result)
	// 		// ...
	// 	})
	// 	.catch((error) => {
	// 		// Handle Errors here.
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		// The email of the user's account used.
	// 		const email = error.customData.email;
	// 		// The AuthCredential type that was used.
	// 		const credential = GoogleAuthProvider.credentialFromError(error);
	// 		// ...
	// 	});
	// };
	const handleSignIn = async () => {
		const loginResult = await login(email, password);
		console.log(loginResult);
		if (loginResult.error) {
			setErrorMessage(loginResult.error.message);
		} else {
			// Handle successful login
			console.log("User logged in successfully");
			navigation.navigate("Tab"); // Replace with your navigation logic
		}
	};
	return (
		<Screen style={styles.screen}>
			{/* Header */}
			<KeyboardAvoidingView style={{ flex: 0.65, elevation: 15 }}>
				<Image source={img} style={styles.img} />
				<View style={styles.headertxt}>
					<TextHeader style={{ color: colors.pureWhite }}>
						WELCOME BACK
					</TextHeader>
				</View>
				<View style={styles.topbtn}>
					<MyButton
						title="Sign Up"
						color={colors.asliBlack}
						style={styles.headerbtn}
						textColor={colors.darkBlack}
						onPress={() => {
							navigation.navigate("SignUpScreen");
						}}
					/>
					<MyButton
						title="Login"
						style={styles.headerbtn}
						color={colors.asliBlack}
						textColor={colors.secondary}
					/>
				</View>
			</KeyboardAvoidingView>
			{/* Input Fields */}
			<View style={styles.bottomContainer}>
				<MyTextInput
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<MyTextInput
					placeholder="Password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry
				/>
				<View>
					{errorMessage && <ErrorMessage message={errorMessage} />}
					{/* <Text
							style={{ alignSelf: "flex-end", color: colors.moderateBlack }}
						>
							Forgot Password
						</Text> */}
				</View>
			</View>
			{/* Buttons */}
			<KeyboardAvoidingView
				style={{
					alignItems: "center",
					flex: 0.15,
					//	backgroundColor: "pink",
					flexDirection: "row",
					width: "100%",
					justifyContent: "space-evenly",
				}}
			>
				<TouchableOpacity style={styles.logobtn}>
					<AntDesign size={28} name="apple1" color={colors.pureWhite} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.logobtn} onPress={signInWithPopup}>
					<AntDesign size={28} name="google" color={colors.pureWhite} />
				</TouchableOpacity>
				<MyButton
					color={colors.asliBlack}
					bordercolor="red"
					title="Login"
					textColor={colors.secondary}
					onPress={handleSignIn}
				/>
			</KeyboardAvoidingView>
		</Screen>
	);
};

const styles = StyleSheet.create({
	bottomContainer: {
		//width: "100%",
		flex: 0.25,
		marginVertical: values.bottomMargin,
		//alignItems: "center",
		justifyContent: "center",
		//	justifyContent: "space-between",
	},
	headerbtn: {
		width: 90,
		marginVertical: 0,
	},
	headertxt: {
		position: "absolute",
		backgroundColor: colors.asliBlack,
		left: 100,
		top: "85%",
		padding: 10,
	},
	img: {
		width: 550,
		height: "100%",
		//elevation: 5,
		//borderWidth: 5,
		//borderColor: colors.black,
	},
	logobtn: {
		width: 60,
		height: 60,
		backgroundColor: colors.asliBlack,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
	},
	screen: {
		alignItems: "center",
		paddingTop: 0,
		flex: 1,
		// justifyContent: "center"
	},
	topbtn: {
		backgroundColor: colors.grey,
		width: 180,
		height: 50,
		position: "absolute",
		top: values.bottomMargin + values.bottomMargin,
		left:
			values.bottomMargin +
			values.bottomMargin +
			values.bottomMargin +
			values.bottomMargin,
		//bottom: values.bottomMargin,
		flexDirection: "row",
	},
});
export default LoginScreen;
