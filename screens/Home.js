import * as React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import withBackground from "../HOC/withBackground";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Neomorph } from "react-native-neomorph-shadows";
import StyledButton from "../components/StyledButton";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Home(props) {
  const [selectedOption, setValue] = React.useState("Both");

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{
              alignItems: "center",
            }}
            // scrollEnabled={false}
          >
            <Image
              source={require("../assets/images/logo.png")}
              style={{
                width: Layout.window.width,
                height: Layout.window.width * 0.2 * 1.8,
                marginTop: Layout.isSmallDevice ? 10 : 40,
              }}
            ></Image>

            <Neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 3,
                borderRadius: 300 / 2,
                backgroundColor: theme.background,
                width: Layout.isSmallDevice ? 200 : 300,
                height: Layout.isSmallDevice ? 200 : 300,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: Layout.isSmallDevice ? 10 : 20,
                  height: Layout.isSmallDevice ? 20 : 40,
                  backgroundColor: theme.warning,
                  borderRadius: 20 / 2,
                  position: "absolute",
                  top: 15,
                }}
              ></View>
              <StyledButton
                style={{
                  height: Layout.isSmallDevice ? 100 : 150,
                  width: Layout.isSmallDevice ? 100 : 150,
                }}
                buttonStyle={{
                  height: Layout.isSmallDevice ? 100 : 150,
                  width: Layout.isSmallDevice ? 100 : 150,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                iconStyle={{ marginBottom: 8 }}
                title="Start call"
                color={theme.primary}
                fontStyle={{ fontSize: Layout.isSmallDevice ? 16 : 24 }}
              >
                <FontAwesome
                  name="phone"
                  style={{
                    fontSize: Layout.isSmallDevice ? 16 : 24,
                    color: theme.primary,
                  }}
                ></FontAwesome>
              </StyledButton>
            </Neomorph>
            <View style={{ flexDirection: "row", marginTop: 32 }}>
              <Neomorph
                inner={selectedOption === "Male"}
                style={[
                  styles.option,
                  {
                    borderTopStartRadius: 300,
                    borderBottomStartRadius: 300,
                    backgroundColor: theme.background,
                  },
                ]}
              >
                <TouchableWithoutFeedback
                  style={styles.option}
                  onPress={() => {
                    setValue("Male");
                  }}
                >
                  <FontAwesome5
                    name="male"
                    style={[styles.icon, { color: theme.primary }]}
                  ></FontAwesome5>
                </TouchableWithoutFeedback>
              </Neomorph>
              <Neomorph
                inner={selectedOption === "Both"}
                style={[
                  styles.option,
                  {
                    backgroundColor: theme.background,
                  },
                ]}
              >
                <TouchableWithoutFeedback
                  style={[styles.option, { flexDirection: "row" }]}
                  onPress={() => {
                    setValue("Both");
                  }}
                >
                  <FontAwesome5
                    name="male"
                    style={[styles.icon, { color: theme.primary }]}
                  ></FontAwesome5>
                  <FontAwesome5
                    name="female"
                    style={[styles.icon, { color: theme.primary }]}
                  ></FontAwesome5>
                </TouchableWithoutFeedback>
              </Neomorph>
              <Neomorph
                inner={selectedOption === "Female"}
                style={[
                  styles.option,
                  {
                    backgroundColor: theme.background,
                    borderTopEndRadius: 300,
                    borderBottomEndRadius: 300,
                  },
                ]}
              >
                <TouchableWithoutFeedback
                  style={styles.option}
                  onPress={() => {
                    setValue("Female");
                  }}
                >
                  <FontAwesome5
                    name="female"
                    style={[styles.icon, { color: theme.primary }]}
                  ></FontAwesome5>
                </TouchableWithoutFeedback>
              </Neomorph>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 24,
                justifyContent: "space-evenly",
                width: Layout.window.width - 150,
              }}
            >
              <StyledButton
                style={{
                  width: Layout.isSmallDevice ? 50 : 70,
                  height: Layout.isSmallDevice ? 50 : 70,
                }}
                buttonStyle={{
                  width: Layout.isSmallDevice ? 50 : 70,
                  height: Layout.isSmallDevice ? 50 : 70,
                }}
                onPress={() => {
                  props.navigation.push("Settings");
                }}
              >
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
                  style={[styles.icon, { color: theme.primary }]}
                ></Ionicons>
              </StyledButton>
              <StyledButton
                style={{
                  width: Layout.isSmallDevice ? 50 : 70,
                  height: Layout.isSmallDevice ? 50 : 70,
                }}
                buttonStyle={{
                  width: Layout.isSmallDevice ? 50 : 70,
                  height: Layout.isSmallDevice ? 50 : 70,
                }}
                onPress={() => {
                  props.navigation.push("Messages");
                }}
              >
                <MaterialIcons
                  name="message"
                  style={[styles.icon, { color: theme.primary }]}
                ></MaterialIcons>
              </StyledButton>
            </View>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Platform.OS === "ios" ? withBackground(Home) : Home;

const styles = StyleSheet.create({
  option: {
    shadowRadius: 3,
    width: (Layout.window.width - 80) * 0.33,
    height: Layout.isSmallDevice ? 60 : 80,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: Layout.isSmallDevice ? 24 : 32,
    alignSelf: "center",
  },
});
