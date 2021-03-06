import "react-native-gesture-handler";
import * as React from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigation/AuthStack";

import { ThemeProvider, ThemeContext } from "./providers/ThemeProvider";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <ThemeContext.Consumer>
          {({ theme }) => {
            console.log;
            return (
              <StatusBar
                barStyle={"dark-content"}
                backgroundColor={theme.background}
              ></StatusBar>
            );
          }}
        </ThemeContext.Consumer>

        <AuthStack></AuthStack>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3edf7",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
