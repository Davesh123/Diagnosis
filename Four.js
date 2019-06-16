import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, View, Text, Alert } from 'react-native';

class Four extends Component {
  _onPressButton(){
    Actions.LandingOne();
  }
  _onPressButton2(){
    Actions.LandingTwo();
  }
  _onPressButton3(){
    Actions.LandingThree();
  }
  _onPressButton4(){
    Actions.LandingFour();
  }
  renderOne() {
  return(
 <TouchableOpacity style={styles.OneStyle} activeOpacity={0.5} onPress={this._onPressButton}>

 <Image
  source={require('./Normal.png')}
  style={styles.ImageIconStyle}
  />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Test 1 </Text>

 </TouchableOpacity>
 );
 };
renderTwo() {
return(
<TouchableOpacity style={styles.OneStyle} activeOpacity={0.5} onPress={this._onPressButton2}>

<Image
source={require('./Pnemonia.png')}
style={styles.ImageIconStyle}
/>

<View style={styles.SeparatorLine} />

<Text style={styles.TextStyle}> Test 2 </Text>

</TouchableOpacity>
);
};
renderThree() {
return(
<TouchableOpacity style={styles.OneStyle} activeOpacity={0.5} onPress={this._onPressButton3}>

<Image
source={require('./Pnemonia2.png')}
style={styles.ImageIconStyle}
/>

<View style={styles.SeparatorLine} />

<Text style={styles.TextStyle}> Test 3 </Text>

</TouchableOpacity>
);
};
renderFour() {
return(
<TouchableOpacity style={styles.OneStyle} activeOpacity={0.5} onPress={this._onPressButton4}>

<Image
source={require('./Normal2.png')}
style={styles.ImageIconStyle}
/>

<View style={styles.SeparatorLine} />

<Text style={styles.TextStyle}> Test 4 </Text>

</TouchableOpacity>
);
};
  render(){
    return(
      <ScrollView>
      {this.renderOne()}
      {this.renderTwo()}
      {this.renderThree()}
      {this.renderFour()}
    </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    flex: 1,
    justifyContent: "center",
    fontFamily: 'System',
  },
  Title: {
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    justifyContent: 'center',
    fontWeight: 'bold'
  },
 MainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   margin: 10
 },
OneStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#00aced',
  borderWidth: .5,
  borderColor: '#fff',
  height: 100,
  borderRadius: 5 ,
  margin: 5,

},
TwoStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#00aced',
  borderWidth: .5,
  borderColor: '#fff',
  height: 100,
  borderRadius: 5 ,
  margin: 5,

},
ImageIconStyle: {
   padding: 10,
   margin: 5,
   height: 80,
   width: 80,
   resizeMode : 'stretch',

},

TextStyle :{

  color: "#fff",
  marginBottom : 4,
  marginRight : 2,
  fontSize: 30

},

SeparatorLine :{

backgroundColor : '#fff',
width: 1,
height: 80

},
  errorTextStyle : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    labelStyle:{
      fontSize: 70,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle:{
      height:40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
});

export default Four;
