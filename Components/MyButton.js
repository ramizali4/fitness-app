import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
import MiniText from "./MiniText";
// =================================================
// This is the default to be used for every screen
// has props for changeing the title of the button
// and onPress events.
// =================================================
function MyButton({
	fontStyle,
	title,
	bordercolor,
	color,
	onPress,
	icon,
	style,
	textColor,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				style,
				{ backgroundColor: color },
				{ borderColor: bordercolor },
			]}
			onPress={onPress}
		>
			<MiniText style={[styles.text, fontStyle, { color: textColor }]}>
				{title}
			</MiniText>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	button: {
		padding: 10,
		width: 150,
		height: 50,
		elevation: 2,
		marginVertical: 15,
		justifyContent: "center",
	},
	text: {
		fontFamily: "Integralcf_medium",
		color: colors.white,
		textAlign: "center",
		height: 18,
	},
});

export default MyButton;
