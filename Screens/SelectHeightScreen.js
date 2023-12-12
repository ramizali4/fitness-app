import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import {} from "react-native-wheel-scrollview-picker";
import { setHeight } from "../firebase";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import colors from "../config/colors";
import MyButton from "../Components/MyButton";
import Screen from "../Components/Screen";
import BackBtn from "../Components/BackBtn";

// ==================================================================================
// The SelectHeightScreen component is part of a React Native fitness application and
// is responsible for collecting the user's height information. Provides a unique scrollable
// options for selecting number ranging from 0-250.
// ==================================================================================

const dataSource = Array.from({ length: 125 }, (value, index) => index + 1);
const SelectHeightScreen = ({ navigation }) => {
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
					What is your height?
				</TextHeader>
				<MyText
					style={{ fontSize: 12, height: 40, textAlign: "center" }}
					numberOfLines={2}
				>
					This help us create your{"\n"} personlized plan.
				</MyText>
			</View>
			{/* Main Container containing the scrollable picker */}
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
			{/* Footer Section having Next & Back Btn */}
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
						setHeight(index);
						navigation.navigate("SelectAgeScreen");
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
export default SelectHeightScreen;
