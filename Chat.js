import React, { Component } from 'react';
import { ScrollView,   StyleSheet, Text, Image, Platform, View, TouchableOpacity } from 'react-native';
import { WebBrowser } from 'expo';
import Button from './common/Button';
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

export default class Chat extends React.Component {
  static navigationOptions = {
    title: "Chat Page",
  };
  state = {
    messages: [],
  };
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name: 'John Smith',
        }}
      />
    );
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}
