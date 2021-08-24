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
  ImageBackground,
} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';
import Header from '../Components/Header';
import Buttons from '../Components/Buttons';
import InputBox from '../Components/InputBox';
import {height} from '../Constants/Dimensions';

export default class RequestScreen extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <ImageBackground
        source={require('../Assets/main__background.png')}
        style={{flex: 1, height: height}}>
        <Header
          heading="Request"
          onPress={() => {
            navigation.navigate('OrderComplete');
          }}
        />

        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{marginVertical: 30}}>
            <InputBox
              variant="primary"
              placeholder="Vehicle Number"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={19.575}
                  height={18.5}
                  viewBox="0 0 25.575 16.5">
                  <Path
                    data-name="Path 9234"
                    d="M24.75 0H.825A.826.826 0 000 .825v14.85a.826.826 0 00.825.825H24.75a.826.826 0 00.825-.825V.825A.826.826 0 0024.75 0zm0 15.675H.825V.825H24.75zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9235"
                    d="M23.925 1.65H1.65v13.2h22.275zM23.1 14.025H2.475V2.475H23.1zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9236"
                    d="M21.45 3.3h.825v.825h-.825zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9237"
                    d="M3.3 3.3h.825v.825H3.3zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9238"
                    d="M21.45 12.375h.825v.825h-.825zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9239"
                    d="M3.3 12.375h.825v.825H3.3zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9240"
                    d="M3.713 9.075a2.063 2.063 0 004.125 0h-.825a1.238 1.238 0 11-2.475 0v-1.65a1.238 1.238 0 112.475 0h.825a2.063 2.063 0 00-4.125 0zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9241"
                    d="M8.663 7.837h2.475v.825H8.663zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9242"
                    d="M13.612 6.6v.825a.413.413 0 01-.413.413h-1.237v.825h1.237a.413.413 0 01.413.412V9.9a.413.413 0 01-.413.412h-2.062v.825H13.2A1.239 1.239 0 0014.438 9.9v-.825a1.23 1.23 0 00-.322-.825 1.228 1.228 0 00.322-.825V6.6A1.239 1.239 0 0013.2 5.362h-2.063v.825H13.2a.413.413 0 01.412.413zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9243"
                    d="M18.562 10.313h-2.3l1.6-1.6a2.418 2.418 0 00.7-1.7 1.65 1.65 0 10-3.3 0v.412h.825v-.412a.825.825 0 011.65 0 1.587 1.587 0 01-.461 1.115l-2.014 2.014v1h3.3zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 9244"
                    d="M21.863 10.312h-.825v-4.95h-1.65v.825h.825v4.125h-.825v.825h2.475zm0 0"
                    fill="#4571b0"
                  />
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Driver Name"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18.978}
                  height={18}
                  viewBox="0 0 14.978 20">
                  <Path
                    data-name="Path 285"
                    d="M7.489 10.617a2.278 2.278 0 10-2.278-2.278 2.278 2.278 0 002.278 2.278zm0-3.67a1.4 1.4 0 11-1.4 1.4 1.4 1.4 0 011.4-1.4zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 286"
                    d="M7.489 11.458a3.418 3.418 0 00-2.476 1.035 3.654 3.654 0 00-1.022 2.586.442.442 0 00.441.441h6.114a.442.442 0 00.441-.441 3.654 3.654 0 00-1.022-2.586 3.418 3.418 0 00-2.476-1.035zm-2.586 3.178a2.694 2.694 0 01.74-1.529 2.595 2.595 0 013.691 0 2.708 2.708 0 01.74 1.529zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 287"
                    d="M12.775 0H2.203a2.2 2.2 0 00-2.2 2.2v15.6a2.2 2.2 0 002.2 2.2h10.572a2.2 2.2 0 002.2-2.2V2.2a2.2 2.2 0 00-2.2-2.2zm1.322 17.8a1.325 1.325 0 01-1.322 1.322H2.203A1.325 1.325 0 01.882 17.8V2.2A1.325 1.325 0 012.203.881h10.572A1.325 1.325 0 0114.097 2.2zm0 0"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Path 288"
                    d="M5.652 2.956h3.524a.441.441 0 100-.881H5.652a.441.441 0 100 .881zm0 0"
                    fill="#4571b0"
                  />
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Driver Phone Number"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18.701}
                  height={18.776}
                  viewBox="0 0 19.701 19.776">
                  <Path
                    data-name="Path 2311"
                    d="M3.988 13.146a20.98 20.98 0 006.979 5.467 10.861 10.861 0 003.905 1.156c.094 0 .184.008.279.008a3.234 3.234 0 002.511-1.077.089.089 0 00.016-.02 10.559 10.559 0 01.791-.82c.193-.184.389-.377.578-.574a1.979 1.979 0 00-.008-2.946l-2.463-2.463a1.993 1.993 0 00-1.442-.664 2.061 2.061 0 00-1.459.66l-1.467 1.465a7.258 7.258 0 00-.406-.213 5.068 5.068 0 01-.451-.246A15.526 15.526 0 017.643 9.5a8.941 8.941 0 01-1.255-2c.385-.348.746-.713 1.094-1.07.123-.127.25-.254.377-.381a2.1 2.1 0 00.68-1.475A2.084 2.084 0 007.86 3.1L6.639 1.881c-.143-.143-.279-.283-.418-.426a20.84 20.84 0 00-.833-.824A2.043 2.043 0 003.947 0a2.1 2.1 0 00-1.459.635L.956 2.168a3.149 3.149 0 00-.939 2.016 7.584 7.584 0 00.571 3.278 19.072 19.072 0 003.4 5.684zM1.017 4.27a2.168 2.168 0 01.652-1.393l1.519-1.525A1.1 1.1 0 013.947 1a1.047 1.047 0 01.741.36c.275.254.533.52.811.8l.426.434 1.218 1.225a1.113 1.113 0 01.385.766 1.113 1.113 0 01-.385.766l-.381.385c-.381.385-.738.75-1.131 1.1l-.02.02a.8.8 0 00-.2.91c0 .012.008.02.012.033a9.644 9.644 0 001.438 2.34 16.387 16.387 0 003.95 3.6 5.866 5.866 0 00.541.3 5.067 5.067 0 01.451.246l.045.025a.857.857 0 00.4.1.869.869 0 00.611-.279l1.529-1.538a1.084 1.084 0 01.75-.365 1.029 1.029 0 01.725.365l2.471 2.467a.988.988 0 01-.016 1.54c-.172.184-.352.361-.545.545a11.8 11.8 0 00-.856.889 2.25 2.25 0 01-1.758.746c-.07 0-.143 0-.213-.008a9.867 9.867 0 01-3.532-1.057 19.931 19.931 0 01-6.643-5.2 18.255 18.255 0 01-3.238-5.389 6.609 6.609 0 01-.516-2.856z"
                    fill="#4571b0"
                  />
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Time of Arival"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18.441}
                  height={18.441}
                  viewBox="0 0 20.441 20.441">
                  <G
                    data-name="Icon ionic-md-time"
                    fill="#4571b0"
                    stroke="#f8f8f8">
                    <Path
                      data-name="Path 9230"
                      d="M10.211.5a9.72 9.72 0 109.73 9.72A9.717 9.717 0 0010.211.5zM10.22 18a7.776 7.776 0 117.777-7.775 7.776 7.776 0 01-7.772 7.772z"
                    />
                    <Path
                      data-name="Path 9231"
                      d="M10.711 5.361H9.249v5.832l5.1 3.061.729-1.2-4.367-2.59z"
                    />
                  </G>
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Date of Arival"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={19}
                  height={21}
                  viewBox="0 0 19 21">
                  <Path
                    data-name="Icon material-date-range"
                    d="M6.5 9.5h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1v-2h-2v2h-8v-2h-2v2h-1a1.991 1.991 0 00-1.99 2l-.01 14a2 2 0 002 2h14a2.006 2.006 0 002-2v-14a2.006 2.006 0 00-2-2zm0 16h-14v-11h14z"
                    fill="#4571b0"
                    stroke="#fff"
                  />
                </Svg>
              }
            />
          </View>
          <View style={{marginVertical: 40, marginTop: 200}}>
            <Buttons
              onPress={() => {
                navigation.navigate('CencelRequest');
              }}
              placeholder="Sent Request"
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
