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
import {DARK, INPUT_BG, PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';
import Logo from '../Components/Logo';
import CodeInput from 'react-native-confirmation-code-input';
import Header from '../Components/Header';
import Reviews from '../Components/Reviews';

export default class PaymentOptionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      focuse: false,
      onfocus: false,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <Header
          heading="Payment Options"
          onPress={() => {
            navigation.navigate('Checkout');
          }}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 18}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
              marginTop: 30,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  focus: true,
                });
              }}
              style={{
                width: '49%',
                height: 110,
                borderWidth: this.state.focus ? 2 : 1,
                borderRadius: 8,
                borderColor: this.state.focus ? PRIMARY : SECONDARY,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Svg
                  style={{marginVertical: 10}}
                  xmlns="http://www.w3.org/2000/svg"
                  width={36.958}
                  height={36.5}
                  viewBox="0 0 38.958 42.5">
                  <G fill="#4571b0">
                    <Path
                      data-name="Path 5701"
                      d="M38.959 21.25A11.51 11.51 0 1127.448 9.74a11.524 11.524 0 0111.511 11.51zm-12.4-2.056c0-.429.273-.726.517-.726h2.582a1.328 1.328 0 000-2.656h-.885v-.317a1.328 1.328 0 00-2.656 0v.492a3.357 3.357 0 00-2.214 3.207 3.287 3.287 0 003.173 3.384h.738c.244 0 .517.3.517.728s-.273.726-.517.726h-2.576a1.328 1.328 0 000 2.656h.885v.317a1.328 1.328 0 002.656 0v-.492a3.357 3.357 0 002.214-3.207 3.287 3.287 0 00-3.173-3.384h-.742c-.24 0-.515-.299-.515-.728z"
                    />
                    <Path
                      data-name="Path 5702"
                      d="M24.792 6.446V5.313a1.776 1.776 0 00-1.771-1.771h-.885a1.776 1.776 0 00-1.771 1.771 1.776 1.776 0 01-1.771 1.771H9.74a1.776 1.776 0 01-1.771-1.771A1.776 1.776 0 006.2 3.542h-.887a1.776 1.776 0 00-1.771 1.771v31.875a1.776 1.776 0 001.771 1.771h17.708a1.776 1.776 0 001.771-1.771v-1.116a16.459 16.459 0 002.656.23c.3 0 .584 0 .885-.018v.9a5.328 5.328 0 01-5.312 5.316H5.313A5.328 5.328 0 010 37.188V5.313A5.328 5.328 0 015.313 0h17.708a5.328 5.328 0 015.313 5.313v.9c-.3-.018-.584-.018-.885-.018a14.676 14.676 0 00-2.657.251z"
                    />
                  </G>
                </Svg>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: PRIMARY}}>
                  EasyPaisa
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  focuse: true,
                });
              }}
              style={{
                width: '49%',
                height: 110,
                borderWidth: this.state.focuse ? 2 : 1,
                borderRadius: 8,
                borderColor: this.state.focuse ? PRIMARY : SECONDARY,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Svg
                  style={{marginVertical: 10}}
                  xmlns="http://www.w3.org/2000/svg"
                  width={36.958}
                  height={36.5}
                  viewBox="0 0 47 47">
                  <G fill="#4571b0">
                    <Path
                      data-name="Path 5703"
                      d="M45.715 41.033H1.469A1.872 1.872 0 000 42.685v2.938A1.377 1.377 0 001.377 47h44.246A1.377 1.377 0 0047 45.623v-2.937a1.924 1.924 0 00-1.285-1.653z"
                    />
                    <Path
                      data-name="Path 5704"
                      d="M46.151 9.285L24.028.105a1.377 1.377 0 00-1.055 0L.849 9.285A1.377 1.377 0 000 10.556v2.754a1.377 1.377 0 001.377 1.377h44.246A1.377 1.377 0 0047 13.31v-2.754a1.377 1.377 0 00-.849-1.272zm-14.389 1.271H15.238a1.377 1.377 0 110-2.754h16.524a1.377 1.377 0 010 2.754z"
                    />
                    <Path
                      data-name="Path 5705"
                      d="M2.616 35.801v2.754h10.557v-2.754a1.377 1.377 0 00-1.377-1.377h-7.8a1.377 1.377 0 00-1.38 1.377z"
                    />
                    <Path
                      data-name="Path 5706"
                      d="M4.452 17.441h6.885V31.67H4.452z"
                    />
                    <Path
                      data-name="Path 5707"
                      d="M35.663 17.441h6.885V31.67h-6.885z"
                    />
                    <Path
                      data-name="Path 5708"
                      d="M33.827 35.801v2.754h10.557v-2.754a1.377 1.377 0 00-1.377-1.377h-7.8a1.377 1.377 0 00-1.38 1.377z"
                    />
                    <Path
                      data-name="Path 5709"
                      d="M23.5 32.129a1.379 1.379 0 01-1.377-1.377 1.377 1.377 0 10-2.754 0 4.137 4.137 0 002.754 3.894v.7a1.377 1.377 0 102.754 0v-.7a4.131 4.131 0 00-1.377-8.025 1.377 1.377 0 111.377-1.377 1.377 1.377 0 102.754 0 4.137 4.137 0 00-2.754-3.894v-.7a1.377 1.377 0 00-2.754 0v.7a4.131 4.131 0 001.377 8.025 1.377 1.377 0 110 2.754z"
                    />
                  </G>
                </Svg>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: PRIMARY}}>
                  Bank
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({onfocus: true});
            }}
            style={{
              width: '100%',
              height: 110,
              borderWidth: this.state.onfocus ? 2 : 1,
              borderRadius: 8,
              borderColor: this.state.onfocus ? PRIMARY : SECONDARY,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Svg
                style={{marginVertical: 10}}
                xmlns="http://www.w3.org/2000/svg"
                width={36.121}
                height={36.094}
                viewBox="0 0 54.121 42.094">
                <Path
                  data-name="Icon awesome-credit-card"
                  d="M0 37.584a4.511 4.511 0 004.51 4.51h45.1a4.511 4.511 0 004.51-4.51V21.05H0zm18.04-6.389a1.131 1.131 0 011.128-1.128h12.778a1.131 1.131 0 011.128 1.128v3.755a1.131 1.131 0 01-1.128 1.128H19.168a1.131 1.131 0 01-1.128-1.128zm-12.027 0a1.131 1.131 0 011.128-1.128h6.765a1.131 1.131 0 011.128 1.128v3.755a1.131 1.131 0 01-1.128 1.128H7.141a1.131 1.131 0 01-1.128-1.128zM54.121 4.51v4.51H0V4.51A4.511 4.511 0 014.51 0h45.1a4.511 4.511 0 014.511 4.51z"
                  fill="#4571b0"
                />
              </Svg>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: PRIMARY}}>
                ATM
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              marginTop: 350,
            }}>
            <Buttons
              placeholder="Choose Card"
              onPress={() => {
                navigation.navigate('ChooseCard');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
