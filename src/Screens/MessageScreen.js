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
          heading="Representative"
          onPress={() => {
            navigation.navigate('RepresentativeProfile');
          }}
        />

        <ScrollView
          style={{flex: 1, paddingHorizontal: 20, marginVertical: 20}}>
          <View style={{display: 'flex', alignItems: 'flex-end'}}>
            <View
              style={{
                width: '85%',
                minHeight: 70,
                maxHeight: 300,
                backgroundColor: PRIMARY,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                padding: 18,
              }}>
              <Text style={{color: WHITE, fontSize: 12}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s industry. Lorem Ipsum has been.
              </Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginVertical: 20,
            }}>
            <View
              style={{
                width: '85%',
                minHeight: 70,
                maxHeight: 300,
                backgroundColor: PRIMARY,
                borderTopRightRadius: 8,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                padding: 18,
                backgroundColor: SECONDARY,
              }}>
              <Text style={{color: WHITE, fontSize: 12}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s industry. Lorem Ipsum has been.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
