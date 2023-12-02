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

function ExerciseTypeScreen({ screenName, navigation, route }) {
	const imagepath1 = require("../assets/sven-mieke-EuwD039Svug-unsplash.jpg");
	const imagepath2 = require("../assets/victor-freitas-WvDYdXDzkhs-unsplash.jpg");
	const imagepath3 = require("../assets/rect1.png");
	/* 2. Get the param */
	const { screenName_ } = route.params.screenName;
	return (
		<Screen style={{ backgroundColor: colors.main }}>
			{/* Header */}
			<View style={styles.header}>
				<BackBtn size={values.smallbtn} onPress={() => navigation.goBack()} />
				<MyText style={styles.headertxt}>{route.params.screenName}</MyText>
			</View>
			{/* Exercises */}
			<View style={styles.exerciseContainer}>
				<View>
					<ClickableContainer
						title="Beginner"
						img={imagepath1}
						onPress={() => {
							navigation.navigate("ExercisesListScreen", {
								screenName: route.params.screenName,
								listType: "Beginner",
							});
						}}
					/>
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
	},
	exerciseContainer: {
		flex: 0.6,
		paddingHorizontal: 10,
	},
	header: {
		//backgroundColor: colors.red,
		flex: 0.1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
	},
	headertxt: {
		//	alignSelf: "center",
		//	textAlign: "center",
		//	width: "100%",
		//	backgroundColor: "cyan",
		//	position: "absolute",
		textDecorationColor: colors.secondary,
		textDecorationLine: "underline",

		height: 28,
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
