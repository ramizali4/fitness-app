import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import img from "../assets/rect1.png";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MyTextInput from "../Components/MyTextInput";
import { AntDesign } from "@expo/vector-icons";
import { auth } from "../firebase";
import { styles } from "./LoginScreen";

export const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
	const handleSignIn = () => {
		auth.signInWithEmailAndPasswordemail, password;
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
	};
	return (
		<Screen style={styles.screen}>
			{/* Header */}
			<View style={{ flex: 0.65, elevation: 15 }}>
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
			</View>
			{/* Input Fields */}
			<View style={styles.bottomContainer}>
				<View style={{ marginVertical: 30 }}>
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
					<Text style={{ alignSelf: "flex-end", color: colors.moderateBlack }}>
						Forgot Password
					</Text>
				</View>
			</View>
			{/* Buttons */}
			<View
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
				{/* <TouchableOpacity style={styles.logobtn} onPress={signInWithPopup}>
                <AntDesign size={28} name="google" color={colors.pureWhite} />
            </TouchableOpacity> */}
				<MyButton
					color={colors.asliBlack}
					bordercolor="red"
					title="Login"
					textColor={colors.secondary}
					onPress={handleSignIn}
				/>
			</View>
		</Screen>
	);
};
