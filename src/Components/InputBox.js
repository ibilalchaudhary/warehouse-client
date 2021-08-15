import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {
  DARK,
  DISABLE,
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';

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
            marginVertical: 10,
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
            placeholder={this.props.placeholder}
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
    } else if (this.props.variant === 'Search') {
      return (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              height: 50,
              marginTop: 12,
              borderRadius: 8,
              alignContent: 'center',
              backgroundColor: INPUT_BG,
            }}>
            <TextInput
              style={{width: '80%', color: TEXT_COLOR}}
              placeholder="Search here"
              placeholderTextColor={SECONDARY}
              marginLeft={12}
              placeholderTextColor={SECONDARY}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.355}
                height={20.355}
                viewBox="0 0 21.355 21.355">
                <G
                  data-name="Icon feather-search"
                  fill="none"
                  stroke="#797977"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}>
                  <Path
                    data-name="Path 706"
                    d="M17.263 9.382A7.882 7.882 0 119.382 1.5a7.882 7.882 0 017.881 7.882z"
                  />
                  <Path data-name="Path 707" d="M19.234 19.234l-4.286-4.286" />
                </G>
              </Svg>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 8,
              marginTop: 12,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              backgroundColor: PRIMARY,
            }}>
            {this.props.svg}
          </TouchableOpacity>
        </View>
      );
    }
  }
}
