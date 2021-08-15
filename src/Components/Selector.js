import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DISABLE, INPUT_BG, PRIMARY, WHITE} from '../Constants/Colors';

export default function Selector({text}) {
  const [select, setSelect] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelect(true);
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 75,
          height: 35,
          borderRadius: 8,
          backgroundColor: select ? PRIMARY : INPUT_BG,
        }}>
        <Text style={{fontSize: 12, color: select ? WHITE : DISABLE}}>
          {text}
        </Text>
      </TouchableOpacity>
      <View style={{marginRight: 8}}></View>
    </>
  );
}
