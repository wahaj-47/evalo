import * as React from "react";
import { View, Image, Text } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import withBackground from "../HOC/withBackground";
import StyledButton from "../components/StyledButton";

function Onboarding(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center" }}
            scrollEnabled={false}
          >
            <Image
              source={require("../assets/images/logo.png")}
              style={{
                width: Layout.window.width,
                height: Layout.window.width * 1.8 * 0.2,
                marginTop: 40,
              }}
            ></Image>
            <Text
              style={{
                fontSize: Layout.isSmallDevice ? 20 : 24,
                color: theme.secondary,
                fontWeight: "bold",
                width: Layout.window.width * 0.7,
                textAlign: "center",
              }}
            >
              Start talking anonymously.
            </Text>
            <Text
              style={{
                fontSize: Layout.isSmallDevice ? 16 : 20,
                color: theme.tertiary,
                fontWeight: "bold",
                width: Layout.window.width * 0.6,
                textAlign: "center",
                marginTop: 24,
              }}
            >
              30 second later camera will be opened!
            </Text>

            <StyledButton
              title="Get Started"
              color={theme.primary}
              onPress={() => {
                props.navigation.push("SignUp");
              }}
              style={{ marginTop: Layout.isSmallDevice ? 40 : 64 }}
              fontStyle={{
                fontSize: Layout.isSmallDevice ? 16 : 24,
              }}
            ></StyledButton>

            <View style={{ marginTop: 64, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: Layout.isSmallDevice ? 12 : 16,
                  color: theme.secondary,
                }}
              >
                By starting to use evalo you agree to the
              </Text>
              <Text
                style={{
                  fontSize: Layout.isSmallDevice ? 12 : 16,
                  color: theme.primary,
                }}
              >
                Terms of Use <Text style={{ color: theme.secondary }}>&</Text>{" "}
                Privacy Policy
              </Text>
            </View>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withBackground(Onboarding);
