import { View, StyleSheet } from "react-native";
import React from "react";
import { userState } from "../firebase";
import values from "../config/values";
import colors from "../config/colors";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import MyTextInput from "../Components/MyTextInput";
import TopBackBtn from "../Components/TopBackBtn";
import MyButton from "../Components/MyButton";
import Screen from "../Components/Screen";
import MyText from "../Components/MyText";

// ==============================================================
// EditProfileScreen:
// - Allows users to edit and update their profile information.
// - Provides options to modify personal details.
// ==============================================================

const EditProfileScreen = () => {
	return (
		<Screen>
			{/* HEADER */}
			<View style={styles.header}>
				<TopBackBtn
					size={values.smallbtn}
					onPress={() => navigation.goBack()}
				/>
				<MyText>EDIT PROFILE</MyText>
			</View>
			<View style={styles.container}>
				{/* <View> Input Fields that can be modified*/}
				<MyTextInput nameplate="Email" value={userState.email} />
				<MyTextInput
					nameplate="Password"
					secureTextEntry
					value={userState.password}
				/>
				<MyTextInput nameplate="Weight" value={userState.weight} />
				<MyTextInput nameplate="Height" value={userState.height} />
			</View>
			{/* FOOTER with save button*/}
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
