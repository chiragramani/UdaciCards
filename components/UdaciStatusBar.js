import React from "react";
import { Constants } from "expo";
import { View, StatusBar } from "react-native";

export default function UdaciStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent />
    </View>
  );
}
