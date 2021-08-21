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

function MessageSentCard({text}) {
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
      </View>
    </View>
  );
}

function MessageReceiveCard({text}) {
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
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s industry. Lorem Ipsum has been."
          />

          <MessageReceiveCard
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
          />

          <View style={{alignItems: 'center', marginBottom: 20}}>
            <Text style={{color: PRIMARY}}>Monday, 10:40 am</Text>
          </View>

          <MessageSentCard
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
          />

          <MessageReceiveCard text="Lorem Ipsum is simply dummy text of the printing." />
        </ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 14,
            marginVertical: 10,
          }}>
          <TouchableOpacity>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={21}
              viewBox="0 0 28 27">
              <Defs>
                <ClipPath id="prefix__a">
                  <Path fill="none" d="M0 0h28v27H0z" />
                </ClipPath>
              </Defs>
              <G clipPath="url(#prefix__a)">
                <Path data-name="Rectangle 252" fill="none" d="M0 0h22v22H0z" />
                <Path
                  data-name="Path 110"
                  d="M14.325 18.156a3.5 3.5 0 003.581-3.4 3.5 3.5 0 00-3.581-3.4 3.5 3.5 0 00-3.581 3.4 3.5 3.5 0 003.581 3.4zm0-10.194a7.007 7.007 0 017.162 6.8 7.007 7.007 0 01-7.162 6.8 7.007 7.007 0 01-7.162-6.8 7.007 7.007 0 017.162-6.796zM25.069 26.65H3.581a3.631 3.631 0 01-2.507-1.019A3.273 3.273 0 010 23.252V7.966a3.5 3.5 0 013.581-3.4h2.865l2.686-2.551a3.046 3.046 0 012.149-.849h6.267a2.947 2.947 0 011.97.849L22.2 4.566h2.865a3.5 3.5 0 013.585 3.4v15.286a3.5 3.5 0 01-3.581 3.398z"
                  fill="#27ae61"
                  fillRule="evenodd"
                />
              </G>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              width: '80%',
              height: 45,
              backgroundColor: WHITE,
              borderRadius: 8,
              paddingHorizontal: 8,
              color: TEXT_COLOR,
            }}>
            <TextInput
              placeholder="Text Something..."
              placeholderTextColor={DISABLE}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Svg
              data-name="Component 24 \u2013 1"
              xmlns="http://www.w3.org/2000/svg"
              width={21.65}
              height={21}
              viewBox="0 0 21.65 23">
              <Path
                data-name="Path 10"
                d="M10.825 0L8.857 1.968l7.451 7.451H0v2.812h16.308l-7.451 7.451 1.968 1.968L21.65 10.825z"
                fill="#27ae61"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
