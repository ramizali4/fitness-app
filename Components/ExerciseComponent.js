import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import BackBtn from "../Components/BackBtn";
import MyText from "../Components/MyText";
import values from "../config/values";
import MiniText from "../Components/MiniText";
import AnimatedLottieView from "lottie-react-native";
import colors from "../config/colors";

const ExerciseComponent = ({ name, source, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.boxContainer}>
			<AnimatedLottieView
				style={styles.gifContainer}
				autoPlay
				source={source}
			/>
			<MiniText style={{ height: 20, color: colors.pureWhite }}>
				{name}
			</MiniText>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	boxContainer: {
		width: 150,
		height: 150,
		backgroundColor: colors.secondary,
		borderRadius: values.borderRadius,
		borderWidth: 0.5,
		borderTopWidth: 2,
		borderColor: colors.secondary,
		justifyContent: "flex-end",
		alignItems: "center",
		overflow: "hidden",
		margin: 10,
		elevation: 5,
	},
	gifContainer: {
		width: 150,
		height: 150,
		borderRadius: values.borderRadius,
		borderColor: colors.asliBlack,
		backgroundColor: colors.asliBlack,
		overflow: "hidden",
	},
});
export default ExerciseComponent;
