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
import StyledButton from "../components/StyledButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

function SignUp(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{
              alignItems: "center",
            }}
            scrollEnabled={false}
          >
            <TouchableOpacity
              style={{ position: "absolute", zIndex: 100, left: 40, top: 16 }}
              onPress={() => {
                props.navigation.pop();
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
            <Image
              source={require("../assets/images/logo.png")}
              style={{
                width: Layout.window.width,
                height: Layout.window.width * 0.2 * 1.8,
                marginTop: 40,
              }}
            ></Image>
            <StyledButton
              style={styles.button}
              title="Connect with phone number"
              color={theme.primary}
              fontStyle={styles.text}
              onPress={() => {
                props.navigation.push("ConnectPhone");
              }}
              iconStyle={{ position: "absolute", left: 16 }}
            >
              <FontAwesome
                name="mobile"
                style={[
                  styles.text,
                  {
                    color: theme.primary,
                  },
                ]}
              ></FontAwesome>
            </StyledButton>
            <StyledButton
              style={styles.button}
              title="Connect with Facebook"
              color="#3B5998"
              fontStyle={styles.text}
              onPress={() => {
                props.navigation.push("Home");
              }}
              iconStyle={{ position: "absolute", left: 16 }}
            >
              <FontAwesome
                name="facebook"
                style={[
                  styles.text,
                  {
                    color: "#3B5998",
                  },
                ]}
              ></FontAwesome>
            </StyledButton>
            <StyledButton
              style={styles.button}
              title="Connect with Google"
              color="#4285F4"
              fontStyle={styles.text}
              onPress={() => {
                props.navigation.push("Home");
              }}
              iconStyle={{ position: "absolute", left: 16 }}
            >
              <FontAwesome
                name="google"
                style={[
                  styles.text,
                  {
                    color: "#4285F4",
                  },
                ]}
              ></FontAwesome>
            </StyledButton>

            <View
              style={{
                marginTop: Layout.isSmallDevice ? 40 : 64,
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: theme.secondary,
                  },
                ]}
              >
                By starting to use evalo you agree to the
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: theme.primary,
                  },
                ]}
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

export default withBackground(SignUp);

const styles = StyleSheet.create({
  button: {
    marginTop: Layout.isSmallDevice ? 24 : 32,
  },
  text: {
    fontSize: Layout.isSmallDevice ? 12 : 16,
  },
});
