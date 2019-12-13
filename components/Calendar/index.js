import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Calendar from 'expo-calendar';

class Calendar extends React.Component {
    render(){

        useEffect(() => {
          (async () => {
            const { status } = await Calendar.requestPermissionsAsync();
            if (status === 'granted') {
              const calendars = await Calendar.getCalendarsAsync();
              console.log({ calendars });
            }
          })();
        }, []);
      
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Calendar Module Example</Text>
          </View>
        );
    }
}
export default Calendar;