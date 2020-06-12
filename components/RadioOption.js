import * as React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import { Neomorph } from "react-native-neomorph-shadows";

export default function RadioOption(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Neomorph
          inner={props.selected}
          style={[
            styles.option,
            {
              backgroundColor: theme.background,
            },
          ]}
        >
          <TouchableWithoutFeedback
            style={styles.option}
            onPress={() => {
              props.setValue(props.value);
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{props.label}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Neomorph>
      )}
    </ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  option: {
    shadowRadius: 3,
    width: Layout.window.width - 80,
    height: Layout.isSmallDevice ? 60 : 80,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 10,
  },
});
