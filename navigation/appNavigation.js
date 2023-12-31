import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from  "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FoodDetailsScreen from '../screens/FoodDetailsScreen'; // Import the FoodDetailsScreen component

const Stack = createNativeStackNavigator();

export default function appNavigation() {
  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
                <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
                <Stack.Screen name="FoodDetails" options={{ headerShown: false }} component={FoodDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}
