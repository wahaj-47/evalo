import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import { Neomorph } from "react-native-neomorph-shadows";

export default function ImageTile(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Neomorph
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
          <Image
            style={{
              height: 126,
              width: 126,
              borderRadius: 126 / 8,
              ...props.imageStyle,
            }}
            source={
              require("../assets/images/profilePicture.jpg") || props.image
            }
          ></Image>
        </Neomorph>
      )}
    </ThemeContext.Consumer>
  );
}
