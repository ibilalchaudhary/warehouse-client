import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {DARK, PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';

export default class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  render() {
    if (this.props.variant === 'primary') {
      return (
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: 50,
            borderRadius: 8,
            backgroundColor: WHITE,
            marginTop: 12,
            borderColor: this.state.focus ? PRIMARY : '#ffffff',
            borderWidth: 1,
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              marginLeft: 16,
            }}>
            {this.props.svg}
          </View>
          <TextInput
            secureTextEntry={this.props.secureTextEntry}
            placeholder="Email"
            placeholderTextColor={SECONDARY}
            style={{
              marginLeft: 16,
              width: '100%',
              color: DARK,
            }}
            onFocus={() => {
              this.setState({
                focus: true,
              });
            }}
            onBlur={() => {
              this.setState({
                focus: false,
              });
            }}
          />
        </TouchableOpacity>
      );
    }
  }
}
