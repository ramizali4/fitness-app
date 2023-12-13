import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import img from "../assets/icon.png";
import values from "../config/values";
import colors from "../config/colors";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import TextHeader from "../Components/TextHeader";
import MiniText from "../Components/MiniText";

// ==============================================================
// WelcomeScreen:
// - Greets users when they first enter the app.
// - May include a brief introduction or call-to-action.
// ==============================================================

export class WelcomeScreen extends Component {
	render() {
		return (
			<Screen style={styles.screen}>
				<View style={{ flex: 0.7, backgroundColor: "yellow" }}>
					<Image source={img} style={styles.img} />
				</View>
				<View style={styles.bottomContainer}>
					<TextHeader>APP NAME</TextHeader>
					{/* <MiniText>Lorem Ipsum</MiniText> */}
					<View
						style={{
							alignItems: "center",
							position: "absolute",
							bottom: values.bottomMargin,
							//backgroundColor: "pink",
						}}
					>
						<MyButton
							color={colors.asliBlack}
							bordercolor="red"
							title="REGISTER NOW"
							textColor={colors.pureWhite}
						/>
						<TouchableOpacity>
							<MiniText>Already have a account?</MiniText>
						</TouchableOpacity>
					</View>
				</View>
			</Screen>
		);
	}
}

const styles = StyleSheet.create({
	bottomContainer: {
		width: "100%",
		flex: 0.3,
		//	backgroundColor: "red",
		marginVertical: 10,
		alignItems: "center",
	},
	img: {
		width: 550,
		height: "100%",
		//borderWidth: 5,
		//borderColor: colors.black,
	},
	screen: {
		flex: 1,
		alignItems: "center",
		// justifyContent: "center"
	},
});
export default WelcomeScreen;
