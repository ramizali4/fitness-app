import {
	View,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Text,
} from "react-native";
import React, { useState } from "react";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import colors from "../config/colors";
import TextHeader from "../Components/TextHeader";
import MiniText from "../Components/MiniText";

// ============================================================
// DailyChallengesScreen:
// - Displays a list of daily challenges.
// - Users can interact with and complete these challenges.
// ============================================================

const DailyChallengesScreen = ({ route, navigation }) => {
	const [data, setData] = useState([
		{
			name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
		},
		{
			name: "Lorem ipsum dolor sit amet, consectetur.",
		},
		{
			name: "Do 5 push-ups in the early in the morning",
		},
	]);

	const [IncompleteData, setIncompleteData] = useState([
		{
			name: "Take a 15-minute brisk walk around your neighborhood.",
		},
		{
			name: "Write down three things you're grateful for today.",
		},
		{
			name: "Try a new type of fruit or vegetable that you've never eaten before.",
		},
		{
			name: "Perform 10 minutes of stretching exercises before bedtime.",
		},
		{
			name: "Challenge yourself to drink at least 8 glasses of water throughout the day.",
		},
	]);

	// handles on press events for challenges
	const handlePress = (item) => {
		// Remove the item from incompleteData
		const updatedIncompleteData = IncompleteData.filter(
			(challenge) => challenge !== item,
		);

		// Add the item to data
		const updatedData = [...data, item];

		// Update state
		setIncompleteData(updatedIncompleteData);
		setData(updatedData);
	};
	return (
		<View style={styles.screen}>
			{/* Header */}
			<View style={styles.header}>
				<TextHeader style={styles.headertxt1}>DAILY CHALLENGES</TextHeader>
			</View>
			<View style={styles.container}>
				{/* Today Incompleted Tasks */}
				<TextHeader style={{ marginBottom: 10 }}>TODAY</TextHeader>
				<FlatList
					data={IncompleteData}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={{ flexDirection: "row" }}
							onPress={handlePress}
						>
							<Text>{item.count}</Text>
							<MiniText style={{ height: "auto", marginVertical: 2 }}>
								{item.name}
							</MiniText>
						</TouchableOpacity>
					)}
				/>
				{/* Completed Tasks */}
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
		marginHorizontal: 15,
		marginTop: 30,
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
