import {
	Text,
	View,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import colors from "../config/colors";
import MyText from "../Components/MyText";
import values from "../config/values";

function ClickableContainer({ title, img, style, ...otherProps }) {
	return (
		<TouchableOpacity style={styles.container}>
			<Image source={img} style={styles.container} />
			<View style={styles.title}>
				<MyText>{title}</MyText>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		width: 335,
		height: 185,
		backgroundColor: colors.asliBlack,
		borderRadius: values.borderRadius,
		marginBottom: 20,
	},
	title: {
		backgroundColor: "white",
		//	width: "60%",
		paddingBottom: 5,
		paddingHorizontal: 4,
		position: "absolute",
		bottom: 8,
		left: 8,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
});
export default ClickableContainer;
