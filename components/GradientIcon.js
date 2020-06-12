import * as React from "react";
import { View } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import LinearGradient from "react-native-linear-gradient";

export default function GradientIcon(props) {
  return (
    <MaskedView
      style={{ flex: 1, height: "100%" }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: "transparent",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.children}
        </View>
      }
    >
      <LinearGradient
        style={{ flex: 1, height: "100%" }}
        colors={props.colors}
      ></LinearGradient>
    </MaskedView>
  );
}
