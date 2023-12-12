import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../Components/Screen";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import colors from "../config/colors";
import MyButton from "../Components/MyButton";
import BackBtn from "../Components/BackBtn";
import { Picker } from "@react-native-picker/picker";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import {} from "react-native-wheel-scrollview-picker";
import { setAge, userState } from "../firebase";

// const dataSource = ["1", "2", "3", "4", "5", "6"];
const dataSource = Array.from({ length: 125 }, (value, index) => index + 1);
const SelectAgeScreen = ({ navigation }) => {
	const [index, setIndex] = React.useState(49);

	return (
		<Screen style={{ justifyContent: "space-between" }}>
			{/* Top Container */}
			<View
				style={{
					flex: 0.2,
					justifyContent: "center",
					alignItems: "center",
					paddingHorizontal: 5,
				}}
			>
				<TextHeader style={{ fontSize: 20, fontFamily: "Integralcf_bold" }}>
					How old are you?
				</TextHeader>
				<MyText
					style={{ fontSize: 12, height: 40, textAlign: "center" }}
					numberOfLines={2}
				>
					This help us create your{"\n"} personlized plan.
				</MyText>
			</View>
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					// backgroundColor: "red",
					flex: 0.5,
				}}
			>
				<ScrollPicker
					dataSource={dataSource}
					selectedIndex={index}
					wrapperHeight={380}
					itemTextStyle={{ fontSize: 22, color: colors.moderateBlack }}
					activeItemTextStyle={{
						fontSize: 36,
						color: colors.asliBlack,
						fontWeight: "600",
						alignItems: "center",
						justifyContent: "center",
						alignSelf: "center",
						width: 80,
						left: 15,
					}}
					onValueChange={(data, selectedIndex) => {
						// Update the selected index state or perform other actions
						setIndex(selectedIndex);
					}}
					wrapperBackground={colors.pureWhite}
					itemHeight={55}
					highlightColor="#d8d8d8"
					highlightBorderWidth={2}
				/>
			</View>
			<View
				style={{
					flex: 0.15,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					// backgroundColor: "green",
					paddingHorizontal: 20,
				}}
			>
				<BackBtn
					size={50}
					onPress={() => {
						navigation.navigate.goBack();
					}}
				/>
				<MyButton
					title="NEXT"
					color={colors.asliBlack}
					textColor={colors.pureWhite}
					onPress={() => {
						setAge(index);
						navigation.navigate("PrivacyPolicyScreen");
					}}
				/>
			</View>
		</Screen>
	);
};
const styles = StyleSheet.create({
	clickable: {
		width: 125,
		height: 125,
		elevation: 10,
		backgroundColor: colors.asliBlack,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
		overflow: "hidden",
		marginVertical: 25,
		padding: 10,
	},
	clickableImg: {
		width: "60%",
		height: "60%",
		// backgroundColor: "red",
	},
	clickableTxt: {
		color: colors.pureWhite,
		fontSize: 12,
		marginTop: 5,
		//position: "absolute",
		//top: "80%",
	},
});
export default SelectAgeScreen;
