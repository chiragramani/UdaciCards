import React from "react";
import { Constants } from "expo";
import { View, StatusBar } from "react-native";
import { blue } from "../utils/colors";

export default function UdaciStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight, backgroundColor: blue }}>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
}
