import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import BackBtn from "../Components/BackBtn";
import MyText from "../Components/MyText";
import values from "../config/values";
import MiniText from "../Components/MiniText";
import AnimatedLottieView from "lottie-react-native";
import colors from "../config/colors";

const ImageComponent = ({ name, source, percentage, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.boxContainer}>
			<Image style={styles.imgContainer} source={source} />

			<Text style={styles.percentagetxt}>{percentage}%</Text>
			<MiniText style={styles.nametxt}>{name}</MiniText>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	boxContainer: {
		width: 140,
		height: 140,
		backgroundColor: colors.asliBlack,
		borderRadius: values.borderRadius,
		justifyContent: "space-between",
		alignItems: "center",
		overflow: "hidden",
		marginHorizontal: 10,
		elevation: 5,
		paddingTop: 10,
	},
	imgContainer: {
		width: 70,
		height: 70,
		marginTop: 5,
		//	backgroundColor: colors.secondaryB,
		overflow: "hidden",
	},
	nametxt: {
		backgroundColor: colors.pureWhite,
		height: 20,
		color: colors.asliBlack,
		width: "100%",
		textAlign: "center",
	},
	percentagetxt: { color: colors.pureWhite },
});
export default ImageComponent;
