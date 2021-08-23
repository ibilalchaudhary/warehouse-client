import React from 'react';
import {View, Text} from 'react-native';
import {PRIMARY, SECONDARY, TEXT_COLOR} from '../Constants/Colors';
import Slider from '@react-native-community/slider';

export default function RangeSlider() {
  return (
    <>
      <Text style={{marginVertical: 14, color: TEXT_COLOR}}>
        Price Per Unit
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 10, color: TEXT_COLOR}}>Rs 0</Text>
        <Text style={{fontSize: 10, color: TEXT_COLOR}}>Rs 10k</Text>
      </View>
      <Slider
        style={{width: '100%', height: 25}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={PRIMARY}
        maximumTrackTintColor={SECONDARY}
        thumbTintColor={PRIMARY}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 10, color: TEXT_COLOR}}>Rs 0</Text>
        <Text style={{fontSize: 10, color: TEXT_COLOR}}>Rs 999</Text>
        <Text style={{fontSize: 10, color: TEXT_COLOR}}></Text>
      </View>
    </>
  );
}
