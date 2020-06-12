import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ThemeContext } from "../providers/ThemeProvider";
import Layout from "../constants/Layout";
import { Neomorph } from "react-native-neomorph-shadows";
import rnTextSize from "react-native-text-size";

export default function ChatBubble(props) {
  const [height, setHeight] = React.useState(undefined);
  const [width, setWidth] = React.useState(undefined);

  React.useEffect(() => {
    async function measureTextSize() {
      const size = await rnTextSize.measure({ text: props.text });
      switch (true) {
        case size.width + 24 < Layout.window.width * 0.4:
          setWidth(Layout.window.width * 0.4);
          break;
        case size.width + 24 > Layout.window.width * 0.6:
          setWidth(Layout.window.width * 0.6);
          break;
        default:
          console.log(size.width + 24 < Layout.window.width * 0.4);
          console.log(size.width + 24, Layout.window.width * 0.4);
          setWidth(size.width + 24);
          break;
      }
    }
    measureTextSize();
  }, []);

  const [time, setTime] = React.useState(undefined);

  React.useEffect(() => {
    let dateTime = new Date(props.date);
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let ampm = hours > 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    setTime(hours + ":" + minutes + " " + ampm);
  }, []);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <View>
            <Neomorph
              style={{
                shadowRadius: 3,
                width: width,
                height: height === undefined ? 17 + 24 : height + 24,
                backgroundColor: theme.background,
                justifyContent: "center",
                marginBottom: 8,
                paddingRight: 8,
              }}
            >
              <View
                onLayout={(e) => {
                  setHeight(e.nativeEvent.layout.height);
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    flexWrap: "wrap",
                    color: theme.primary,
                    fontWeight: "bold",
                    marginLeft: 8,
                  }}
                >
                  {props.text}
                </Text>
              </View>
            </Neomorph>
            <View
              style={{
                marginBottom: 24,
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ color: theme.secondary, fontSize: 12 }}>
                {time}
              </Text>
            </View>
          </View>
        );
      }}
    </ThemeContext.Consumer>
  );
}
