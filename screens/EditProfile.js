import * as React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import withBackground from "../HOC/withBackground";
import ImageTile from "../components/ImageTile";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import GradientIcon from "../components/GradientIcon";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import withFooter from "../HOC/withFooter";

function Profile(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <ImageTile style={{ marginTop: 24 }}></ImageTile>
            <View style={{ marginTop: 16 }}>
              <StyledInput
                style={styles.input}
                inputProps={{ placeholder: "Name" }}
              >
                <Text style={[styles.label, { color: theme.primary }]}>
                  Name
                </Text>
              </StyledInput>
              <StyledInput
                style={styles.input}
                inputProps={{ placeholder: "Username" }}
              >
                <Text style={[styles.label, { color: theme.primary }]}>
                  Username
                </Text>
              </StyledInput>
              <StyledInput
                style={styles.input}
                inputProps={{ placeholder: "Gender" }}
              >
                <Text style={[styles.label, { color: theme.primary }]}>
                  Gender
                </Text>
              </StyledInput>
              <StyledInput
                style={styles.input}
                inputProps={{ placeholder: "01/01/2020" }}
              >
                <Text style={[styles.label, { color: theme.primary }]}>
                  Birthday
                </Text>
              </StyledInput>
              <StyledInput
                style={styles.input}
                inputProps={{ placeholder: "Bio" }}
              >
                <Text style={[styles.label, { color: theme.primary }]}>
                  Bio
                </Text>
              </StyledInput>
              <StyledButton
                style={styles.softWrapper}
                buttonStyle={styles.buttonStyle}
                fontStyle={styles.fontStyle}
                title="Save"
                color={theme.primary}
                onPress={() => {
                  props.navigation.pop();
                }}
              ></StyledButton>
            </View>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withFooter(Profile);

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: Layout.isSmallDevice ? 12 : 16,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  input: { marginVertical: 8 },
  fontStyle: {
    fontSize: Layout.isSmallDevice ? 14 : 18,
    marginLeft: Layout.isSmallDevice ? 0 : 16,
  },
  buttonStyle: {
    borderRadius: 10,
    width: Layout.window.width - (Layout.isSmallDevice ? 60 : 80),
  },
  softWrapper: {
    borderRadius: 10,
    marginVertical: 8,
    width: Layout.window.width - (Layout.isSmallDevice ? 40 : 60),
  },
});
