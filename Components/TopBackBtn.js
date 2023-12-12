import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import values from "../config/values";

const TopBackBtn = ({ size, onPress }) => {
	return (
		<TouchableOpacity
			style={{
				width: size,
				height: size,
				borderRadius: 100,
				backgroundColor: colors.asliBlack,
				alignItems: "center",
				justifyContent: "center",
				position: "absolute",
				left: values.btnMargin,
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

export default TopBackBtn;
