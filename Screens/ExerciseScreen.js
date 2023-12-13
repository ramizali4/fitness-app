import { View, StyleSheet, Animated, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import colors from "../config/colors";
import values from "../config/values";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import Screen from "../Components/Screen";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";
import TopBackBtn from "../Components/TopBackBtn";

// ===============================================================
// Sends an objectID
// of the Exercise and
// extract name, gif path
// Desription,Targeted Body Part (e.g., chest, abs, etc.)
//	gifPath = require("../assets/Gifs/Loading hands.json");
// ===============================================================
function ExerciseScreen({ ExerciseName, route, navigation }) {
	const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

	const animationRef = useRef(null);
	const animationProgress = useRef(new Animated.Value(0));
	const [gifPath, setgifPath] = useState("");

	const initialSeconds = 10; // Set your desired initial seconds
	const [seconds, setSeconds] = useState(initialSeconds);
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		setgifPath(route.params.gifPath);
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
	useEffect(() => {
		let interval;

		if (isRunning && seconds > 0) {
			interval = setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds - 1);
			}, 1000);
		} else {
			clearInterval(interval);
			setIsRunning(false);
		}

		return () => clearInterval(interval);
	}, [isRunning, seconds, navigation]);

	const handleBackPress = () => {
		// Add any additional logic needed for the back button press
		navigation.goBack();
	};

	return (
		<Screen style={{ backgroundColor: colors.pureWhite }}>
			{/* Header */}
			<View style={styles.header}>
				<TopBackBtn
					size={values.smallbtn}
					onPress={seconds > 0 ? handleBackPress : null}
					disabled={seconds > 0 ? false : true}
				/>
				<MyText style={styles.headertxt}>{route.params.exerciseName}</MyText>
			</View>

			{/* Exercise*/}
			<View style={styles.exerciseContainer}>
				{/* A viewable gif on repeat */}
				{gifPath ? (
					<LottieView
						style={styles.exerciseGIF}
						//ref={lottieRef}
						source={{ uri: gifPath }}
						autoPlay={true}
						loop={true}
						speed={1}
						renderMode={"SOFTWARE"}
					/>
				) : (
					// A loading Gif when the actual is being loaded from DB //
					<AnimatedLottieView
						//ref={animationRef}
						source={require("../assets/Gifs/Loading hands.json")}
						autoPlay={true} // Auto-play the loading animation
						loop={true}
						style={styles.exerciseGIF}
						progress={animationProgress.current}
					/>
				)}
				<View
					style={{
						//backgroundColor: colors.asliBlack,
						width: 100,
						height: 100,
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 100,
						borderColor: colors.asliBlack,
						borderWidth: 5,
						right: 20,
					}}
				>
					<MyText style={styles.timertxt}>{seconds}</MyText>
				</View>
			</View>
			{/* Description on how to do the specfic exercise */}
			<View
				style={{
					alignItems: "center",
					justifyContent: "space-between",
					//	backgroundColor: "red",
					flex: 0.5,
					paddingVertical: 20,
				}}
			>
				<View
					style={{
						//	backgroundColor: "green",
						alignItems: "center",
						width: "85%",
						padding: 10,
					}}
				>
					<MyText>Lorem Ipsum dolor</MyText>
					<MiniText style={styles.Descriptiontxt}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation
					</MiniText>
				</View>
				{/* A random motivation text */}
				<MiniText style={styles.motivationtxt}>
					<Text style={{ fontFamily: "", fontWeight: "800" }}>"</Text>
					Lorem ipsum dolor sit amet, consectetur adequiste elit, sed eiusmod
					tempor incididunt.
					<Text style={{ fontFamily: "", fontWeight: "800" }}>"</Text>
				</MiniText>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	Descriptiontxt: {
		textAlign: "center",
		fontSize: 12,
		fontFamily: "Integralcf_regular",
		marginVertical: 8,
	},
	exerciseContainer: {
		flex: 0.4,
		paddingHorizontal: 10,
		backgroundColor: colors.pureWhite,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	exerciseGIF: {
		width: "80%",
		height: "80%",
		justifyContent: "center",
		overflow: "hidden",
		left: 15,
	},
	header: {
		flex: 0.1,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		justifyContent: "center",
	},
	headertxt: {
		alignSelf: "center",
		textAlign: "center",
		//position: "absolute",
		width: "100%",
	},
	motivationtxt: {
		width: "80%",
		textAlign: "center",
		//	backgroundColor: colors.secondary,
		fontFamily: "Integralcf_bold",
		fontSize: 14,
		padding: 10,
		borderColor: colors.secondary,
		borderRadius: values.borderRadius,
		borderWidth: 2,
	},
	timertxt: {
		fontSize: 56,
		height: 86,
		color: colors.asliBlack,
	},
});
export default ExerciseScreen;
