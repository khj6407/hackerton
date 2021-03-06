import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import * as Calendar from "expo-calendar";
import { date } from "../../models/dateData";

const Calender = () => {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestPermissionsAsync();
      if (status === "granted") {
        const Calendars = await Calendar.getCalendarsAsync();
        console.log({ Calendars });
      }
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }}
    ></View>
  );
};

export default Calender;
