import React, {Component} from 'react';
import {
  DISABLE,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';

export default function Reviews() {
  return (
    <>
      <View
        style={{
          display: 'flex',
          width: '100%',
          height: 160,
          borderRadius: 12,
          backgroundColor: WHITE,
          padding: 22,
          marginVertical: 8,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Assets/adminPic.png')}
            style={{width: 50, height: 50, marginRight: 14}}
          />
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{color: TEXT_COLOR, marginVertical: 2}}>
              Adams Gill
            </Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={83.047}
              height={12.103}
              viewBox="0 0 83.047 12.103">
              <G data-name="Group 2979">
                <Path
                  d="M12.6 4.574a.67.67 0 00-.578-.462l-3.648-.33L6.932.409a.671.671 0 00-1.232 0L4.256 3.781.61 4.109a.672.672 0 00-.381 1.178l2.756 2.417-.812 3.579a.67.67 0 001 .725l3.142-1.879 3.143 1.88a.671.671 0 001-.725l-.813-3.58L12.4 5.288a.672.672 0 00.2-.714zm0 0"
                  fill={PRIMARY}
                />
                <Path
                  data-name="star"
                  d="M31.017 4.574a.67.67 0 00-.578-.462l-3.648-.33L25.349.409a.671.671 0 00-1.232 0l-1.444 3.372-3.646.328a.672.672 0 00-.381 1.178l2.756 2.417-.812 3.579a.67.67 0 001 .725l3.142-1.879 3.143 1.88a.671.671 0 001-.725l-.813-3.58 2.755-2.416a.672.672 0 00.2-.714zm0 0M48.35 4.574a.67.67 0 00-.578-.462l-3.648-.33L42.682.409a.671.671 0 00-1.232 0l-1.444 3.372-3.646.328a.672.672 0 00-.381 1.178l2.756 2.417-.812 3.579a.67.67 0 001 .725l3.142-1.879 3.143 1.88a.671.671 0 001-.725l-.813-3.58 2.755-2.416a.672.672 0 00.2-.714zm0 0M65.684 4.574a.67.67 0 00-.578-.462l-3.648-.33L60.016.409a.671.671 0 00-1.232 0L57.34 3.781l-3.646.328a.672.672 0 00-.381 1.178l2.756 2.417-.812 3.579a.67.67 0 001 .725l3.142-1.879 3.143 1.88a.671.671 0 001-.725l-.813-3.58 2.755-2.416a.672.672 0 00.2-.714zm0 0"
                  fill={PRIMARY}
                />
                <Path
                  data-name="star"
                  d="M83.017 4.574a.67.67 0 00-.578-.462l-3.648-.33L77.349.409a.671.671 0 00-1.232 0l-1.444 3.372-3.646.328a.672.672 0 00-.381 1.178l2.756 2.417-.812 3.579a.67.67 0 001 .725l3.142-1.879 3.143 1.88a.671.671 0 001-.725l-.813-3.58 2.755-2.416a.672.672 0 00.2-.714zm0 0"
                  fill="#818181"
                />
              </G>
            </Svg>
          </View>
        </View>
        <Text style={{marginTop: 6, color: DISABLE, fontSize: 12}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
      </View>
    </>
  );
}
