import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import StyledButton from "../components/StyledButton";
import Chat from "../components/Chat";
import withFooter from "../HOC/withFooter";
import ImageTile from "../components/ImageTile";
import Ionicons from "react-native-vector-icons/Ionicons";

function Messages(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center" }}
            // scrollEnabled={false}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 24,
                marginHorizontal: 32,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <ImageTile
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                  imageStyle={{
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                  }}
                ></ImageTile>
                <ImageTile
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                  imageStyle={{
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                  }}
                ></ImageTile>
                <ImageTile
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                  imageStyle={{
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                  }}
                ></ImageTile>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ fontWeight: "bold", color: theme.secondary }}>
                  Cute videos
                </Text>
                <Ionicons
                  name={
                    Platform.OS === "android"
                      ? "md-arrow-forward"
                      : "ios-arrow-forward"
                  }
                  style={{
                    marginLeft: 10,
                    fontSize: Layout.isSmallDevice ? 14 : 18,
                  }}
                  color={theme.secondary}
                ></Ionicons>
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 8 }}>
              <StyledButton
                style={styles.softWrapper}
                buttonStyle={styles.buttonStyle}
                renderButton={<Chat></Chat>}
                onPress={() => {
                  props.navigation.push("Chat");
                }}
              ></StyledButton>
            </View>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withFooter(Messages);

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: Layout.isSmallDevice ? 12 : 16,
    marginLeft: Layout.isSmallDevice ? 0 : 16,
  },
  buttonStyle: {
    borderRadius: 10,
    width: Layout.window.width - (Layout.isSmallDevice ? 60 : 80),
    justifyContent: "flex-start",
  },
  softWrapper: {
    borderRadius: 10,
    marginVertical: 8,
    width: Layout.window.width - (Layout.isSmallDevice ? 40 : 60),
    height: Layout.isSmallDevice ? 80 : 100,
  },
});
