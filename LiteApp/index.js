/**
 * @format
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import AppRouter from "./src/router";
import { configureStore } from "./src/redux/store/configureStore";
import { name as appName } from "./app.json";

const store = configureStore();

// 绑定Store和Router
class RootApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

// 注册组件
AppRegistry.registerComponent(appName, () => RootApp);
