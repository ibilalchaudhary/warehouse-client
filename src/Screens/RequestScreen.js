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
function RequestForm({placeholder}) {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: WHITE,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginVertical: 8,
      }}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={DISABLE}
        style={{color: TEXT_COLOR}}
      />
    </View>
  );
}

export default class CheckoutScreen extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          backgroundColor: '#F3F3F3',
          flex: 1,
        }}>
        <Header
          heading="Request"
          onPress={() => {
            navigation.navigate('OrderComplete');
          }}
        />

        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{marginVertical: 20, marginBottom: '90%'}}>
            <RequestForm placeholder="Vehicle Number" />
            <RequestForm placeholder="Driver Name" />
            <RequestForm placeholder="Driver Phone Number" />
            <RequestForm placeholder="Time of Arrival" />
          </View>
          <Buttons placeholder="Sent Request" />
        </ScrollView>
      </View>
    );
  }
}
