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
import {
  DARK,
  DISABLE,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';

export default class EditProfileScreen extends Component {
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
          heading="Edit Profile"
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

          <InputBox
            placeholder="Name"
            variant="primary"
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={18.978}
                height={18}
                viewBox="0 0 14.978 20">
                <Path
                  data-name="Path 285"
                  d="M7.489 10.617a2.278 2.278 0 10-2.278-2.278 2.278 2.278 0 002.278 2.278zm0-3.67a1.4 1.4 0 11-1.4 1.4 1.4 1.4 0 011.4-1.4zm0 0"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 286"
                  d="M7.489 11.458a3.418 3.418 0 00-2.476 1.035 3.654 3.654 0 00-1.022 2.586.442.442 0 00.441.441h6.114a.442.442 0 00.441-.441 3.654 3.654 0 00-1.022-2.586 3.418 3.418 0 00-2.476-1.035zm-2.586 3.178a2.694 2.694 0 01.74-1.529 2.595 2.595 0 013.691 0 2.708 2.708 0 01.74 1.529zm0 0"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 287"
                  d="M12.775 0H2.203a2.2 2.2 0 00-2.2 2.2v15.6a2.2 2.2 0 002.2 2.2h10.572a2.2 2.2 0 002.2-2.2V2.2a2.2 2.2 0 00-2.2-2.2zm1.322 17.8a1.325 1.325 0 01-1.322 1.322H2.203A1.325 1.325 0 01.882 17.8V2.2A1.325 1.325 0 012.203.881h10.572A1.325 1.325 0 0114.097 2.2zm0 0"
                  fill="#4571b0"
                />
                <Path
                  data-name="Path 288"
                  d="M5.652 2.956h3.524a.441.441 0 100-.881H5.652a.441.441 0 100 .881zm0 0"
                  fill="#4571b0"
                />
              </Svg>
            }
          />
          <InputBox
            placeholder="Email"
            variant="primary"
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={18.419}
                height={18.446}
                viewBox="0 0 18.419 12.446">
                <G data-name="Group 202">
                  <Path
                    data-name="Path 292"
                    d="M17.25.25H1.169a.922.922 0 00-.919.919v10.108a.922.922 0 00.919.919H17.25a.922.922 0 00.919-.919V1.169A.922.922 0 0017.25.25zm-.345.689L9.738 6.317a.961.961 0 01-1.057 0L1.514.939zm-3.828 5.73l3.905 4.824.013.013H1.424l.013-.013 3.905-4.824a.345.345 0 00-.536-.434L.939 11.017V1.37l7.328 5.5a1.645 1.645 0 001.884 0l7.328-5.5v9.647L13.612 6.24a.345.345 0 00-.536.434z"
                    fill="#4571b0"
                    stroke="#4571b0"
                    strokeWidth={0.5}
                  />
                </G>
              </Svg>
            }
          />
          <InputBox
            variant="primary"
            placeholder="Phone Number"
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={18.701}
                height={18.776}
                viewBox="0 0 19.701 19.776">
                <Path
                  data-name="Path 2311"
                  d="M3.988 13.146a20.98 20.98 0 006.979 5.467 10.861 10.861 0 003.905 1.156c.094 0 .184.008.279.008a3.234 3.234 0 002.511-1.077.089.089 0 00.016-.02 10.559 10.559 0 01.791-.82c.193-.184.389-.377.578-.574a1.979 1.979 0 00-.008-2.946l-2.463-2.463a1.993 1.993 0 00-1.442-.664 2.061 2.061 0 00-1.459.66l-1.467 1.465a7.258 7.258 0 00-.406-.213 5.068 5.068 0 01-.451-.246A15.526 15.526 0 017.643 9.5a8.941 8.941 0 01-1.255-2c.385-.348.746-.713 1.094-1.07.123-.127.25-.254.377-.381a2.1 2.1 0 00.68-1.475A2.084 2.084 0 007.86 3.1L6.639 1.881c-.143-.143-.279-.283-.418-.426a20.84 20.84 0 00-.833-.824A2.043 2.043 0 003.947 0a2.1 2.1 0 00-1.459.635L.956 2.168a3.149 3.149 0 00-.939 2.016 7.584 7.584 0 00.571 3.278 19.072 19.072 0 003.4 5.684zM1.017 4.27a2.168 2.168 0 01.652-1.393l1.519-1.525A1.1 1.1 0 013.947 1a1.047 1.047 0 01.741.36c.275.254.533.52.811.8l.426.434 1.218 1.225a1.113 1.113 0 01.385.766 1.113 1.113 0 01-.385.766l-.381.385c-.381.385-.738.75-1.131 1.1l-.02.02a.8.8 0 00-.2.91c0 .012.008.02.012.033a9.644 9.644 0 001.438 2.34 16.387 16.387 0 003.95 3.6 5.866 5.866 0 00.541.3 5.067 5.067 0 01.451.246l.045.025a.857.857 0 00.4.1.869.869 0 00.611-.279l1.529-1.538a1.084 1.084 0 01.75-.365 1.029 1.029 0 01.725.365l2.471 2.467a.988.988 0 01-.016 1.54c-.172.184-.352.361-.545.545a11.8 11.8 0 00-.856.889 2.25 2.25 0 01-1.758.746c-.07 0-.143 0-.213-.008a9.867 9.867 0 01-3.532-1.057 19.931 19.931 0 01-6.643-5.2 18.255 18.255 0 01-3.238-5.389 6.609 6.609 0 01-.516-2.856z"
                  fill="#4571b0"
                />
              </Svg>
            }
          />
          <View style={{marginVertical: 50}}></View>
          <View style={{marginVertical: 30}}>
            <Buttons
              placeholder="Save"
              onPress={() => {
                navigation.navigate('Profile');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
