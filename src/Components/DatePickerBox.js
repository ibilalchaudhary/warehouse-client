import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import DatePicker from 'react-native-date-picker';
import Button from '../Components/Buttons';

export default function DatePickerBox() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  let dateValue = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          height: 50,
          borderRadius: 5,
          backgroundColor: WHITE,
          paddingHorizontal: 15,
          borderWidth: 0,
          borderColor: PRIMARY,
          marginVertical: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
        onPress={() => {
          setShow(true);
        }}>
        <Text style={{fontSize: 14, color: TEXT_COLOR}}>{dateValue}</Text>
      </TouchableOpacity>
      <Text style={{marginHorizontal: 12}}>to</Text>
      <TouchableOpacity
        style={{
          flex: 1,
          height: 50,
          borderRadius: 5,
          backgroundColor: WHITE,
          paddingHorizontal: 15,
          borderWidth: 0,
          borderColor: PRIMARY,
          marginVertical: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
        onPress={() => {
          setShow(true);
        }}>
        <Text style={{fontSize: 14, color: TEXT_COLOR}}>{dateValue}</Text>
      </TouchableOpacity>
      {show ? (
        <View
          style={{
            backgroundColor: '#ffffff',
            position: 'absolute',
            borderRadius: 5,
            zIndex: 1,
            alignItems: 'center',
            width: '100%',
          }}>
          <DatePicker mode="date" date={date} onDateChange={() => {}} />
          <View style={{width: '60%', marginTop: 40}}>
            <Button
              veriant="primary"
              placeholder="Save"
              onPress={() => {
                setShow(false);
              }}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
}
