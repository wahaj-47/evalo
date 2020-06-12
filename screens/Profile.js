import * as React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import withBackground from "../HOC/withBackground";
import ImageTile from "../components/ImageTile";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import StyledButton from "../components/StyledButton";
import GradientIcon from "../components/GradientIcon";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import withFooter from "../HOC/withFooter";
import { Neomorph } from "react-native-neomorph-shadows";

function Profile(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <View style={{ marginTop: 24 }}>
              <FontAwesome5
                name="crown"
                style={styles.touchableIcon}
                color={theme.yellow}
              ></FontAwesome5>
            </View>
            <View
              style={{
                marginTop: 16,
                flexDirection: "row",
                alignItems: "center",
                width: Layout.window.width - 80,
                justifyContent: "space-evenly",
              }}
            >
              <FontAwesome5
                name="user-check"
                style={[styles.touchableIcon, { color: theme.primary }]}
              ></FontAwesome5>
              <ImageTile></ImageTile>
              <MaterialIcons
                name="message"
                style={[styles.touchableIcon, { color: theme.primary }]}
              ></MaterialIcons>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: 144,
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: theme.primary,
                  fontWeight: "bold",
                }}
              >
                John Doe
              </Text>
              <FontAwesome5
                name="male"
                style={[
                  styles.touchableIcon,
                  {
                    color: theme.primary,
                  },
                ]}
              ></FontAwesome5>
            </View>
            <View
              style={{
                marginTop: Layout.isSmallDevice ? 16 : 24,
                flexDirection: "row",
                width: Layout.window.width * 0.7,
                justifyContent: "space-evenly",
              }}
            >
              <StyledButton
                style={styles.btnContainer}
                buttonStyle={styles.btnContainer}
                onPress={() => {
                  alert("Stories");
                }}
                count={200}
                footer="Stories"
              >
                <FontAwesome
                  name="play-circle"
                  style={[
                    styles.icon,
                    {
                      color: theme.orange,
                    },
                  ]}
                ></FontAwesome>
              </StyledButton>
              <StyledButton
                style={styles.btnContainer}
                buttonStyle={styles.btnContainer}
                onPress={() => {
                  alert("Stories");
                }}
                iconStyle={{ flex: 1 }}
                count={400}
                footer="Liked"
              >
                <GradientIcon colors={theme.gradientA}>
                  <Ionicons
                    name={Platform.OS === "android" ? "md-heart" : "ios-heart"}
                    style={[styles.icon, { color: theme.orange }]}
                  ></Ionicons>
                </GradientIcon>
              </StyledButton>
              <StyledButton
                style={styles.btnContainer}
                buttonStyle={styles.btnContainer}
                onPress={() => {
                  alert("Friends");
                }}
                iconStyle={{ flex: 1 }}
                count={10}
                footer="Friends"
              >
                <GradientIcon colors={theme.gradientB.reverse()}>
                  <FontAwesome5
                    name="user-plus"
                    style={[
                      styles.icon,
                      {
                        color: theme.orange,
                        fontSize: Layout.isSmallDevice ? 24 : 32,
                      },
                    ]}
                  ></FontAwesome5>
                </GradientIcon>
              </StyledButton>
            </View>
            <View style={{ marginTop: 24 }}>
              <StyledButton
                style={styles.softWrapper}
                buttonStyle={styles.buttonStyle}
                fontStyle={styles.fontStyle}
                title="Gifts"
                color={theme.primary}
                renderIconRight={
                  <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.btnRight, { color: theme.secondary }]}>
                      0 Pending gifts
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
                }
              ></StyledButton>
              <StyledButton
                style={styles.softWrapper}
                buttonStyle={styles.buttonStyle}
                fontStyle={styles.fontStyle}
                title="Income"
                color={theme.primary}
                renderIconRight={
                  <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.btnRight, { color: theme.secondary }]}>
                      0 coins
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
                }
              ></StyledButton>
              <StyledButton
                style={styles.softWrapper}
                buttonStyle={styles.buttonStyle}
                fontStyle={styles.fontStyle}
                color={theme["gradientA"]}
                title="Buy coins"
                background={theme.background}
                gradientStyle={{
                  borderRadius: 8,
                }}
                onPress={() => {
                  props.navigation.navigate("Settings", {
                    screen: "BuyCoins",
                  });
                }}
              >
                <FontAwesome5
                  name="coins"
                  style={{
                    marginLeft: 10,
                    fontSize: Layout.isSmallDevice ? 14 : 18,
                  }}
                  color={theme.yellow}
                ></FontAwesome5>
              </StyledButton>
              <StyledButton
                style={styles.softWrapper}
                buttonStyle={styles.buttonStyle}
                fontStyle={styles.fontStyle}
                color={theme["gradientB"]}
                title="Buy Premium"
                background={theme.background}
                gradientStyle={{
                  borderRadius: 8,
                }}
              >
                <FontAwesome5
                  name="crown"
                  style={{
                    marginLeft: 10,
                    fontSize: Layout.isSmallDevice ? 14 : 18,
                  }}
                  color={theme.yellow}
                ></FontAwesome5>
              </StyledButton>
            </View>
            <View style={{ marginTop: 24 }}>
              <Neomorph
                inner
                swapShadows // <- change zIndex of each shadow color
                style={{
                  shadowRadius: Layout.isSmallDevice ? 2 : 3,
                  borderRadius: 10,
                  backgroundColor: theme.background,
                  width: Layout.window.width - (Layout.isSmallDevice ? 40 : 60),
                  height: Layout.window.height, // @TODO: Calculate height from the number of images.
                  paddingVertical: 16,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  // alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <ImageTile
                  style={styles.imageTileStyle}
                  imageStyle={styles.imageStyle}
                ></ImageTile>
                <ImageTile
                  style={styles.imageTileStyle}
                  imageStyle={styles.imageStyle}
                ></ImageTile>
                <ImageTile
                  style={styles.imageTileStyle}
                  imageStyle={styles.imageStyle}
                ></ImageTile>
                <ImageTile
                  style={styles.imageTileStyle}
                  imageStyle={styles.imageStyle}
                ></ImageTile>
              </Neomorph>
            </View>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withFooter(Profile);

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: Layout.isSmallDevice ? 14 : 18,
    marginLeft: Layout.isSmallDevice ? 0 : 16,
  },
  buttonStyle: {
    borderRadius: 10,
    justifyContent: "flex-start",
    width: Layout.window.width - (Layout.isSmallDevice ? 60 : 80),
  },
  btnRight: {
    fontWeight: "bold",
  },
  softWrapper: {
    borderRadius: 10,
    marginVertical: 8,
    width: Layout.window.width - (Layout.isSmallDevice ? 40 : 60),
  },
  icon: {
    fontSize: Layout.isSmallDevice ? 32 : 40,
    alignSelf: "center",
  },
  btnContainer: {
    width: Layout.isSmallDevice ? 50 : 70,
    height: Layout.isSmallDevice ? 50 : 70,
  },
  imageTileStyle: {
    width: (Layout.window.width - (Layout.isSmallDevice ? 40 : 60)) * 0.45,
    height: (Layout.window.width - (Layout.isSmallDevice ? 40 : 60)) * 0.5,
    marginBottom: Layout.window.width * 0.025,
  },
  imageStyle: {
    width: (Layout.window.width - (Layout.isSmallDevice ? 40 : 60)) * 0.45 - 10,
    height: (Layout.window.width - (Layout.isSmallDevice ? 40 : 60)) * 0.5 - 10,
  },
  touchableIcon: {
    fontSize: Layout.isSmallDevice ? 16 : 24,
    alignSelf: "center",
  },
});
