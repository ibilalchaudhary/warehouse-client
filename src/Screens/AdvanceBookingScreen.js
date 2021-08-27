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

export default class AdvanceBookingScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View
        style={{height: height, flex: 1, backgroundColor: '#F3F3F3'}}
        source={require('../Assets/Signup__bg.png')}>
        <Header heading="Bookings" />
        <TopTabDashboard />
      </View>
    );
  }
}
