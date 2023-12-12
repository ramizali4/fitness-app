import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import TopBackBtn from "../Components/TopBackBtn";
import values from "../config/values";
import colors from "../config/colors";
import MyText from "../Components/MyText";
import MyTextInput from "../Components/MyTextInput";
import MyButton from "../Components/MyButton";

const EditProfileScreen = () => {
	return (
		<Screen>
			<View style={styles.header}>
				<TopBackBtn
					size={values.smallbtn}
					onPress={() => navigation.goBack()}
				/>
				<MyText>EDIT PROFILE</MyText>
			</View>
			<View style={styles.container}>
				{/* <View> */}
				<MyTextInput nameplate="Email" value="rgrg" />
				<MyTextInput nameplate="Password" secureTextEntry value="rgrg" />
				<MyTextInput nameplate="Weight" value="45" />
				<MyTextInput nameplate="Height" value="20" />
				{/* </View> */}
			</View>
			<MyButton
				style={{
					position: "absolute",
					bottom: values.bottomMargin,
					alignSelf: "center",
				}}
				title="SAVE"
				color={colors.asliBlack}
				textColor={colors.secondary}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	header: {
		//backgroundColor: colors.black,
		flex: 0.1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		//	paddingHorizontal: 10,
		marginHorizontal: 10,
	},
	container: {
		// backgroundColor: "red",
		marginHorizontal: 10,
		justifyContent: "center",
		alignSelf: "center",
		flex: 0.8,
	},
});
export default EditProfileScreen;
