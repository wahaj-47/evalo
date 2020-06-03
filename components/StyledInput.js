import * as React from "react";
import { Text, View } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import { TextInput } from "react-native-gesture-handler";
import { Neomorph } from "react-native-neomorph-shadows";

export default function StyledInput(props) {
  const [value, setValue] = React.useState("");

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Neomorph
          inner
          style={{
            ...props.style,
            shadowRadius: 3,
            borderRadius: (Layout.window.width - 80) / 16,
            backgroundColor: theme.background,
            width: Layout.window.width - 80,
            height: Layout.isSmallDevice ? 60 : 80,
            flexDirection: "row",
          }}
        >
          <Neomorph
            style={{
              shadowRadius: 3,
              borderRadius: (Layout.window.width - 80) / 16,
              backgroundColor: theme.background,
              width: (Layout.window.width - 80) * 0.3,
              height: Layout.isSmallDevice ? 60 : 80,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.children}
          </Neomorph>
          <TextInput
            {...props.inputProps}
            placeholderTextColor={theme.secondary}
            style={{
              flex: 1,
              height: Layout.isSmallDevice ? 60 : 80,
              padding: 24,
              fontSize: 16,
            }}
            value={value}
            onChangeText={(value) => {
              setValue(value);
            }}
          ></TextInput>
        </Neomorph>
      )}
    </ThemeContext.Consumer>
  );
}
