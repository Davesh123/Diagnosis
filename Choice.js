import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, View, Text, Alert } from 'react-native';

class Choice extends Component {
  publish=()=>{
   Actions.Topics();
 }
 _onPressButton(){
   Actions.DumbPeople();
 }
 _onPressButtonR(){
   Actions.chat();
 }
 _onPressButtonL(){
   Actions.LandingFive();
 }
 _onPressButtonG(){
   Actions.CameraPage();
 }
 renderOne() {
 return(
<TouchableOpacity style={styles.OneStyle} activeOpacity={0.5} onPress={this.publish}>

<Image
 source={require('./Diagnose.png')}
 style={styles.ImageIconStyle}
 />

</TouchableOpacity>
);
};
renderTwo() {
return(
<TouchableOpacity style={styles.TwoStyle} activeOpacity={0.5} onPress={this._onPressButton}>

<Image
source={require('./Call.png')}
style={styles.ImageIconStyle}
/>

<View style={styles.SeparatorLine} />

<Text style={styles.TextStyle}> Lung Diagnosis </Text>

</TouchableOpacity>
);
};
renderThree() {
return(
<TouchableOpacity style={styles.TwoStyle} activeOpacity={0.5} onPress={this._onPressButtonR}>

<Image
source={require('./Talk.png')}
style={styles.ImageIconStyle}
/>

<View style={styles.SeparatorLine} />

<Text style={styles.TextStyle}> Talk to a Professional </Text>

</TouchableOpacity>
);
};
renderFive() {
return(
<TouchableOpacity style={styles.TwoStyle} activeOpacity={0.5} onPress={this._onPressButtonG}>

<Image
source={require('./Emergency.png')}
style={styles.ImageIconStyle}
/>

<View style={styles.SeparatorLine} />

<Text style={styles.TextStyle}> Talk to a Professional </Text>

</TouchableOpacity>
);
};
  render(){
    return(
      <ScrollView>
    <Text> {"\n"} </Text>
      {this.renderOne()}
        <Text> {"\n"} </Text>
        {this.renderFive()}
      <Text> {"\n"} </Text>
      {this.renderThree()}
      <Text> {"\n"} </Text>
      {this.renderTwo()}
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
   padding: 0,
   margin: 0,
   height: 100,
   width: 405,
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

export default Choice;
