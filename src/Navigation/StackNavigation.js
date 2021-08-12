import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from '../Screens/DiscoverScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import SignupScreen from '../Screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Discover">
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
