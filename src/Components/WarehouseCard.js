import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {PRIMARY, WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';

export default function WarehouseCard({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{position: 'relative', marginRight: 22, marginBottom: 12}}>
      <Image
        source={require('../Assets/warehouse__bg.png')}
        style={{
          borderRadius: 10,
          width: 180,
          height: 200,
        }}
      />
      <View
        style={{
          position: 'absolute',
          padding: 6,
          marginTop: 110,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: WHITE}}>
          Creatv Hub
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Svg
            style={{marginRight: 8}}
            xmlns="http://www.w3.org/2000/svg"
            width={12.74}
            height={12.74}
            viewBox="0 0 12.74 12.74">
            <Path
              data-name="Icon awesome-location-arrow"
              d="M11.061.088L.715 4.863a1.206 1.206 0 00.478 2.308H5.57v4.377a1.206 1.206 0 002.308.478l4.775-10.347A1.241 1.241 0 0011.061.088z"
              fill={PRIMARY}
            />
          </Svg>
          <Text style={{color: WHITE, fontSize: 12}}>332.23.33</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Svg
              style={{marginRight: 10}}
              xmlns="http://www.w3.org/2000/svg"
              width={11.083}
              height={12.505}
              viewBox="0 0 17.083 5.505">
              <Path
                data-name="Icon zocial-myspace"
                d="M0 5.505V0h2.2v3.252h12.665V0h2.218v5.505z"
                fill={PRIMARY}
              />
            </Svg>
            <Text style={{color: WHITE, fontSize: 12}}>10 acers</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: 20, color: PRIMARY, marginLeft: 30}}>
              $50/
            </Text>
            <Text
              style={{
                color: WHITE,
                fontSize: 10,
              }}>
              per day
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
