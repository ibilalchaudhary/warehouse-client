import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BookingCard from '../Components/BookingCard';

const Tab = createMaterialTopTabNavigator();

function WarehouseListingCard() {
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
    </ScrollView>
  );
}

function WarehouseBookingCard() {
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
      <BookingCard />
      <BookingCard />
    </ScrollView>
  );
}
export default function TopTabDashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
          backgroundColor: '#F3F3F3',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#4571B0',
          borderBottomWidth: 4,
          borderRadius: 2,
        },
        tabBarItemStyle: {
          width: 160,
        },
      }}>
      <Tab.Screen name="Current" component={WarehouseListingCard} />
      <Tab.Screen name="Previous" component={WarehouseBookingCard} />
    </Tab.Navigator>
  );
}
