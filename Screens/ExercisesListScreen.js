import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AnimatedLottieView from "lottie-react-native";
import { loadExercises } from "../firebase";
import values from "../config/values";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import ExerciseComponent from "../Components/ExerciseComponent";
import TopBackBtn from "../Components/TopBackBtn";
import Screen from "../Components/Screen";
import MyText from "../Components/MyText";

// ==============================================================
// ExercisesListScreen:
// - Shows a list of exercises.
// - Users can view and select exercises for their workout routines.
// ==============================================================
const ExercisesListScreen = ({ listType, navigation, route }) => {
	const [exercises, setExercises] = useState([]);
	const animationProgress = useRef(new Animated.Value(0));

	useEffect(() => {
		let isMounted = true;

		const fetchExercises = async () => {
			try {
				const exerciseList = await loadExercises();

				if (isMounted) {
					console.log("exercise", exerciseList);
					setExercises(exerciseList);
				}
			} catch (error) {
				console.error("Error loading exercises:", error);
				// Handle the error here
			}
		};

		fetchExercises();

		// Cleanup function to set isMounted to false when the component is unmounted
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<Screen>
			<View style={styles.header}>
				<TopBackBtn
					size={values.smallbtn}
					onPress={() => navigation.goBack()}
				/>
				<MyText>{route.params.listType}</MyText>
			</View>
			{/* List of exercises*/}
			{exercises && exercises.length > 0 ? (
				<FlatList
					style={styles.listContainer}
					data={exercises}
					numColumns={2}
					renderItem={({ item }) => (
						<ExerciseComponent
							name={item.Name}
							source={item.URL}
							onPress={() => {
								navigation.navigate("ExerciseScreen", {
									exerciseName: item.Name,
									gifPath: item.URL,
								});
							}}
						/>
					)}
				/>
			) : (
				<View style={{ flex: 0.9 }}>
					<AnimatedLottieView
						//ref={animationRef}
						source={require("../assets/Gifs/Loading hands.json")} // Replace with the loading animation JSON file
						autoPlay={true} // Auto-play the loading animation
						loop={true}
						style={styles.exerciseGIF}
						progress={animationProgress.current}
					></AnimatedLottieView>
				</View>
			)}
		</Screen>
	);
};
const styles = StyleSheet.create({
	exerciseGIF: {
		width: "80%",
		height: "80%",
		//backgroundColor: "lightblue",
		//alignSelf: "center",
		//alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 10,
		alignSelf: "center",
		flex: 0.8,
	},
	header: {
		//backgroundColor: colors.black,
		flex: 0.1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		//	paddingHorizontal: 10,
		marginHorizontal: 10,
	},
	listContainer: {
		marginHorizontal: 10,
		alignSelf: "center",
		flex: 0.9,
	},
});
export default ExercisesListScreen;
