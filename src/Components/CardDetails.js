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
import {
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';

export default function CardDetails({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        height: 120,
        borderRadius: 8,
        backgroundColor: WHITE,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        marginVertical: 10,
        paddingHorizontal: 15,
      }}>
      <Image
        source={require('../Assets/warehouse__bg.png')}
        style={{
          width: 80,
          height: '100%',
          borderRadius: 12,
          marginRight: 10,
        }}
      />
      <View
        style={{
          flex: 1,
          height: '100%',
          display: 'flex',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: TEXT_COLOR,
              fontWeight: 'bold',
            }}>
            Creative hub
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={11.93}
              height={11.078}
              viewBox="0 0 11.93 11.078">
              <Path
                data-name="Icon ionic-ios-star"
                d="M11.477 3.835H7.56L6.37.282a.431.431 0 00-.81 0L4.37 3.835H.426A.427.427 0 000 4.261a.313.313 0 00.008.072.409.409 0 00.178.3l3.219 2.269-1.235 3.593a.427.427 0 00.146.479.412.412 0 00.24.1.522.522 0 00.266-.1l3.142-2.24 3.142 2.24a.5.5 0 00.266.1.383.383 0 00.237-.1.422.422 0 00.146-.479L8.519 6.903l3.193-2.29.077-.067a.407.407 0 00-.314-.711z"
                fill="#f80"
              />
            </Svg>
            <Text style={{marginLeft: 6, fontSize: 14, color: '#f80'}}>
              4.6
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={17.529}
              height={10.445}
              viewBox="0 0 17.529 10.445">
              <G data-name="Group 2979" fill={SECONDARY}>
                <Path
                  data-name="Path 2329"
                  d="M11.317 0h-10.1A1.219 1.219 0 000 1.217v8.011a1.219 1.219 0 001.217 1.217h10.1a1.219 1.219 0 001.217-1.217V1.217A1.219 1.219 0 0011.317 0zm0 0"
                />
                <Path
                  data-name="Path 2330"
                  d="M13.345 6.89l4.183 2.284V1.297l-4.183 2.284zm0 0"
                />
              </G>
            </Svg>
            <Text style={{fontSize: 14, color: SECONDARY, marginLeft: 6}}>
              3 cameras
            </Text>
          </View>
          <Text style={{color: PRIMARY, fontSize: 16, fontWeight: 'bold'}}>
            $50 / month
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={18.808}
              height={13.925}
              viewBox="0 0 18.808 13.925">
              <G data-name="Group 934">
                <G data-name="Group 933">
                  <Path
                    data-name="Path 2324"
                    d="M14.83 5.606H3.979L3.328 8.5h12.153z"
                    fill={SECONDARY}
                  />
                </G>
              </G>
              <G data-name="Group 936">
                <G data-name="Group 935">
                  <Path
                    data-name="Path 2325"
                    d="M17.181 0H1.628A1.629 1.629 0 000 1.628v5.245a1.63 1.63 0 001.628 1.628h.588l.8-3.555a.543.543 0 01.529-.423h11.719a.543.543 0 01.529.423l.8 3.555h.588a1.63 1.63 0 001.628-1.628V1.628A1.63 1.63 0 0017.181 0zM12.3 3.798h-.723a.543.543 0 110-1.085h.723a.543.543 0 110 1.085zm2.532 0h-.723a.543.543 0 110-1.085h.723a.543.543 0 110 1.085z"
                    fill={SECONDARY}
                  />
                </G>
              </G>
              <G data-name="Group 938">
                <G data-name="Group 937">
                  <Path
                    data-name="Path 2326"
                    d="M9.766 10.971a.5.5 0 01.1-.324 1.561 1.561 0 00.258-.882.543.543 0 00-1.085 0 .5.5 0 01-.1.324 1.636 1.636 0 000 1.764.558.558 0 010 .647 1.562 1.562 0 00-.258.882.543.543 0 001.085 0 .5.5 0 01.1-.324 1.636 1.636 0 000-1.764.5.5 0 01-.1-.323z"
                    fill={SECONDARY}
                  />
                </G>
              </G>
              <G data-name="Group 940">
                <G data-name="Group 939">
                  <Path
                    data-name="Path 2327"
                    d="M6.872 10.971a.5.5 0 01.1-.324 1.561 1.561 0 00.258-.882.543.543 0 10-1.085 0 .5.5 0 01-.1.324 1.636 1.636 0 000 1.764.558.558 0 010 .647 1.562 1.562 0 00-.258.882.543.543 0 001.085 0 .5.5 0 01.1-.324 1.636 1.636 0 000-1.764.5.5 0 01-.1-.323z"
                    fill={SECONDARY}
                  />
                </G>
              </G>
              <G data-name="Group 942">
                <G data-name="Group 941">
                  <Path
                    data-name="Path 2328"
                    d="M12.659 10.971a.5.5 0 01.1-.324 1.561 1.561 0 00.258-.882.543.543 0 00-1.085 0 .5.5 0 01-.1.324 1.636 1.636 0 000 1.764.558.558 0 010 .647 1.562 1.562 0 00-.258.882.543.543 0 001.085 0 .5.5 0 01.1-.324 1.636 1.636 0 000-1.764.5.5 0 01-.1-.323z"
                    fill={SECONDARY}
                  />
                </G>
              </G>
            </Svg>
            <Text style={{fontSize: 14, color: SECONDARY, marginLeft: 6}}>
              4 Refregrators
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: SECONDARY, marginLeft: 6}}>
              Area avail:
            </Text>
            <Text>10ft</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
