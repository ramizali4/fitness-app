// ==============================
// Imports
// ==============================
import {
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SignInUsingGoogle, SignUp } from "../firebase";
import img from "../assets/danielle-cerullo-CQfNt66ttZM-unsplash.jpg";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import values from "../config/values";
import colors from "../config/colors";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import TextHeader from "../Components/TextHeader";
import MyTextInput from "../Components/MyTextInput";
import ErrorMessage from "../Components/ErrorMessage";

// =====================================================================================
// This React Native component represents a sign-up screen for a fitness app.
// It includes input fields for email and password, along with options to sign up using
// Google or Apple. The screen features a background image, buttons for navigation.
// ======================================================================================

const SignUpScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, SetErrorMessage] = useState(""); // handles all error messages

	// Handle the sign-up process when the user clicks the "Sign Up" button.
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

	// Attempt to sign up using Google authentication.
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
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
		>
			<Screen style={styles.screen}>
				{/* Header Section */}
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
					<MyTextInput secureTextEntry placeholder="Renter Password" />
					<View style={{ marginHorizontal: 10 }}>
						{errorMessage && <ErrorMessage message={errorMessage} />}
					</View>
				</View>
				{/*  Footer section */}
				<View
					style={{
						flex: 0.15,
						alignItems: "center",
						flexDirection: "row",
						width: "100%",
						justifyContent: "space-evenly",
					}}
				>
					{/* with relevant 'Sign Up' buttons i.e signup, Google, Apple */}
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
		</KeyboardAvoidingView>
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
		flexDirection: "row",
	},
});
export default SignUpScreen;
