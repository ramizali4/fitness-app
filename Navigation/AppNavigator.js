import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import { Entypo, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import values from "../config/values";
import colors from "../config/colors";
import ExerciseScreen from "../Screens/ExerciseScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExerciseTypeScreen from "../Screens/ExerciseTypeScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import StartupScreen from "../Screens/StartupScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import ExercisesListScreen from "../Screens/ExercisesListScreen";

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
				height: 60,
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
			name="ExerciseScreen"
			component={ExerciseScreen}
			options={{
				tabBarIcon: ({ color }) => (
					<MaterialIcons name="fitness-center" size={30} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="DailyChallenges"
			component={ExerciseScreen}
			options={{
				tabBarIcon: ({ color }) => (
					<Ionicons name="timer-sharp" size={30} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Profile"
			component={ExerciseScreen}
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
		<Stack.Screen name="Tab" component={TabNavigator} />
		<Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
		<Stack.Screen name="ExerciseTypeScreen" component={ExerciseTypeScreen} />
		<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
		<Stack.Screen name="StartupScreen" component={StartupScreen} />
		<Stack.Screen name="LoginScreen" component={LoginScreen} />
		<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
		<Stack.Screen name="ExercisesListScreen" component={ExercisesListScreen} />
	</Stack.Navigator>
);
export default AppNavigator;
