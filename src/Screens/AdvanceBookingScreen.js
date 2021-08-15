import React from 'react';
import {View, Text} from 'react-native';
import {TEXT_COLOR} from '../Constants/Colors';

export default function AdvanceBookingScreen() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 24, color: TEXT_COLOR}}>AdvanceBooking</Text>
    </View>
  );
}
