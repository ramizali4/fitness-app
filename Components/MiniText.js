import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts, loadAsync } from "expo-font";
import colors from "../config/colors";

function MiniText({ children, style, ...otherProps }) {
	return (
		<Text numberOfLines={10} style={[styles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
}
const styles = StyleSheet.create({
	text: {
		fontFamily: "Integralcf_medium",
		fontSize: 14,
		color: colors.black,
		//height: 18,
	},
});
export default MiniText;
