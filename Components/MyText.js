import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts, loadAsync } from "expo-font";
import colors from "../config/colors";

function MyText({ children, style, ...otherProps }) {
	return (
		<Text style={[styles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
}
const styles = StyleSheet.create({
	text: {
		fontFamily: "Integralcf_medium",
		fontSize: 20,
		color: colors.black,
		height: 26,
	},
});
export default MyText;
