import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, loadAsync } from "expo-font";
//import * as SplashScreen from "expo-splash-screen";
import StartupScreen from "./Screens/StartupScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";

export default function App() {
	const [fontsLoaded] = useFonts({
		Integralcf_bold: require("./config/FONTSPRING/Fontspring-DEMO-integralcf-bold.otf"),
		integralcf_extrabold: require("./config/FONTSPRING/Fontspring-DEMO-integralcf-extrabold.otf"),
		Integralcf_medium: require("./config/FONTSPRING/Fontspring-DEMO-integralcf-medium.otf"),
		Integralcf_heavy: require("./config/FONTSPRING/Fontspring-DEMO-integralcf-heavy.otf"),
	});
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);
	if (!fontsLoaded) {
		return null;
	}
	return <WelcomeScreen/>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
