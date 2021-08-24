import React, {Component, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Buttons from '../Components/Buttons';
import Header from '../Components/Header';
import {PRIMARY, TEXT_COLOR} from '../Constants/Colors';

function CardEntry({onPress, toPath}) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={toPath}
      onFocus={() => {
        setSelected(true);
      }}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderColor: selected ? PRIMARY : TEXT_COLOR,
        borderWidth: selected ? 2 : 1,
        borderRadius: 10,
        marginBottom: 20,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../Assets/card__pic.png')}
          style={{marginRight: 15}}
        />
        <View>
          <Text style={{fontSize: 16, color: TEXT_COLOR, marginBottom: 2}}>
            Adams Mickey
          </Text>
          <Text style={{fontSize: 12, color: 'gray'}}>4323 XXXX XXXX XXXX</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: PRIMARY,
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 10,
        }}>
        <Text style={{color: '#ffffff'}}>Edit</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default class ChooseCardScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={() => {
            navigation.navigate('PaymentOptions');
          }}
          heading="Choose Card"
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
        </ScrollView>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <Buttons
            onPress={() => {
              navigation.navigate('AddCard');
            }}
            placeholder="Add Card"
          />
        </View>
      </SafeAreaView>
    );
  }
}
