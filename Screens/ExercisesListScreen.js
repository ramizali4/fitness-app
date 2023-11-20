import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import BackBtn from "../Components/BackBtn";
import MyText from "../Components/MyText";
import values from "../config/values";
import MiniText from "../Components/MiniText";
import AnimatedLottieView from "lottie-react-native";
import colors from "../config/colors";
import ExerciseComponent from "../Components/ExerciseComponent";

const lottieData = [
	{
		name: "Split Jump",
		source: require("../assets/Gifs/Split Jump.json"),
	},
	{
		name: "Push ups",
		source: require("../assets/Gifs/Push-ups.json"),
	},
	{
		name: "Squats",
		source: require("../assets/Gifs/Squats.json"),
	},
	{
		name: "T Plane",
		source: require("../assets/Gifs/T Plane.json"),
	},
	// Add more items as needed
];
const ExercisesListScreen = ({ ListType }) => {
	return (
		<Screen>
			<View style={styles.header}>
				<BackBtn size={values.smallbtn} />
				<MyText style={styles.headertxt}>{ListType}</MyText>
			</View>
			<View style={styles.boxContainer}>
				<AnimatedLottieView
					style={styles.gifContainer}
					autoPlay
					source={require("../assets/Gifs/Push-ups.json")}
				/>
				<MiniText
					style={{
						height: 20,
						//backgroundColor: colors.asliBlack,
						color: colors.pureWhite,
					}}
				>
					Push Ups
				</MiniText>
			</View>
			<FlatList
				style={styles.listContainer}
				data={lottieData}
				numColumns={2}
				renderItem={({ item }) => (
					<ExerciseComponent name={item.name} source={item.source} />
				)}
			/>

			{/* <FlatList style={styles.container} /> */}
			{/* <View style={styles.container}></View> */}
		</Screen>
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
	header: {
		// /	backgroundColor: colors.black,
		flex: 0.1,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	headertxt: {
		alignSelf: "center",
		textAlign: "center",
		//backgroundColor: "red",
		position: "absolute",
		width: "100%",
	},
	listContainer: {
		backgroundColor: "red",
		marginHorizontal: 10,
		//	justifyContent: "center",
	},
});
export default ExercisesListScreen;
