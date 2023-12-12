import {
	Text,
	View,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { login } from "../firebase";
import img from "../assets/rect1.png";
import colors from "../config/colors";
import values from "../config/values";
import { AntDesign } from "@expo/vector-icons";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import TextHeader from "../Components/TextHeader";
import MyTextInput from "../Components/MyTextInput";
import ErrorMessage from "../Components/ErrorMessage";

// ==============================================================================
// The LoginScreen component  as the login interface for users. //
// It features an image header, input fields for email and password,
// buttons for navigation and social sign-in options, and utilizes
// Firebase authentication for user login.
// To make a better user experience, the screen also uses KeyboardAvoidingView
// to prevent overlap issues when the keyboard is active.
// ==============================================================================

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	// Firebase authentication methods
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
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -80}
		>
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
					<View>{errorMessage && <ErrorMessage message={errorMessage} />}</View>
				</View>
				{/* Footer Section Buttons */}
				<View
					style={{
						alignItems: "center",
						flex: 0.15,
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
				</View>
			</Screen>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	bottomContainer: {
		flex: 0.25,
		marginVertical: values.bottomMargin,
		justifyContent: "center",
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
export default LoginScreen;
