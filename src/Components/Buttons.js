import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PRIMARY, WHITE} from '../Constants/Colors';

export default function Buttons({placeholder, onPress}) {
  const [focus, setFocus] = useState(true);
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 50,
          backgroundColor: PRIMARY,
          marginBottom: 22,
          borderRadius: 8,
          borderWidth: focus ? 0 : 1,
          borderColor: WHITE,
        }}>
        <Text style={{color: WHITE}}>{placeholder}</Text>
      </TouchableOpacity>
    </>
  );
}
