import * as React from "react";
import { Text, View } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Neomorph } from "react-native-neomorph-shadows";
import MaskedView from "@react-native-community/masked-view";
import LinearGradient from "react-native-linear-gradient";

export default function StyledButton(props) {
  const [isPressed, setValue] = React.useState(false);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <View style={{ flexDirection: "column", alignItems: "center" }}>
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
              disabled={props.disabled}
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
              {props.renderButton ? (
                props.renderButton
              ) : typeof props.color === "object" ? (
                <LinearGradient
                  colors={props.color}
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    height: "100%",
                    overflow: "hidden",
                    ...props.gradientStyle,
                  }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <View style={props.iconStyle}>{props.children}</View>
                  <Text
                    style={{
                      ...props.fontStyle,
                      fontWeight: "bold",
                      color: props.background,
                    }}
                  >
                    {props.title}
                  </Text>
                </LinearGradient>
              ) : (
                <>
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
                  <View style={{ position: "absolute", right: 16 }}>
                    {props.renderIconRight}
                  </View>
                </>
              )}
            </TouchableWithoutFeedback>
          </Neomorph>
          {props.count && (
            <Text
              style={{
                marginTop: 8,
                color: theme.primary,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {props.count}
            </Text>
          )}
          {props.footer && (
            <Text style={{ color: theme.secondary, fontWeight: "bold" }}>
              {props.footer}
            </Text>
          )}
        </View>
      )}
    </ThemeContext.Consumer>
  );
}
