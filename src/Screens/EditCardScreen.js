import React, {Component, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import {PRIMARY, TEXT_COLOR} from '../Constants/Colors';

export default class EditCardScreen extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardNumber: '',
      exp: '',
      year: '',
      cvc: '',
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={() => {
            navigation.navigate('ChooseCard');
          }}
          heading="Edit Card"
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: PRIMARY,
              padding: 20,
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ffffff', fontSize: 16}}>
                Mehfooz Rehman
              </Text>
              <Image source={require('../Assets/card__pic.png')} />
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: '#ffffff',
                fontSize: 16,
                marginVertical: 20,
              }}>
              X454 4554 3434 4545
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>
                Year
              </Text>
              <Text
                style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>
                CVC
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ffffff', fontSize: 14}}>01/25</Text>
              <Text style={{color: '#ffffff', fontSize: 14}}>XXX</Text>
            </View>
          </View>
          <InputBox
            variant="primary"
            placeholder="Card Name"
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={26.697}
                height={17.798}
                viewBox="0 0 26.697 17.798">
                <G
                  id="_633611"
                  data-name="633611"
                  transform="translate(0 -85.333)">
                  <G
                    id="Group_603"
                    data-name="Group 603"
                    transform="translate(0 85.333)">
                    <G
                      id="Group_602"
                      data-name="Group 602"
                      transform="translate(0 0)">
                      <Path
                        id="Path_2264"
                        data-name="Path 2264"
                        d="M23.916,85.333H2.781A2.785,2.785,0,0,0,0,88.114V100.35a2.785,2.785,0,0,0,2.781,2.781H23.916A2.785,2.785,0,0,0,26.7,100.35V88.114A2.785,2.785,0,0,0,23.916,85.333Zm1.669,15.017a1.671,1.671,0,0,1-1.669,1.669H2.781a1.671,1.671,0,0,1-1.669-1.669V88.114a1.671,1.671,0,0,1,1.669-1.669H23.916a1.671,1.671,0,0,1,1.669,1.669V100.35Z"
                        transform="translate(0 -85.333)"
                        fill={PRIMARY}
                      />
                    </G>
                  </G>
                  <G
                    id="Group_605"
                    data-name="Group 605"
                    transform="translate(0 88.67)">
                    <G
                      id="Group_604"
                      data-name="Group 604"
                      transform="translate(0 0)">
                      <Path
                        id="Path_2265"
                        data-name="Path 2265"
                        d="M26.141,149.333H.556a.556.556,0,0,0-.556.556v3.337a.556.556,0,0,0,.556.556H26.141a.556.556,0,0,0,.556-.556v-3.337A.557.557,0,0,0,26.141,149.333Zm-.556,3.337H1.112v-2.225H25.585v2.225Z"
                        transform="translate(0 -149.333)"
                        fill={PRIMARY}
                      />
                    </G>
                  </G>
                  <G
                    id="Group_607"
                    data-name="Group 607"
                    transform="translate(3.337 96.457)">
                    <G id="Group_606" data-name="Group 606">
                      <Path
                        id="Path_2266"
                        data-name="Path 2266"
                        d="M71.231,298.667H64.556a.556.556,0,1,0,0,1.112h6.674a.556.556,0,1,0,0-1.112Z"
                        transform="translate(-64 -298.667)"
                        fill={PRIMARY}
                      />
                    </G>
                  </G>
                  <G
                    id="Group_609"
                    data-name="Group 609"
                    transform="translate(3.337 98.682)">
                    <G
                      id="Group_608"
                      data-name="Group 608"
                      transform="translate(0 0)">
                      <Path
                        id="Path_2267"
                        data-name="Path 2267"
                        d="M71.231,341.333H64.556a.556.556,0,0,0,0,1.112h6.674a.556.556,0,0,0,0-1.112Z"
                        transform="translate(-64 -341.333)"
                        fill={PRIMARY}
                      />
                    </G>
                  </G>
                  <G
                    id="Group_611"
                    data-name="Group 611"
                    transform="translate(18.911 95.345)">
                    <G
                      id="Group_610"
                      data-name="Group 610"
                      transform="translate(0 0)">
                      <Path
                        id="Path_2268"
                        data-name="Path 2268"
                        d="M365.448,277.333h-1.112A1.671,1.671,0,0,0,362.667,279v1.112a1.671,1.671,0,0,0,1.669,1.669h1.112a1.671,1.671,0,0,0,1.669-1.669V279A1.671,1.671,0,0,0,365.448,277.333Zm.556,2.781a.556.556,0,0,1-.556.556h-1.112a.556.556,0,0,1-.556-.556V279a.556.556,0,0,1,.556-.556h1.112A.556.556,0,0,1,366,279Z"
                        transform="translate(-362.667 -277.333)"
                        fill={PRIMARY}
                      />
                    </G>
                  </G>
                </G>
              </Svg>
            }
          />
          <InputBox
            variant="primary"
            placeholder="Card No."
            svg={
              <Svg
                id="_1530190"
                data-name="1530190"
                xmlns="http://www.w3.org/2000/svg"
                width={23.842}
                height={15.657}
                viewBox="0 0 23.842 15.657">
                <Path
                  id="Path_2269"
                  data-name="Path 2269"
                  d="M0,0V15.657H23.842V0ZM22.445,1.146V2.673H1.4V1.146ZM1.4,14.512V3.819H22.445V14.512Zm0,0"
                  fill={PRIMARY}
                />
                <Path
                  id="Path_2270"
                  data-name="Path 2270"
                  d="M187.718,175c-.964,0-1.718,1.006-1.718,2.291s.755,2.291,1.718,2.291,1.718-1.006,1.718-2.291S188.682,175,187.718,175Zm0,3.437c-.234,0-.573-.446-.573-1.146s.339-1.146.573-1.146.573.446.573,1.146S187.952,178.437,187.718,178.437Zm0,0"
                  transform="translate(-177.006 -168.317)"
                  fill={PRIMARY}
                />
                <Path
                  id="Path_2271"
                  data-name="Path 2271"
                  d="M306,180h1.146v4.2H306Zm0,0"
                  transform="translate(-291.591 -173.126)"
                  fill={PRIMARY}
                />
                <Path
                  id="Path_2272"
                  data-name="Path 2272"
                  d="M126,180h1.146v4.2H126Zm0,0"
                  transform="translate(-120.067 -173.126)"
                  fill={PRIMARY}
                />
                <Path
                  id="Path_2273"
                  data-name="Path 2273"
                  d="M66,180h1.146v4.2H66Zm0,0"
                  transform="translate(-63.48 -173.126)"
                  fill={PRIMARY}
                />
                <Path
                  id="Path_2274"
                  data-name="Path 2274"
                  d="M367.718,175c-.964,0-1.718,1.006-1.718,2.291s.755,2.291,1.718,2.291,1.718-1.006,1.718-2.291S368.682,175,367.718,175Zm0,3.437c-.234,0-.573-.446-.573-1.146s.339-1.146.573-1.146.573.446.573,1.146S367.952,178.437,367.718,178.437Zm0,0"
                  transform="translate(-347.733 -168.317)"
                  fill={PRIMARY}
                />
              </Svg>
            }
          />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{width: '50%', marginRight: 10}}>
              <InputBox
                variant="primary"
                placeholder="Exp"
                svg={
                  <Svg
                    id="_860794"
                    data-name="860794"
                    xmlns="http://www.w3.org/2000/svg"
                    width={18.062}
                    height={18.062}
                    viewBox="0 0 18.062 18.062">
                    <G
                      id="Group_613"
                      data-name="Group 613"
                      transform="translate(0)">
                      <G id="Group_612" data-name="Group 612">
                        <Path
                          id="Path_2275"
                          data-name="Path 2275"
                          d="M16.127,1.935H14.192V.645a.645.645,0,1,0-1.29,0v1.29H5.161V.645a.645.645,0,1,0-1.29,0v1.29H1.935A1.935,1.935,0,0,0,0,3.87V16.127a1.935,1.935,0,0,0,1.935,1.935H16.127a1.935,1.935,0,0,0,1.935-1.935V3.87A1.935,1.935,0,0,0,16.127,1.935Zm.645,14.192a.645.645,0,0,1-.645.645H1.935a.645.645,0,0,1-.645-.645V7.741H16.772Zm0-9.676H1.29V3.87a.645.645,0,0,1,.645-.645H3.87v1.29a.645.645,0,1,0,1.29,0V3.225H12.9v1.29a.645.645,0,1,0,1.29,0V3.225h1.935a.645.645,0,0,1,.645.645v2.58Z"
                          transform="translate(0)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_615"
                      data-name="Group 615"
                      transform="translate(3.225 9.031)">
                      <G id="Group_614" data-name="Group 614">
                        <Path
                          id="Path_2276"
                          data-name="Path 2276"
                          d="M87.268,238.933h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,1,0,0-1.29Z"
                          transform="translate(-85.333 -238.933)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_617"
                      data-name="Group 617"
                      transform="translate(7.741 9.031)">
                      <G id="Group_616" data-name="Group 616">
                        <Path
                          id="Path_2277"
                          data-name="Path 2277"
                          d="M206.735,238.933h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-204.8 -238.933)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_619"
                      data-name="Group 619"
                      transform="translate(12.256 9.031)">
                      <G id="Group_618" data-name="Group 618">
                        <Path
                          id="Path_2278"
                          data-name="Path 2278"
                          d="M326.2,238.933h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,1,0,0-1.29Z"
                          transform="translate(-324.267 -238.933)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_621"
                      data-name="Group 621"
                      transform="translate(3.225 11.611)">
                      <G id="Group_620" data-name="Group 620">
                        <Path
                          id="Path_2279"
                          data-name="Path 2279"
                          d="M87.268,307.2h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-85.333 -307.2)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_623"
                      data-name="Group 623"
                      transform="translate(7.741 11.611)">
                      <G id="Group_622" data-name="Group 622">
                        <Path
                          id="Path_2280"
                          data-name="Path 2280"
                          d="M206.735,307.2h-1.29a.645.645,0,0,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-204.8 -307.2)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_625"
                      data-name="Group 625"
                      transform="translate(12.256 11.611)">
                      <G id="Group_624" data-name="Group 624">
                        <Path
                          id="Path_2281"
                          data-name="Path 2281"
                          d="M326.2,307.2h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-324.267 -307.2)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_627"
                      data-name="Group 627"
                      transform="translate(3.225 14.192)">
                      <G id="Group_626" data-name="Group 626">
                        <Path
                          id="Path_2282"
                          data-name="Path 2282"
                          d="M87.268,375.467h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,1,0,0-1.29Z"
                          transform="translate(-85.333 -375.467)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_629"
                      data-name="Group 629"
                      transform="translate(7.741 14.192)">
                      <G id="Group_628" data-name="Group 628">
                        <Path
                          id="Path_2283"
                          data-name="Path 2283"
                          d="M206.735,375.467h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-204.8 -375.467)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_631"
                      data-name="Group 631"
                      transform="translate(12.256 14.192)">
                      <G id="Group_630" data-name="Group 630">
                        <Path
                          id="Path_2284"
                          data-name="Path 2284"
                          d="M326.2,375.467h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,1,0,0-1.29Z"
                          transform="translate(-324.267 -375.467)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                  </Svg>
                }
              />
            </View>
            <View>
              <InputBox
                variant="primary"
                placeholder="Year"
                svg={
                  <Svg
                    id="_860794"
                    data-name="860794"
                    xmlns="http://www.w3.org/2000/svg"
                    width={18.062}
                    height={18.062}
                    viewBox="0 0 18.062 18.062">
                    <G
                      id="Group_613"
                      data-name="Group 613"
                      transform="translate(0)">
                      <G id="Group_612" data-name="Group 612">
                        <Path
                          id="Path_2275"
                          data-name="Path 2275"
                          d="M16.127,1.935H14.192V.645a.645.645,0,1,0-1.29,0v1.29H5.161V.645a.645.645,0,1,0-1.29,0v1.29H1.935A1.935,1.935,0,0,0,0,3.87V16.127a1.935,1.935,0,0,0,1.935,1.935H16.127a1.935,1.935,0,0,0,1.935-1.935V3.87A1.935,1.935,0,0,0,16.127,1.935Zm.645,14.192a.645.645,0,0,1-.645.645H1.935a.645.645,0,0,1-.645-.645V7.741H16.772Zm0-9.676H1.29V3.87a.645.645,0,0,1,.645-.645H3.87v1.29a.645.645,0,1,0,1.29,0V3.225H12.9v1.29a.645.645,0,1,0,1.29,0V3.225h1.935a.645.645,0,0,1,.645.645v2.58Z"
                          transform="translate(0)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_615"
                      data-name="Group 615"
                      transform="translate(3.225 9.031)">
                      <G id="Group_614" data-name="Group 614">
                        <Path
                          id="Path_2276"
                          data-name="Path 2276"
                          d="M87.268,238.933h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,1,0,0-1.29Z"
                          transform="translate(-85.333 -238.933)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_617"
                      data-name="Group 617"
                      transform="translate(7.741 9.031)">
                      <G id="Group_616" data-name="Group 616">
                        <Path
                          id="Path_2277"
                          data-name="Path 2277"
                          d="M206.735,238.933h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-204.8 -238.933)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_619"
                      data-name="Group 619"
                      transform="translate(12.256 9.031)">
                      <G id="Group_618" data-name="Group 618">
                        <Path
                          id="Path_2278"
                          data-name="Path 2278"
                          d="M326.2,238.933h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,1,0,0-1.29Z"
                          transform="translate(-324.267 -238.933)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_621"
                      data-name="Group 621"
                      transform="translate(3.225 11.611)">
                      <G id="Group_620" data-name="Group 620">
                        <Path
                          id="Path_2279"
                          data-name="Path 2279"
                          d="M87.268,307.2h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-85.333 -307.2)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_623"
                      data-name="Group 623"
                      transform="translate(7.741 11.611)">
                      <G id="Group_622" data-name="Group 622">
                        <Path
                          id="Path_2280"
                          data-name="Path 2280"
                          d="M206.735,307.2h-1.29a.645.645,0,0,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-204.8 -307.2)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_625"
                      data-name="Group 625"
                      transform="translate(12.256 11.611)">
                      <G id="Group_624" data-name="Group 624">
                        <Path
                          id="Path_2281"
                          data-name="Path 2281"
                          d="M326.2,307.2h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-324.267 -307.2)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_627"
                      data-name="Group 627"
                      transform="translate(3.225 14.192)">
                      <G id="Group_626" data-name="Group 626">
                        <Path
                          id="Path_2282"
                          data-name="Path 2282"
                          d="M87.268,375.467h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,1,0,0-1.29Z"
                          transform="translate(-85.333 -375.467)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_629"
                      data-name="Group 629"
                      transform="translate(7.741 14.192)">
                      <G id="Group_628" data-name="Group 628">
                        <Path
                          id="Path_2283"
                          data-name="Path 2283"
                          d="M206.735,375.467h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,0,0,0-1.29Z"
                          transform="translate(-204.8 -375.467)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                    <G
                      id="Group_631"
                      data-name="Group 631"
                      transform="translate(12.256 14.192)">
                      <G id="Group_630" data-name="Group 630">
                        <Path
                          id="Path_2284"
                          data-name="Path 2284"
                          d="M326.2,375.467h-1.29a.645.645,0,1,0,0,1.29h1.29a.645.645,0,1,0,0-1.29Z"
                          transform="translate(-324.267 -375.467)"
                          fill={PRIMARY}
                        />
                      </G>
                    </G>
                  </Svg>
                }
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{width: '50%', marginRight: 10}}>
              <Text style={{color: TEXT_COLOR}}>
                Enter the code from back of your card
              </Text>
            </View>
            <View>
              <InputBox variant="primary" placeholder="CVC" />
            </View>
          </View>
        </ScrollView>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <Buttons
            onPress={() => {
              navigation.navigate('ChooseCard');
            }}
            placeholder="Edit Card"
          />
        </View>
      </SafeAreaView>
    );
  }
}
