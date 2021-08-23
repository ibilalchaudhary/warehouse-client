import React, {Component} from 'react';
import {
  DARK,
  DISABLE,
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Buttons from '../Components/Buttons';
import CardDetails from '../Components/CardDetails';
import Dropdown from '../Components/Dropdown';
import DatePickerBox from '../Components/DatePickerBox';

export default class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/main__background.png')}
        style={{flex: 1, height: height}}>
        <Header
          heading="Booking"
          onPress={() => {
            navigation.navigate('Filters');
          }}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <InputBox
            variant="InputFilter"
            label="Food"
            placeholder="Product Category"
          />
          <InputBox
            variant="InputFilter"
            label="Food"
            placeholder="Sub Category"
          />
          <InputBox
            variant="InputFilter"
            label="10"
            placeholder="Total Units"
          />
          <InputBox variant="InputFilter" label="12kg" placeholder="Weight" />
          <InputBox
            variant="InputFilter"
            label="10ft"
            placeholder="Required Space"
          />
          <Text
            style={{
              fontSize: 16,
              color: TEXT_COLOR,
              marginTop: 12,
            }}>
            Packing Dimensions
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                width: '30%',
                height: 50,
                backgroundColor: WHITE,
                borderRadius: 8,
                marginVertical: 10,
              }}>
              <Dropdown label="Height" value="" />
            </View>
            <View
              style={{
                display: 'flex',
                width: '30%',
                height: 50,
                backgroundColor: WHITE,
                borderRadius: 8,
                marginVertical: 10,
              }}>
              <Dropdown label="Length" value="" />
            </View>
            <View
              style={{
                display: 'flex',
                width: '30%',
                height: 50,
                backgroundColor: WHITE,
                borderRadius: 8,
                marginVertical: 10,
              }}>
              <Dropdown label="Width" value="" />
            </View>
          </View>

          <Text
            style={{
              fontSize: 16,
              color: TEXT_COLOR,
              marginTop: 12,
            }}>
            Required Dates
          </Text>
          <DatePickerBox />
          <View style={{marginVertical: 50}}>
            <Buttons
              onPress={() => {
                navigation.navigate('Checkout');
              }}
              variant="primary"
              placeholder="Next"
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
