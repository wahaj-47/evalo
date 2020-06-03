import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/OnBoarding";
import SignUp from "../screens/SignUp";
import ConnectPhone from "../screens/ConnectPhone";
import HomeStack from "./HomeStack";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      <Stack.Screen name="ConnectPhone" component={ConnectPhone}></Stack.Screen>
      <Stack.Screen name="Home" component={HomeStack}></Stack.Screen>
    </Stack.Navigator>
  );
}
