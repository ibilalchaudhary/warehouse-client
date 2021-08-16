import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TEXT_COLOR} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';

export default function Header({onPress, heading}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 18,
        paddingVertical: 20,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={9.455}
          height={16.538}
          viewBox="0 0 9.455 16.538">
          <Path
            data-name="Icon ionic-ios-arrow-back"
            d="M2.849 8.267l6.258-6.253A1.182 1.182 0 007.433.345L.343 7.43a1.18 1.18 0 00-.034 1.63l7.119 7.134a1.182 1.182 0 001.674-1.669z"
            fill="#27ae61"
          />
        </Svg>
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
        }}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            color: TEXT_COLOR,
          }}>
          {heading}
        </Text>
      </View>
    </View>
  );
}
