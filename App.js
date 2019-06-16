import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import { Router, Scene } from 'react-native-router-flux';
import Home  from './components/Home';
import Chat  from './components/Chat';
import Direction  from './components/Direction.js';
import Directio  from './components/Directio.js';
import Directi  from './components/Directi.js';
import Direct  from './components/Direct.js';
import Direc  from './components/Direc.js';
import LandingPage from './components/LandingPage.js';
import Choice from './components/Choice.js';
import LoginForm from './components/LoginForm.js';
import CreateAnAccount from './components/CreateAnAccount';
import CameraPage from './components/RecordVideoScreenContainer/camera.page.js';
import Camera2 from './components/Two/camera.page.js';
import Camera3 from './components/Three/camera.page.js';
import Camera4 from './components/Four/camera.page.js';
import { Actions } from 'react-native-router-flux';
import List from './components/List.js';
import One from './components/One.js';
import Two from './components/Two.js';
import Three from './components/Three.js';
import Topics from './components/Topics.js';
import Four from './components/Four.js';
import LandingOne from './components/LandingOne.js';
import LandingTwo from './components/LandingTwo.js';
import LandingThree from './components/LandingThree.js';
import LandingFour from './components/LandingFour.js';
import LandingFive from './components/LandingFive.js';
import LandingSix from './components/LandingSix.js';
import LandingSeven from './components/LandingSeven.js';
import LandingEight from './components/LandingEight.js';
import LandingNine from './components/LandingNine.js';
import DumbPeople from './components/DumbPeople.js';


export default class App extends Component {
  render() {
    return (
    <Router>
      <Scene key="root" hideNavBar>
      <Scene key="home">
        <Scene key='home' title='Home' component={Home}/>
      </Scene>
      <Scene key="Login">
        <Scene key='Login Form' rightTitle="New User" onRight={() => {Actions.Create()}} title='Login' component={LoginForm}/>
        <Scene key="Create" component={CreateAnAccount} title="Create An Account"/>
      </Scene>
      <Scene key="CameraPage">
        <Scene key='CameraPage' title='Take a Picture' component={CameraPage}/>
      </Scene>
      <Scene key="Camera2">
        <Scene key='Camera2' title='Take a Picture' component={Camera2}/>
      </Scene>
      <Scene key="Camera3">
        <Scene key='Camera3' title='Take a Picture' component={Camera3}/>
      </Scene>
      <Scene key="Camera4">
        <Scene key='Camera4' title='Take a Picture' component={Camera4}/>
      </Scene>

      <Scene key="Choice">
        <Scene key='Choice' title='Please Choose an Option' component={Choice}/>
        <Scene key='Topics' title='What Area of the Body Hurts?' component={Topics}/>
        <Scene key='Direction' title='Head Symptoyms' component={Direction}/>
        <Scene key='LandingSix' title='IDK' component={LandingSix}/>
        <Scene key='Topics' title='What Area of the Body Hurts?' component={Topics}/>
        <Scene key='Directio' title='Upper Body Symptoyms' component={Directio}/>
        <Scene key='LandingSeven' title='IDK' component={LandingSeven}/>
        <Scene key='Topics' title='What Area of the Body Hurts?' component={Topics}/>
        <Scene key='Directi' title='Stomach Symptoyms' component={Directi}/>
        <Scene key='LandingEight' title='IDK' component={LandingEight}/>
        <Scene key='Topics' title='What Area of the Body Hurts?' component={Topics}/>
        <Scene key='Direct' title='Lower Body Symptoyms' component={Direct}/>
        <Scene key='LandingNine' title='IDK' component={LandingNine}/>
        <Scene key='Topics' title='What Area of the Body Hurts?' component={Topics}/>
        <Scene key='Direc' title='Feet Symptoyms' component={Direc}/>
        <Scene key='Choice' title='Please Choose an Option' component={Choice}/>
        <Scene key='chat' title='Chat' component={Chat}/>
        <Scene key='Choice' title='Please Choose an Option' component={Choice}/>
        <Scene key='Main' title='Take a Picture' component={List}/>
        <Scene key='Choice' title='Please Choose an Option' component={Choice}/>
        <Scene key='DumbPeople' title='Calling' component={DumbPeople}/>
        <Scene key='Choice' title='Please Choose an Option' component={Choice}/>
        <Scene key='LandingFive' title='CPR Information' component={LandingFive}/>
      </Scene>
      <Scene key="One">
        <Scene leftTitle="Back" onLeft={() => {Actions.Choice()}} rightTitle="New" onRight={() => {Actions.Camera2()}} key='One' title='List of Photos' component={One}/>
        <Scene key='LandingOne' title='List of Photos' component={LandingOne}/>
      </Scene>
      <Scene key="Two">
        <Scene leftTitle="Back" onLeft={() => {Actions.Choice()}} rightTitle="New" onRight={() => {Actions.Camera3()}} key='Two' title='List of Photos' component={Two}/>
        <Scene key='LandingTwo' title='List of Photos' component={LandingTwo}/>
      </Scene>
      <Scene key="Three">
        <Scene leftTitle="Back" onLeft={() => {Actions.Choice()}} rightTitle="New" onRight={() => {Actions.Camera4()}} key='Three' title='List of Photos' component={Three}/>
        <Scene key='LandingThree' title='List of Photos' component={LandingThree}/>
      </Scene>
      <Scene key="Four">
        <Scene  leftTitle="Back" onLeft={() => {Actions.Choice()}} rightTitle="New" onRight={() => {Actions.Camera2()}} key='Four' title='List of Photos' component={Four}/>
        <Scene key='LandingFour' title='List of Photos' component={LandingFour}/>
      </Scene>
      </Scene>
    </Router>
    );
  }
}
