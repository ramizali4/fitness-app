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

function HomeScreen() {
	const imagepath3 = require("../assets/icon.png");
	const imagepath1 = require("../assets/street-workout-2629182_1920.jpg");
	const imagepath2 = require("../assets/carl-barcelo-nqUHQkuVj3c-unsplash.jpg");

	return (
		<Screen>
			{/* Header */}
			<View style={styles.header}>
				<TextHeader style={{ color: colors.white, fontSize: 30 }}>
					LOREM IPSUM
				</TextHeader>
				<View style={styles.levelContainer}>
					<Text>Level </Text>
					<Text>2</Text>
				</View>
			</View>
			{/* Graph */}
			<View style={styles.graphContainer}>
				<LineChart
					data={{
						labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
						datasets: [
							{
								data: [
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
								],
							},
						],
					}}
					width={Dimensions.get("window").width - 20} // from react-native
					height={210}
					yAxisLabel="$"
					yAxisSuffix="k"
					yAxisInterval={1} // optional, defaults to 1
					chartConfig={{
						backgroundColor: "#e26a00",
						backgroundGradientFrom: "#fb8c00",
						backgroundGradientTo: "#ffa726",
						decimalPlaces: 2, // optional, defaults to 2dp
						color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						style: {
							borderRadius: 16,
						},
						propsForDots: {
							r: "6",
							strokeWidth: "2",
							stroke: "#ffa726",
						},
					}}
					bezier
					style={{
						marginVertical: 8,
						borderRadius: 16,
					}}
				/>
			</View>
			{/* Exercises */}
			<View style={styles.exerciseContainer}>
				<TextHeader style={{ fontSize: 28, marginVertical: 5 }}>
					Exercises
				</TextHeader>
				<ScrollView>
					<ClickableContainer title="Calisthenics" img={imagepath1} />
					{/*onPress <ExerciseScreen screenName="Calisthenics" /> */}
					<ClickableContainer title="Streching" img={imagepath2} />
					<ClickableContainer title="Calisthenics" img={imagepath3} />
					{/* <Image source={require("../assets/icon.png")} /> */}
				</ScrollView>
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
		//	backgroundColor: "red",
		backgroundColor: colors.main,
	},
	graphContainer: {
		flex: 0.3,
		alignItems: "center",
		backgroundColor: colors.main,
	},
	header: {
		backgroundColor: colors.black,
		flex: 0.1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
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
export default HomeScreen;
