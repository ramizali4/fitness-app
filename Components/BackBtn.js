import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

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
				color={colors.secondary}
			/>
		</TouchableOpacity>
	);
};

export default BackBtn;
