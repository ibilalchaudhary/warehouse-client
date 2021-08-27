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
  AppRegistry,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import WarehouseMainCard from '../Components/WarehouseMainCard';
import ImageZoom from 'react-native-image-pan-zoom';
import Reviews from '../Components/Reviews';

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
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: PRIMARY,
        width: 80,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 8,
        marginRight: 8,
      }}>
      <Text style={{color: PRIMARY}}>{text}</Text>
    </View>
  );
}

export default class WarehouseCardDetailsScreen extends Component {
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
          backgroundColor: '#F8F8F8',
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
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 6,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Discription
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={11.93}
                  height={11.078}
                  viewBox="0 0 11.93 11.078">
                  <Path
                    data-name="Icon ionic-ios-star"
                    d="M11.477 3.835H7.56L6.37.282a.431.431 0 00-.81 0L4.37 3.835H.426A.427.427 0 000 4.261a.313.313 0 00.008.072.409.409 0 00.178.3l3.219 2.269-1.235 3.593a.427.427 0 00.146.479.412.412 0 00.24.1.522.522 0 00.266-.1l3.142-2.24 3.142 2.24a.5.5 0 00.266.1.383.383 0 00.237-.1.422.422 0 00.146-.479L8.519 6.903l3.193-2.29.077-.067a.407.407 0 00-.314-.711z"
                    fill="#f80"
                  />
                </Svg>
                <Text style={{marginLeft: 6, fontSize: 14, color: '#f80'}}>
                  4.6
                </Text>
              </View>
            </View>
            <Text style={{fontSize: 12, color: SECONDARY}}>
              Lorem ipsum, in graphical and textual context, refers to filler
              text that is placed.Lorem ipsum, in graphical and textual context.
            </Text>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: -16,
                marginRight: 26,
              }}>
              <Text></Text>
              <Text style={{color: PRIMARY, fontSize: 12}}>See more</Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 14,
                color: PRIMARY,
                marginTop: 8,
              }}>
              Owner
            </Text>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        color: SECONDARY,
                        fontSize: 12,
                        marginRight: 30,
                      }}>
                      adam@gmail.com
                    </Text>
                    <Text style={{color: SECONDARY, fontSize: 12}}>
                      +92303-7687302
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                color: PRIMARY,
                marginTop: 8,
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
                alignItems: 'center',
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

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Message');
                }}
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
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: TEXT_COLOR,
                marginTop: 8,
                fontWeight: 'bold',
              }}>
              Gallery
            </Text>
            <View>
              <ImageZoom
                cropWidth="100%"
                cropHeight={300}
                imageWidth={300}
                imageHeight={270}>
                <Image
                  source={this.state.galleryImage}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
              </ImageZoom>
              <ScrollView horizontal={true}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      galleryImage: require('../Assets/galleryPic.png'),
                    });
                  }}
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/galleryPic.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      galleryImage: require('../Assets/warehouse__bg.png'),
                    });
                  }}
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/warehouse__bg.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/galleryPic.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/galleryPic.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: 80, height: 80, marginRight: 15}}>
                  <Image
                    source={require('../Assets/galleryPic.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
              </ScrollView>
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
              <View
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: WHITE,
                  paddingHorizontal: 16,
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: 'bold'}}>Minimum Space Required</Text>
                <Text style={{color: PRIMARY}}>9ft</Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: TEXT_COLOR,
                  marginTop: 8,
                  fontWeight: 'bold',
                  marginTop: 12,
                }}>
                Categories
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <CategoriesShowCase text="Food" />
                <CategoriesShowCase text="Food" />
                <CategoriesShowCase text="Food" />
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <CategoriesShowCase text="Food" />
                <CategoriesShowCase text="Food" />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: TEXT_COLOR,
                  marginTop: 8,
                  fontWeight: 'bold',
                  marginVertical: 12,
                }}>
                Reviews
              </Text>
              <Reviews />
              <Reviews />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginVertical: 20,
                }}>
                <Text
                  style={{fontSize: 22, fontWeight: 'bold', color: TEXT_COLOR}}>
                  Availablity
                </Text>
                <Text style={{fontSize: 12, color: DISABLE}}>
                  Aug 7- Aug 12
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AdvanceBooked');
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: 50,
                  backgroundColor: WHITE,
                  marginBottom: 22,
                  borderRadius: 8,
                  marginVertical: 24,
                }}>
                <Text style={{color: '#777777'}}>Advance Bookings</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: PRIMARY,
            width: '100%',
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 26,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: WHITE}}>
              $50/
            </Text>
            <Text style={{fontSize: 12, color: WHITE}}>per day</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Booking');
            }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'center',
              width: 95,
              height: 35,
              borderRadius: 8,
              backgroundColor: WHITE,
            }}>
            <Text style={{color: '#777777', fontSize: 12}}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
