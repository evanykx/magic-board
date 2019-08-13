import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userActions from "../redux/action/userActions";

import Login from "../view/Login";
import App from "../view/App";

const RootStack = createStackNavigator(
  {
    // 登录页面
    Login: {
      screen: Login
    },
    // 测试第二页面
    App: {
      screen: App
    }
  },
  {
    // 默认页面
    initialRouteName: "Login",
    // 公用顶部导航样式
    defaultNavigationOptions: {
      title: "Home",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

// 建立导航应用容器
const AppContainer = createAppContainer(RootStack);

// 整合redux
class AppRouter extends Component {
  render() {
    return <AppContainer />;
  }
}

const mapStateToProps = state => {
  return {
    store: state.store,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
