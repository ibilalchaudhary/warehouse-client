import React, {Component} from 'react';
import {
  DISABLE,
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../Components/Header';
import Buttons from '../Components/Buttons';

function NotificationsCard() {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: WHITE,
      }}>
      <View
        style={{
          display: 'flex',
          marginVertical: 20,
          paddingHorizontal: 8,
          justifyContent: 'center',
          borderLeftWidth: 8,
          borderLeftColor: PRIMARY,
          height: 60,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', color: TEXT_COLOR}}>
            Notification Heading
          </Text>
          <Text style={{color: PRIMARY, marginRight: 12}}>2 Hours ago</Text>
        </View>
        <Text style={{fontSize: 13, marginVertical: 4}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </Text>
      </View>
    </View>
  );
}

export default class NotificationsScreen extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          backgroundColor: '#F3F3F3',
          flex: 1,
        }}>
        <Header
          heading="Notifications"
          onPress={() => {
            navigation.navigate('BottomTabDashboard');
          }}
        />

        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 20,
            marginVertical: 20,
          }}>
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />

          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
        </ScrollView>
      </View>
    );
  }
}
