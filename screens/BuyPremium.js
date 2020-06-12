import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Layout from "../constants/Layout";
import StyledButton from "../components/StyledButton";
import withFooter from "../HOC/withFooter";
import LinearGradient from "react-native-linear-gradient";
import Swiper from "react-native-swiper";
import FeatureSlide from "../components/FeatureSlide";
import { Neomorph } from "react-native-neomorph-shadows";

import RadioOption from "../components/RadioOption";

function BuyPremium(props) {
  const [selectedOption, setValue] = React.useState("First");

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <KeyboardAvoidingScrollView
            style={{ backgroundColor: theme.background }}
            contentContainerStyle={{ alignItems: "center" }}
            // scrollEnabled={false}
          >
            <View
              style={{
                borderBottomStartRadius: 25,
                borderBottomEndRadius: 25,
                overflow: "hidden",
                flex: 1,
              }}
            >
              <Swiper
                style={{
                  // flex: 1,
                  height: Layout.window.height * 0.6,
                }}
                dotColor={theme.background}
                loop
              >
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/ad-free.json")}
                    title="Completely Ad-free"
                    subtitle="Better user experience without the annoying ads"
                    colors={theme.gradientA}
                  ></FeatureSlide>
                </View>
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/discount.json")}
                    title="More discounts"
                    subtitle="Premium bonus: New and huge discount offers"
                  ></FeatureSlide>
                </View>
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/full-profile.json")}
                    title="View full Profile"
                    subtitle="Check the user Instagram (if it is linked)"
                    lottieStyles={{ width: 600, top: -40 }}
                    colors={theme.gradientA}
                  ></FeatureSlide>
                </View>
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/gender.json")}
                    title="Gender Selection"
                    subtitle="Pick any you want"
                    lottieStyles={{ top: 30 }}
                  ></FeatureSlide>
                </View>
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/matches.json")}
                    title="Unlimited matches"
                    subtitle="Premium bonus: Get unlimited matches in video chat"
                    lottieStyles={{ top: 40 }}
                    colors={theme.gradientA}
                  ></FeatureSlide>
                </View>
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/preferred-country.json")}
                    title="Preferred country"
                    subtitle="Select country preferred to video chat"
                    colors={theme.gradientB}
                    lottieStyles={{ top: -10, width: 600 }}
                  ></FeatureSlide>
                </View>
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/switch-location.json")}
                    title="Switch locations"
                    subtitle="Change your location to chat with people all over the world"
                    colors={theme.gradientA}
                  ></FeatureSlide>
                </View>
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/unlimited-messages.json")}
                    title="Unlimited messages"
                    subtitle="Send messaged to anyone in text chat without limit"
                    colors={theme.gradientB}
                  ></FeatureSlide>
                </View>
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/view-likes.json")}
                    title="View people who liked you"
                    subtitle="Find out who's liking and start chatting"
                    colors={theme.gradientA}
                    lottieStyles={{ width: 400 }}
                  ></FeatureSlide>
                </View>
                <View style={styles.slideWrapper}>
                  <FeatureSlide
                    lottie={require("../lottie/read-receipt.json")}
                    title="Read receipts"
                    subtitle="Know when your messages have been read"
                    colors={theme.gradientB}
                    lottieStyles={{ top: 0 }}
                  ></FeatureSlide>
                </View>
              </Swiper>
            </View>
            <View style={{ flex: 1, marginTop: 32 }}>
              <RadioOption
                selected={selectedOption === "First"}
                value="First"
                setValue={setValue}
                label="First"
              ></RadioOption>
              <RadioOption
                selected={selectedOption === "Second"}
                value="Second"
                setValue={setValue}
                label="Second"
              ></RadioOption>
              <RadioOption
                selected={selectedOption === "Third"}
                value="Third"
                setValue={setValue}
                label="Third"
              ></RadioOption>
            </View>
          </KeyboardAvoidingScrollView>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withFooter(BuyPremium);

const styles = StyleSheet.create({
  slideWrapper: {
    flex: 1,
  },
  option: {
    shadowRadius: 3,
    width: Layout.window.width - 80,
    height: Layout.isSmallDevice ? 60 : 80,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 10,
  },
});
