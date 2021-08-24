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
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';
import Header from '../Components/Header';
import Buttons from '../Components/Buttons';

function MessageSentCard({text, time}) {
  return (
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
        <Text style={{color: WHITE, fontSize: 12}}>{text}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: WHITE, fontSize: 12}}></Text>
          <Text style={{color: WHITE, fontSize: 12}}>{time}</Text>
        </View>
      </View>
    </View>
  );
}

function MessageReceiveCard({text, time}) {
  return (
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
        <Text style={{color: WHITE, fontSize: 12}}>{text}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: WHITE, fontSize: 12}}></Text>
          <Text style={{color: WHITE, fontSize: 12}}>{time}</Text>
        </View>
      </View>
    </View>
  );
}

export default class MessageScreen extends Component {
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
          <MessageSentCard
            time="12:10"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s industry. Lorem Ipsum has been."
          />

          <MessageReceiveCard
            time="12:10"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
          />

          <MessageSentCard
            time="12:12"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
          />
        </ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              width: '90%',
              height: 45,
              backgroundColor: WHITE,
              borderRadius: 8,
              paddingHorizontal: 8,
              color: TEXT_COLOR,
            }}>
            <TextInput
              placeholder="Say Something..."
              placeholderTextColor={DISABLE}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 20, height: 20}}>
            <Svg
              data-name="Component 24 \u2013 1"
              xmlns="http://www.w3.org/2000/svg"
              width={21.65}
              height={21}
              viewBox="0 0 21.65 23">
              <Path
                data-name="Path 10"
                d="M10.825 0L8.857 1.968l7.451 7.451H0v2.812h16.308l-7.451 7.451 1.968 1.968L21.65 10.825z"
                fill={PRIMARY}
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
