import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";

export default function Chat(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/profilePicture.jpg")}
              style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
            ></Image>
            <View style={{ marginLeft: 16 }}>
              <Text
                style={{
                  color: theme.primary,
                  fontWeight: "bold",
                  fontSize: Layout.isSmallDevice ? 16 : 18,
                }}
              >
                John Doe
              </Text>
              <Text
                style={{
                  color: theme.secondary,
                  fontWeight: "bold",
                  fontSize: Layout.isSmallDevice ? 12 : 14,
                  marginTop: 4,
                }}
              >
                Hey! how's it going ?
              </Text>
            </View>
          </View>
        );
      }}
    </ThemeContext.Consumer>
  );
}
