import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SettingsStack from "./SettingsStack";

import { ThemeContext } from "../providers/ThemeProvider";
import MessagesStack from "./MessagesStack";

import HeaderConfig from "../constants/HeaderConfig";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen
              name="Settings"
              component={SettingsStack}
              //
            ></Stack.Screen>
            <Stack.Screen
              name="Messages"
              component={MessagesStack}
            ></Stack.Screen>
          </Stack.Navigator>
        );
      }}
    </ThemeContext.Consumer>
  );
}
