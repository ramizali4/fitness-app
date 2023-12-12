import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { setGender } from "../firebase";
import colors from "../config/colors";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import ErrorMessage from "../Components/ErrorMessage";
import TextHeader from "../Components/TextHeader";
import MyButton from "../Components/MyButton";
import Screen from "../Components/Screen";
import MyText from "../Components/MyText";

// ==================================================================================
// The SelectGenderScreen component is part of a React Native fitness application and
// is responsible for collecting the user's gender information. Provides two clicable
// options for selecting gender (male or female).
// ==================================================================================

const SelectGenderScreen = ({ navigation }) => {
	const [selectedGender, setSelectedGender] = useState(null);
	const [errorMessage, SetErrorMessage] = useState("");

	const handleGenderSelection = (gender) => {
		setSelectedGender(gender);
	};
	const handleConfirm = () => {
		if (selectedGender === null) {
			SetErrorMessage("Kindly Select A gender.");
		} else {
			if (selectedGender === "male") {
				setGender(true);
			} else {
				setGender(false);
			}
			navigation.navigate("SelectWeightScreen");
		}
	};
	return (
		<Screen>
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
					Tell us About Yourself
				</TextHeader>
				<MyText
					style={{ fontSize: 12, height: 40, textAlign: "center" }}
					numberOfLines={2}
				>
					To give you a better experience we need to knwo about your gender
				</MyText>
			</View>
			{/* Main Container containing the two clickable option & errorMessage*/}
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					flex: 0.65,
				}}
			>
				<TouchableOpacity
					style={[
						styles.clickable,
						selectedGender === "male" && styles.selectedOption,
					]}
					onPress={() => handleGenderSelection("female")}
				>
					<Image
						style={styles.clickableImg}
						source={require("../assets/mars.png")}
					/>
					<MyText style={styles.clickableTxt}>MALE</MyText>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.clickable,
						selectedGender === "female" && styles.selectedOption,
					]}
					onPress={() => handleGenderSelection("male")}
					// onPress={setGender(false)}
				>
					<Image
						style={styles.clickableImg}
						source={require("../assets/femenine.png")}
					/>
					<MyText style={styles.clickableTxt}>FEMALE</MyText>
				</TouchableOpacity>
				{errorMessage && <ErrorMessage message={errorMessage} />}
			</View>
			{/* Footer Section => Next Button */}
			<View
				style={{
					flex: 0.15,
					justifyContent: "center",
					alignItems: "flex-end",
					paddingHorizontal: 20,
				}}
			>
				<MyButton
					title="NEXT"
					color={colors.asliBlack}
					textColor={colors.pureWhite}
					onPress={handleConfirm}
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
	selectedOption: {
		opacity: 0.8, // Adjust the opacity for the selected option
	},
});
export default SelectGenderScreen;
