import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {INPUT_BG} from '../Constants/Colors';

export default class Dropdown extends Component {
  state = {user: ''};
  updateUser = user => {
    this.setState({user: user});
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <>
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label={this.props.label} value={this.props.value} />
          <Picker.Item label={this.props.label} value={this.props.value} />
          <Picker.Item label={this.props.label} value={this.props.value} />
          <Picker.Item label={this.props.label} value={this.props.value} />
        </Picker>

        <Text>{this.state.user}</Text>
      </>
    );
  }
}
