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
import StyledInput from "../components/StyledInput";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import CountryPicker from "react-native-country-picker-modal";
import StyledButton from "../components/StyledButton";

function SignUp(props) {
  const [country, setCountry] = React.useState("IT");

  const onSelect = (country) => {
    console.log(country);
    setCountry(country.cca2);
  };

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
            <Text
              style={{
                fontSize: Layout.isSmallDevice ? 32 : 40,
                fontWeight: "bold",
                color: theme.primary,
                marginTop: 150,
              }}
            >
              Log in with phone number
            </Text>
            <StyledInput
              style={{ marginTop: 24 }}
              inputProps={{
                placeholder: "Phone number",
                keyboardType: "phone-pad",
              }}
            >
              <CountryPicker
                countryCode={country}
                withFlagButton
                withCallingCodeButton
                withAlphaFilter
                onSelect={onSelect}
                theme={{
                  backgroundColor: theme.background,
                  primaryColor: theme.primary,
                  onBackgroundTextColor: theme.primary,
                  fontSize: Layout.isSmallDevice ? 12 : 16,
                  flagSize: Layout.isSmallDevice ? 12 : 16,
                }}
              ></CountryPicker>
            </StyledInput>
            <StyledButton
              style={{ marginTop: 64 }}
              title="Next"
              fontStyle={{ fontSize: Layout.isSmallDevice ? 16 : 24 }}
              color={theme.primary}
              onPress={() => {
                props.navigation.push("Home");
              }}
            ></StyledButton>
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
