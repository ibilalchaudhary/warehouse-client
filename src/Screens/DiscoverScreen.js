import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Buttons from '../Components/Buttons';
import Headings from '../Components/Headings';
import {DARK, PRIMARY, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';

export default class DiscoverScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/discover.png')}
        style={{
          height: height,
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            display: 'flex',
            marginHorizontal: 20,
          }}>
          <Headings text="Discover" />
          <View style={{marginBottom: 20}}>
            <Text>
              This application will help you to provide the your best warehouse
              for others and earn money. This application will help you to
              provide the your best warehouse for others and earn money.
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              alignContent: 'center',
              marginVertical: 20,
            }}>
            <Buttons
              placeholder="Next"
              onPress={() => {
                navigation.navigate('Explore');
              }}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
