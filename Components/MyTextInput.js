import React from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Platform,
	Switch,
	TouchableWithoutFeedback,
} from "react-native";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Text } from "react-native";

function MyTextInput({
	placeholder,
	iconName,
	iconColor,
	width = "80%",
	nameplate,
	...otherProps
}) {
	return (
		<TouchableWithoutFeedback style={{}}>
			<View style={[styles.container, { width }]}>
				{iconName && (
					<AntDesign
						name={iconName}
						size={20}
						color={colors.moderateBlack}
						style={styles.icon}
					/>
				)}
				{nameplate && <Text style={styles.nameplate}>{nameplate}</Text>}
				<TextInput
					placeholder={placeholder}
					placeholderTextColor={colors.moderateBlack}
					scrollEnabled
					style={{
						flex: 1,
						textAlign: "left",
						textAlignVertical: "center",
						fontSize: 15,
						color: colors.darkdarkBlack,
						// alignItems: "flex-start",
						// justifyContent: "flex-end",
					}}
					{...otherProps}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: colors.ajeeb,
		borderBottomWidth: 2,
		borderColor: colors.darkBlack,
		// borderRadius: 12,
		padding: 8,
		paddingHorizontal: 10,
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 20,
		alignItems: "center",
		// backgroundColor: "tomato",
		// height: 350
	},
	icon: {
		marginRight: 10,
		// backgroundColor: "red",
	},
	nameplate: {
		fontSize: 10,
		// backgroundColor: "cyan",
		position: "absolute",
		left: 8,
		top: -5,
		color: colors.moderateBlack,
	},
});
export default MyTextInput;
