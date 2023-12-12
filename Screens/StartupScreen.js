import { Text, View, Image, StyleSheet, Button } from "react-native";
import React, { Component } from "react";
import img from "../assets/gym.png";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";
import values from "../config/values";

const StartupScreen = ({ navigation }) => {
	return (
		<Screen style={styles.screen}>
			{/* <View style={{ backgroundColor: "pink", marginVertical: "25%" }}> */}
			<Image source={img} style={styles.img} />
			<TextHeader>Fitnify</TextHeader>
			<MiniText style={{ height: 18, marginVertical: 2 }}>
				Sweat now, shine later.
			</MiniText>
			{/* </View> */}
			<MyButton
				color={colors.asliBlack}
				title="Get Started"
				textColor={colors.secondary}
				style={{ position: "absolute", bottom: values.bottomMargin }}
				onPress={() => {
					navigation.navigate("GetStartedScreen");
				}}
			/>
		</Screen>
	);
};
const styles = StyleSheet.create({
	img: {
		width: 200,
		height: 200,
		borderRadius: 200,
		marginVertical: 10,

		//borderWidth: 5,
		//borderColor: colors.black,
	},
	screen: { alignItems: "center", justifyContent: "center" },
});
export default StartupScreen;
