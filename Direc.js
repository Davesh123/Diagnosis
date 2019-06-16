import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, View, Text, Alert } from 'react-native';

class Direction extends Component {
  publish=()=>{
   Actions.One({text: this.props.text, Patient: this.props.Patient });
 }
 constructor(props) {
   super(props);
   this.state = { pressStatus: false };
   this.state = { pressStatus2: false };
   this.state = { pressStatus3: false };
   this.state = { pressStatus4: false };
   this.state = { pressStatus5: false };
   this.state = { pressStatus6: false };
   this.state = { pressStatus7: false };
   this.state = { pressStatus8: false };
   this.state = { pressStatus9: false };
   this.state = { pressStatus10: false };
   this.state = { pressStatus11: false };
   this.state = { pressStatus12: false };
   this.state = { pressStatus13: false };
   this.state = { pressStatus14: false };
   this.state = { pressStatus15: false };
   this.state = { pressStatus16: false };
   this.state = { pressStatus17: false };
   this.state = { pressStatus18: false };
   this.state = { pressStatus19: false };
   this.state = { pressStatus20: false };
   this.state = { pressStatus21: false };
   this.state = { pressStatus22: false };
   this.state = { pressStatus23: false };
   this.state = { pressStatus24: false };
   this.state = { pressStatus25: false };
   this.state = { pressStatus26: false };
   this.state = { pressStatus27: false };

 }
 _onPressButton=()=>{
  this.setState({
      backgroundColor: 'green'
    })
 }
 _onHideUnderlay() {
   this.setState({ pressStatus: false });
 }
 _onShowUnderlay() {
   this.setState({ pressStatus: true });
 }
 _onHideUnderlay2() {
   this.setState({ pressStatus: false });
 }
 _onShowUnderlay2() {
   this.setState({ pressStatus: true });
 }
 _onHideUnderlay3() {
   this.setState({ pressStatus3: false });
 }
 _onShowUnderlay3() {
   this.setState({ pressStatus3: true });
 }
 _onHideUnderlay4() {
   this.setState({ pressStatus4: false });
 }
 _onShowUnderlay4() {
   this.setState({ pressStatus4: true });
 }
 _onHideUnderlay5() {
   this.setState({ pressStatus5: false });
 }
 _onShowUnderlay5() {
   this.setState({ pressStatus5: true });
 }
 _onHideUnderlay6() {
   this.setState({ pressStatus6: false });
 }
 _onShowUnderlay6() {
   this.setState({ pressStatus6: true });
 }
 _onHideUnderlay7() {
   this.setState({ pressStatus7: false });
 }
 _onShowUnderlay7() {
   this.setState({ pressStatus7: true });
 }
 _onHideUnderlay8() {
   this.setState({ pressStatus8: false });
 }
 _onShowUnderlay8() {
   this.setState({ pressStatus8: true });
 }
 _onHideUnderlay9() {
   this.setState({ pressStatus9: false });
 }
 _onShowUnderlay9() {
   this.setState({ pressStatus9: true });
 }
 _onHideUnderlay10() {
   this.setState({ pressStatus10: false });
 }
 _onShowUnderlay10() {
   this.setState({ pressStatus10: true });
 }
 _onHideUnderlay11() {
   this.setState({ pressStatus11: false });
 }
 _onShowUnderlay11() {
   this.setState({ pressStatus11: true });
 }
 _onHideUnderlay12() {
   this.setState({ pressStatus12: false });
 }
 _onShowUnderlay12() {
   this.setState({ pressStatus12: true });
 }
 _onHideUnderlay13() {
   this.setState({ pressStatus13: false });
 }
 _onShowUnderlay13() {
   this.setState({ pressStatus13: true });
 }
 _onHideUnderlay14() {
   this.setState({ pressStatus14: false });
 }
 _onShowUnderlay14() {
   this.setState({ pressStatus14: true });
 }
 _onHideUnderlay15() {
   this.setState({ pressStatus15: false });
 }
 _onShowUnderlay15() {
   this.setState({ pressStatus15: true });
 }
 _onHideUnderlay16() {
   this.setState({ pressStatus16: false });
 }
 _onShowUnderlay16() {
   this.setState({ pressStatus16: true });
 }
 _onHideUnderlay17() {
   this.setState({ pressStatus17: false });
 }
 _onShowUnderlay17() {
   this.setState({ pressStatus17: true });
 }
 _onHideUnderlay18() {
   this.setState({ pressStatus18: false });
 }
 _onShowUnderlay18() {
   this.setState({ pressStatus18: true });
 }
 _onHideUnderlay19() {
   this.setState({ pressStatus19: false });
 }
 _onShowUnderlay19() {
   this.setState({ pressStatus19: true });
 }
 _onHideUnderlay20() {
   this.setState({ pressStatus20: false });
 }
 _onShowUnderlay20() {
   this.setState({ pressStatus20: true });
 }
 _onHideUnderlay21() {
   this.setState({ pressStatus21: false });
 }
 _onShowUnderlay21() {
   this.setState({ pressStatus21: true });
 }
 _onHideUnderlay22() {
   this.setState({ pressStatus22: false });
 }
 _onShowUnderlay22() {
   this.setState({ pressStatus22: true });
 }
 _onHideUnderlay23() {
   this.setState({ pressStatus23: false });
 }
 _onShowUnderlay23() {
   this.setState({ pressStatus23: true });
 }

