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
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Buttons from '../Components/Buttons';
import CardDetails from '../Components/CardDetails';

export default class SearchResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: '#FAFAFA',
          flex: 1,
        }}>
        <Header
          heading="Search Results"
          onPress={() => {
            navigation.navigate('Filters');
          }}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
