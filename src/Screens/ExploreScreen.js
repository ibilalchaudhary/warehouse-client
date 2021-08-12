import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Buttons from '../Components/Buttons';
import {DARK, PRIMARY, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';

export default class ExploreScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: WHITE, width: width, height: height}}>
        <ImageBackground
          source={require('../Assets/explore.png')}
          style={{
            height: height,
            flex: 1,
            justifyContent: 'flex-end',
            padding: 30,
          }}>
          <View
            style={{
              display: 'flex',
            }}>
            <View>
              <Text style={{fontSize: 24, color: WHITE, fontWeight: 'bold'}}>
                Explore
              </Text>
            </View>
            <View
              style={{
                borderTopWidth: 4,
                borderRadius: 2,
                width: '20%',
                borderColor: WHITE,
                marginBottom: 10,
              }}></View>
            <View style={{marginBottom: 60}}>
              <Text style={{color: WHITE}}>
                This application will help you to provide the your best
                warehouse for others and earn money. This application will help
                you to provide the your best warehouse for others and earn
                money.
              </Text>
            </View>
            <View style={{alignItems: 'center', alignContent: 'center'}}>
              <Buttons
                placeholder="Let's get started"
                onPress={() => {
                  navigation.navigate('Signup');
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
