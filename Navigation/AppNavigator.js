import React from "react";
import { Entypo, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import values from "../config/values";
// - - - - - - - - - -  SCREENS  - - - - - - - - - - //
import DailyChallengesScreen from "../Screens/DailyChallengesScreen";
import ExercisesListScreen from "../Screens/ExercisesListScreen";
import ExerciseScreen from "../Screens/ExerciseScreen";
import ExerciseTypeScreen from "../Screens/ExerciseTypeScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import GetStartedScreen from "../Screens/GetStartedScreen";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import PrivacyPolicyScreen from "../Screens/PrivacyPolicyScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import SelectGenderScreen from "../Screens/SelectGenderScreen";
import SelectWeightScreen from "../Screens/SelectWeightScreen";
import SelectAgeScreen from "../Screens/SelectAgeScreen";
import SelectHeightScreen from "../Screens/SelectHeightScreen";
import StartupScreen from "../Screens/StartupScreen";
import UserProfileScreen from "../Screens/UserProfileScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import WorkoutScreen from "../Screens/WorkoutScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigator = () => (
	<Tab.Navigator
		screenOptions={{
			headerShown: false,
			tabBarStyle: {
				position: "absolute",
				borderRadius: values.borderRadius,
				margin: 5,
				marginHorizontal: 15,
				height: values.TabHeight,
				backgroundColor: colors.asliBlack,
			},
			tabBarActiveTintColor: colors.secondary,
			tabBarShowLabel: false,
		}}
	>
		<Tab.Screen
			name="Home"
			component={HomeScreen}
			options={{
				tabBarIcon: ({ color }) => (
					<Entypo name="home" size={30} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="WorkoutScreen"
			component={WorkoutScreen}
			options={{
				tabBarIcon: ({ color }) => (
					<MaterialIcons name="fitness-center" size={30} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="DailyChallengesScreen"
			component={DailyChallengesScreen}
			options={{
				tabBarIcon: ({ color }) => (
					<Ionicons name="timer-sharp" size={30} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Profile"
			component={UserProfileScreen}
			options={{
				tabBarIcon: ({ color }) => (
					<Entypo name="user" size={30} color={color} />
				),
			}}
		/>
	</Tab.Navigator>
);
const AppNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="StartupScreen" component={StartupScreen} />
		<Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
		<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
		<Stack.Screen name="LoginScreen" component={LoginScreen} />
		<Stack.Screen name="SelectGenderScreen" component={SelectGenderScreen} />
		<Stack.Screen name="SelectWeightScreen" component={SelectWeightScreen} />
		<Stack.Screen name="SelectAgeScreen" component={SelectAgeScreen} />
		<Stack.Screen name="SelectHeightScreen" component={SelectHeightScreen} />
		<Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
		<Stack.Screen name="Tab" component={TabNavigator} />
		<Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
		<Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
		<Stack.Screen name="ExerciseTypeScreen" component={ExerciseTypeScreen} />
		<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
		<Stack.Screen name="ExercisesListScreen" component={ExercisesListScreen} />
	</Stack.Navigator>
);
export default AppNavigator;
