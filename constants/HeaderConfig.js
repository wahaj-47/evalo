import * as React from "react";
import { TouchableOpacity, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Layout from "./Layout";

export default function HeaderConfig(theme, navigation) {
  return {
    headerStyle: {
      backgroundColor: theme.background,
    },
    headerTitleStyle: {
      textTransform: "uppercase",
      fontSize: Layout.isSmallDevice ? 12 : 16,
    },
    headerBackTitleVisible: false,
    headerLeftContainerStyle: { marginLeft: 40 },
    headerRightContainerStyle: { marginRight: 40 },
    headerTintColor: theme.primary,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
      >
        <Ionicons
          name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
          style={{
            fontSize: Layout.isSmallDevice ? 16 : 24,
            color: theme.primary,
          }}
        ></Ionicons>
      </TouchableOpacity>
    ),
  };
}
