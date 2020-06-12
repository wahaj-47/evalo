import React, { useEffect, useState } from "react";
import { View, Text, Platform } from "react-native";
import {
  GiftedChat,
  Send,
  InputToolbar,
  Composer,
} from "react-native-gifted-chat";
import withFooter from "../HOC/withFooter";
import { ThemeContext } from "../providers/ThemeProvider";
import ChatBubble from "../components/ChatBubble";
import Layout from "../constants/Layout";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import { Neomorph } from "react-native-neomorph-shadows";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

function Chat(props) {
  const [messages, setMessages] = React.useState([]);

  const onSend = (message) => {
    setMessages(GiftedChat.append(messages, message));
  };

  const [value, setValue] = useState(undefined);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <GiftedChat
          listViewProps={{
            style: {
              backgroundColor: theme.background,
            },
          }}
          renderBubble={({ currentMessage }) => {
            return (
              <ChatBubble
                text={currentMessage.text}
                date={currentMessage.createdAt}
              ></ChatBubble>
            );
          }}
          minInputToolbarHeight={88}
          renderInputToolbar={(props) => {
            return (
              <View
                style={{
                  flex: 1,
                  backgroundColor: theme.background,
                  width: Layout.window.width,
                }}
              >
                <StyledInput
                  inputProps={{
                    value: value,
                    onChangeText: (value) => {
                      setValue(value);
                    },
                    multiline: true,
                  }}
                  style={{
                    width: Layout.window.width - 16,
                    margin: 8,
                  }}
                  button={
                    <TouchableWithoutFeedback
                      onPress={() => {
                        if (value) {
                          props.onSend({
                            _id: props.messageIdenerator,
                            text: value,
                            createdAt: new Date(),
                            user: props.user,
                          });
                          setValue("");
                        }
                      }}
                      style={{
                        width:
                          (Layout.window.width -
                            (Layout.isSmallDevice ? 30 : 40)) *
                          0.2,
                        height: Layout.isSmallDevice ? 40 : 60,
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Ionicons
                        name={
                          Platform.OS === "android" ? "md-send" : "ios-send"
                        }
                        style={{ fontSize: 32, marginTop: 12 }}
                      ></Ionicons>
                    </TouchableWithoutFeedback>
                  }
                ></StyledInput>
              </View>
            );
          }}
          messages={messages}
          onSend={(message) => onSend(message)}
          user={{
            _id: 1,
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
}

export default withFooter(Chat);
