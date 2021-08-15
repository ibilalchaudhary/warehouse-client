import React, {Component} from 'react';
import {
  DARK,
  DISABLE,
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Picker,
  TextInput,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';

export default class FilterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  state = {user: ''};
  updateUser = user => {
    this.setState({user: user});
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: WHITE, width: width, height: height}}>
        <ImageBackground
          source={require('../Assets/main__background.png')}
          style={{
            height: height,
            flex: 1,
            marginVertical: 12,
          }}>
          <ScrollView style={{flex: 1}}>
            <View style={{marginHorizontal: 18}}>
              <Header
                heading="Filter"
                onPress={() => {
                  navigation.navigate('BottomTabDashboard');
                }}
              />
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
                        stroke="#27ae61"
                      />
                    </Svg>
                  </View>
                  <TextInput
                    placeholder="Search"
                    placeholderTextColor={SECONDARY}
                    style={{
                      marginLeft: 16,
                      width: '100%',
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
                    width: 90,
                    height: 40,
                    borderLeftWidth: 1,
                    borderLeftColor: INPUT_BG,
                  }}>
                  <Picker
                    selectedValue={this.state.user}
                    onValueChange={this.updateUser}>
                    <Picker.Item label="40km" value="40km" />
                    <Picker.Item label="20km" value="20km" />
                    <Picker.Item label="20km" value="20km" />
                  </Picker>
                  <Text>{this.state.user}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
