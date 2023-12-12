import { useCallback, useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { useFonts, loadAsync } from "expo-font";
//import * as SplashScreen from "expo-splash-screen";
import StartupScreen from "./Screens/StartupScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import ExerciseScreen from "./Screens/ExerciseScreen";
import ExerciseTypeScreen from "./Screens/ExerciseTypeScreen";
import LottieView from "lottie-react-native";
import ExercisesListScreen from "./Screens/ExercisesListScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Navigation/AppNavigator";
import WorkoutScreen from "./Screens/WorkoutScreen";
import SelectGenderScreen from "./Screens/SelectGenderScreen";
import SelectWeightScreen from "./Screens/SelectWeightScreen";
import SelectAgeScreen from "./Screens/SelectAgeScreen";
import SelectHeightScreen from "./Screens/SelectHeightScreen";
import PrivacyPolicyScreen from "./Screens/PrivacyPolicyScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";

export default function App() {
	const [fontsLoaded] = useFonts({
		Integralcf_bold: require("./config/FONTSPRING/Fontspring-DEMO-integralcf-bold.otf"),
		integralcf_extrabold: require("./config/FONTSPRING/Fontspring-DEMO-integralcf-extrabold.otf"),
		Integralcf_medium: require("./config/FONTSPRING/Fontspring-DEMO-integralcf-medium.otf"),
		Integralcf_heavy: require("./config/FONTSPRING/Fontspring-DEMO-integralcf-heavy.otf"),
		Integralcf_regular: require("./config/FONTSPRING/Fontspring-DEMO-integralcf-regular.otf"),
	});
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);
	if (!fontsLoaded) {
		return null;
	}
	// const animationRef = useRef(null);
	// useEffect(() => {
	// 	animationRef.current?.play();
	// }, []);

	return (
		// <SelectGenderScreen />
		<NavigationContainer>
			<AppNavigator />
		</NavigationContainer>
	);
	//<ExercisesListScreen ListType="Intermediate" />;
	//<ExerciseScreen ExerciseName="Push Ups" />;
	// 	<AnimatedLottieView
	// 		ref={animationRef}
	// 		source={require("./assets/Gifs/Loading hands.json")}
	// 		autoPlay
	// 		loop
	// 		style={{ backgroundColor: "green", width: "100%", height: 152 }}
	// 	/>
	// );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
