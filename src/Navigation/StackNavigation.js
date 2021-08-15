import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from '../Screens/DiscoverScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import SignupScreen from '../Screens/SignupScreen';
import SignInformationScreen from '../Screens/SignInformationScreen';
import SigninScreen from '../Screens/SigninScreen';
import UploadPicScreen from '../Screens/UploadPicScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import OTPScreen from '../Screens/OTPScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import BottomTabDashboard from './BottomTabDashboard';
import FilterScreen from '../Screens/FilterScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Discover">
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Information" component={SignInformationScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="UploadPic" component={UploadPicScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="BottomTabDashboard" component={BottomTabDashboard} />
      <Stack.Screen name="Filters" component={FilterScreen} />
    </Stack.Navigator>
  );
}
