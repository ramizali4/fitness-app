import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts, loadAsync } from "expo-font";
import colors from "../config/colors";

function TextHeader({ children, style, ...otherProps }) {
	return (
		<Text style={[styles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
}
const styles = StyleSheet.create({
	text: {
		fontFamily: "Integralcf_medium",
		fontSize: 32,
		color: colors.asliBlack,
		height: 40,
	},
});
export default TextHeader;
