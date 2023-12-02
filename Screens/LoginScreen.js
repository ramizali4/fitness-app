import {
	Text,
	View,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
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

const LoginScreen = ({ navigation }) => {
	const handleSignIn = () => {
		navigation.navigate("Tab");
	};
	return (
		<Screen style={styles.screen}>
			<View style={{ flex: 0.6, elevation: 15 }}>
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
			<View style={styles.bottomContainer}>
				<View style={{ marginVertical: 80 }}>
					<MyTextInput placeholder="Username" />
					<MyTextInput placeholder="Password" />
					<Text style={{ alignSelf: "flex-end", color: colors.moderateBlack }}>
						Forgot Password
					</Text>
				</View>
			</View>
			<View
				style={{
					alignItems: "center",
					flex: 0.2,
					//backgroundColor: "pink",
					flexDirection: "row",
					width: "100%",
					justifyContent: "space-evenly",
				}}
			>
				<TouchableOpacity style={styles.logobtn}>
					<AntDesign size={28} name="apple1" color={colors.pureWhite} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.logobtn}>
					<AntDesign size={28} name="google" color={colors.pureWhite} />
				</TouchableOpacity>
				<MyButton
					color={colors.asliBlack}
					bordercolor="red"
					title="Login"
					textColor={colors.secondary}
					onPress={handleSignIn}
				/>
				{/* <TouchableOpacity>
							<MiniText>Already have a account?</MiniText>
						</TouchableOpacity> */}
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	bottomContainer: {
		//width: "100%",
		flex: 0.35,
		//backgroundColor: "lightblue",
		marginVertical: values.bottomMargin,
		alignItems: "center",
		justifyContent: "space-between",
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
		height: "110%",
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
