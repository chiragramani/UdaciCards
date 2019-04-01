import React from "react";
import { View, StatusBar } from "react-native";
import Tabs from "./components/Navigator";
import { Constants } from "expo";

function UdaciStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent />
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <UdaciStatusBar />
        <Tabs />
      </View>
    );
  }
}
