import React from "react";
import { View } from "react-native";
import Tabs from "./components/Navigator";
import UdaciStatusBar from "./components/UdaciStatusBar";
import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { setLocalNotification } from "./utils/api";

const store = createStore(reducer, middleware);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
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
