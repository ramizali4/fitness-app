import {
	animationProgress,
	View,
	StyleSheet,
	Button,
	Animated,
	Easing,
} from "react-native";
import React, { Component, useEffect, useRef, useState } from "react";
import img from "../assets/icon.png";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";
import values from "../config/values";
import LottieView from "lottie-react-native";
import BackBtn from "../Components/BackBtn";

function ExerciseScreen({ ExerciseName }) {
	// Sends an objectID
	// of the Exercise and
	// extract name, gif path
	// Desription,Targeted Body Part (e.g., chest, abs, etc.)
	//	gifPath = require("../assets/Gifs/Loading hands.json");

	const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

	const animationRef = useRef(null);
	const animRef = useRef < LottieView > null;
	const animationProgress = useRef(new Animated.Value(0));
	const [gifPath, setgifPath] = useState("");

	useEffect(() => {
		setgifPath(require("../assets/Gifs/Push-ups.json"));
		// if (animationRef.current) {
		console.log("play");
		Animated.timing(animationProgress.current, {
			toValue: 1,
			duration: 5000,
			//easing: Easing.linear,
			useNativeDriver: false,
		}).start();
		animationRef.current?.play();
		// } else {
		// 	console.log("denied");
		// }
	}, []);

	return (
		<Screen style={{ backgroundColor: colors.main }}>
			{/* Header */}
			{/* <View style={styles.header}>
				<BackBtn size={values.smallbtn} />
				<MyText style={styles.headertxt}>{ExerciseName}</MyText>
			</View> */}

			{/* Exercise*/}
			<View style={styles.exerciseContainer}>
				{/* A viewable gif on repeat */}

				{gifPath ? (
					<AnimatedLottieView
						//	ref={animationRef}
						style={styles.exerciseGIF}
						source={gifPath}
						autoPlay={true}
						loop={true}
					/>
				) : (
					<AnimatedLottieView
						//ref={animationRef}
						source={require("../assets/Gifs/Loading hands.json")} // Replace with the loading animation JSON file
						autoPlay={true} // Auto-play the loading animation
						loop={true}
						style={styles.exerciseGIF}
						progress={animationProgress.current}
					/>
				)}
				<LottieView
					ref={animationRef}
					source={require("../assets/Gifs/Loading hands.json")} // Replace with the loading animation JSON file
					autoPlay={true} // Auto-play the loading animation
					loop={true}
					style={styles.exerciseGIF}
					//progress={animationProgress.current}
				/>
				<LottieView
					source={require("../assets/Gifs/Loading hands.json")} // Replace with the loading animation JSON file
					autoPlay={true} // Auto-play the loading animation
					loop={true}
					style={styles.exerciseGIF}
				/>
				{/* Description on how to do the specfic exercise */}
				<MiniText style={styles.Descriptiontxt}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation
				</MiniText>
				{/* A random motivation text */}
				<MiniText style={styles.motivationtxt}>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt."
				</MiniText>
			</View>
			{/* <Button title="Play" onPress={() => animationRef.current.play()} /> */}
		</Screen>
	);
}

const styles = StyleSheet.create({
	Descriptiontxt: {
		width: "80%",
		alignSelf: "center",
		textAlign: "center",
		//backgroundColor: "lightyellow",
		fontSize: 12,
		fontFamily: "Integralcf_regular",
	},
	exerciseContainer: {
		flex: 0.9,
		paddingHorizontal: 10,
		backgroundColor: colors.main,
		//	backgroundColor: "lightgreen",
	},
	exerciseGIF: {
		width: "100%",
		height: "40%",
		//backgroundColor: "lightblue",
		alignSelf: "center",
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
	motivationtxt: {
		width: "80%",
		alignSelf: "center",
		textAlign: "center",
		//backgroundColor: "lightyellow",
		fontSize: 12,
	},
});
export default ExerciseScreen;
