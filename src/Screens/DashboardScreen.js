import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {DISABLE, PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import InputBox from '../Components/InputBox';
import Selector from '../Components/Selector';
import WarehouseCard from '../Components/WarehouseCard';
import TopTabDashboard from '../Navigation/TopTabDashboard';

export default class DashboardScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const catagrories = ['Size', 'Health', 'Weight', 'Area', 'Height', 'Space'];
    return (
      <View style={{backgroundColor: WHITE, width: width, height: height}}>
        <ImageBackground
          source={require('../Assets/main__background.png')}
          style={{
            height: height,
            flex: 1,
            marginVertical: 12,
          }}>
          <View style={{paddingHorizontal: 18}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{display: 'flex', color: DISABLE, fontSize: 16}}>
                  Lahore
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: TEXT_COLOR,
                  }}>
                  Pakistan
                </Text>
              </View>
              <TouchableOpacity>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22.476}
                  height={22.15}
                  viewBox="0 0 22.476 26.15">
                  <G
                    data-name="Icon ionic-ios-notifications-outline"
                    fill="#7b7b7b">
                    <Path
                      data-name="Path 2322"
                      d="M13.595 22.424a.911.911 0 00-.893.717 1.762 1.762 0 01-.352.766 1.329 1.329 0 01-1.132.415 1.351 1.351 0 01-1.132-.415 1.762 1.762 0 01-.352-.766.911.911 0 00-.893-.717.917.917 0 00-.893 1.118 3.142 3.142 0 003.27 2.609 3.136 3.136 0 003.27-2.609.92.92 0 00-.893-1.118z"
                    />
                    <Path
                      data-name="Path 2323"
                      d="M22.194 19.044c-1.083-1.3-3.213-2.07-3.213-7.912 0-6-2.9-8.407-5.6-8.985-.253-.058-.436-.135-.436-.379v-.186A1.652 1.652 0 0011.26 0h-.042a1.652 1.652 0 00-1.687 1.581v.189c0 .238-.183.321-.436.379-2.707.585-5.6 2.989-5.6 8.985 0 5.842-2.13 6.6-3.213 7.912A1.272 1.272 0 001.4 21.09h19.697a1.271 1.271 0 001.097-2.046zm-2.742.373H3.055a.28.28 0 01-.232-.469A7.735 7.735 0 004.3 16.801a13.447 13.447 0 001.005-5.669 9.2 9.2 0 011.47-5.579 4.541 4.541 0 012.72-1.773 2.526 2.526 0 001.308-.675.591.591 0 01.837-.013 2.615 2.615 0 001.322.688 4.541 4.541 0 012.721 1.774 9.2 9.2 0 011.47 5.579 13.447 13.447 0 001.005 5.669 7.832 7.832 0 001.512 2.179.264.264 0 01-.218.436z"
                    />
                  </G>
                </Svg>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 6,
                    backgroundColor: PRIMARY,
                    top: -20,
                    right: -12,
                  }}></View>
              </TouchableOpacity>
            </View>
            <InputBox
              variant="Search"
              onPress={() => {
                navigation.navigate('Filters');
              }}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.816}
                  height={20.652}
                  viewBox="0 0 25.816 23.652">
                  <G fill="#fff">
                    <Path
                      data-name="Path 2315"
                      d="M24.806 2.166H9.425a3.172 3.172 0 00-6.015 0h-2.4a1.01 1.01 0 000 2.02h2.4a3.172 3.172 0 006.015 0h15.38a1.01 1.01 0 100-2.02zM6.418 4.326a1.153 1.153 0 111.153-1.153 1.155 1.155 0 01-1.153 1.153z"
                    />
                    <Path
                      data-name="Path 2316"
                      d="M24.806 10.816h-2.4a3.172 3.172 0 00-6.015 0H1.01a1.01 1.01 0 000 2.02h15.38a3.172 3.172 0 006.015 0h2.4a1.01 1.01 0 100-2.02zm-5.408 2.163a1.153 1.153 0 111.153-1.153 1.155 1.155 0 01-1.153 1.153z"
                    />
                    <Path
                      data-name="Path 2317"
                      d="M24.806 19.469H13.752a3.172 3.172 0 00-6.015 0H1.01a1.01 1.01 0 000 2.02h6.723a3.172 3.172 0 006.015 0h11.058a1.01 1.01 0 100-2.02zm-14.061 2.163a1.153 1.153 0 111.153-1.153 1.155 1.155 0 01-1.153 1.154z"
                    />
                  </G>
                </Svg>
              }
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                marginVertical: 18,
                display: 'flex',
                flexDirection: 'row',
              }}>
              {catagrories.map(item => {
                return <Selector key={item} text={item} />;
              })}
            </ScrollView>

            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: TEXT_COLOR,
                marginBottom: 22,
              }}>
              Nearby Warehouses
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <WarehouseCard />
              <WarehouseCard />
              <WarehouseCard />
              <WarehouseCard />
            </ScrollView>
          </View>

          <TopTabDashboard />
        </ImageBackground>
      </View>
    );
  }
}
{
  /* <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '60%',
                }}>
                <View style={{display: 'flex'}}>
                  <Text
                    style={{
                      color: TEXT_COLOR,
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginBottom: 26,
                    }}>
                    Creatv Hub
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17.529}
                      height={10.445}
                      viewBox="0 0 17.529 10.445">
                      <G data-name="Group 2979" fill={SECONDARY}>
                        <Path
                          data-name="Path 2329"
                          d="M11.317 0h-10.1A1.219 1.219 0 000 1.217v8.011a1.219 1.219 0 001.217 1.217h10.1a1.219 1.219 0 001.217-1.217V1.217A1.219 1.219 0 0011.317 0zm0 0"
                        />
                        <Path
                          data-name="Path 2330"
                          d="M13.345 6.89l4.183 2.284V1.297l-4.183 2.284zm0 0"
                        />
                      </G>
                    </Svg>
                    <Text style={{color: SECONDARY}}>3 Camera</Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      alignContent: 'flex-start',
                    }}>
                    <View>
                      <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18.808}
                        height={13.925}
                        viewBox="0 0 18.808 13.925">
                        <G data-name="Group 934">
                          <G data-name="Group 933">
                            <Path
                              data-name="Path 2324"
                              d="M14.83 5.606H3.979L3.328 8.5h12.153z"
                              fill={SECONDARY}
                            />
                          </G>
                        </G>
                        <G data-name="Group 936">
                          <G data-name="Group 935">
                            <Path
                              data-name="Path 2325"
                              d="M17.181 0H1.628A1.629 1.629 0 000 1.628v5.245a1.63 1.63 0 001.628 1.628h.588l.8-3.555a.543.543 0 01.529-.423h11.719a.543.543 0 01.529.423l.8 3.555h.588a1.63 1.63 0 001.628-1.628V1.628A1.63 1.63 0 0017.181 0zM12.3 3.798h-.723a.543.543 0 110-1.085h.723a.543.543 0 110 1.085zm2.532 0h-.723a.543.543 0 110-1.085h.723a.543.543 0 110 1.085z"
                              fill={SECONDARY}
                            />
                          </G>
                        </G>
                        <G data-name="Group 938">
                          <G data-name="Group 937">
                            <Path
                              data-name="Path 2326"
                              d="M9.766 10.971a.5.5 0 01.1-.324 1.561 1.561 0 00.258-.882.543.543 0 00-1.085 0 .5.5 0 01-.1.324 1.636 1.636 0 000 1.764.558.558 0 010 .647 1.562 1.562 0 00-.258.882.543.543 0 001.085 0 .5.5 0 01.1-.324 1.636 1.636 0 000-1.764.5.5 0 01-.1-.323z"
                              fill={SECONDARY}
                            />
                          </G>
                        </G>
                        <G data-name="Group 940">
                          <G data-name="Group 939">
                            <Path
                              data-name="Path 2327"
                              d="M6.872 10.971a.5.5 0 01.1-.324 1.561 1.561 0 00.258-.882.543.543 0 10-1.085 0 .5.5 0 01-.1.324 1.636 1.636 0 000 1.764.558.558 0 010 .647 1.562 1.562 0 00-.258.882.543.543 0 001.085 0 .5.5 0 01.1-.324 1.636 1.636 0 000-1.764.5.5 0 01-.1-.323z"
                              fill={SECONDARY}
                            />
                          </G>
                        </G>
                        <G data-name="Group 942">
                          <G data-name="Group 941">
                            <Path
                              data-name="Path 2328"
                              d="M12.659 10.971a.5.5 0 01.1-.324 1.561 1.561 0 00.258-.882.543.543 0 00-1.085 0 .5.5 0 01-.1.324 1.636 1.636 0 000 1.764.558.558 0 010 .647 1.562 1.562 0 00-.258.882.543.543 0 001.085 0 .5.5 0 01.1-.324 1.636 1.636 0 000-1.764.5.5 0 01-.1-.323z"
                              fill={SECONDARY}
                            />
                          </G>
                        </G>
                      </Svg>
                    </View>
                    <Text style={{color: SECONDARY}}>3 Camera</Text>
                  </View>
                </View>

                <View style={{display: 'flex', marginLeft: 25}}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      marginTop: 10,
                      marginBottom: 25,
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
                    <Text
                      style={{
                        color: '#f80',
                      }}>
                      4.5
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: PRIMARY, fontSize: 16}}>
                      $50 / Month
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      alignContent: 'flex-start',
                    }}>
                    <Text style={{color: SECONDARY, fontSize: 12}}>
                      Area Available:
                    </Text>
                    <Text style={{color: TEXT_COLOR, fontSize: 12}}>9ft</Text>
                  </View>
                </View>
              </View> */
}
