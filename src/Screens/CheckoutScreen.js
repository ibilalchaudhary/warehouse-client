import React, {Component} from 'react';
import {
  INPUT_BG,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import WarehouseMainCard from '../Components/WarehouseMainCard';
import ImageZoom from 'react-native-image-pan-zoom';
import Selector from '../Components/Selector';
import Reviews from '../Components/Reviews';
import Buttons from '../Components/Buttons';

function AreaCard({area, text, borderWidth}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '22%',
        borderRightWidth: borderWidth,
        paddingRight: 22,
        borderColor: SECONDARY,
      }}>
      <Text style={{color: TEXT_COLOR}}>{area}</Text>
      <Text style={{color: SECONDARY}}>{text}</Text>
    </View>
  );
}
function CategoriesShowCase({text}) {
  return (
    <View
      style={{
        backgroundColor: PRIMARY,
        width: 80,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 8,
      }}>
      <Text style={{color: WHITE}}>{text}</Text>
    </View>
  );
}

export default class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      galleryImage: require('../Assets/galleryPic.png'),
    };
  }
  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          backgroundColor: '#F0F0F0',
          flex: 1,
        }}>
        <Header
          heading="Creatv Hub"
          onPress={() => {
            navigation.navigate('Filters');
          }}
        />

        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{flex: 1, paddingBottom: 50}}>
            <WarehouseMainCard />

            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: TEXT_COLOR,
                  marginTop: 8,
                  fontWeight: 'bold',
                  marginTop: 12,
                }}>
                Area
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <AreaCard area="5ft" text="length" borderWidth={1} />
                <AreaCard area="2ft" text="Volume" borderWidth={1} />
                <AreaCard area="7ft" text="Area" borderWidth={1} />
                <AreaCard area="5ft" text="Available" />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <AreaCard area="2ft" text="Rating" borderWidth={1} />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: PRIMARY,
                  marginTop: 8,
                  fontWeight: 'bold',
                }}>
                Representative
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RepresentativeProfile');
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 70,
                  borderRadius: 8,
                  backgroundColor: WHITE,
                  marginVertical: 8,
                  padding: 12,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Assets/userPic.png')}
                    style={{width: 50, height: 50, marginRight: 12}}
                  />
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: TEXT_COLOR,
                        fontWeight: 'bold',
                      }}>
                      Asim Rasheed
                    </Text>
                    <Text style={{color: SECONDARY}}>Lahore</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      marginRight: 6,
                      alignItems: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      backgroundColor: PRIMARY,
                    }}>
                    <Svg
                      data-name="Icon awesome-phone-alt"
                      xmlns="http://www.w3.org/2000/svg"
                      width={15.833}
                      height={15.833}
                      viewBox="0 0 15.833 15.833">
                      <Path
                        data-name="Icon awesome-phone-alt"
                        d="M15.382 11.189L11.918 9.7a.742.742 0 00-.866.213l-1.534 1.879a11.463 11.463 0 01-5.48-5.48l1.875-1.534a.74.74 0 00.213-.866L4.642.449a.747.747 0 00-.85-.43L.575.761A.742.742 0 000 1.485a14.348 14.348 0 0014.349 14.349.742.742 0 00.724-.575l.742-3.216a.751.751 0 00-.433-.854z"
                        fill="#fff"
                      />
                    </Svg>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      backgroundColor: PRIMARY,
                    }}>
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16.5}
                      height={16.5}
                      viewBox="0 0 16.5 16.5">
                      <Path
                        data-name="Icon material-message"
                        d="M14.85 0H1.65A1.648 1.648 0 00.008 1.65L0 16.5l3.3-3.3h11.55a1.655 1.655 0 001.65-1.65v-9.9A1.655 1.655 0 0014.85 0zM13.2 9.9H3.3V8.25h9.9zm0-2.475H3.3v-1.65h9.9zm0-2.475H3.3V3.3h9.9z"
                        fill="#fff"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: TEXT_COLOR,
                    fontWeight: 'bold',
                  }}>
                  Categories
                </Text>
                <CategoriesShowCase text="Food" />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View></View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{color: '#777777', marginRight: 6, top: -6}}>
                    TOTAL
                  </Text>
                  <Text
                    style={{
                      color: TEXT_COLOR,
                      fontSize: 34,
                    }}>
                    $180.0
                  </Text>
                </View>
              </View>
              <View style={{marginVertical: 50}}>
                <Buttons
                  placeholder="Checkout"
                  onPress={() => {
                    navigation.navigate('ChooseCard');
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
