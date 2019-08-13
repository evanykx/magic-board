import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userActions from "../redux/action/userActions";

import Login from "../view/Login";
import App from "../view/App";

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    App: {
      screen: App
    }
  },
  {
    initialRouteName: "Login",
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

const AppContainer = createAppContainer(RootStack);

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
