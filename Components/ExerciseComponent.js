import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import BackBtn from "../Components/BackBtn";
import MyText from "../Components/MyText";
import values from "../config/values";
import MiniText from "../Components/MiniText";
import AnimatedLottieView from "lottie-react-native";
import colors from "../config/colors";

const ExerciseComponent = ({ name, source }) => {
	return (
		<View style={styles.boxContainer}>
			<AnimatedLottieView
				style={styles.gifContainer}
				autoPlay
				source={source}
			/>
			<MiniText style={{ height: 20, color: colors.pureWhite }}>
				{name}
			</MiniText>
		</View>
	);
};
const styles = StyleSheet.create({
	boxContainer: {
		width: 155,
		height: 155,
		backgroundColor: colors.asliBlack,
		borderRadius: values.borderRadius,
		borderWidth: 0.5,
		borderTopWidth: 2,
		borderColor: colors.asliBlack,
		justifyContent: "flex-end",
		alignItems: "center",
		overflow: "hidden",
	},
	gifContainer: {
		width: 140,
		height: 140,
		borderRadius: values.borderRadius,
		borderColor: colors.asliBlack,
		backgroundColor: colors.asliBlack,
		overflow: "hidden",
	},
	container: {
		backgroundColor: "lightgreen",
		flex: 0.9,
	},
});
export default ExerciseComponent;
