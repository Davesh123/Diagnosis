//Importing Libraries from React Native and My Other Components
import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import { AccountUpdate, AccountCreate } from '../actions';
import { Card, CardSection, Input, Button} from './common';
import { Actions } from 'react-native-router-flux';
//The following fgives input to creat your own account
class CreateAnAccount extends Component {
  onButtonPress() {
      const {FullName, Email, Password, LibraryCardNumber, Role } = this.props;
      this.props.AccountCreate({ FullName, Email, Password, LibraryCardNumber, Role });
  }


  render() {
    return (

      <Card>
        <CardSection>
          <Input
            label="Full Name:"
            placeholder="John Smith"
            value={this.props.FullName}
            onChangeText={text => this.props.AccountUpdate({ prop:'FullName', value: text })}
          />
        </CardSection>

        <CardSection>
        <Input
          label="Email:"
          placeholder="example@gmail.com"
          value={this.props.Email}
          onChangeText={text => this.props.AccountUpdate({ prop:'Email', value: text })}
        />
        </CardSection>

        <CardSection>
        <Input
          label="Password:"
          placeholder="password"
          value={this.props.Password}
          onChangeText={text => this.props.AccountUpdate({ prop:'Password', value: text })}
        />
        </CardSection>

        <CardSection>
        <Input
          label="Phone Number:"
          placeholder="123-456-7890"
          value={this.props.LibraryCardNumber}
          onChangeText={text => this.props.AccountUpdate({ prop:'LibraryCardNumber', value: text })}
        />

        </CardSection>
          <Text>{"\n"}</Text>
          <Button onPress={this.onButtonPress.bind(this)} style={{ flex:1, flexDirection: 'row', alignSelf:'center', alignItems:'center', justifyContent: 'center' }}>
            Create New Account
          </Button>
      </Card>
    );
  }
}

//After this it reads the data submitted by the user
const mapStateToProps = (state) => {
  const { FullName, Email, Password, LibraryCardNumber, Role } = state.accountForm;

  return { FullName, Email, Password, LibraryCardNumber, Role };
};

export default connect( mapStateToProps, { AccountUpdate, AccountCreate })(CreateAnAccount);
