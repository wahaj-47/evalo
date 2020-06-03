import * as React from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import withBackground from "../HOC/withBackground";
import StyledButton from "../components/StyledButton";

function Messages(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center" }}
            scrollEnabled={false}
          >
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="App settings"
              color={theme.primary}
            ></StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Who liked profile ?"
              color={theme.primary}
            ></StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Who viewed profile ?"
              color={theme.primary}
            ></StyledButton>
            <StyledButton
              style={styles.softWrapper}
              buttonStyle={styles.buttonStyle}
              fontStyle={styles.fontStyle}
              title="Edit Profile"
              color={theme.primary}
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

export default withBackground(Messages);

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: Layout.isSmallDevice ? 12 : 16,
    marginLeft: Layout.isSmallDevice ? 0 : 16,
  },
  buttonStyle: {
    borderRadius: 10,
    justifyContent: "flex-start",
  },
  softWrapper: {
    borderRadius: 10,
    marginVertical: 8,
    width: Layout.window.width - (Layout.isSmallDevice ? 40 : 60),
  },
});
