import React from "react";
import { View } from "react-native";
import Tabs from "./components/Navigator";
import UdaciStatusBar from "./components/UdaciStatusBar";
import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";

const store = createStore(reducer, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar />
          <Tabs />
        </View>
      </Provider>
    );
  }
}
