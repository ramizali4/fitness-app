import { Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import img from "../assets/gym.png";
import values from "../config/values";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import TextHeader from "../Components/TextHeader";
import MyButton from "../Components/MyButton";
import MiniText from "../Components/MiniText";
import Screen from "../Components/Screen";

// ==============================================================
// StartupScreen:
// - Appears briefly during app startup.
// - May display the app logo, name, or a welcome message.
// ==============================================================

const StartupScreen = ({ navigation }) => {
	return (
		<Screen style={styles.screen}>
			{/* MAIN LOGO IMAGE */}
			<Image source={img} style={styles.img} />
			<TextHeader>Fitnify</TextHeader>
			{/* TAGLINE */}
			<MiniText style={{ height: 18, marginVertical: 2 }}>
				Sweat now, shine later.
			</MiniText>
			{/* BOTTOM BUTTON [ABSOLUTE] */}
			<MyButton
				color={colors.asliBlack}
				title="Get Started"
				textColor={colors.secondary}
				style={{
					position: "absolute",
					bottom: values.bottomMargin + values.bottomMargin,
				}}
				onPress={() => {
					navigation.navigate("GetStartedScreen");
				}}
			/>
		</Screen>
	);
};
const styles = StyleSheet.create({
	img: {
		width: 200,
		height: 200,
		borderRadius: 200,
		marginVertical: 10,
	},
	screen: {
		alignItems: "center",
		justifyContent: "center",
		margin: 0,
		paddingTop: 0,
	},
});
export default StartupScreen;
