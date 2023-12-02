import { View, Text } from "react-native";
import React from "react";
import values from "../config/values";
import colors from "../config/colors";

const SafeView = () => {
	return (
		<View
			style={{
				height: values.TabHeight + 5,
				width: 566,
				backgroundColor: colors.pureWhite,
			}}
		></View>
	);
};

export default SafeView;
