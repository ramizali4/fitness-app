import {
	View,
	StyleSheet,
	FlatList,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import colors from "../config/colors";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import ImageComponent from "../Components/ImageComponent";
import MyText from "../Components/MyText";
import SafeView from "../Components/SafeView";
import TextHeader from "../Components/TextHeader";
import TextComponent from "../Components/TextComponent";

// ==============================================================
// WorkoutScreen:
// - Presents a workout interface.
// - Users can follow and track their workout routines.
// ==============================================================

const WorkoutScreen = ({ route, navigation }) => {
	// data for tracking % of body parts
	const data = [
		{
			name: "Chest",
			source: require("../assets/body.png"),
			percentage: 75,
		},
		{
			name: "Abs",
			source: require("../assets/abs.png"),
			percentage: 45,
		},
		{
			name: "Arms",
			source: require("../assets/muscle.png"),
			percentage: 25,
		},
	];
	const data2 = [
		{
			name: "Calories Burned",
			source: require("../assets/body.png"),
			percentage: 35,
		},
		{
			name: "Favourite Exercise.",
			source: require("../assets/abs.png"),
			percentage: 55,
		},
		{
			name: "Weight Gained",
			source: require("../assets/muscle.png"),
			percentage: 65,
		},
		{
			name: "Calories Burned",
			source: require("../assets/body.png"),
			percentage: 35,
		},
		{
			name: "Favourite Exercise.",
			source: require("../assets/abs.png"),
			percentage: 55,
		},
		{
			name: "Weight Gained",
			source: require("../assets/muscle.png"),
			percentage: 65,
		},
	];
	return (
		<View style={styles.screen}>
			{/* Header */}
			<View style={styles.header}>
				<TextHeader style={styles.headertxt1}>Your Workout</TextHeader>
			</View>
			<ScrollView style={{ flex: 0.6 }}>
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
					/>
				</View>
				<View style={styles.container}>
					<MyText style={{ marginHorizontal: 5, fontSize: 16 }}>
						Workouts Per Week
					</MyText>
					{/* FlatList showcased in horizontal */}
					<FlatList
						horizontal
						data={data}
						renderItem={({ item }) => (
							<ImageComponent
								name={item.name}
								source={item.source}
								percentage={item.percentage}
							/>
						)}
					/>
				</View>
				<View style={styles.bottomcontainer}>
					<FlatList
						scrollEnabled={true}
						numColumns={3}
						data={data2}
						renderItem={({ item }) => (
							<TextComponent
								name={item.name}
								source={item.source}
								percentage={item.percentage}
							/>
						)}
					/>
				</View>
				<SafeView />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	bottomcontainer: {
		flex: 0.3,
		paddingHorizontal: 10,
		marginTop: 20,
		alignItems: "center",
	},
	container: {
		flex: 0.25,
		paddingHorizontal: 10,
		marginHorizontal: 5,
		paddingVertical: 5,
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
		paddingHorizontal: 5,
		paddingTop: 25,
		paddingBottom: 5,
		width: "100%",
		justifyContent: "center",
		elevation: 10,
		alignItems: "center",
	},
	headertxt1: {
		alignSelf: "center",
		height: 45,
		padding: 5,
		//	borderBottomWidth: 1,
		fontFamily: "Integralcf_bold",
		color: colors.pureWhite,
		width: "100%",
		fontSize: 26,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		color: colors.secondary,
		// textAlign: "center",
	},
	headertxt2: {
		alignSelf: "center",
		fontFamily: "Integralcf_regular",
		height: 60,
		borderBottomWidth: 1,
		padding: 5,
	},
	text: { marginVertical: 5, height: 20 },
	screen: {
		//paddingTop: 10,
		flex: 1,
		backgroundColor: colors.pureWhite,
	},
});

export default WorkoutScreen;