 _onHideUnderlay24() {
   this.setState({ pressStatus24: false });
 }
 _onShowUnderlay24() {
   this.setState({ pressStatus24: true });
 }
 _onHideUnderlay25() {
   this.setState({ pressStatus25: false });
 }
 _onShowUnderlay25() {
   this.setState({ pressStatus25: true });
 }
 _onHideUnderlay26() {
   this.setState({ pressStatus26: false });
 }
 _onShowUnderlay26() {
   this.setState({ pressStatus26: true });
 }
 _onHideUnderlay27() {
   this.setState({ pressStatus27: false });
 }
 _onShowUnderlay27() {
   this.setState({ pressStatus27: true });
 }
 renderOne() {
 return(
  <TouchableOpacity activeOpacity={1}
                  style={
                      this.state.pressStatus
                          ? styles.GreenStyle
                          : styles.OneStyle
                  } onPress={this._onShowUnderlay.bind(this)} onLongPress={this._onHideUnderlay.bind(this)}>

 <Image
 source={require('./Abdominal.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Abdominal pain </Text>

 </TouchableOpacity>
 );
 };
 renderTwo() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus2
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay2.bind(this)} onLongPress={this._onHideUnderlay2.bind(this)}>

 <Image
 source={require('./Blood.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Blood in stool </Text>

 </TouchableOpacity>
 );
 };
 renderThree() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus3
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay3.bind(this)} onLongPress={this._onHideUnderlay3.bind(this)}>

