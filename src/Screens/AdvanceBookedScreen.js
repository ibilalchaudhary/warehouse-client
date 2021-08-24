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
import TopTabDashboard from '../Navigation/TopTabNavigation';
import CardDetails from '../Components/CardDetails';

export default class AdvanceBookedScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View
        style={{height: height, flex: 1, backgroundColor: '#F3F3F3'}}
        source={require('../Assets/Signup__bg.png')}>
        <Header
          heading="Advance Bookings"
          onPress={() => {
            navigation.navigate('WarehouseCardDetails');
          }}
        />

        <ScrollView
          style={{
            width: '100%',
            height: height,
            paddingHorizontal: 18,
          }}>
          <CardDetails />
          <CardDetails />
          <CardDetails />
          <CardDetails />
          <CardDetails />
          <CardDetails />
          <CardDetails />
        </ScrollView>
      </View>
    );
  }
}
