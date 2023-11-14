import {
	Text,
	View,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import img from "../assets/fortune-vieyra-jD4MtXnsJ6w-unsplash.jpg";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";
import values from "../config/values";
import MyTextInput from "../Components/MyTextInput";
import { AntDesign } from "@expo/vector-icons";

export class SignUpScreen extends Component {
	render() {
		return (
			<Screen style={styles.screen}>
				<View style={{ flex: 0.45, backgroundColor: "yellow", elevation: 10 }}>
					<Image source={img} style={styles.img} />
					<View style={styles.headertxt}>
						<TextHeader>APP NAME</TextHeader>
					</View>
					<View style={styles.topbtn}>
						<MyButton
							title="Sign Up"
							color={colors.pureWhite}
							style={styles.headerbtn}
						/>
						<MyButton
							title="Login"
							style={styles.headerbtn}
							color={colors.grey}
							textColor={colors.moderateBlack}
						/>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<View style={{ marginVertical: 40 }}>
						<MyTextInput placeholder="Username" />
						<MyTextInput placeholder="Password" />
						<MyTextInput placeholder="Renter Password" />
					</View>
					<View
						style={{
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
							<AntDesign size={30} name="apple1" color={colors.pureWhite} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.logobtn}>
							<AntDesign size={30} name="google" color={colors.pureWhite} />
						</TouchableOpacity>
						<MyButton
							color={colors.asliBlack}
							bordercolor="red"
							title="Sign UP"
							textColor={colors.pureWhite}
						/>
						{/* <TouchableOpacity>
							<MiniText>Already have a account?</MiniText>
						</TouchableOpacity> */}
					</View>
				</View>
			</Screen>
		);
	}
}

const styles = StyleSheet.create({
	bottomContainer: {
		//width: "100%",
		flex: 0.6,
		//backgroundColor: "lightblue",
		marginVertical: values.bottomMargin,
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: colors.main,
	},
	headerbtn: {
		width: 90,
		marginVertical: 0,
	},
	headertxt: {
		position: "absolute",
		backgroundColor: colors.pureWhite,
		left: 100,
		top: "75%",
		padding: 10,
	},
	img: {
		width: 550,
		height: "100%",
		//borderWidth: 5,
		//borderColor: colors.black,
	},
	logobtn: {
		width: 70,
		height: 70,
		backgroundColor: colors.asliBlack,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
	},
	screen: {
		alignItems: "center",
		paddingTop: 0,
		// justifyContent: "center"
		backgroundColor: colors.main,
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
