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

function ClickableContainer({ title, img, style, onPress, ...otherProps }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Image source={img} style={styles.imgContainer} />
			<View style={styles.title}>
				<MyText
				//style={{ color: colors.secondary }}
				>
					{title}
				</MyText>
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
		borderWidth: 3,
		borderColor: colors.secondary,
		marginBottom: 20,
		elevation: 10,
	},
	imgContainer: {
		alignSelf: "center",
		width: 335,
		height: 185,
		backgroundColor: colors.asliBlack,
		borderRadius: values.borderRadius,
		borderWidth: 3,
		borderColor: colors.secondary,
		marginBottom: 20,
	},
	title: {
		backgroundColor: "white",
		//backgroundColor: colors.secondary,
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
