import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MyText from "./MyText";
import colors from "../config/colors";
import MiniText from "./MiniText";

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
		//	paddingVertical: 10,
		//alignItems: "center",
		width: 180,
		height: 50,
		//justifyContent: "center",
		elevation: 2,
		marginVertical: 15,
	},
	text: {
		fontFamily: "Integralcf_medium",
		color: colors.white,
		//flex: 1,
		//fontSize: 12,
		textAlign: "center",
	},
});

export default MyButton;
