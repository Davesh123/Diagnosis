import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class App extends Component {
    state = {
      cameraRollStatus: '',
      cameraStatus: '',
      testmsg: ''
    }
    _pickCamera = async () => {

      this.setState({testmsg: 'forcing refresh'});

    const permissions = Permissions.CAMERA;
    const permissions2 = Permissions.CAMERA_ROLL
    const status = await Permissions.askAsync(permissions);
    const status2 = await Permissions.askAsync(permissions2);


  this.setState({cameraStatus: status.status});
  this.setState({cameraRollStatus: status2.status})
   console.log('Permission =>', permissions);
   console.log('Status => ', status);

    if (status.status !== 'granted' && status2.status !=='granted') {

   console.log(`[ pickFromCamera ] ${permissions} access: ${status.status}`);
   console.log(`[ pickFromCamera ] ${permissions2} access: ${status2.status}`);

    } else {
      let image = await ImagePicker.launchCameraAsync().catch(error => console.log({ error }));
      console.log(image.uri);
      const File = image.uri;
      console.log(File);
      //firebase.storage().ref().child("hello").put(File);
      Actions.Four();

  }
 };

  render() {
    return (
      <TouchableOpacity
      style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}}
      onPress={() => this._pickCamera()}>
        <Text style={{color: 'blue'}}>
          Click to open Camera
        </Text>
        <Text>
       Permission(Camera): {this.state.cameraStatus}
       </Text>
       <Text>
       Permission(CameraRoll): {this.state.cameraRollStatus}
       </Text>
      </TouchableOpacity>
    );
  }
}
