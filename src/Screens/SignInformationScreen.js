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
                marginBottom: 8,
              }}>
              <Text style={{fontSize: 28, fontWeight: 'bold'}}>WareHouse</Text>
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
                    fill="#27ae61"
                  />
                  <Path
                    data-name="Path 286"
                    d="M7.489 11.458a3.418 3.418 0 00-2.476 1.035 3.654 3.654 0 00-1.022 2.586.442.442 0 00.441.441h6.114a.442.442 0 00.441-.441 3.654 3.654 0 00-1.022-2.586 3.418 3.418 0 00-2.476-1.035zm-2.586 3.178a2.694 2.694 0 01.74-1.529 2.595 2.595 0 013.691 0 2.708 2.708 0 01.74 1.529zm0 0"
                    fill="#27ae61"
                  />
                  <Path
                    data-name="Path 287"
                    d="M12.775 0H2.203a2.2 2.2 0 00-2.2 2.2v15.6a2.2 2.2 0 002.2 2.2h10.572a2.2 2.2 0 002.2-2.2V2.2a2.2 2.2 0 00-2.2-2.2zm1.322 17.8a1.325 1.325 0 01-1.322 1.322H2.203A1.325 1.325 0 01.882 17.8V2.2A1.325 1.325 0 012.203.881h10.572A1.325 1.325 0 0114.097 2.2zm0 0"
                    fill="#27ae61"
                  />
                  <Path
                    data-name="Path 288"
                    d="M5.652 2.956h3.524a.441.441 0 100-.881H5.652a.441.441 0 100 .881zm0 0"
                    fill="#27ae61"
                  />
                </Svg>
              }
            />

            <InputBox
              variant="primary"
              placeholder="CNIC"
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
                      fill="#27ae61"
                    />
                  </G>
                  <G data-name="Group 922">
                    <Path
                      data-name="Path 2306"
                      d="M5.644 6.767A2.028 2.028 0 117.671 4.74a2.03 2.03 0 01-2.027 2.027zm0-3.244A1.217 1.217 0 106.86 4.74a1.218 1.218 0 00-1.216-1.217z"
                      fill="#27ae61"
                    />
                  </G>
                  <G data-name="Group 923">
                    <Path
                      data-name="Path 2307"
                      d="M9.327 10.118a.406.406 0 01-.406-.406v-.811a1.218 1.218 0 00-1.217-1.217H4.461a1.218 1.218 0 00-1.217 1.217v.811a.406.406 0 01-.811 0v-.811a2.03 2.03 0 012.028-2.027h3.244a2.03 2.03 0 012.028 2.028v.811a.406.406 0 01-.406.405z"
                      fill="#27ae61"
                    />
                  </G>
                  <G data-name="Group 924">
                    <Path
                      data-name="Path 2308"
                      d="M14.958 4.357h-4.866a.406.406 0 110-.811h4.866a.406.406 0 010 .811z"
                      fill="#27ae61"
                    />
                  </G>
                  <G data-name="Group 925">
                    <Path
                      data-name="Path 2309"
                      d="M14.958 7.194h-4.866a.406.406 0 110-.811h4.866a.406.406 0 110 .811z"
                      fill="#27ae61"
                    />
                  </G>
                  <G data-name="Group 926">
                    <Path
                      data-name="Path 2310"
                      d="M14.958 10.031h-4.866a.406.406 0 010-.811h4.866a.406.406 0 010 .811z"
                      fill="#27ae61"
                    />
                  </G>
                </Svg>
              }
            />

            <InputBox
              variant="primary"
              placeholder="Official Phone Number"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.573}
                  height={20.654}
                  viewBox="0 0 21.573 21.654">
                  <Path
                    data-name="Path 2311"
                    d="M4.371 14.394a22.973 22.973 0 007.641 5.986 11.893 11.893 0 004.276 1.265c.1 0 .2.009.305.009a3.541 3.541 0 002.746-1.18.1.1 0 00.018-.022 11.562 11.562 0 01.866-.9c.211-.2.426-.413.633-.628a2.167 2.167 0 00-.009-3.226l-2.7-2.7a2.183 2.183 0 00-1.579-.727 2.256 2.256 0 00-1.6.722l-1.6 1.612a7.953 7.953 0 00-.444-.233 5.549 5.549 0 01-.494-.269 17 17 0 01-4.061-3.7 9.79 9.79 0 01-1.373-2.19c.422-.381.817-.781 1.2-1.171.135-.139.274-.278.413-.417a2.3 2.3 0 00.745-1.615 2.282 2.282 0 00-.747-1.61L7.27 2.06c-.157-.157-.305-.31-.458-.467-.3-.305-.606-.619-.911-.9A2.237 2.237 0 004.322 0a2.3 2.3 0 00-1.6.7L1.046 2.374A3.448 3.448 0 00.019 4.581a8.3 8.3 0 00.624 3.59 20.883 20.883 0 003.728 6.223zM1.114 4.675a2.373 2.373 0 01.713-1.525l1.669-1.669a1.208 1.208 0 01.826-.381 1.147 1.147 0 01.808.39c.3.278.583.57.888.879.153.157.31.314.467.476l1.337 1.337a1.218 1.218 0 01.422.839 1.218 1.218 0 01-.422.839c-.139.139-.278.283-.417.422-.417.422-.808.821-1.238 1.2l-.022.022a.877.877 0 00-.224 1c0 .013.009.022.013.036a10.56 10.56 0 001.574 2.56 17.943 17.943 0 004.325 3.94 6.423 6.423 0 00.592.323 5.548 5.548 0 01.494.269l.049.027a.938.938 0 00.435.112.952.952 0 00.669-.305l1.678-1.678a1.187 1.187 0 01.821-.4 1.127 1.127 0 01.794.4l2.706 2.7a1.082 1.082 0 01-.013 1.692c-.188.2-.386.395-.6.6a12.922 12.922 0 00-.938.974 2.463 2.463 0 01-1.925.817c-.076 0-.157 0-.233-.009a10.8 10.8 0 01-3.865-1.162 21.824 21.824 0 01-7.273-5.7 19.989 19.989 0 01-3.545-5.9 7.237 7.237 0 01-.565-3.125z"
                    fill="#27ae61"
                  />
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Personal Phone Number"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.573}
                  height={20.654}
                  viewBox="0 0 21.573 21.654">
                  <Path
                    data-name="Path 2311"
                    d="M4.371 14.394a22.973 22.973 0 007.641 5.986 11.893 11.893 0 004.276 1.265c.1 0 .2.009.305.009a3.541 3.541 0 002.746-1.18.1.1 0 00.018-.022 11.562 11.562 0 01.866-.9c.211-.2.426-.413.633-.628a2.167 2.167 0 00-.009-3.226l-2.7-2.7a2.183 2.183 0 00-1.579-.727 2.256 2.256 0 00-1.6.722l-1.6 1.612a7.953 7.953 0 00-.444-.233 5.549 5.549 0 01-.494-.269 17 17 0 01-4.061-3.7 9.79 9.79 0 01-1.373-2.19c.422-.381.817-.781 1.2-1.171.135-.139.274-.278.413-.417a2.3 2.3 0 00.745-1.615 2.282 2.282 0 00-.747-1.61L7.27 2.06c-.157-.157-.305-.31-.458-.467-.3-.305-.606-.619-.911-.9A2.237 2.237 0 004.322 0a2.3 2.3 0 00-1.6.7L1.046 2.374A3.448 3.448 0 00.019 4.581a8.3 8.3 0 00.624 3.59 20.883 20.883 0 003.728 6.223zM1.114 4.675a2.373 2.373 0 01.713-1.525l1.669-1.669a1.208 1.208 0 01.826-.381 1.147 1.147 0 01.808.39c.3.278.583.57.888.879.153.157.31.314.467.476l1.337 1.337a1.218 1.218 0 01.422.839 1.218 1.218 0 01-.422.839c-.139.139-.278.283-.417.422-.417.422-.808.821-1.238 1.2l-.022.022a.877.877 0 00-.224 1c0 .013.009.022.013.036a10.56 10.56 0 001.574 2.56 17.943 17.943 0 004.325 3.94 6.423 6.423 0 00.592.323 5.548 5.548 0 01.494.269l.049.027a.938.938 0 00.435.112.952.952 0 00.669-.305l1.678-1.678a1.187 1.187 0 01.821-.4 1.127 1.127 0 01.794.4l2.706 2.7a1.082 1.082 0 01-.013 1.692c-.188.2-.386.395-.6.6a12.922 12.922 0 00-.938.974 2.463 2.463 0 01-1.925.817c-.076 0-.157 0-.233-.009a10.8 10.8 0 01-3.865-1.162 21.824 21.824 0 01-7.273-5.7 19.989 19.989 0 01-3.545-5.9 7.237 7.237 0 01-.565-3.125z"
                    fill="#27ae61"
                  />
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Industry"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.412}
                  height={20.412}
                  viewBox="0 0 16.412 16.412">
                  <Path
                    data-name="Path 2312"
                    d="M16.412 10.121v-3.83h-1.641A6.757 6.757 0 0014.2 4.92l1.161-1.161-2.707-2.709-1.161 1.162a6.754 6.754 0 00-1.372-.571V0h-3.83v1.641a6.757 6.757 0 00-1.371.57L3.758 1.049 1.05 3.757l1.162 1.162a6.75 6.75 0 00-.571 1.373H0v3.83h1.641a6.757 6.757 0 00.57 1.371l-1.162 1.16 2.708 2.708L4.919 14.2a6.773 6.773 0 001.373.571v1.641h3.83v-1.641a6.757 6.757 0 001.371-.57l1.161 1.161 2.708-2.708-1.162-1.161a6.768 6.768 0 00.571-1.372zM14.3 9.778a6.236 6.236 0 01-.673 1.619l-.109.183 1.073 1.073-1.935 1.935-1.073-1.073-.183.109a6.212 6.212 0 01-1.619.673l-.2.053v1.514H6.838v-1.513l-.2-.053a6.228 6.228 0 01-1.619-.673l-.183-.109-1.078 1.073-1.935-1.936L2.9 11.58l-.113-.18a6.226 6.226 0 01-.673-1.619l-.053-.205H.547V6.838h1.514l.053-.2a6.229 6.229 0 01.673-1.619l.113-.188-1.077-1.073 1.935-1.935L4.831 2.9l.183-.109a6.212 6.212 0 011.619-.673l.2-.053V.547h2.741v1.514l.2.053a6.229 6.229 0 011.619.673l.183.109 1.073-1.074 1.935 1.935-1.068 1.074.109.183a6.212 6.212 0 01.675 1.619l.053.2h1.513v2.741h-1.515zm0 0"
                    fill="#27ae61"
                  />
                  <Path
                    data-name="Path 2313"
                    d="M8.206 3.556a4.648 4.648 0 00-1.915 8.883v.006l.169.07.376.152v-.019a4.606 4.606 0 001.368.207c.092 0 .183 0 .274-.008v.012l.307-.039.241-.029v-.012a4.648 4.648 0 00-.821-9.224zm-1.368 8.519V9.369l-.091-.082a2.186 2.186 0 011.459-3.816 2.27 2.27 0 01.24.013L7.174 6.757l.243 1.692 1.692.243 1.272-1.272a2.279 2.279 0 01.013.239 2.2 2.2 0 01-1.7 2.135l-.213.048V12.3a4.151 4.151 0 01-1.643-.225zm2.188.153V10.27a2.757 2.757 0 001.915-2.611 2.673 2.673 0 00-.143-.874l-.142-.414L8.918 8.11l-1.016-.145-.146-1.017 1.739-1.739-.414-.142a2.679 2.679 0 00-.874-.143 2.734 2.734 0 00-1.915 4.687v2.225a4.1 4.1 0 112.735.392zm0 0"
                    fill="#27ae61"
                  />
                </Svg>
              }
            />
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 120,
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
