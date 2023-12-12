import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ErrorMessage = ({ message }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<MaterialIcons name="error-outline" size={22} color="red" />
			<Text style={{ color: "red", marginLeft: 5 }}>{message}</Text>
			{/* //<Text style={{ color: "red" }}>{message}</Text>; */}
		</View>
	);
};

export default ErrorMessage;
