import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Headings from '../Components/Headings';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {DARK, PRIMARY, SECONDARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import InputBox from '../Components/InputBox';
import Buttons from '../Components/Buttons';
import SocialLinks from '../Components/SocialLinks';
import Logo from '../Components/Logo';

export default class SigninScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
          <View
            style={{
              display: 'flex',
              padding: 50,
              alignItems: 'center',
            }}>
            <Logo />
          </View>
          <View style={{marginTop: 30}}></View>
          <Headings text="Sign In" />

          <InputBox
            variant="primary"
            placeholder="Email"
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.159}
                height={20.772}
                viewBox="0 0 19.159 12.772">
                <G data-name="Group 202">
                  <Path
                    data-name="Path 292"
                    d="M18.176 0H.983A.985.985 0 000 .982V11.79a.985.985 0 00.983.983h17.193a.985.985 0 00.983-.983V.982A.985.985 0 0018.176 0zm-.369.737l-7.663 5.748a1.027 1.027 0 01-1.13 0L1.351.737zm-4.093 6.13l4.176 5.158.014.014H1.255l.014-.014 4.175-5.158a.369.369 0 00-.573-.464L.737 11.508V1.197l7.835 5.876a1.759 1.759 0 002.014 0l7.835-5.876v10.31l-4.135-5.108a.369.369 0 00-.573.464z"
                    fill={PRIMARY}
                  />
                </G>
              </Svg>
            }
          />

          <InputBox
            variant="primary"
            placeholder="Password"
            secureTextEntry={true}
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.192}
                height={20.922}
                viewBox="0 0 11.192 14.922">
                <Path
                  data-name="Path 293"
                  d="M9.793 14.923H1.4a1.4 1.4 0 01-1.4-1.4V6.996a1.4 1.4 0 011.4-1.4h8.394a1.4 1.4 0 011.4 1.4v6.529a1.4 1.4 0 01-1.401 1.398zM1.4 6.529a.467.467 0 00-.466.466v6.529a.467.467 0 00.466.466h8.394a.467.467 0 00.466-.466V6.996a.467.467 0 00-.466-.466z"
                  fill={PRIMARY}
                />
                <Path
                  data-name="Path 294"
                  d="M8.86 6.529a.466.466 0 01-.466-.466V3.731a2.8 2.8 0 10-5.6 0v2.331a.467.467 0 01-.933 0V3.731a3.731 3.731 0 117.461 0v2.331a.466.466 0 01-.462.467z"
                  fill={PRIMARY}
                />
                <Path
                  data-name="Path 295"
                  d="M5.596 10.57A1.244 1.244 0 116.84 9.326a1.245 1.245 0 01-1.244 1.244zm0-1.554a.311.311 0 10.311.311.311.311 0 00-.311-.311z"
                  fill={PRIMARY}
                />
                <Path
                  data-name="Path 296"
                  d="M5.596 12.436a.466.466 0 01-.466-.466v-1.71a.467.467 0 11.933 0v1.71a.466.466 0 01-.467.466z"
                  fill={PRIMARY}
                />
              </Svg>
            }
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
              marginHorizontal: 6,
            }}>
            <BouncyCheckbox
              size={20}
              fillColor={PRIMARY}
              unfillColor="#FFFFFF"
              onPress={() => {}}
              text="Remember me"
              iconStyle={{borderColor: SECONDARY}}
              textStyle={{
                fontSize: 14,
                color: TEXT_COLOR,
                textDecorationLine: 'none',
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              <Text style={{textDecorationLine: 'underline'}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 33,
            }}>
            <Buttons
              placeholder="Sign In"
              onPress={() => {
                navigation.navigate('BottomTabDashboard');
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Or Sign In with</Text>
          </View>
          <SocialLinks />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
            }}>
            <Text>Don't have a account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text style={{textDecorationLine: 'underline', marginLeft: 5}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
