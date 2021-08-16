import React, {Component} from 'react';
import {PRIMARY, SECONDARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import Header from '../Components/Header';
import WarehouseMainCard from '../Components/WarehouseMainCard';

export default class WarehouseCardDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: WHITE, width: width, height: height}}>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            height: height,
            flex: 1,
          }}>
          <Header
            heading="Creatv Hub"
            onPress={() => {
              navigation.navigate('Filters');
            }}
          />

          <ScrollView style={{flex: 1}}>
            <View style={{flex: 1, marginHorizontal: 18}}>
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
                text that is placed in a document or visual presentation.
              </Text>
              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: -16,
                  marginRight: 18,
                }}>
                <Text></Text>
                <Text style={{color: PRIMARY, fontSize: 12}}>See more</Text>
              </TouchableOpacity>

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
              <Text
                style={{
                  fontSize: 16,
                  color: TEXT_COLOR,
                  marginTop: 8,
                  fontWeight: 'bold',
                }}>
                Gallery
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
