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
import {DARK, DISABLE, PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../Components/Header';

function PrfileInfo({heading, subHeading}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 12,
        width: '100%',
        height: 50,
        backgroundColor: WHITE,
        marginVertical: 6,
      }}>
      <Text style={{fontSize: 13, color: DISABLE}}>{heading}</Text>
      <Text style={{fontSize: 13, color: PRIMARY}}>{subHeading}</Text>
    </View>
  );
}

export default class RepresentativeProfileScreen extends Component {
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
        <Header
          heading="Representative"
          onPress={() => {
            navigation.navigate('WarehouseCardDetails');
          }}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18}}>John Timber</Text>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                marginVertical: 10,
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Message');
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: PRIMARY,
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16.5}
                  height={16.5}
                  viewBox="0 0 16.5 16.5">
                  <Path
                    data-name="Icon material-message"
                    d="M14.85 0H1.65A1.648 1.648 0 00.008 1.65L0 16.5l3.3-3.3h11.55a1.655 1.655 0 001.65-1.65v-9.9A1.655 1.655 0 0014.85 0zM13.2 9.9H3.3V8.25h9.9zm0-2.475H3.3v-1.65h9.9zm0-2.475H3.3V3.3h9.9z"
                    fill="#fff"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
          <PrfileInfo heading="Official Number" subHeading="03043 545 657" />
          <PrfileInfo heading="Personal Number" subHeading="03043 545 657" />
          <PrfileInfo heading="Email" subHeading="hi@gmail.com" />
        </ScrollView>
      </ImageBackground>
    );
  }
}
