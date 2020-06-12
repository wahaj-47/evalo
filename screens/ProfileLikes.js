import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import StyledButton from "../components/StyledButton";
import withFooter from "../HOC/withFooter";
import User from "../components/User";

function ProfileLikes(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center" }}
            // scrollEnabled={false}
          >
            <View style={{ marginTop: 8 }}>
              <StyledButton
                disabled
                style={styles.softWrapper}
                buttonStyle={styles.buttonStyle}
                renderButton={<User></User>}
              ></StyledButton>
            </View>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withFooter(ProfileLikes);

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: Layout.isSmallDevice ? 12 : 16,
    marginLeft: Layout.isSmallDevice ? 0 : 16,
  },
  buttonStyle: {
    borderRadius: 10,
    width: Layout.window.width - (Layout.isSmallDevice ? 60 : 80),
    justifyContent: "flex-start",
  },
  softWrapper: {
    borderRadius: 10,
    marginVertical: 8,
    width: Layout.window.width - (Layout.isSmallDevice ? 40 : 60),
    height: Layout.isSmallDevice ? 80 : 100,
  },
});
