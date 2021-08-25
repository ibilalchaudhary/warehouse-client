import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from '../Screens/SignupScreen';
import SignInformationScreen from '../Screens/SignInformationScreen';
import SigninScreen from '../Screens/SigninScreen';
import UploadPicScreen from '../Screens/UploadPicScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import OTPScreen from '../Screens/OTPScreen';
import BottomTabDashboard from './BottomTabDashboard';
import FilterScreen from '../Screens/FilterScreen';
import SearchResultScreen from '../Screens/SearchResultScreen';
import WarehouseCardDetailsScreen from '../Screens/WarehouseCardDetailsScreen';
import MapViewScreen from '../Screens/MapViewScreen';
import ChooseCardScreen from '../Screens/ChooseCardScreen';
import AddCardScreen from '../Screens/AddCardScreen';
import EditCardScreen from '../Screens/EditCardScreen';
import BookingScreen from '../Screens/BookingScreen';
import CheckoutScreen from '../Screens/CheckoutScreen';
import OrderCompleteScreen from '../Screens/OrderCompleteScreen';
import RepresentativeProfileScreen from '../Screens/RepresentativeProfileScreen';
import RequestScreen from '../Screens/RequestScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';
import MessageScreen from '../Screens/MessageScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';
import OnboardingNavigation from '../Screens/OnboardingScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import CencelRequestScreen from '../Screens/CencelRequestScreen';
import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
import ReviewScreen from '../Screens/ReviewScreen';
import PaymentOptionsScreen from '../Screens/PaymentOptionsScreen';
import AdvanceBookedScreen from '../Screens/AdvanceBookedScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnboardingNavigation} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Information" component={SignInformationScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="UploadPic" component={UploadPicScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="BottomTabDashboard" component={BottomTabDashboard} />
      <Stack.Screen name="Filters" component={FilterScreen} />
      <Stack.Screen name="Map" component={MapViewScreen} />
      <Stack.Screen name="ChooseCard" component={ChooseCardScreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="EditCard" component={EditCardScreen} />
      <Stack.Screen name="SearchResult" component={SearchResultScreen} />
      <Stack.Screen
        name="WarehouseCardDetails"
        component={WarehouseCardDetailsScreen}
      />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="PaymentOptions" component={PaymentOptionsScreen} />
      <Stack.Screen name="OrderComplete" component={OrderCompleteScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen
        name="RepresentativeProfile"
        component={RepresentativeProfileScreen}
      />
      <Stack.Screen name="Request" component={RequestScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="CencelRequest" component={CencelRequestScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="AdvanceBooked" component={AdvanceBookedScreen} />
    </Stack.Navigator>
  );
}
