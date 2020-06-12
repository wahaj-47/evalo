import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import withBackground from "../HOC/withBackground";
import StyledButton from "../components/StyledButton";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function Settings(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        console.log(theme);
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              color={theme["gradientA"]}
              title="Buy coins"
              background={theme.background}
              gradientStyle={{
                borderRadius: 8,
              }}
              onPress={() => {
                props.navigation.push("BuyCoins");
              }}
            >
              <FontAwesome5
                name="coins"
                style={{
                  marginLeft: 10,
                  fontSize: Layout.isSmallDevice ? 14 : 18,
                }}
                color={theme.yellow}
              ></FontAwesome5>
            </StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              color={theme["gradientB"]}
              title="Buy Premium"
              background={theme.background}
              gradientStyle={{
                borderRadius: 8,
              }}
              onPress={() => {
                props.navigation.push("BuyPremium");
              }}
            >
              <FontAwesome5
                name="crown"
                style={{
                  marginLeft: 10,
                  fontSize: Layout.isSmallDevice ? 14 : 18,
                }}
                color={theme.yellow}
              ></FontAwesome5>
            </StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="App settings"
              color={theme.primary}
              onPress={() => {
                props.navigation.push("AppSettings");
              }}
            ></StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Who liked profile ?"
              color={theme.primary}
              renderIconRight={
                <FontAwesome5
                  name="crown"
                  style={{
                    marginLeft: 10,
                    fontSize: Layout.isSmallDevice ? 14 : 18,
                  }}
                  color={theme.secondary}
                ></FontAwesome5>
              }
              onPress={() => {
                props.navigation.push("ProfileLikes");
              }}
            ></StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Who viewed profile ?"
              color={theme.primary}
              renderIconRight={
                <FontAwesome5
                  name="crown"
                  style={{
                    marginLeft: 10,
                    fontSize: Layout.isSmallDevice ? 14 : 18,
                  }}
                  color={theme.secondary}
                ></FontAwesome5>
              }
              onPress={() => {
                props.navigation.push("ProfileViews");
              }}
            ></StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Edit Profile"
              color={theme.primary}
              onPress={() => {
                props.navigation.navigate("Messages", {
                  screen: "EditProfile",
                });
              }}
            ></StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Log out"
              color={theme.warning}
              onPress={() => {
                props.navigation.navigate("Onboarding");
              }}
            ></StyledButton>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withBackground(Settings);

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: Layout.isSmallDevice ? 14 : 18,
    marginLeft: Layout.isSmallDevice ? 0 : 16,
  },
  buttonStyle: {
    borderRadius: 10,
    justifyContent: "flex-start",
    width: Layout.window.width - (Layout.isSmallDevice ? 60 : 80),
  },
  softWrapper: {
    borderRadius: 10,
    marginVertical: 8,
    width: Layout.window.width - (Layout.isSmallDevice ? 40 : 60),
  },
});
