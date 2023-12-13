import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { createProfile } from "../firebase";
import colors from "../config/colors";
import values from "../config/values";
// - - - - - - - - -  Custom Components  - - - - - - - - - - //
import TopBackBtn from "../Components/TopBackBtn";
import MyButton from "../Components/MyButton";
import MyText from "../Components/MyText";
import Screen from "../Components/Screen";

// ==============================================================================
// An essential screen for Privacy Policy //
// Dummy text is used for now, can be edited with real policies and licences
// It also contains an Accept button to move forward to next screen, After
// accepting it creates the user data and stores in Firebase.
// ==============================================================================

const PrivacyPolicyScreen = ({ navigation }) => {
	// Handles the acceptance of the user data and stores in Firebase.
	// and navigates to the Home Screen of  the app
	const handleConfirm = () => {
		createProfile();
		navigation.navigate("Tab");
	};
	return (
		<Screen>
			{/* Header Section */}
			<View style={styles.header}>
				<TopBackBtn
					size={values.smallbtn}
					onPress={() => navigation.goBack()}
				/>
				<MyText style={styles.headertxt}>Privacy Policy</MyText>
			</View>
			{/* Scrollable Privacy Policy */}
			<ScrollView
				style={{
					flex: 0.9,
					// backgroundColor: "tomato",
					padding: 10,
					paddingHorizontal: 25,
				}}
			>
				<Text style={{ fontWeight: "900", fontSize: 14, marginBottom: 10 }}>
					The standard Lorem Ipsum passage, used since the 1500s
				</Text>
				{/* Lorem Ipsum dummy text */}
				<Text>
					Lorem ipsum dolor sit amet, consectetura adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum." Section
					1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
					"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
					dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
					quia non numquam eius modi tempora incidunt ut labore et dolore magnam
					aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
					ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
					ea voluptate velit esse quam nihil molestiae consequatur, vel illum
					qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et
					accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
					voluptatum deleniti atque corrupti quos dolores et quas molestias
					excepturi sint occaecati cupiditate non provident, similique sunt in
					culpa qui officia deserunt mollitia animi, id est laborum et dolorum
					fuga.
				</Text>
				<Text style={{ fontWeight: "900", fontSize: 14, marginVertical: 10 }}>
					Lorem Ipsum dolor:
				</Text>
				<Text>
					Et harum quidem rerum facilis est et expedita distinctio. Nam libero
					tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
					minus id quod maxime placeat facere possimus, omnis voluptas assumenda
					est, omnis dolor repellendus. Temporibus autem quibusdam et aut
					officiis debitis aut rerum necessitatibus saepe eveniet ut et
					voluptates repudiandae sint et molestiae non recusandae. Itaque earum
					rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
					maiores alias consequatur aut perferendis doloribus asperiores
					repellat."
				</Text>
				{/* Footer Acceptance Button */}
				<View style={styles.btnContainer}>
					<MyButton
						color={colors.asliBlack}
						textColor={colors.pureWhite}
						title="ACCEPT"
						onPress={handleConfirm}
					/>
				</View>
			</ScrollView>
		</Screen>
	);
};

const styles = StyleSheet.create({
	btnContainer: { alignItems: "flex-end", marginBottom: 10 },
	header: {
		//backgroundColor: colors.red,
		flex: 0.1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
	},
	headertxt: {
		alignSelf: "center",
		height: 28,
	},
});
export default PrivacyPolicyScreen;
