import React, {useState} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdvanceBookingScreen from '../Screens/AdvanceBookingScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Svg, {Path, G} from 'react-native-svg';
import {SECONDARY, PRIMARY, WHITE} from '../Constants/Colors';

const Tab = createBottomTabNavigator();

export default function BottomTabDashboard() {
  return (
    <Tab.Navigator
      screenOptions={{header: () => null}}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 35,
                height: 30,
                backgroundColor: focused ? PRIMARY : WHITE,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.865}
                height={20.359}
                viewBox="0 0 26.295 24.081">
                <Path
                  data-name="Icon metro-home"
                  d="M25.794 14.453L13.147 4.636.5 14.453v-4L13.147.633l12.647 9.817zm-3.165-.357v9.486h-6.32v-6.324H9.985v6.324H3.662v-9.486l9.485-7.114z"
                  fill={focused ? WHITE : PRIMARY}
                  stroke="#fff"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Advance Booking"
        component={AdvanceBookingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 35,
                height: 30,
                backgroundColor: focused ? PRIMARY : WHITE,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.865}
                height={20.359}
                viewBox="0 0 24.865 23.359">
                <G fill={focused ? WHITE : PRIMARY}>
                  <Path
                    data-name="Path 3092"
                    d="M19.752 0H5.113a5.113 5.113 0 00-.03 10.226h2.3V6.22a3.257 3.257 0 013.254-3.254h.007a3.259 3.259 0 013.247 3.254v4.006h5.865a5.113 5.113 0 000-10.226zM21.2 4.4l-2.914 2.914a.728.728 0 01-1.03 0L15.8 5.857a.728.728 0 011.03-1.03l.942.942 2.4-2.4A.728.728 0 1121.2 4.4z"
                  />
                  <Path
                    data-name="Path 3093"
                    d="M17.117 12.276l-4.689-.487V6.22a1.8 1.8 0 10-3.594 0v9.32h-.017l-1.774-1.481a1.728 1.728 0 10-2.215 2.653l3.6 3h10.6v-5.27a2.185 2.185 0 00-1.911-2.166z"
                  />
                  <Path
                    data-name="Path 3094"
                    d="M8.836 22.631a.729.729 0 00.728.729h8.741a.729.729 0 00.728-.729v-1.457h-10.2z"
                  />
                </G>
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 35,
                height: 30,
                backgroundColor: focused ? PRIMARY : WHITE,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.865}
                height={20.359}
                viewBox="0 0 31.5 36">
                <G data-name="Group 2979" fill={focused ? WHITE : PRIMARY}>
                  <Path
                    data-name="Icon awesome-user"
                    d="M15.75 18a9 9 0 10-9-9 9 9 0 009 9zm6.3 2.25h-1.174a12.24 12.24 0 01-10.252 0H9.45A9.452 9.452 0 000 29.7v2.925A3.376 3.376 0 003.375 36h24.75a3.376 3.376 0 003.375-3.375V29.7a9.452 9.452 0 00-9.45-9.45z"
                  />
                </G>
              </Svg>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