 <Image
 source={require('./Chest.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />


 <Text style={styles.TextStyle}> Chest pain </Text>

 </TouchableOpacity>
 );
 };
 renderFour() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus4
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay4.bind(this)} onLongPress={this._onHideUnderlay4.bind(this)}>

 <Image
 source={require('./Constipation.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Constipation </Text>

 </TouchableOpacity>
 );
 };
 renderFive() {
 return(
 <TouchableOpacity activeOpacity={1}
               style={
                   this.state.pressStatus5
                       ? styles.GreenStyle
                       : styles.OneStyle
               } onPress={this._onShowUnderlay5.bind(this)} onLongPress={this._onHideUnderlay5.bind(this)}>

 <Image
 source={require('./Cough.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Cough </Text>

 </TouchableOpacity>
 );
 };
 renderSix() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus6
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay6.bind(this)} onLongPress={this._onHideUnderlay6.bind(this)}>

 <Image
 source={require('./Diarrhea.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Diarrhea </Text>

 </TouchableOpacity>
 );
 };
 renderSeven() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus7
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay7.bind(this)} onLongPress={this._onHideUnderlay7.bind(this)}>

 <Image
 source={require('./Difficulty.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Difficulty Swallowing </Text>

 </TouchableOpacity>
 );
 };
 renderEight() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus8
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay8.bind(this)} onLongPress={this._onHideUnderlay8.bind(this)}>

 <Image
 source={require('./Dizziness.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Dizziness </Text>

 </TouchableOpacity>
 );
 };
 renderNine() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus9
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay9.bind(this)} onLongPress={this._onHideUnderlay9.bind(this)}>

 <Image
 source={require('./Eye.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Eye Discomfort and Redness </Text>

 </TouchableOpacity>
 );
 };
 renderTen() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus10
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay10.bind(this)} onLongPress={this._onHideUnderlay10.bind(this)}>

 <Image
 source={require('./Eye2.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Eye Problems </Text>

 </TouchableOpacity>
 );
 };
 renderEleven() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus11
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay11.bind(this)} onLongPress={this._onHideUnderlay11.bind(this)}>

 <Image
 source={require('./Foot.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Foot or Ankle Pain </Text>

 </TouchableOpacity>
 );
 };
 renderTwelve() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus12
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay12.bind(this)} onLongPress={this._onHideUnderlay12.bind(this)}>

 <Image
 source={require('./Foot2.jpeg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Foot Swelling or Leg Swelling </Text>

 </TouchableOpacity>
 );
 };
 renderThirteen() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus13
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay13.bind(this)} onLongPress={this._onHideUnderlay13.bind(this)}>

 <Image
 source={require('./Headaches.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Headaches </Text>

 </TouchableOpacity>
 );
 };
 renderFourteen() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus14
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay14.bind(this)} onLongPress={this._onHideUnderlay14.bind(this)}>

 <Image
 source={require('./Heart.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Heart Palpitations </Text>

 </TouchableOpacity>
 );
 };
 renderFifteen() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus15
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay15.bind(this)} onLongPress={this._onHideUnderlay15.bind(this)}>

 <Image
 source={require('./Hip.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Hip Pain </Text>

 </TouchableOpacity>
 );
 };
 renderSixteen() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus16
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay16.bind(this)} onLongPress={this._onHideUnderlay16.bind(this)}>

 <Image
 source={require('./Knee.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Knee Pain </Text>

 </TouchableOpacity>
 );
 };
 renderSeventeen() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus17
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay17.bind(this)} onLongPress={this._onHideUnderlay17.bind(this)}>

 <Image
 source={require('./Low.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Low Back Pain </Text>

 </TouchableOpacity>
 );
 };
 renderEighteen() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus18
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay18.bind(this)} onLongPress={this._onHideUnderlay18.bind(this)}>

 <Image
 source={require('./Nausea.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Nausea Congestion </Text>

 </TouchableOpacity>
 );
 };
 renderNineteen() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus19
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay19.bind(this)} onLongPress={this._onHideUnderlay19.bind(this)}>

 <Image
 source={require('./Neck.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Neck Pain </Text>

 </TouchableOpacity>
 );
 };
 renderTwenty() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus20
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay20.bind(this)} onLongPress={this._onHideUnderlay20.bind(this)}>

 <Image
 source={require('./Numbness.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Numbness or Tingling in Hands </Text>

 </TouchableOpacity>
 );
 };
 renderTwentyOne() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus21
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay21.bind(this)} onLongPress={this._onHideUnderlay21.bind(this)}>

 <Image
 source={require('./Shortness.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Pelvic Pain: Female </Text>

 </TouchableOpacity>
 );
 };
 renderTwentyTwo() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus22
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay22.bind(this)} onLongPress={this._onHideUnderlay22.bind(this)}>

 <Image
 source={require('./Numbness.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Pelvic Pain: Male </Text>

 </TouchableOpacity>
 );
 };
 renderTwentyThree() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus23
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay23.bind(this)} onLongPress={this._onHideUnderlay23.bind(this)}>

 <Image
 source={require('./Shortness.png')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Shortness of Breath </Text>

 </TouchableOpacity>
 );
 };
 renderTwentyFour() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus24
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay24.bind(this)} onLongPress={this._onHideUnderlay24.bind(this)}>

 <Image
 source={require('./Shoulder.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Shoulder Pain </Text>

 </TouchableOpacity>
 );
 };
 renderTwentyFive() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus25
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay25.bind(this)} onLongPress={this._onHideUnderlay25.bind(this)}>

 <Image
 source={require('./Sore.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Sore Throat </Text>

 </TouchableOpacity>
 );
 };
 renderTwentySix() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus26
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay26.bind(this)} onLongPress={this._onHideUnderlay26.bind(this)}>

 <Image
 source={require('./Urinary.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Urinary problems </Text>

 </TouchableOpacity>
 );
 };
 renderTwentySeven() {
 return(
 <TouchableOpacity activeOpacity={1}
                 style={
                     this.state.pressStatus27
                         ? styles.GreenStyle
                         : styles.OneStyle
                 } onPress={this._onShowUnderlay27.bind(this)} onLongPress={this._onHideUnderlay27.bind(this)}>

 <Image
 source={require('./Wheezing.jpg')}
 style={styles.ImageIconStyle}
 />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Wheezing </Text>

 </TouchableOpacity>
 );
 };
  render(){
    return(
      <ScrollView>
      {this.renderEleven()}
      {this.renderTwelve()}
      {this.renderSixteen()}
      <Button> Done </Button>
      <Text> {"\n"} </Text>
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
  GreenStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#49DA54',
    borderWidth: .5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 5 ,
    margin: 5,

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

export default Direction;
