import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import Geolocation from '@react-native-community/geolocation';
import Svg, {G, Path} from 'react-native-svg';
import {PRIMARY, TEXT_COLOR} from '../Constants/Colors';

const MapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];

export default function MapViewScreen({navigation}) {
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  useEffect(() => {
    async function GETGEOLOCATION() {
      await Geolocation.getCurrentPosition(position => {
        setlatitude(parseFloat(position.coords.latitude));
        setlongitude(parseFloat(position.coords.longitude));
      });
    }
    GETGEOLOCATION();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, position: 'relative', width: width}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}>
        <Marker
          coordinate={{latitude: latitude, longitude: longitude}}
          image={{uri: 'selected__marker'}}
          style={{width: 100, height: 100}}
        />
      </MapView>
      <View
        style={{
          position: 'absolute',
          flex: 1,
          height: '100%',
          justifyContent: 'space-between',
          width: width,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}>
          <Header
            onPress={() => {
              navigation.navigate('Filters');
            }}
          />
          <View
            style={{
              backgroundColor: '#ffffff',
              paddingVertical: 10,
              paddingHorizontal: 20,
              width: '40%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={12.915}
              height={20.651}
              viewBox="0 0 12.915 20.651">
              <G id="_3722049" data-name="3722049" transform="translate(0 0)">
                <Path
                  id="Path_2128"
                  data-name="Path 2128"
                  d="M175.453,84.183a3.385,3.385,0,1,0-3.385-3.385A3.389,3.389,0,0,0,175.453,84.183Zm0-5.56a2.175,2.175,0,1,1-2.175,2.175A2.178,2.178,0,0,1,175.453,78.623Z"
                  transform="translate(-168.996 -74.291)"
                  fill={PRIMARY}
                />
                <Path
                  id="Path_2129"
                  data-name="Path 2129"
                  d="M98.67,12.59c.917,1.241.549.759,3.19,4.53a.605.605,0,0,0,.992,0c2.653-3.789,2.288-3.309,3.19-4.53a15.394,15.394,0,0,0,2.377-4.015,6.25,6.25,0,0,0-.912-6.046h0a6.51,6.51,0,0,0-10.3,0,6.25,6.25,0,0,0-.912,6.046A15.392,15.392,0,0,0,98.67,12.59Zm-.507-9.321a5.3,5.3,0,0,1,8.387,0h0a5.075,5.075,0,0,1,.725,4.911,14.5,14.5,0,0,1-2.206,3.692c-.669.906-.469.629-2.713,3.845-2.241-3.213-2.044-2.939-2.713-3.845a14.5,14.5,0,0,1-2.206-3.692,5.075,5.075,0,0,1,.725-4.911Z"
                  transform="translate(-95.898 0)"
                  fill={PRIMARY}
                />
                <Path
                  id="Path_2130"
                  data-name="Path 2130"
                  d="M109.445,370.459a.605.605,0,0,0-.835-.188l-1.72,1.086a.605.605,0,0,0,0,1.023l5.421,3.424a.605.605,0,0,0,.646,0l5.421-3.424a.605.605,0,0,0,0-1.023l-1.72-1.086a.6.6,0,1,0-.646,1.023l.911.575-4.288,2.708-4.288-2.708.911-.575A.6.6,0,0,0,109.445,370.459Z"
                  transform="translate(-106.177 -355.246)"
                  fill={PRIMARY}
                />
              </G>
            </Svg>
            <Text style={{color: PRIMARY, marginLeft: 15}}>Location</Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            width: '100%',
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              width: '30%',
              height: 3,
              backgroundColor: TEXT_COLOR,
              borderRadius: 10,
              marginLeft: '35%',
              marginBottom: 20,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
            style={{position: 'relative', width: '100%', borderRadius: 10}}>
            <Image
              source={require('../Assets/warehouse__map__card__bg.png')}
              style={{width: '100%', borderRadius: 10}}
            />
            <View style={{width: '100%', height: '100%', position: 'absolute'}}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: 20,
                }}>
                <Text
                  style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
                  Creatv hub
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17.329}
                    height={17.329}
                    viewBox="0 0 17.329 17.329">
                    <Path
                      id="Icon_awesome-location-arrow"
                      data-name="Icon awesome-location-arrow"
                      d="M15.045.119.973,6.614a1.641,1.641,0,0,0,.65,3.139H7.576v5.954a1.641,1.641,0,0,0,3.139.65l6.5-14.072A1.689,1.689,0,0,0,15.045.119Z"
                      transform="translate(0 0)"
                      fill={PRIMARY}
                    />
                  </Svg>
                  <Text style={{marginLeft: 10, color: '#ffffff'}}>Lahore</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17.236}
                      height={7.488}
                      viewBox="0 0 23.236 7.488">
                      <Path
                        id="Icon_zocial-myspace"
                        data-name="Icon zocial-myspace"
                        d="M-1.41,24.336V16.848h3v4.429H18.809V16.848h3.017v7.488Z"
                        transform="translate(1.41 -16.848)"
                        fill={PRIMARY}
                      />
                    </Svg>
                    <Text style={{marginLeft: 10, color: '#ffffff'}}>
                      10 acers
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: PRIMARY,
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      $50/
                    </Text>
                    <Text style={{color: '#ffffff'}}>per day</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: width,
    height: height,
  },
});
