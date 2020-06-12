import * as React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from "@react-navigation/stack";
import Messages from "../screens/Messages";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";

import Layout from "../constants/Layout";
import { ThemeContext } from "../providers/ThemeProvider";

import HeaderConfig from "../constants/HeaderConfig";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Stack.Navigator
          screenOptions={({ navigation }) => HeaderConfig(theme, navigation)}
        >
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
          <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.push("EditProfile");
                  }}
                >
                  <FontAwesome5
                    name="user-edit"
                    style={{
                      fontSize: Layout.isSmallDevice ? 16 : 24,
                      color: theme.primary,
                    }}
                  ></FontAwesome5>
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={({ navigation }) => ({
              title: "Edit Profile",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Onboarding");
                  }}
                >
                  <Ionicons
                    name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
                    style={{
                      fontSize: Layout.isSmallDevice ? 24 : 32,
                      color: theme.primary,
                    }}
                  ></Ionicons>
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>
        </Stack.Navigator>
      )}
    </ThemeContext.Consumer>
  );
}
