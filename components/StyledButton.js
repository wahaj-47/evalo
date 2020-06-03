import * as React from "react";
import { Text, View } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Neomorph } from "react-native-neomorph-shadows";

export default function StyledButton(props) {
  const [isPressed, setValue] = React.useState(false);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Neomorph
          inner={isPressed}
          swapShadows // <- change zIndex of each shadow color
          style={{
            shadowRadius: Layout.isSmallDevice ? 2 : 3,
            borderRadius: (Layout.window.width - 80) / 2,
            backgroundColor: theme.background,
            width: Layout.window.width - 80,
            height: Layout.isSmallDevice ? 60 : 80,
            alignItems: "center",
            justifyContent: "center",
            ...props.style,
          }}
        >
          <TouchableWithoutFeedback
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: Layout.window.width - 80 - 16,
              flex: 1,
              backgroundColor: theme.background,
              borderRadius: (Layout.window.width - 80) / 2,
              margin: 8,
              flexDirection: "row",
              ...props.buttonStyle,
            }}
            onPressIn={() => {
              setValue(true);
            }}
            onPressOut={() => {
              setValue(false);
            }}
            onPress={props.onPress}
          >
            <View style={props.iconStyle}>{props.children}</View>
            <Text
              style={{
                ...props.fontStyle,
                fontWeight: "bold",
                color: props.color,
              }}
            >
              {props.title}
            </Text>
          </TouchableWithoutFeedback>
        </Neomorph>
      )}
    </ThemeContext.Consumer>
  );
}
