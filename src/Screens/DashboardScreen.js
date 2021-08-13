import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
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
import {height, width} from '../Constants/Dimensions';
import InputBox from '../Components/InputBox';

export default class DashboardScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: WHITE, width: width, height: height}}>
        <ImageBackground
          source={require('../Assets/main__background.png')}
          style={{
            height: height,
            flex: 1,
            marginVertical: 24,
          }}>
          <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{display: 'flex', color: DISABLE, fontSize: 16}}>
                  Lahore
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: TEXT_COLOR,
                  }}>
                  Pakistan
                </Text>
              </View>
              <TouchableOpacity>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22.476}
                  height={22.15}
                  viewBox="0 0 22.476 26.15">
                  <G
                    data-name="Icon ionic-ios-notifications-outline"
                    fill="#7b7b7b">
                    <Path
                      data-name="Path 2322"
                      d="M13.595 22.424a.911.911 0 00-.893.717 1.762 1.762 0 01-.352.766 1.329 1.329 0 01-1.132.415 1.351 1.351 0 01-1.132-.415 1.762 1.762 0 01-.352-.766.911.911 0 00-.893-.717.917.917 0 00-.893 1.118 3.142 3.142 0 003.27 2.609 3.136 3.136 0 003.27-2.609.92.92 0 00-.893-1.118z"
                    />
                    <Path
                      data-name="Path 2323"
                      d="M22.194 19.044c-1.083-1.3-3.213-2.07-3.213-7.912 0-6-2.9-8.407-5.6-8.985-.253-.058-.436-.135-.436-.379v-.186A1.652 1.652 0 0011.26 0h-.042a1.652 1.652 0 00-1.687 1.581v.189c0 .238-.183.321-.436.379-2.707.585-5.6 2.989-5.6 8.985 0 5.842-2.13 6.6-3.213 7.912A1.272 1.272 0 001.4 21.09h19.697a1.271 1.271 0 001.097-2.046zm-2.742.373H3.055a.28.28 0 01-.232-.469A7.735 7.735 0 004.3 16.801a13.447 13.447 0 001.005-5.669 9.2 9.2 0 011.47-5.579 4.541 4.541 0 012.72-1.773 2.526 2.526 0 001.308-.675.591.591 0 01.837-.013 2.615 2.615 0 001.322.688 4.541 4.541 0 012.721 1.774 9.2 9.2 0 011.47 5.579 13.447 13.447 0 001.005 5.669 7.832 7.832 0 001.512 2.179.264.264 0 01-.218.436z"
                    />
                  </G>
                </Svg>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 6,
                    backgroundColor: PRIMARY,
                    top: -20,
                    right: -12,
                  }}></View>
              </TouchableOpacity>
            </View>
            <InputBox
              variant="Search"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.816}
                  height={20.652}
                  viewBox="0 0 25.816 23.652">
                  <G fill="#fff">
                    <Path
                      data-name="Path 2315"
                      d="M24.806 2.166H9.425a3.172 3.172 0 00-6.015 0h-2.4a1.01 1.01 0 000 2.02h2.4a3.172 3.172 0 006.015 0h15.38a1.01 1.01 0 100-2.02zM6.418 4.326a1.153 1.153 0 111.153-1.153 1.155 1.155 0 01-1.153 1.153z"
                    />
                    <Path
                      data-name="Path 2316"
                      d="M24.806 10.816h-2.4a3.172 3.172 0 00-6.015 0H1.01a1.01 1.01 0 000 2.02h15.38a3.172 3.172 0 006.015 0h2.4a1.01 1.01 0 100-2.02zm-5.408 2.163a1.153 1.153 0 111.153-1.153 1.155 1.155 0 01-1.153 1.153z"
                    />
                    <Path
                      data-name="Path 2317"
                      d="M24.806 19.469H13.752a3.172 3.172 0 00-6.015 0H1.01a1.01 1.01 0 000 2.02h6.723a3.172 3.172 0 006.015 0h11.058a1.01 1.01 0 100-2.02zm-14.061 2.163a1.153 1.153 0 111.153-1.153 1.155 1.155 0 01-1.153 1.154z"
                    />
                  </G>
                </Svg>
              }
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
