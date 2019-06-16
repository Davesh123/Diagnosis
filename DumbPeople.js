/*Example to make a call from the React Native App*/
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import call from 'react-native-phone-call';

export default class DumbPeople extends React.Component {
  call = () => {
    //handler to make a call
    const args = {
      number: '9293936703',
      prompt: false,
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Make a Call" onPress={this.call} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
