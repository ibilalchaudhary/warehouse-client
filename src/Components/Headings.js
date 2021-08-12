import React from 'react';
import {View, Text} from 'react-native';
import {PRIMARY} from '../Constants/Colors';

export default function Headings({text}) {
  return (
    <>
      <View>
        <Text style={{fontSize: 24, color: '#242424', fontWeight: 'bold'}}>
          {text}
        </Text>
      </View>
      <View
        style={{
          borderTopWidth: 4,
          borderRadius: 2,
          width: '20%',
          borderColor: PRIMARY,
          marginTop: 4,
          marginBottom: 10,
        }}></View>
    </>
  );
}
