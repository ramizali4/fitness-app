import {
	Text,
	View,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
	ScrollView,
	Dimensions,
} from "react-native";
import React, { Component } from "react";
import img from "../assets/icon.png";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";
import values from "../config/values";
import MyTextInput from "../Components/MyTextInput";
import { AntDesign } from "@expo/vector-icons";
import ClickableContainer from "../Components/ClickableContainer";
import { LineChart } from "react-native-chart-kit";
import BackBtn from "../Components/BackBtn";

function ExerciseTypeScreen({ screenName }) {
	const imagepath1 = require("../assets/hopefilmphoto-QiYZCKJQMck-unsplash.jpg");
	const imagepath2 = require("../assets/carl-barcelo-nqUHQkuVj3c-unsplash.jpg");
	const imagepath3 = require("../assets/mil-tech-pharma-ltd-ozSG9X4Av6A-unsplash.jpg");

	return (
		<Screen style={{ backgroundColor: colors.main }}>
			{/* Header */}
			<View style={styles.header}>
				<BackBtn size={values.smallbtn} />
				<MyText style={styles.headertxt}>{screenName}</MyText>
			</View>

			{/* Exercises */}
			<View style={styles.exerciseContainer}>
				<View>
					<ClickableContainer title="Beginner" img={imagepath1} />
					<ClickableContainer title="Intermediate" img={imagepath2} />
					<ClickableContainer title="Advanced" img={imagepath3} />
				</View>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		width: 330,
		height: 180,
		borderRadius: 20,
		backgroundColor: colors.main,
	},
	exerciseContainer: {
		flex: 0.6,
		paddingHorizontal: 10,
		backgroundColor: colors.main,
	},
	header: {
		//backgroundColor: colors.red,
		flex: 0.1,
		flexDirection: "row",
		//justifyContent: "space-around",
		alignItems: "center",
		marginHorizontal: 10,
	},
	headertxt: {
		alignSelf: "center",
		textAlign: "center",
		width: "100%",
		//backgroundColor: "cyan",
		position: "absolute",
	},
	levelContainer: {
		width: 75,
		height: 40,
		backgroundColor: "white",
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
export default ExerciseTypeScreen;
