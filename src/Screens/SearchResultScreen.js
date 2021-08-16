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

export default class FilterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: WHITE, width: width, height: height}}>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            height: height,
            flex: 1,
          }}>
          <Header
            heading="Search Results"
            onPress={() => {
              navigation.navigate('Filters');
            }}
          />
          <ScrollView style={{flex: 1}}>
            <View style={{marginHorizontal: 18}}>
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
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
