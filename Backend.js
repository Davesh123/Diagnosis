import firebase from 'firebase';
import React, { Component } from 'react';

class Backend extends Component {
  uid = '';
  messagesRef = null;
  // initialize Firebase Backend
  constructor() {
    super();
    firebase.initializeApp({
      apiKey: "AIzaSyAH2f0GmcV6lrebOJt4JErt10hu_8kiaiM",
    authDomain: "diagnosis-45b3a.firebaseapp.com",
    databaseURL: "https://diagnosis-45b3a.firebaseio.com",
    projectId: "diagnosis-45b3a",
    storageBucket: "diagnosis-45b3a.appspot.com",
    messagingSenderId: "372266876790",
    appId: "1:372266876790:web:79ecba28d9c9a528"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }
  // retrieve the messages from the Backend
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback ({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }
  // send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // close the connection to the Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Backend();
