import {
	Text,
	View,
	StyleSheet,
	Button,
	ScrollView,
	Dimensions,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import { LineChart } from "react-native-chart-kit";
import { userState } from "../firebase";
import values from "../config/values";
import colors from "../config/colors";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import ClickableContainer from "../Components/ClickableContainer";
import TextHeader from "../Components/TextHeader";
import SafeView from "../Components/SafeView";
import Screen from "../Components/Screen";

// ==============================================================
// HomeScreen:
// - Serves as the main screen upon app launch.
// - Displays a personalized dashboard with key information and features.
// ==============================================================
function HomeScreen({ navigation }) {
	const imagepath1 = require("../assets/street-workout-2629182_1920.jpg");
	const imagepath2 = require("../assets/carl-barcelo-nqUHQkuVj3c-unsplash.jpg");
	const imagepath3 = require("../assets/louis-hansel-9fy37IYSB3g-unsplash.jpg");

	const dColor = "#fff";
	const lColor = "#00";
	return (
		<Screen style={styles.screen}>
			{/* Header */}
			<View style={styles.header}>
				<TextHeader style={{ color: colors.white, fontSize: 30 }}>
					Welcome
				</TextHeader>
				<View style={styles.levelContainer}>
					<Text style={{ color: colors.pureWhite }}>Level </Text>
					<Text style={{ color: colors.pureWhite }}>{userState.level}</Text>
				</View>
			</View>

			<ScrollView style={{ flex: 0.9 }}>
				{/* Graph */}
				<View style={styles.graphContainer}>
					{/* <LineChart
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
						backgroundColor: colors.secondary,
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
				/> */}
					<LineChart
						data={{
							labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
							datasets: [
								{
									data: [0, 4, 8, 12, 16, 20],
								},
							],
						}}
						width={Dimensions.get("window").width - 20} // from react-native
						height={215}
						//	yAxisLabel="No."
						//	yAxisInterval={1} // optional, defaults to 1
						chartConfig={{
							backgroundColor: colors.secondary,
							backgroundGradientFrom: colors.secondary,
							backgroundGradientTo: colors.secondary,
							decimalPlaces: 0, // optional, defaults to 2dp
							color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
							labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
							style: {
								borderRadius: 16,
							},
							propsForDots: {
								r: "6",
								strokeWidth: "2",
								stroke: colors.asliBlack,
							},
						}}
						bezier
						style={{
							marginVertical: 8,
							borderRadius: values.borderRadius,
						}}
					/>
				</View>
				{/* Exercises */}
				<View style={styles.exerciseContainer}>
					<TextHeader style={{ fontSize: 28, marginVertical: 5 }}>
						Exercises
					</TextHeader>
					<ClickableContainer
						title="Calisthenics"
						img={imagepath1}
						onPress={() =>
							navigation.navigate("ExerciseTypeScreen", {
								screenName: "Calisthenics",
							})
						}
					/>
					{/*onPress <ExerciseScreen screenName="Calisthenics" /> */}
					<ClickableContainer
						title="Streching"
						img={imagepath2}
						onPress={() =>
							navigation.navigate("ExerciseTypeScreen", {
								screenName: "Streching",
							})
						}
					/>
					<ClickableContainer
						title="Dieting"
						img={imagepath3}
						onPress={() =>
							navigation.navigate("ExerciseTypeScreen", {
								screenName: "Dieting",
							})
						}
					/>
				</View>
				<SafeView />
			</ScrollView>
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
		backgroundColor: colors.asliBlack,
		flex: 0.1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
		elevation: 10,
		//backgroundColor: "red",
	},
	levelContainer: {
		width: 75,
		height: 40,
		backgroundColor: "white",
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.secondary,
	},
	screen: {
		backgroundColor: colors.asliBlack,
		//		paddingTop: Constants.statusBarHeight - 15,
		paddingTop: Constants.statusBarHeight - 30,
	},
});
export default HomeScreen;
