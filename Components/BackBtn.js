import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const BackBtn = ({ size, onPress }) => {
	return (
		<TouchableOpacity
			style={{
				width: size,
				height: size,
				borderRadius: 100,
				backgroundColor: colors.asliBlack,
				alignItems: "center",
				justifyContent: "center",
			}}
			onPress={onPress}
		>
			<Ionicons
				name="ios-chevron-back"
				size={size / 1.5}
				color={colors.pureWhite}
			/>
		</TouchableOpacity>
	);
};

export default BackBtn;
