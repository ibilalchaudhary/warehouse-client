import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import Headings from '../Components/Headings';
import {DARK, PRIMARY, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';
import ImagePicker from 'react-native-image-crop-picker';
import Logo from '../Components/Logo';
import Header from '../Components/Header';

export default class UploadPicScreen extends Component {
  constructor() {
    super();
    this.state = {
      pickerModalVisibility: false,
    };
  }
  OpenCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }
  OpenPicker() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }
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
          <TouchableOpacity
            onPress={() => {
              this.setState({
                pickerModalVisibility: true,
              });
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              left: '55%',
              top: -32,
              backgroundColor: PRIMARY,
              width: 40,
              height: 40,
              borderRadius: 20,
            }}>
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
          <Modal
            visible={this.state.pickerModalVisibility}
            transparent={true}
            animationType="slide">
            <View style={{justifyContent: 'flex-end', flex: 1}}>
              <View
                style={{
                  padding: 40,

                  backgroundColor: WHITE,
                }}>
                <Buttons placeholder="Open Camera" onPress={this.OpenCamera} />
                <Buttons placeholder="Open Gallary" onPress={this.OpenPicker} />
                <Buttons
                  placeholder="Close"
                  onPress={() => {
                    this.setState({
                      pickerModalVisibility: false,
                    });
                  }}
                />
              </View>
            </View>
          </Modal>
          <View style={{marginVertical: 60}}>
            <Buttons
              placeholder="Save"
              onPress={() => {
                navigation.navigate('BottomTabDashboard');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
