import * as React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import Messages from "../screens/Messages";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <Stack.Navigator
            screenOptions={({ navigation }) => ({
              headerStyle: {
                backgroundColor: theme.background,
              },
              headerTitleStyle: {
                textTransform: "uppercase",
                fontSize: Layout.isSmallDevice ? 12 : 16,
              },
              headerBackTitleVisible: false,
              headerLeftContainerStyle: { marginLeft: 40 },
              headerRightContainerStyle: { marginRight: 40 },
              headerTintColor: theme.primary,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.pop();
                  }}
                >
                  <Ionicons
                    name={
                      Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"
                    }
                    style={{
                      fontSize: Layout.isSmallDevice ? 16 : 24,
                      color: theme.primary,
                    }}
                  ></Ionicons>
                </TouchableOpacity>
              ),
            })}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
            <Stack.Screen
              name="Messages"
              component={Messages}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push("Profile");
                    }}
                  >
                    <FontAwesome5
                      name="user-alt"
                      style={{
                        fontSize: Layout.isSmallDevice ? 16 : 24,
                        color: theme.primary,
                      }}
                    ></FontAwesome5>
                  </TouchableOpacity>
                ),
              })}
            ></Stack.Screen>
          </Stack.Navigator>
        );
      }}
    </ThemeContext.Consumer>
  );
}
