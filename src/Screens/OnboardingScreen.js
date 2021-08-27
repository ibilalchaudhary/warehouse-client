import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Buttons from '../Components/Buttons';
import Headings from '../Components/Headings';
import {DARK, PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Text as Texttwo, TSpan, Path} from 'react-native-svg';

class DiscoverScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/discover.png')}
        style={{
          height: height,
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={188.544}
            height={54}
            viewBox="0 0 188.544 54">
            <G data-name="Group 2991">
              <Texttwo
                data-name="PACE X"
                transform="translate(51.545 44)"
                fill="#4571b0"
                fontSize={41}
                fontFamily="SegoeUI-Bold, Segoe UI"
                fontWeight={700}>
                <TSpan x={0} y={0}>
                  {'PACE X'}
                </TSpan>
              </Texttwo>
              <G data-name="Group 2984" fill="none" strokeWidth={10}>
                <Path
                  data-name="Line 40"
                  stroke="#233551"
                  opacity={0.88}
                  d="M43.341 10.839L13.714 40.466"
                />
                <Path
                  data-name="Line 41"
                  stroke="#244674"
                  opacity={0.88}
                  d="M35.392 8.671L8.655 35.769"
                />
                <Path
                  data-name="Line 42"
                  stroke="#285eab"
                  opacity={0.88}
                  d="M23.83 10.116L3.597 30.349"
                />
                <Path
                  data-name="Line 43"
                  stroke="#233551"
                  opacity={0.88}
                  d="M12.991 15.897l28.904 29.627"
                />
                <Path
                  data-name="Line 44"
                  stroke="#244674"
                  opacity={0.88}
                  d="M7.933 20.955l24.569 24.569"
                />
                <Path
                  data-name="Line 45"
                  stroke="#285eab"
                  opacity={0.88}
                  d="M3.597 25.291L23.83 46.247"
                />
              </G>
            </G>
          </Svg>
        </View>
        <Headings text="Discover" />
        <View style={{marginBottom: 20}}>
          <Text>
            This application will help you to provide the your best warehouse
            for others and earn money. This application will help you to provide
            the your best warehouse for others and earn money.
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
            marginVertical: 20,
          }}>
          <Buttons
            placeholder="Next"
            onPress={() => {
              navigation.navigate('Explore');
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}

class ExploreScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/explore.png')}
        style={{
          height: height,
          width: width,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={188.544}
            height={54}
            viewBox="0 0 188.544 54">
            <G data-name="Group 2991">
              <Texttwo
                data-name="PACE X"
                transform="translate(51.545 44)"
                fill="#4571b0"
                fontSize={41}
                fontFamily="SegoeUI-Bold, Segoe UI"
                fontWeight={700}>
                <TSpan x={0} y={0}>
                  {'PACE X'}
                </TSpan>
              </Texttwo>
              <G data-name="Group 2984" fill="none" strokeWidth={10}>
                <Path
                  data-name="Line 40"
                  stroke="#233551"
                  opacity={0.88}
                  d="M43.341 10.839L13.714 40.466"
                />
                <Path
                  data-name="Line 41"
                  stroke="#244674"
                  opacity={0.88}
                  d="M35.392 8.671L8.655 35.769"
                />
                <Path
                  data-name="Line 42"
                  stroke="#285eab"
                  opacity={0.88}
                  d="M23.83 10.116L3.597 30.349"
                />
                <Path
                  data-name="Line 43"
                  stroke="#233551"
                  opacity={0.88}
                  d="M12.991 15.897l28.904 29.627"
                />
                <Path
                  data-name="Line 44"
                  stroke="#244674"
                  opacity={0.88}
                  d="M7.933 20.955l24.569 24.569"
                />
                <Path
                  data-name="Line 45"
                  stroke="#285eab"
                  opacity={0.88}
                  d="M3.597 25.291L23.83 46.247"
                />
              </G>
            </G>
          </Svg>
        </View>
        <View>
          <Text style={{fontSize: 24, color: TEXT_COLOR, fontWeight: 'bold'}}>
            Explore
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 4,
            borderRadius: 2,
            width: '20%',
            borderColor: PRIMARY,
            marginBottom: 10,
          }}></View>
        <View style={{marginBottom: 20}}>
          <Text style={{color: TEXT_COLOR}}>
            This application will help you to provide the your best warehouse
            for others and earn money. This application will help you to provide
            the your best warehouse for others and earn money.
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
            marginVertical: 40,
          }}>
          <Buttons
            placeholder="Let's get started"
            onPress={() => {
              navigation.navigate('Signin');
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}

const Stack = createNativeStackNavigator();

export default function OnboardingNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Discover">
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  );
}
