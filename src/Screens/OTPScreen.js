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
import {DARK, PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';
import CodeInput from 'react-native-confirmation-code-input';

export default class OTPScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: WHITE, width: width, height: height}}>
        <ImageBackground
          style={{height: height, flex: 1, paddingHorizontal: 18}}
          source={require('../Assets/Signup__bg.png')}>
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                display: 'flex',
                padding: 50,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 28, fontWeight: 'bold'}}>WareHouse</Text>
            </View>
            <View style={{marginTop: 30}}></View>

            <View
              style={{display: 'flex', alignItems: 'center', marginTop: 35}}>
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
              codeLength="4"
              inputPosition="center"
              size={50}
              onFulfill={isValid => this._onFinishCheckingCode1(isValid)}
              containerStyle={{marginTop: 60}}
              codeInputStyle={{borderWidth: 1.5}}
            />
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 16,
              }}>
              <Text
                style={{
                  color: PRIMARY,
                  textDecorationLine: 'underline',
                  marginRight: 6,
                }}>
                Resend OTP
              </Text>
              <Text style={{color: PRIMARY}}>12:04</Text>
            </TouchableOpacity>
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
      </View>
    );
  }
}
