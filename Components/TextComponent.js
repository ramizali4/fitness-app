import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import BackBtn from "../Components/BackBtn";
import MyText from "../Components/MyText";
import values from "../config/values";
import MiniText from "../Components/MiniText";
import AnimatedLottieView from "lottie-react-native";
import colors from "../config/colors";

const TextComponent = ({ name, percentage, onPress }) => {
	return (
		<View style={styles.container}>
			<View onPress={onPress} style={styles.boxContainer}>
				<MyText style={styles.percentagetxt}>
					{percentage} <Text style={{ fontFamily: "" }}>%</Text>
				</MyText>
			</View>
			<MiniText style={styles.nametxt}>{name}</MiniText>
		</View>
	);
};
const styles = StyleSheet.create({
	boxContainer: {
		width: 100,
		height: 100,
		//	backgroundColor: colors.main,
		borderRadius: values.borderRadius,
		borderColor: colors.asliBlack,
		borderWidth: 4,
		justifyContent: "center",
		alignItems: "center",
		//		overflow: "hidden",
		marginHorizontal: 10,
		//elevation: 5,
		//paddingTop: 10,
	},
	container: {
		width: 105,
		//height: 135,
		alignItems: "center",
		marginHorizontal: 5,
	},
	nametxt: {
		//backgroundColor: colors.pureWhite,
		//	height: 20,
		color: colors.asliBlack,
		//width: "100%",
		textAlign: "center",
	},
	percentagetxt: { color: colors.asliBlack },
});

export default TextComponent;
