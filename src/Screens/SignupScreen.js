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
import {DARK, SECONDARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import InputBox from '../Components/InputBox';

export default class SignupScreen extends Component {
  render() {
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
            <Headings text="Sign Up" />
            <InputBox
              variant="primary"
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
                      fill="#27ae61"
                    />
                  </G>
                </Svg>
              }
            />

            <InputBox
              variant="primary"
              secureTextEntry={true}
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
                      fill="#27ae61"
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
