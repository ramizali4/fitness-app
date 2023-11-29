import { Text, View, Image, StyleSheet, Button } from "react-native";
import React, { Component } from "react";
import img from "../assets/icon.png";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";
import values from "../config/values";

const StartupScreen = () => {
	return (
		<Screen style={styles.screen}>
			{/* <View style={{ backgroundColor: "pink", marginVertical: "25%" }}> */}
			<Image source={img} style={styles.img} />
			<TextHeader>APP NAME</TextHeader>
			<MiniText>Lorem Ipsum</MiniText>
			{/* </View> */}
			<MyButton
				color={colors.asliBlack}
				bordercolor="red"
				title="Get Started"
				textColor={colors.pureWhite}
				style={{ position: "absolute", bottom: values.bottomMargin }}
			/>
		</Screen>
	);
};

// export class StartupScreen extends Component {
// 	render() {
// 		return (
// 			<Screen style={styles.screen}>
// 				{/* <View style={{ backgroundColor: "pink", marginVertical: "25%" }}> */}
// 				<Image source={img} style={styles.img} />
// 				<TextHeader>APP NAME</TextHeader>
// 				<MiniText>Lorem Ipsum</MiniText>
// 				{/* </View> */}
// 				<MyButton
// 					color={colors.asliBlack}
// 					bordercolor="red"
// 					title="Get Started"
// 					textColor={colors.pureWhite}
// 					style={{ position: "absolute", bottom: values.bottomMargin }}
// 				/>
// 			</Screen>
// 		);
// 	}
// }
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
