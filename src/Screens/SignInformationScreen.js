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
import {
  DARK,
  DISABLE,
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import InputBox from '../Components/InputBox';
import Buttons from '../Components/Buttons';
import SocialLinks from '../Components/SocialLinks';
import Logo from '../Components/Logo';
import Dropdown from '../Components/Dropdown';

export default class SignInformationScreen extends Component {
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
              <Logo />
            </View>
            <Headings text="Information" />
            <InputBox
              variant="primary"
              placeholder="Name"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.978}
                  height={20}
                  viewBox="0 0 14.978 20">
                  <Path
                    data-name="Path 285"
                    d="M7.489 10.617a2.278 2.278 0 10-2.278-2.278 2.278 2.278 0 002.278 2.278zm0-3.67a1.4 1.4 0 11-1.4 1.4 1.4 1.4 0 011.4-1.4zm0 0"
                    fill={PRIMARY}
                  />
                  <Path
                    data-name="Path 286"
                    d="M7.489 11.458a3.418 3.418 0 00-2.476 1.035 3.654 3.654 0 00-1.022 2.586.442.442 0 00.441.441h6.114a.442.442 0 00.441-.441 3.654 3.654 0 00-1.022-2.586 3.418 3.418 0 00-2.476-1.035zm-2.586 3.178a2.694 2.694 0 01.74-1.529 2.595 2.595 0 013.691 0 2.708 2.708 0 01.74 1.529zm0 0"
                    fill={PRIMARY}
                  />
                  <Path
                    data-name="Path 287"
                    d="M12.775 0H2.203a2.2 2.2 0 00-2.2 2.2v15.6a2.2 2.2 0 002.2 2.2h10.572a2.2 2.2 0 002.2-2.2V2.2a2.2 2.2 0 00-2.2-2.2zm1.322 17.8a1.325 1.325 0 01-1.322 1.322H2.203A1.325 1.325 0 01.882 17.8V2.2A1.325 1.325 0 012.203.881h10.572A1.325 1.325 0 0114.097 2.2zm0 0"
                    fill={PRIMARY}
                  />
                  <Path
                    data-name="Path 288"
                    d="M5.652 2.956h3.524a.441.441 0 100-.881H5.652a.441.441 0 100 .881zm0 0"
                    fill={PRIMARY}
                  />
                </Svg>
              }
            />

            <InputBox
              variant="primary"
              placeholder="XXXXX-XXXXXXX-X"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.797}
                  height={20.868}
                  viewBox="0 0 17.797 12.868">
                  <G data-name="Group 921">
                    <Path
                      data-name="Path 2305"
                      d="M15.943 12.868H1.854A1.824 1.824 0 010 11.081V1.787A1.824 1.824 0 011.854 0h14.089A1.824 1.824 0 0117.8 1.787v9.294a1.824 1.824 0 01-1.857 1.787zM1.854.715A1.094 1.094 0 00.742 1.787v9.294a1.094 1.094 0 001.112 1.072h14.089a1.094 1.094 0 001.112-1.072V1.787A1.094 1.094 0 0015.943.715z"
                      fill={PRIMARY}
                    />
                  </G>
                  <G data-name="Group 922">
                    <Path
                      data-name="Path 2306"
                      d="M5.644 6.767A2.028 2.028 0 117.671 4.74a2.03 2.03 0 01-2.027 2.027zm0-3.244A1.217 1.217 0 106.86 4.74a1.218 1.218 0 00-1.216-1.217z"
                      fill={PRIMARY}
                    />
                  </G>
                  <G data-name="Group 923">
                    <Path
                      data-name="Path 2307"
                      d="M9.327 10.118a.406.406 0 01-.406-.406v-.811a1.218 1.218 0 00-1.217-1.217H4.461a1.218 1.218 0 00-1.217 1.217v.811a.406.406 0 01-.811 0v-.811a2.03 2.03 0 012.028-2.027h3.244a2.03 2.03 0 012.028 2.028v.811a.406.406 0 01-.406.405z"
                      fill={PRIMARY}
                    />
                  </G>
                  <G data-name="Group 924">
                    <Path
                      data-name="Path 2308"
                      d="M14.958 4.357h-4.866a.406.406 0 110-.811h4.866a.406.406 0 010 .811z"
                      fill={PRIMARY}
                    />
                  </G>
                  <G data-name="Group 925">
                    <Path
                      data-name="Path 2309"
                      d="M14.958 7.194h-4.866a.406.406 0 110-.811h4.866a.406.406 0 110 .811z"
                      fill={PRIMARY}
                    />
                  </G>
                  <G data-name="Group 926">
                    <Path
                      data-name="Path 2310"
                      d="M14.958 10.031h-4.866a.406.406 0 010-.811h4.866a.406.406 0 010 .811z"
                      fill={PRIMARY}
                    />
                  </G>
                </Svg>
              }
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 8,
                backgroundColor: WHITE,
                marginTop: 10,
                height: 50,
              }}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginLeft: 16,
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.956}
                  height={20.956}
                  viewBox="0 0 18.956 18.956">
                  <Path
                    data-name="Path 2312"
                    d="M18.956 11.689V7.266h-1.9a7.8 7.8 0 00-.656-1.584l1.341-1.342-3.125-3.127-1.341 1.342a7.8 7.8 0 00-1.586-.655V0H7.266v1.9a7.8 7.8 0 00-1.584.658L4.341 1.212 1.213 4.34l1.342 1.341A7.8 7.8 0 001.9 7.266H0v4.423h1.9a7.8 7.8 0 00.658 1.584l-1.346 1.342 3.128 3.128L5.681 16.4a7.823 7.823 0 001.585.659v1.9h4.423v-1.9a7.8 7.8 0 001.584-.658l1.341 1.341 3.128-3.128-1.342-1.34a7.817 7.817 0 00.659-1.585zm-2.441-.4a7.2 7.2 0 01-.777 1.87l-.126.211 1.239 1.239-2.236 2.241-1.239-1.239-.211.126a7.175 7.175 0 01-1.87.777l-.237.061v1.748H7.9v-1.747l-.237-.061a7.193 7.193 0 01-1.87-.777l-.213-.128-1.239 1.24-2.236-2.235 1.239-1.239-.126-.211a7.192 7.192 0 01-.777-1.87l-.061-.237H.632V7.9H2.38l.061-.237a7.194 7.194 0 01.777-1.87l.126-.211-1.239-1.241 2.236-2.236 1.239 1.24.211-.126a7.175 7.175 0 011.87-.777L7.9 2.38V.632h3.159V2.38l.237.061a7.194 7.194 0 011.87.777l.211.126 1.239-1.24 2.234 2.237-1.239 1.239.126.211a7.175 7.175 0 01.777 1.87l.061.237h1.748v3.159h-1.747zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 2313"
                    d="M9.478 4.107a5.368 5.368 0 00-2.212 10.26v.007l.2.081.434.176v-.021a5.32 5.32 0 001.58.239c.107 0 .212 0 .316-.009v.014l.354-.045.278-.034v-.014A5.369 5.369 0 009.48 4.108zm-1.58 9.839v-3.125l-.105-.095a2.525 2.525 0 011.685-4.408 2.623 2.623 0 01.278.015l-1.469 1.47.281 1.955 1.955.28 1.469-1.469a2.634 2.634 0 01.015.277 2.545 2.545 0 01-1.965 2.466l-.246.056v2.84a4.794 4.794 0 01-1.898-.262zm2.528.177v-2.262a3.185 3.185 0 002.211-3.015 3.088 3.088 0 00-.165-1.009l-.165-.478-2.008 2.009L9.126 9.2l-.169-1.174 2.009-2.009-.478-.164a3.094 3.094 0 00-1.009-.165 3.158 3.158 0 00-2.212 5.413v2.57a4.737 4.737 0 113.159.453zm0 0"
                    fill="#4571b0"
                  />
                </Svg>
              </View>
              <TouchableOpacity
                style={{width: '92%', height: 50, paddingHorizontal: 12}}>
                <Dropdown label="Industry" value="" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 8,
                backgroundColor: WHITE,
                marginTop: 20,
                height: 50,
              }}>
              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '65%',
                  height: 40,
                }}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginLeft: 16,
                  }}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20.573}
                    height={20.654}
                    viewBox="0 0 21.573 21.654">
                    <Path
                      data-name="Path 2311"
                      d="M4.371 14.394a22.973 22.973 0 007.641 5.986 11.893 11.893 0 004.276 1.265c.1 0 .2.009.305.009a3.541 3.541 0 002.746-1.18.1.1 0 00.018-.022 11.562 11.562 0 01.866-.9c.211-.2.426-.413.633-.628a2.167 2.167 0 00-.009-3.226l-2.7-2.7a2.183 2.183 0 00-1.579-.727 2.256 2.256 0 00-1.6.722l-1.6 1.612a7.953 7.953 0 00-.444-.233 5.549 5.549 0 01-.494-.269 17 17 0 01-4.061-3.7 9.79 9.79 0 01-1.373-2.19c.422-.381.817-.781 1.2-1.171.135-.139.274-.278.413-.417a2.3 2.3 0 00.745-1.615 2.282 2.282 0 00-.747-1.61L7.27 2.06c-.157-.157-.305-.31-.458-.467-.3-.305-.606-.619-.911-.9A2.237 2.237 0 004.322 0a2.3 2.3 0 00-1.6.7L1.046 2.374A3.448 3.448 0 00.019 4.581a8.3 8.3 0 00.624 3.59 20.883 20.883 0 003.728 6.223zM1.114 4.675a2.373 2.373 0 01.713-1.525l1.669-1.669a1.208 1.208 0 01.826-.381 1.147 1.147 0 01.808.39c.3.278.583.57.888.879.153.157.31.314.467.476l1.337 1.337a1.218 1.218 0 01.422.839 1.218 1.218 0 01-.422.839c-.139.139-.278.283-.417.422-.417.422-.808.821-1.238 1.2l-.022.022a.877.877 0 00-.224 1c0 .013.009.022.013.036a10.56 10.56 0 001.574 2.56 17.943 17.943 0 004.325 3.94 6.423 6.423 0 00.592.323 5.548 5.548 0 01.494.269l.049.027a.938.938 0 00.435.112.952.952 0 00.669-.305l1.678-1.678a1.187 1.187 0 01.821-.4 1.127 1.127 0 01.794.4l2.706 2.7a1.082 1.082 0 01-.013 1.692c-.188.2-.386.395-.6.6a12.922 12.922 0 00-.938.974 2.463 2.463 0 01-1.925.817c-.076 0-.157 0-.233-.009a10.8 10.8 0 01-3.865-1.162 21.824 21.824 0 01-7.273-5.7 19.989 19.989 0 01-3.545-5.9 7.237 7.237 0 01-.565-3.125z"
                      fill={PRIMARY}
                    />
                  </Svg>
                </View>
                <TextInput
                  placeholder="Search"
                  placeholderTextColor={SECONDARY}
                  style={{
                    marginLeft: 16,
                    borderRightWidth: 1,
                    borderRightColor: INPUT_BG,
                    width: '83%',
                    color: DARK,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 94,
                  height: 50,
                  marginLeft: 10,
                }}>
                <Dropdown label="Personal" value="" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 18,
              }}>
              <TouchableOpacity
                style={{
                  width: 80,
                  height: 35,
                  borderRadius: 5,

                  backgroundColor: PRIMARY,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: WHITE}}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 80,
                  height: 35,
                  borderRadius: 5,

                  backgroundColor: TEXT_COLOR,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: WHITE}}>Verify</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 120,
                marginBottom: 50,
              }}>
              <Buttons
                placeholder="Save"
                onPress={() => {
                  navigation.navigate('UploadPic');
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
