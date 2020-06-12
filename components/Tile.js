import * as React from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import { Neomorph } from "react-native-neomorph-shadows";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Tile(props) {
  const [isPressed, setValue] = React.useState(false);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Neomorph
          inner={isPressed}
          swapShadows // <- change zIndex of each shadow color
          style={{
            shadowRadius: Layout.isSmallDevice ? 2 : 3,
            borderRadius: 136 / 8,
            backgroundColor: theme.background,
            width: 136,
            height: 136,
            alignItems: "center",
            justifyContent: "center",
            ...props.style,
          }}
        >
          <TouchableWithoutFeedback
            disabled={props.disabled}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 140,
              flex: 1,
              backgroundColor: theme.background,
              borderRadius: 136 / 8,
              margin: 8,
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
            {props.children}
          </TouchableWithoutFeedback>
        </Neomorph>
      )}
    </ThemeContext.Consumer>
  );
}
