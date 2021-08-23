import React from 'react';
import {
  DARK,
  DISABLE,
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {View, Text, Image} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

export default function WarehouseMainCard() {
  return (
    <View
      style={{
        position: 'relative',
        marginBottom: 12,
      }}>
      <Image
        source={require('../Assets/warehouse__main__bg.png')}
        style={{borderRadius: 18, width: '100%', height: 260}}
      />
      <View
        style={{
          position: 'absolute',
          marginTop: 100,
          padding: 18,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: WHITE,
          }}>
          Creatv Hub
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <Svg
            style={{marginRight: 12}}
            xmlns="http://www.w3.org/2000/svg"
            width={14.74}
            height={14.74}
            viewBox="0 0 12.74 12.74">
            <Path
              data-name="Icon awesome-location-arrow"
              d="M11.061.088L.715 4.863a1.206 1.206 0 00.478 2.308H5.57v4.377a1.206 1.206 0 002.308.478l4.775-10.347A1.241 1.241 0 0011.061.088z"
              fill={PRIMARY}
            />
          </Svg>
          <Text style={{color: WHITE, fontSize: 16}}>53</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 12,
                width: 30,
                height: 30,
                borderRadius: 6,
                backgroundColor: '#474747',
              }}>
              <Svg
                data-name="video-camera (2)"
                xmlns="http://www.w3.org/2000/svg"
                width={16.329}
                height={16.922}
                viewBox="0 0 18.329 10.922">
                <Path
                  data-name="Path 2329"
                  d="M11.834 0H1.273A1.274 1.274 0 000 1.273v8.376a1.274 1.274 0 001.273 1.273h10.561a1.274 1.274 0 001.273-1.273V1.273A1.274 1.274 0 0011.834 0zm0 0"
                  fill="#fff"
                />
                <Path
                  data-name="Path 2330"
                  d="M13.955 7.205l4.374 2.388V1.357l-4.374 2.388zm0 0"
                  fill="#fff"
                />
              </Svg>
            </View>
            <Text style={{color: WHITE}}>3 Camera</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              alignContent: 'flex-end',
              marginLeft: 120,
            }}>
            <Text
              style={{
                color: PRIMARY,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              $5 /
            </Text>
            <Text style={{color: PRIMARY, fontSize: 12}}>unit</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 12,
                width: 28,
                height: 28,
                borderRadius: 6,
                backgroundColor: '#474747',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={14.667}
                height={14.561}
                viewBox="0 0 19.667 14.561">
                <G data-name="Group 934">
                  <G data-name="Group 933">
                    <Path
                      data-name="Path 2324"
                      d="M15.506 5.862H4.16l-.681 3.026h12.708z"
                      fill="#fff"
                    />
                  </G>
                </G>
                <G data-name="Group 936">
                  <G data-name="Group 935">
                    <Path
                      data-name="Path 2325"
                      d="M17.965 0H1.7A1.7 1.7 0 000 1.7v5.484a1.7 1.7 0 001.7 1.7h.615l.836-3.717a.567.567 0 01.553-.443H15.96a.567.567 0 01.553.443l.836 3.717h.615a1.7 1.7 0 001.7-1.7V1.702A1.7 1.7 0 0017.965 0zm-5.106 3.971H12.1a.567.567 0 110-1.135h.756a.567.567 0 110 1.135zm2.647 0h-.756a.567.567 0 110-1.135h.756a.567.567 0 110 1.135z"
                      fill="#fff"
                    />
                  </G>
                </G>
                <G data-name="Group 938">
                  <G data-name="Group 937">
                    <Path
                      data-name="Path 2326"
                      d="M10.212 11.472a.521.521 0 01.108-.338 1.632 1.632 0 00.27-.922.567.567 0 00-1.135 0 .521.521 0 01-.108.338 1.71 1.71 0 000 1.844.583.583 0 010 .677 1.633 1.633 0 00-.27.922.567.567 0 001.135 0 .521.521 0 01.108-.339 1.711 1.711 0 000-1.845.522.522 0 01-.108-.337z"
                      fill="#fff"
                    />
                  </G>
                </G>
                <G data-name="Group 940">
                  <G data-name="Group 939">
                    <Path
                      data-name="Path 2327"
                      d="M7.186 11.472a.521.521 0 01.108-.338 1.632 1.632 0 00.27-.922.567.567 0 00-1.135 0 .521.521 0 01-.108.338 1.71 1.71 0 000 1.844.583.583 0 010 .677 1.633 1.633 0 00-.27.922.567.567 0 001.135 0 .521.521 0 01.108-.339 1.711 1.711 0 000-1.845.522.522 0 01-.108-.337z"
                      fill="#fff"
                    />
                  </G>
                </G>
                <G data-name="Group 942">
                  <G data-name="Group 941">
                    <Path
                      data-name="Path 2328"
                      d="M13.238 11.472a.521.521 0 01.108-.338 1.632 1.632 0 00.27-.922.567.567 0 00-1.135 0 .521.521 0 01-.108.338 1.71 1.71 0 000 1.844.583.583 0 010 .677 1.633 1.633 0 00-.27.922.567.567 0 001.135 0 .521.521 0 01.108-.339 1.711 1.711 0 000-1.845.522.522 0 01-.108-.337z"
                      fill="#fff"
                    />
                  </G>
                </G>
              </Svg>
            </View>
            <Text style={{color: WHITE}}>3 Refreg</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              alignContent: 'flex-end',
              marginLeft: 74,
            }}>
            <Text
              style={{
                color: WHITE,
                fontSize: 24,
                fontWeight: 'bold',
              }}>
              $50 /
            </Text>
            <Text style={{color: WHITE, fontSize: 16}}>per day</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
