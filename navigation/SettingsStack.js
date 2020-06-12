import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileViews from "../screens/ProfileViews";
import ProfileLikes from "../screens/ProfileLikes";
import Settings from "../screens/Settings";
import { ThemeContext } from "../providers/ThemeProvider";

import HeaderConfig from "../constants/HeaderConfig";
import BuyCoins from "../screens/BuyCoins";
import BuyPremium from "../screens/BuyPremium";
import AppSettings from "../screens/AppSettings";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Stack.Navigator
          screenOptions={({ navigation }) => HeaderConfig(theme, navigation)}
        >
          <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
          <Stack.Screen
            name="ProfileViews"
            component={ProfileViews}
            options={{ title: "Who viewed profile ?" }}
          ></Stack.Screen>
          <Stack.Screen
            name="ProfileLikes"
            component={ProfileLikes}
            options={{ title: "Who liked profile ?" }}
          ></Stack.Screen>
          <Stack.Screen
            name="BuyCoins"
            component={BuyCoins}
            options={{ title: "Buy Coins" }}
          ></Stack.Screen>
          <Stack.Screen
            name="BuyPremium"
            component={BuyPremium}
            options={{ title: "Buy Premium" }}
          ></Stack.Screen>
          <Stack.Screen
            name="AppSettings"
            component={AppSettings}
            options={{ title: "App Settings" }}
          ></Stack.Screen>
        </Stack.Navigator>
      )}
    </ThemeContext.Consumer>
  );
}
