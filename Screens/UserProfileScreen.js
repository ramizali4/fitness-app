import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { userState } from "../firebase";
import colors from "../config/colors";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import Screen from "../Components/Screen";
import MyButton from "../Components/MyButton";
import TextHeader from "../Components/TextHeader";
import MyText from "../Components/MyText";
import MiniText from "../Components/MiniText";

// ==============================================================
// UserProfileScreen:
// - Shows the user's profile information.
// - Includes details such as username, profile picture, and achievements.
// ==============================================================
const UserProfileScreen = ({ route, navigation }) => {
	return (
		<Screen>
			{/* Header */}
			<View style={styles.header}>
				<TextHeader style={styles.headertxt1}>Your </TextHeader>
				<TextHeader style={styles.headertxt2}>Profile</TextHeader>
			</View>
			<View style={styles.container}>
				<MiniText style={styles.text}>{userState.email}</MiniText>
				<MiniText style={styles.text}>BMI:</MiniText>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<View
						style={{
							width: "44%",
							height: 10,
							backgroundColor: "black",
							alignSelf: "center",
							marginVertical: 10,
						}}
					></View>
					<MyText>25</MyText>
					<View
						style={{
							width: "44%",
							height: 10,
							backgroundColor: "black",
							alignSelf: "center",
							marginVertical: 10,
						}}
					></View>
				</View>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("EditProfileScreen");
					}}
				>
					<MiniText style={styles.text}>Edit Profile</MiniText>
				</TouchableOpacity>
				<TouchableOpacity>
					<MiniText style={styles.text}>Privacy Policy.</MiniText>
				</TouchableOpacity>
			</View>
			<View style={styles.bottomContainer}>
				<MyButton
					title="Sign Out"
					textColor={colors.pureWhite}
					color={colors.asliBlack}
					onPress={() => {
						navigation.navigate("LoginScreen");
					}}
				></MyButton>
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	bottomContainer: {
		flex: 0.2,
		// 	backgroundColor: "lightblue",
		marginHorizontal: 15,
	},
	container: {
		flex: 0.7,
		paddingHorizontal: 10,
		//	backgroundColor: colors.main,
		//backgroundColor: "lightgreen",
		marginHorizontal: 15,
		marginTop: 30,
	},
	header: {
		flex: 0.1,
		flexDirection: "row",
		//	alignItems: "center",
		paddingHorizontal: 10,
		marginBottom: 20,
		//	justifyContent: "center",
	},
	headertxt1: {
		alignSelf: "center",
		height: 60,
		padding: 5,
		borderBottomWidth: 1,
		fontFamily: "Integralcf_heavy",
	},
	headertxt2: {
		alignSelf: "center",
		fontFamily: "Integralcf_regular",
		height: 60,
		borderBottomWidth: 1,
		padding: 5,
	},
	text: { marginVertical: 8, height: 20, fontFamily: "Integralcf_regular" },
});
export default UserProfileScreen;
