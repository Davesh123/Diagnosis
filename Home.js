//Importing Libraries from React Native and My Other Components
'use strict';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {View, Button, Text} from 'react-native-ui-lib';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StyleSheet, TextInput, Image, Linking, Animation } from "react-native";

//This top displays an image and has a gesture recognizer, which captures the user swiping up
class Home extends Component {
      constructor(props) {
        super(props);
        this.state = {
          myText: 'Swipe Up',
          gestureName: 'none',
          backgroundColor: '#fff'
        };
      }
      _moveBall = () => {
    Animated.spring(this.moveAnimation, {
      toValue: {x: 250, y: 10},
    }).start()
  }
      onSwipeUp (gestureState) {
        this.setState({myText: 'You Swiped Left'});
      }
      onSwipe(gestureName, gestureState){
        const {SWIPE_LEFT} = swipeDirections;
        this.setState({ gestureName: gestureName });
        switch (gestureName){
          case SWIPE_LEFT:
          Actions.Login()
          break;
        }
      }
//This is some code on the velocity and the force ,whcih makes it the most efficient
render() {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  return (
    <View style={{ flex: 1,
        flexDirection: "row",
        alignItems: "stretch"}}>

    <GestureRecognizer
    onSwipe={(direction, state) => this.onSwipe(direction,state)}
    onSwipeUp={(state) => this.onSwipeUp(state)}
    config={config}
    style={{
      flex:1,
      backgroundColor: 'white'
    }}>
    {this._moveBall}
    <Image
      style={{ flex: 1,
        width: null,
        height: null }}
      source={require('./LandingPage.png')}
       />
    </GestureRecognizer>
          </View>


  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  tennisBall: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'greenyellow',
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  button: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  }
});

//I End with some styling
export default Home;
