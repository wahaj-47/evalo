import * as React from "react";
import { View } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import { getStatusBarHeight } from "react-native-status-bar-height";

const withFooter = (BaseComponent) => (props) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <>
        <BaseComponent {...props}></BaseComponent>
        <View
          style={{
            width: Layout.window.width,
            backgroundColor: theme.background,
            height: getStatusBarHeight(true),
          }}
        ></View>
      </>
    )}
  </ThemeContext.Consumer>
);

export default withFooter;
