import {
	Text,
	View,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import Logoimg from "../assets/gym.png";
import img from "../assets/pedro-araujo-PDjYClxmnyk-unsplash.jpg";
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";
import values from "../config/values";

const GetStartedScreen = ({ navigation }) => {
	return (
		<Screen style={styles.screen}>
			<View
				style={{
					flex: 0.65,
					backgroundColor: "pink",
					width: 400,
					height: "100%",
					elevation: 10,
				}}
			>
				<Image source={img} style={styles.img} />
				<View
					style={{
						// backgroundColor: colors.asliBlack,
						borderRadius: 100,
						position: "absolute",
						// width: 130,
						// height: 130,
						alignSelf: "center",
						top: "40%",
					}}
				>
					<View
						style={{
							backgroundColor: colors.black,
							// marginBottom: 10,
							borderRadius: 200,
							// position: "absolute",
							width: 70,
							height: 70,
							alignSelf: "center",
							// top: "40%",
						}}
					>
						<Image
							style={{
								// backgroundColor: "black",
								// marginBottom: 10,
								borderRadius: 200,
								// position: "absolute",
								width: 50,
								height: 50,
								alignSelf: "center",
								top: "20%",
							}}
							source={Logoimg}
						/>
					</View>
					<TextHeader
						style={{
							// top: "100%",
							color: colors.secondary,
							height: 50,
						}}
					>
						Fitnify
					</TextHeader>
				</View>
			</View>
			<View
				style={{
					flex: 0.35,
					width: "100%",
					// backgroundColor: colors.grey,
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<TextHeader>Lorem Ipsum</TextHeader>
				<View
					style={{ alignItems: "center", marginBottom: values.bottomMargin }}
				>
					<MyButton
						color={colors.asliBlack}
						title="REGISTER NOW"
						style={{ width: 170 }}
						textColor={colors.secondary}
						// style={{ position: "absolute", bottom: values.bottomMargin }}
						onPress={() => {
							navigation.navigate("SignUpScreen");
						}}
					/>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("LoginScreen");
						}}
					>
						<MiniText style={{ height: 18 }}>Already have an account?</MiniText>
					</TouchableOpacity>
				</View>
			</View>
		</Screen>
	);
};
const styles = StyleSheet.create({
	img: {
		width: "100%",
		height: "100%",

		//borderWidth: 5,
		//borderColor: colors.black,
	},
	screen: {
		flex: 1,
		alignItems: "center",
		paddingTop: 0,
		// backgroundColor: colors.grey,
	},
});
export default GetStartedScreen;
