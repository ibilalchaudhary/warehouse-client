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
import Svg, {G, Path} from 'react-native-svg';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import CardDetails from '../Components/CardDetails';

const Tab = createMaterialTopTabNavigator();

function WarehouseListingCard({onPress}) {
  return (
    <>
      <ScrollView
        style={{flex: 1, marginHorizontal: 18, backgroundColor: '#F5F5F5'}}>
        <TouchableOpacity
          style={{alignItems: 'flex-end', backgroundColor: '#F5F5F5'}}>
          <Text style={{color: PRIMARY}}>See more</Text>
        </TouchableOpacity>
        <CardDetails onPress={() => {}} />
        <CardDetails onPress={() => {}} />
        <CardDetails onPress={() => {}} />
        <CardDetails onPress={() => {}} />
        <CardDetails onPress={() => {}} />
        <CardDetails onPress={() => {}} />
      </ScrollView>
    </>
  );
}

function WarehouseBookingCard({onPress}) {
  return (
    <>
      <ScrollView
        style={{flex: 1, marginHorizontal: 18, backgroundColor: '#F5F5F5'}}>
        <CardDetails onPress={() => {}} />
        <CardDetails onPress={() => {}} />
        <CardDetails onPress={() => {}} />
        <CardDetails onPress={() => {}} />
        <CardDetails onPress={() => {}} />
      </ScrollView>
    </>
  );
}
export default function TopTabDashboard() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
        },
        indicatorStyle: {
          borderBottomColor: '#F5F5F5',
          borderBottomWidth: 2,
        },
        tabStyle: {
          width: 120,
        },
      }}>
      <Tab.Screen name="More Listing" component={WarehouseListingCard} />
      <Tab.Screen name="Booking" component={WarehouseBookingCard} />
    </Tab.Navigator>
  );
}
