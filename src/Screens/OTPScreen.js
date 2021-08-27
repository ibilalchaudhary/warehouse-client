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
import {DARK, INPUT_BG, PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';
import Logo from '../Components/Logo';
import CodeInput from 'react-native-confirmation-code-input';
import Header from '../Components/Header';

export default class OTPScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <Header />
        <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
          <View
            style={{
              display: 'flex',
              padding: 10,
              alignItems: 'center',
            }}>
            <Logo />
          </View>
          <View style={{marginTop: 30}}></View>

          <View style={{display: 'flex', alignItems: 'center', marginTop: 35}}>
            <Image
              source={require('../Assets/userPic.png')}
              style={{width: 150, height: 150}}
            />
          </View>
          <CodeInput
            ref="codeInputRef2"
            activeColor={PRIMARY}
            inactiveColor={SECONDARY}
            autoFocus={false}
            codeLength={4}
            inputPosition="center"
            size={50}
            onFulfill={() => {}}
            containerStyle={{marginTop: 60}}
            codeInputStyle={{borderRadius: 8, backgroundColor: INPUT_BG}}
            keyboardType="number-pad"
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 12,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: PRIMARY,
                  textDecorationLine: 'underline',
                  marginRight: 6,
                }}>
                Resend OTP
              </Text>
            </TouchableOpacity>
            <Text style={{color: PRIMARY}}>12s</Text>
          </View>
          <View style={{marginVertical: 60}}>
            <Buttons
              placeholder="Save"
              onPress={() => {
                navigation.navigate('Signin');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
