import React, {Component} from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image} from 'react-native';
import {PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import Svg, {G, Path, Ellipse} from 'react-native-svg';

function EditProfileHeadings({svg, text, lastItem}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: lastItem ? 0 : 1,
      }}>
      <View
        style={{
          marginRight: 20,
          marginHorizontal: 10,
          marginVertical: 20,
        }}>
        {svg}
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 13, color: TEXT_COLOR}}>{text}</Text>
      </View>
    </View>
  );
}

function EditProfileHeadingsTouchAble({text, svg, lastItem, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: lastItem ? 0 : 1,
      }}>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          marginRight: 24,
        }}>
        {svg}
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 14, color: TEXT_COLOR}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default class ProfileScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
        <Header
          heading="Profile"
          onPress={() => {
            navigation.navigate('BottomTabDashboard');
          }}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: WHITE,
              borderRadius: 12,
              marginVertical: 16,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomColor: '#DBDBDB',
                borderBottomWidth: 1,
              }}>
              <Image
                source={require('../Assets/adminPic.png')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginLeft: 24,
                  marginVertical: 14,
                }}
              />
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16, color: TEXT_COLOR, marginLeft: 20}}>
                  Adam Crist
                </Text>
              </View>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.306}
                  height={21.199}
                  fill={PRIMARY}
                  viewBox="0 0 21.306 21.199">
                  <Path
                    data-name="Path 1393"
                    d="M19.664 13.304a.531.531 0 00-.531.531v4.711a1.593 1.593 0 01-1.592 1.592H2.653a1.593 1.593 0 01-1.592-1.592V4.718a1.594 1.594 0 011.592-1.592h4.711a.531.531 0 100-1.061H2.653A2.656 2.656 0 000 4.718v13.828a2.656 2.656 0 002.653 2.653h14.889a2.656 2.656 0 002.658-2.653v-4.712a.531.531 0 00-.536-.53zm0 0"
                  />
                  <Path
                    data-name="Path 1394"
                    d="M19.985.699a2.388 2.388 0 00-3.377 0l-9.467 9.467a.531.531 0 00-.136.234L5.76 14.894a.531.531 0 00.653.653l4.494-1.245a.53.53 0 00.234-.136l9.466-9.467a2.39 2.39 0 000-3.377zM8.298 10.511l7.748-7.748 2.5 2.5-7.748 7.748zm-.5 1l2 2-2.761.765zm12.059-7.564l-.563.563-2.5-2.5.563-.563a1.326 1.326 0 011.876 0l.623.623a1.328 1.328 0 01.002 1.878zm0 0"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
            <EditProfileHeadings
              text={'adam@gmail.com'}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.671}
                  height={21.671}
                  fill={TEXT_COLOR}
                  viewBox="0 0 25.671 25.671">
                  <G data-name="025---Mail-Chat">
                    <Path d="M20.537 0H5.134A5.14 5.14 0 000 5.134v11.124a5.14 5.14 0 005.134 5.134h12.041l3.592 4.008a.848.848 0 00.621.273.863.863 0 00.391-.095.843.843 0 00.455-.91l-.55-3.426a5.2 5.2 0 003.987-4.982V5.134A5.14 5.14 0 0020.537 0zm0 .856a4.257 4.257 0 012.669.941l-8.918 8.592-.265.257a1.719 1.719 0 01-2.374 0L2.465 1.8A4.257 4.257 0 015.134.856zM.856 16.258V5.134a4.258 4.258 0 011-2.738l8.617 8.3L1.852 19a4.26 4.26 0 01-1-2.738zm20.618 4.15a.853.853 0 00-.636.964l.56 3.446-3.586-4a.856.856 0 00-.637-.282H5.134a4.255 4.255 0 01-2.67-.941l8.624-8.307a2.534 2.534 0 003.495 0l8.6 8.284a4.357 4.357 0 01-1.708.839zm3.341-4.15a4.21 4.21 0 01-1.015 2.717L15.2 10.7l8.616-8.3a4.257 4.257 0 011 2.738z" />
                    <Path
                      data-name="Shape"
                      d="M6.418 2.567h5.99a.428.428 0 100-.856h-5.99a.428.428 0 000 .856z"
                    />
                    <Ellipse
                      cx={1.113}
                      cy={0.556}
                      rx={1.113}
                      ry={0.556}
                      transform="translate(3.533 2.017)"
                    />
                  </G>
                </Svg>
              }
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginHorizontal: 20,
                alignItems: 'center',
                borderBottomColor: '#DBDBDB',
                borderBottomWidth: 0,
              }}>
              <View
                style={{
                  marginRight: 20,
                  marginHorizontal: 10,
                  marginVertical: 20,
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.312}
                  height={21.38}
                  viewBox="0 0 19.312 34.38">
                  <Path
                    data-name="Path 1395"
                    d="M3.613 4.65h-.015a.437.437 0 000 .874h.015a.437.437 0 100-.874z"
                    fill="#262629"
                  />
                  <Path
                    data-name="Path 1396"
                    d="M5.377 19.956a.436.436 0 00.311-.13l6.043-6.114a.437.437 0 10-.622-.614l-6.043 6.114a.437.437 0 00.311.744z"
                    fill="#262629"
                  />
                  <Path
                    data-name="Path 1397"
                    d="M9.08 19.099a.437.437 0 00.618 0l3.089-3.089a.437.437 0 00-.618-.618L9.08 18.481a.437.437 0 000 .618z"
                    fill="#262629"
                  />
                  <Path
                    data-name="Path 1398"
                    d="M9.656 31.649a1.205 1.205 0 10-1.205-1.205 1.205 1.205 0 001.205 1.205zm0-1.537a.331.331 0 11-.331.331.331.331 0 01.331-.331z"
                    fill="#262629"
                  />
                  <Path
                    data-name="Path 1399"
                    d="M15.802 0H3.51A3.514 3.514 0 000 3.51v27.36a3.514 3.514 0 003.51 3.51h12.292a3.514 3.514 0 003.51-3.51V3.51A3.514 3.514 0 0015.802 0zm2.636 30.87a2.639 2.639 0 01-2.636 2.636H3.51A2.639 2.639 0 01.874 30.87V27.7h17.564zm0-26.22H5.177a.437.437 0 100 .874h13.261v21.3H.874v-21.3h1.2a.437.437 0 000-.874h-1.2V3.51A2.639 2.639 0 013.51.874h12.292a2.639 2.639 0 012.636 2.636z"
                    fill="#262629"
                  />
                </Svg>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 13, color: TEXT_COLOR, marginRight: 70}}>
                  +92301 4563786
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('OTP');
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: PRIMARY,
                      textDecorationLine: 'underline',
                    }}>
                    Verify
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              marginVertical: 24,
              borderRadius: 12,
              backgroundColor: WHITE,
              padding: 10,
              shadowColor: '#828282',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              marginBottom: 50,
            }}>
            <EditProfileHeadingsTouchAble
              onPress={() => {
                navigation.navigate('PaymentOptions');
              }}
              text={'Payment Options'}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.274}
                  height={21.242}
                  viewBox="0 0 31.274 31.242">
                  <G data-name="Group 365">
                    <G data-name="Group 364" fill="#23262b">
                      <Path
                        data-name="Path 1402"
                        d="M31.056 11.219l-3.494-9.085a3.333 3.333 0 00-4.308-1.91l-.075.033L5.718 7.491a3.317 3.317 0 00-1.843 4.244l.48 1.281h-1.1A3.258 3.258 0 000 16.272v11.716a3.258 3.258 0 003.254 3.254h22.13a3.258 3.258 0 003.254-3.254V16.272a3.2 3.2 0 00-.047-.527l.6-.245a3.345 3.345 0 001.865-4.281zM3.254 14.057h22.13a2.21 2.21 0 012.2 2.083H1.054a2.21 2.21 0 012.2-2.083zm5.234-3.137l3.48-1.741.715 1.79L9.2 12.711zM27.6 27.988a2.216 2.216 0 01-2.213 2.213H3.254a2.216 2.216 0 01-2.213-2.213v-6.639H27.6zm0-7.681H1.041v-3.124H27.6zm1.209-5.77l-.544.22a3.256 3.256 0 00-2.877-1.741H10.92l2.658-1.329a.521.521 0 00.251-.659l-1.1-2.76a.521.521 0 00-.677-.29l-.04.018-4.418 2.209a.521.521 0 00-.25.659l.856 2.153H5.467l-.617-1.644a2.28 2.28 0 011.267-2.916l17.46-7.238a2.288 2.288 0 012.99 1.238l.022.055 3.494 9.084a2.3 2.3 0 01-1.277 2.942z"
                      />
                      <Path
                        data-name="Path 1403"
                        d="M18.731 28.736a3.125 3.125 0 003.139 0 3.124 3.124 0 100-5.4 3.124 3.124 0 10-3.139 5.4zm4.01-4.657a2.061 2.061 0 01.691-.127 2.083 2.083 0 11-.691 4.039 3.112 3.112 0 00-.001-3.91zm-.871.593a2.045 2.045 0 010 2.726 2.045 2.045 0 010-2.726zm-1.562-.72a2.06 2.06 0 01.692.127 3.112 3.112 0 000 3.912 2.079 2.079 0 11-.692-4.039z"
                      />
                      <Path
                        data-name="Rectangle 1598"
                        d="M22.388 11.698l-.423-.951 4.967-2.208.423.95z"
                      />
                      <Path
                        data-name="Rectangle 1599"
                        d="M18.649 9.645l7.175-3.31.436.944-7.175 3.311z"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />

            <EditProfileHeadingsTouchAble
              text={'Change Password'}
              lastItem={true}
              onPress={() => {
                navigation.navigate('ChangePassword');
              }}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.487}
                  height={21.951}
                  fill="#000000"
                  viewBox="0 0 21.487 28.951">
                  <Path
                    data-name="Path 1404"
                    d="M19.225 11.14V8.482a8.482 8.482 0 10-16.963 0v2.658A2.832 2.832 0 000 13.91v3.21a.566.566 0 101.131 0v-3.21a1.7 1.7 0 011.7-1.7H18.66a1.7 1.7 0 011.7 1.7v12.214a1.7 1.7 0 01-1.131 1.6v-3.41a.566.566 0 00-1.131 0v3.506H2.827a1.7 1.7 0 01-1.7-1.7v-4.464a.566.566 0 10-1.131 0v4.467a2.83 2.83 0 002.827 2.827H18.66a2.83 2.83 0 002.827-2.827V13.91a2.832 2.832 0 00-2.262-2.77zm-12.779-.057v-2.6a4.3 4.3 0 118.595 0v2.6zm9.726 0v-2.6a5.428 5.428 0 10-10.857 0v2.6H3.393v-2.6a7.351 7.351 0 1114.7 0v2.6zm0 0"
                  />
                  <Path
                    data-name="Path 1405"
                    d="M.565 19.931A.565.565 0 100 19.365a.565.565 0 00.565.565zm0 0"
                  />
                  <Path
                    data-name="Path 1406"
                    d="M10.743 25.897a1.7 1.7 0 001.7-1.7v-3a3.053 3.053 0 10-3.393-.01v3.012a1.7 1.7 0 001.693 1.698zm-1.915-7.243a1.923 1.923 0 112.79 1.715.565.565 0 00-.31.5v3.327a.566.566 0 11-1.131 0v-3.334a.565.565 0 00-.306-.5 1.917 1.917 0 01-1.043-1.708zm0 0"
                  />
                  <Path
                    data-name="Path 1407"
                    d="M18.659 22.561a.566.566 0 10-.4-.166.568.568 0 00.4.166zm0 0"
                  />
                </Svg>
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
