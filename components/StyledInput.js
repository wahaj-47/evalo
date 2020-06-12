import * as React from "react";
import { Text, View } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import { TextInput } from "react-native-gesture-handler";
import { Neomorph } from "react-native-neomorph-shadows";

export default function StyledInput(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Neomorph
          inner
          style={{
            shadowRadius: 3,
            borderRadius: 10,
            backgroundColor: theme.background,
            width: Layout.window.width - (Layout.isSmallDevice ? 40 : 60),
            height: Layout.isSmallDevice ? 48 : 68,
            flexDirection: "row",
            ...props.style,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.children && (
            <Neomorph
              style={{
                shadowRadius: 3,
                borderTopStartRadius: 10,
                borderBottomStartRadius: 10,
                backgroundColor: theme.background,
                width:
                  (Layout.window.width - (Layout.isSmallDevice ? 40 : 60)) *
                  0.3,
                height: Layout.isSmallDevice ? 40 : 60,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {props.children}
            </Neomorph>
          )}
          <TextInput
            {...props.inputProps}
            placeholderTextColor={theme.secondary}
            style={{
              flex: 1,
              height: Layout.isSmallDevice ? 40 : 60,
              maxHeight: Layout.isSmallDevice ? 40 : 60,
              padding: 24,
              fontSize: 16,
              color: theme.primary,
              fontWeight: "bold",
            }}
          ></TextInput>
          {props.button && (
            <Neomorph
              style={{
                shadowRadius: 3,
                borderTopEndRadius: 10,
                borderBottomEndRadius: 10,
                backgroundColor: theme.background,
                width:
                  (Layout.window.width - (Layout.isSmallDevice ? 30 : 40)) *
                  0.2,
                height: Layout.isSmallDevice ? 48 : 68,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {props.button}
            </Neomorph>
          )}
        </Neomorph>
      )}
    </ThemeContext.Consumer>
  );
}
