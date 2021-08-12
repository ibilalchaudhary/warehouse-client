import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor="black" />
          <StackNavigation />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}
