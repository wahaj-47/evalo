import * as React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import withBackground from "../HOC/withBackground";
import StyledButton from "../components/StyledButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import withFooter from "../HOC/withFooter";

function AppSettings(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        console.log(theme);
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center", paddingTop: 24 }}
          >
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Notifications"
              color={theme.primary}
              renderIconRight={
                <Ionicons
                  name={
                    Platform.OS === "android"
                      ? "md-arrow-forward"
                      : "ios-arrow-forward"
                  }
                  style={{
                    marginLeft: 10,
                    fontSize: Layout.isSmallDevice ? 14 : 18,
                  }}
                  color={theme.secondary}
                ></Ionicons>
              }
            ></StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Help and Feedback"
              color={theme.primary}
              renderIconRight={
                <Ionicons
                  name={
                    Platform.OS === "android"
                      ? "md-arrow-forward"
                      : "ios-arrow-forward"
                  }
                  style={{
                    marginLeft: 10,
                    fontSize: Layout.isSmallDevice ? 14 : 18,
                  }}
                  color={theme.secondary}
                ></Ionicons>
              }
            ></StyledButton>
            <StyledButton
              disabled
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Version"
              color={theme.primary}
              renderIconRight={
                <Text style={[styles.fontStyle, { color: theme.primary }]}>
                  1.0
                </Text>
              }
            ></StyledButton>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withFooter(AppSettings);

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
