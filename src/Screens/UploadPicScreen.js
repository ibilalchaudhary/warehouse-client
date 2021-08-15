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
import {DARK, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';

export default class UploadPicScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: WHITE, width: width, height: height}}>
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
              <Text style={{fontSize: 28, fontWeight: 'bold'}}>WareHouse</Text>
            </View>
            <View style={{marginTop: 30}}></View>
            <Headings text="Upload Photo" />
            <View
              style={{display: 'flex', alignItems: 'center', marginTop: 35}}>
              <Image
                source={require('../Assets/userPic.png')}
                style={{width: 150, height: 150}}
              />
            </View>
            <TouchableOpacity style={{left: 180, top: -30}}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25.5}
                viewBox="0 0 36 31.5">
                <Path
                  data-name="Icon awesome-camera"
                  d="M36 7.875v20.25a3.376 3.376 0 01-3.375 3.375H3.375A3.376 3.376 0 010 28.125V7.875A3.376 3.376 0 013.375 4.5h6.188l.865-2.313A3.37 3.37 0 0113.584 0h8.824a3.37 3.37 0 013.157 2.187l.872 2.313h6.188A3.376 3.376 0 0136 7.875zM26.438 18A8.438 8.438 0 1018 26.438 8.444 8.444 0 0026.438 18zm-2.25 0A6.188 6.188 0 1118 11.813 6.2 6.2 0 0124.188 18z"
                  fill={WHITE}
                />
              </Svg>
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
