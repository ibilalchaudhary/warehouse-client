import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Headings from '../Components/Headings';
import {DARK, PRIMARY, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';
import InputBox from '../Components/InputBox';
import Logo from '../Components/Logo';
import Header from '../Components/Header';

export default class ChangePasswordScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <Header
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />

        <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
          <View
            style={{
              display: 'flex',
              padding: 10,
              alignItems: 'center',
            }}>
            <Logo />
          </View>

          <View style={{marginVertical: 20, marginTop: 60}}>
            <Headings text="Change Password" />
          </View>

          <InputBox
            variant="primary"
            placeholder="Old Password"
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={16.192}
                height={16.922}
                viewBox="0 0 11.192 14.922">
                <Path
                  data-name="Path 293"
                  d="M9.793 14.923H1.4a1.4 1.4 0 01-1.4-1.4V6.996a1.4 1.4 0 011.4-1.4h8.394a1.4 1.4 0 011.4 1.4v6.529a1.4 1.4 0 01-1.401 1.398zM1.4 6.529a.467.467 0 00-.466.466v6.529a.467.467 0 00.466.466h8.394a.467.467 0 00.466-.466V6.996a.467.467 0 00-.466-.466z"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 294"
                  d="M8.86 6.529a.466.466 0 01-.466-.466V3.731a2.8 2.8 0 10-5.6 0v2.331a.467.467 0 01-.933 0V3.731a3.731 3.731 0 117.461 0v2.331a.466.466 0 01-.462.467z"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 295"
                  d="M5.596 10.57A1.244 1.244 0 116.84 9.326a1.245 1.245 0 01-1.244 1.244zm0-1.554a.311.311 0 10.311.311.311.311 0 00-.311-.311z"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 296"
                  d="M5.596 12.436a.466.466 0 01-.466-.466v-1.71a.467.467 0 11.933 0v1.71a.466.466 0 01-.467.466z"
                  fill="#4571b0"
                />
              </Svg>
            }
          />
          <InputBox
            variant="primary"
            placeholder="New Password"
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={16.192}
                height={16.922}
                viewBox="0 0 11.192 14.922">
                <Path
                  data-name="Path 293"
                  d="M9.793 14.923H1.4a1.4 1.4 0 01-1.4-1.4V6.996a1.4 1.4 0 011.4-1.4h8.394a1.4 1.4 0 011.4 1.4v6.529a1.4 1.4 0 01-1.401 1.398zM1.4 6.529a.467.467 0 00-.466.466v6.529a.467.467 0 00.466.466h8.394a.467.467 0 00.466-.466V6.996a.467.467 0 00-.466-.466z"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 294"
                  d="M8.86 6.529a.466.466 0 01-.466-.466V3.731a2.8 2.8 0 10-5.6 0v2.331a.467.467 0 01-.933 0V3.731a3.731 3.731 0 117.461 0v2.331a.466.466 0 01-.462.467z"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 295"
                  d="M5.596 10.57A1.244 1.244 0 116.84 9.326a1.245 1.245 0 01-1.244 1.244zm0-1.554a.311.311 0 10.311.311.311.311 0 00-.311-.311z"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 296"
                  d="M5.596 12.436a.466.466 0 01-.466-.466v-1.71a.467.467 0 11.933 0v1.71a.466.466 0 01-.467.466z"
                  fill="#4571b0"
                />
              </Svg>
            }
          />
          <InputBox
            variant="primary"
            placeholder="Confirm Password"
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={16.192}
                height={16.922}
                viewBox="0 0 11.192 14.922">
                <Path
                  data-name="Path 293"
                  d="M9.793 14.923H1.4a1.4 1.4 0 01-1.4-1.4V6.996a1.4 1.4 0 011.4-1.4h8.394a1.4 1.4 0 011.4 1.4v6.529a1.4 1.4 0 01-1.401 1.398zM1.4 6.529a.467.467 0 00-.466.466v6.529a.467.467 0 00.466.466h8.394a.467.467 0 00.466-.466V6.996a.467.467 0 00-.466-.466z"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 294"
                  d="M8.86 6.529a.466.466 0 01-.466-.466V3.731a2.8 2.8 0 10-5.6 0v2.331a.467.467 0 01-.933 0V3.731a3.731 3.731 0 117.461 0v2.331a.466.466 0 01-.462.467z"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 295"
                  d="M5.596 10.57A1.244 1.244 0 116.84 9.326a1.245 1.245 0 01-1.244 1.244zm0-1.554a.311.311 0 10.311.311.311.311 0 00-.311-.311z"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 296"
                  d="M5.596 12.436a.466.466 0 01-.466-.466v-1.71a.467.467 0 11.933 0v1.71a.466.466 0 01-.467.466z"
                  fill="#4571b0"
                />
              </Svg>
            }
          />

          <View style={{marginVertical: 40, marginTop: 100}}>
            <Buttons
              placeholder="Save Password"
              onPress={() => {
                navigation.navigate('OTP');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
