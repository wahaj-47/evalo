import * as React from "react";
import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";

export default function FeatureSlide(props) {
  const lottieRef = React.createRef();

  React.useEffect(() => {
    lottieRef.current.play();
  }, []);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          stop={{ x: 1, y: 1 }}
          colors={props.colors || theme.gradientB}
          style={{ flex: 1 }}
        >
          <LottieView
            ref={lottieRef}
            style={{
              position: "absolute",
              top: 16,
              width: 300,
              alignSelf: "center",
              ...props.lottieStyles,
            }}
            source={props.lottie}
            autoPlay
            loop
          />
          <View
            style={{
              position: "absolute",
              bottom: Layout.window.height * 0.6 * 0.2,
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                justifyContent: "flex-end",
                color: theme.background,
                textTransform: "uppercase",
              }}
            >
              {props.title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                justifyContent: "flex-end",
                color: theme.background,
                marginTop: 16,
                textAlign: "center",
              }}
            >
              {props.subtitle}
            </Text>
          </View>
        </LinearGradient>
      )}
    </ThemeContext.Consumer>
  );
}
