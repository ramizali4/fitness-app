import {
	animationProgress,
	View,
	StyleSheet,
	Button,
	Animated,
	Easing,
	Text,
	TouchableOpacity,
	FlatList,
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
import TopBackBtn from "../Components/TopBackBtn";
import MyTextInput from "../Components/MyTextInput";

const DailyChallengesScreen = ({ route, navigation }) => {
	const data = [
		{
			name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
		},
		{
			name: "Lorem ipsum dolor sit amet, consectetur.",
		},
		{
			name: "Do 5 push-ups in the early in the morning",
		},
	];
	return (
		<View style={styles.screen}>
			{/* Header */}
			<View style={styles.header}>
				<TextHeader style={styles.headertxt1}>DAILY CHALLENGES</TextHeader>
			</View>
			<View style={styles.container}>
				<TextHeader style={{ marginBottom: 10 }}>TODAY</TextHeader>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<TouchableOpacity>
							<MiniText style={{ height: "auto", marginVertical: 2 }}>
								{item.name}
							</MiniText>
						</TouchableOpacity>
					)}
				/>
				<TextHeader style={{ marginVertical: 10 }}>COMPLETED</TextHeader>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<TouchableOpacity>
							<MiniText
								style={{
									height: "auto",
									marginVertical: 2,
									color: colors.moderateBlack,
									textDecorationLine: "line-through",
								}}
							>
								{item.name}
							</MiniText>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0.8,
		paddingHorizontal: 10,
		//backgroundColor: colors.main,
		//	backgroundColor: "lightgreen",
		marginHorizontal: 15,
		marginTop: 30,
		//	alignItems: "center",
		//justifyContent: "center",
	},
	header: {
		backgroundColor: colors.asliBlack,
		flex: 0.1,
		flexDirection: "row",
		//	alignItems: "center",
		paddingHorizontal: 5,
		//	justifyContent: "center",
		paddingTop: 25,
		paddingBottom: 5,
		width: "100%",
		justifyContent: "center",
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
		// position: "absolute",
		//	width: "100%",
		//  fontWeight:'inte'
		// textDecorationLine: "underline",
		// textDecorationColor: colors.asliBlack,
		// textDecorationStyle: "solid",
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

export default DailyChallengesScreen;
