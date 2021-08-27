import React, {Component} from 'react';
import {DARK, INPUT_BG, PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Dropdown from '../Components/Dropdown';
import RangeSlider from '../Components/RangeSlider';
import Buttons from '../Components/Buttons';
import {Picker} from '@react-native-picker/picker';

export default class FilterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{width: width, height: height}}>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            height: height,
            flex: 1,
          }}>
          <Header
            heading="Search Warehouses"
            onPress={() => {
              navigation.navigate('BottomTabDashboard');
            }}
          />
          <ScrollView style={{flex: 1}}>
            <View style={{marginHorizontal: 18}}>
              <InputBox
                variant="Search"
                svg={
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16.815}
                    height={23.7}
                    viewBox="0 0 16.815 23.7">
                    <Path
                      data-name="Path 280"
                      d="M15.069 4.453A7.635 7.635 0 008.581.6h-.346a7.636 7.636 0 00-6.488 3.851 7.833 7.833 0 00-.1 7.74L7.224 22.4l.008.014a1.356 1.356 0 002.353 0l.008-.014 5.579-10.212a7.833 7.833 0 00-.1-7.74zm-6.665 6.342a3.164 3.164 0 113.164-3.164 3.168 3.168 0 01-3.164 3.164z"
                      fill="none"
                      stroke="#f4f4f3"
                      strokeWidth={1.2}
                    />
                  </Svg>
                }
                onPress={() => {
                  navigation.navigate('Map');
                }}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: 8,
                  backgroundColor: WHITE,
                  marginTop: 20,
                  height: 50,
                  borderColor: this.state.focus ? PRIMARY : '#ffffff',
                  borderWidth: 1,
                }}>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '70%',
                    height: 40,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignContent: 'center',
                      marginLeft: 16,
                    }}>
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12.072}
                      height={16.952}
                      viewBox="0 0 12.072 16.952">
                      <Path
                        data-name="Path 280"
                        d="M10.759 3.231A5.413 5.413 0 006.159.5h-.245a5.413 5.413 0 00-4.6 2.73 5.553 5.553 0 00-.072 5.487l3.956 7.24.005.01a.961.961 0 001.668 0l.005-.01 3.956-7.24a5.554 5.554 0 00-.072-5.487zm-4.723 4.5a2.243 2.243 0 112.248-2.247 2.246 2.246 0 01-2.248 2.244z"
                        fill="none"
                        stroke={PRIMARY}
                      />
                    </Svg>
                  </View>
                  <TextInput
                    placeholder="Location"
                    placeholderTextColor={SECONDARY}
                    style={{
                      marginLeft: 16,
                      borderRightWidth: 1,
                      borderRightColor: INPUT_BG,
                      width: '83%',
                      color: DARK,
                    }}
                    onFocus={() => {
                      this.setState({
                        focus: true,
                      });
                    }}
                    onBlur={() => {
                      this.setState({
                        focus: false,
                      });
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 94,
                    height: 50,
                    marginLeft: 10,
                  }}>
                  <Dropdown label="4km" value="" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Text>Product Type</Text>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginVertical: 8,
                      width: 145,
                      height: 50,
                      borderRadius: 8,
                      backgroundColor: WHITE,
                    }}>
                    <Dropdown label="Food" value="" />
                  </TouchableOpacity>
                </View>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text>Area</Text>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginVertical: 8,
                      width: 145,
                      height: 50,
                      borderRadius: 8,
                      backgroundColor: WHITE,
                    }}>
                    <Dropdown label="5ft" value="" />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Text>Volume</Text>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginVertical: 8,
                      width: 145,
                      height: 50,
                      borderRadius: 8,
                      backgroundColor: WHITE,
                    }}>
                    <Dropdown label="5" value="" />
                  </TouchableOpacity>
                </View>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text>Booking</Text>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginVertical: 8,
                      width: 145,
                      height: 50,
                      borderRadius: 8,
                      backgroundColor: WHITE,
                    }}>
                    <Dropdown label="Advance" value="" />
                  </TouchableOpacity>
                </View>
              </View>
              <RangeSlider />
              <RangeSlider />
              <View style={{display: 'flex', marginVertical: 50}}>
                <Buttons
                  onPress={() => {
                    navigation.navigate('SearchResult');
                  }}
                  placeholder="Search"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
