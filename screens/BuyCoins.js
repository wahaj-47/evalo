import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import StyledButton from "../components/StyledButton";
import withFooter from "../HOC/withFooter";
import User from "../components/User";
import Tile from "../components/Tile";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LinearGradient from "react-native-linear-gradient";

function BuyCoins(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center" }}
            // scrollEnabled={false}
          >
            <View style={{ marginTop: 16 }}>
              <Text
                style={{
                  fontSize: Layout.isSmallDevice ? 16 : 24,
                  color: theme.primary,
                  fontWeight: "bold",
                }}
              >
                You have <Text style={{ color: theme.warning }}>0</Text> coins
              </Text>
            </View>
            <View
              style={{
                marginTop: 16,
                width: Layout.window.width,
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Tile style={styles.tile}>
                <Text style={{ color: theme.primary, fontWeight: "bold" }}>
                  30% OFF
                </Text>
                <FontAwesome5
                  name="coins"
                  style={{
                    fontSize: Layout.window.width * 0.1,
                    marginVertical: 8,
                  }}
                  color={theme.yellow}
                ></FontAwesome5>
                <Text
                  style={{
                    color: theme.primary,
                    fontWeight: "bold",
                    fontSize: 24,
                  }}
                >
                  600
                </Text>

                <LinearGradient
                  colors={theme.gradientA}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 32,
                    height: 24,
                    borderRadius: 24 / 2,
                    marginTop: 8,
                  }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: theme.background,
                    }}
                  >
                    $20
                  </Text>
                </LinearGradient>
              </Tile>
              <Tile style={styles.tile}></Tile>
              <Tile style={styles.tile}></Tile>
              <Tile style={styles.tile}></Tile>
            </View>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withFooter(BuyCoins);

const styles = StyleSheet.create({
  tile: {
    width: Layout.window.width * 0.4,
    height: Layout.window.width * 0.4,
    marginBottom: Layout.isSmallDevice ? 16 : 24,
  },
});
