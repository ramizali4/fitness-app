import {
	Text,
	View,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
} from "react-native";
import React, { Component, useState } from "react";
import img from "../assets/danielle-cerullo-CQfNt66ttZM-unsplash.jpg";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";
import values from "../config/values";
import MyTextInput from "../Components/MyTextInput";
import { AntDesign } from "@expo/vector-icons";
import ErrorMessage from "../Components/ErrorMessage";
import { SignInUsingGoogle, SignUp } from "../firebase";
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// //import { auth, createUserWithEmailAndPassword } from "../firebase";

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

const SignUpScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, SetErrorMessage] = useState("");

	// const auth = getAuth(app);

	// const handleSignUp = () => {
	// 	createUserWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			// Signed up
	// 			const user = userCredential.user;
	// 			console.log(user.email);
	// 			navigation.navigate("Tab");
	// 		})
	// 		.catch((error) => {
	// 			console.log("error", error);
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 			// ..
	// 		});
	// 	//navigation.navigate("LoginScreen");
	// };
	const handleSignUp = async () => {
		const loginResult = await SignUp(email, password);
		console.log(loginResult);
		if (loginResult.error) {
			SetErrorMessage(loginResult.error.message);
		} else {
			// Handle successful login
			console.log("User signed up successfully");
			navigation.navigate("SelectGenderScreen"); // Replace with your navigation logic
		}
	};

	const handleSignUpGoogle = async () => {
		const loginResult = await SignInUsingGoogle(email, password);
		console.log(loginResult);
		if (loginResult.error) {
			SetErrorMessage(loginResult.error.message);
		} else {
			// Handle successful login
			console.log("User signed up successfully");
			//navigation.navigate("SelectGenderScreen"); // Replace with your navigation logic
		}
	};

	return (
		<Screen style={styles.screen}>
			<View style={{ flex: 0.45, elevation: 10 }}>
				<Image source={img} style={styles.img} />
				<View style={styles.headertxt}>
					<TextHeader style={{ height: "auto" }}>
						Lets Get you started.
					</TextHeader>
				</View>
				<View style={styles.topbtn}>
					<MyButton
						title="Sign Up"
						color={colors.asliBlack}
						style={styles.headerbtn}
						textColor={colors.secondary}
					/>
					<MyButton
						title="Login"
						style={styles.headerbtn}
						color={colors.asliBlack}
						textColor={colors.moderateBlack}
						onPress={() => {
							navigation.navigate("LoginScreen");
						}}
					/>
				</View>
			</View>
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
				<MyTextInput secureTextEntry placeholder="Renter Password" />
				<View style={{ marginHorizontal: 10 }}>
					{errorMessage && <ErrorMessage message={errorMessage} />}
				</View>
			</View>
			<View
				style={{
					flex: 0.15,
					alignItems: "center",
					// position: "absolute",
					//marginBottom: values.bottomMargin,
					//backgroundColor: "pink",
					flexDirection: "row",
					width: "100%",
					justifyContent: "space-evenly",
				}}
			>
				<TouchableOpacity style={styles.logobtn}>
					<AntDesign size={28} name="apple1" color={colors.pureWhite} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.logobtn} onPress={handleSignUpGoogle}>
					<AntDesign size={28} name="google" color={colors.pureWhite} />
				</TouchableOpacity>
				<MyButton
					color={colors.asliBlack}
					bordercolor="red"
					title="Sign UP"
					textColor={colors.secondary}
					onPress={handleSignUp}
				/>
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	bottomContainer: {
		//width: "100%",
		flex: 0.4,
		//backgroundColor: "lightblue",
		marginVertical: values.bottomMargin,
		alignItems: "center",
		justifyContent: "center",
		// paddingTop: 20,
	},
	headerbtn: {
		width: 90,
		marginVertical: 0,
	},
	headertxt: {
		position: "absolute",
		backgroundColor: colors.pureWhite,
		left: 100,
		top: "60%",
		padding: 10,
	},
	img: {
		width: 550,
		height: "100%",
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
		// justifyContent: "center"
		//backgroundColor: colors.main,
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
export default SignUpScreen;
