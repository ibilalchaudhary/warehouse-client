import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {DISABLE, PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import InputBox from '../Components/InputBox';
import Selector from '../Components/Selector';
import WarehouseCard from '../Components/WarehouseCard';
import CardDetails from '../Components/CardDetails';
export default class DashboardScreen extends Component {
  constructor() {
    super();
    this.state = {
      newNotifications: true,
    };
  }
  render() {
    const navigation = this.props.navigation;
    const catagrories = ['Size', 'Health', 'Weight', 'Area', 'Height', 'Space'];
    return (
      <ImageBackground
        source={require('../Assets/main__background.png')}
        style={{
          height: height,
          flex: 1,
          paddingVertical: 16,
        }}>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image
                source={require('../Assets/userPic.png')}
                style={{width: 45, height: 45}}
              />
            </TouchableOpacity>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Filters');
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22.854}
                  height={22.854}
                  viewBox="0 0 27.854 27.854">
                  <G
                    data-name="Icon feather-search"
                    fill="none"
                    stroke="#7b7b7b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}>
                    <Path
                      data-name="Path 706"
                      d="M23.04 12.27A10.77 10.77 0 1112.27 1.5a10.77 10.77 0 0110.77 10.77z"
                    />
                    <Path
                      data-name="Path 707"
                      d="M25.733 25.733l-5.856-5.856"
                    />
                  </G>
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Notifications');
                  if (this.state.newNotifications === true) {
                    this.setState({
                      newNotifications: false,
                    });
                  }
                }}
                style={{marginLeft: 10}}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22.476}
                  height={22.15}
                  viewBox="0 0 22.476 26.15">
                  <G
                    data-name="Icon ionic-ios-notifications-outline"
                    fill="#7b7b7b">
                    <Path
                      data-name="Path 2322"
                      d="M13.595 22.424a.911.911 0 00-.893.717 1.762 1.762 0 01-.352.766 1.329 1.329 0 01-1.132.415 1.351 1.351 0 01-1.132-.415 1.762 1.762 0 01-.352-.766.911.911 0 00-.893-.717.917.917 0 00-.893 1.118 3.142 3.142 0 003.27 2.609 3.136 3.136 0 003.27-2.609.92.92 0 00-.893-1.118z"
                    />
                    <Path
                      data-name="Path 2323"
                      d="M22.194 19.044c-1.083-1.3-3.213-2.07-3.213-7.912 0-6-2.9-8.407-5.6-8.985-.253-.058-.436-.135-.436-.379v-.186A1.652 1.652 0 0011.26 0h-.042a1.652 1.652 0 00-1.687 1.581v.189c0 .238-.183.321-.436.379-2.707.585-5.6 2.989-5.6 8.985 0 5.842-2.13 6.6-3.213 7.912A1.272 1.272 0 001.4 21.09h19.697a1.271 1.271 0 001.097-2.046zm-2.742.373H3.055a.28.28 0 01-.232-.469A7.735 7.735 0 004.3 16.801a13.447 13.447 0 001.005-5.669 9.2 9.2 0 011.47-5.579 4.541 4.541 0 012.72-1.773 2.526 2.526 0 001.308-.675.591.591 0 01.837-.013 2.615 2.615 0 001.322.688 4.541 4.541 0 012.721 1.774 9.2 9.2 0 011.47 5.579 13.447 13.447 0 001.005 5.669 7.832 7.832 0 001.512 2.179.264.264 0 01-.218.436z"
                    />
                  </G>
                </Svg>
                {this.state.newNotifications ? (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 6,
                      backgroundColor: PRIMARY,
                      top: -20,
                      right: -12,
                    }}
                  />
                ) : null}
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              marginVertical: 22,
              display: 'flex',
              flexDirection: 'row',
            }}>
            {catagrories.map(item => {
              return <Selector key={item} text={item} />;
            })}
          </ScrollView>
        </View>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: TEXT_COLOR,
              marginBottom: 22,
            }}>
            Nearby Warehouses
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <WarehouseCard
              onPress={() => {
                navigation.navigate('WarehouseCardDetails');
              }}
            />
            <WarehouseCard
              onPress={() => {
                navigation.navigate('WarehouseCardDetails');
              }}
            />
            <WarehouseCard
              onPress={() => {
                navigation.navigate('WarehouseCardDetails');
              }}
            />
            <WarehouseCard
              onPress={() => {
                navigation.navigate('WarehouseCardDetails');
              }}
            />
          </ScrollView>
          <View
            style={{
              alignItems: 'flex-end',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: TEXT_COLOR}}>
              More Listing
            </Text>
            <TouchableOpacity>
              <Text style={{color: PRIMARY, textDecorationLine: 'underline'}}>
                See more
              </Text>
            </TouchableOpacity>
          </View>
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
          <CardDetails
            onPress={() => {
              navigation.navigate('WarehouseCardDetails');
            }}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
