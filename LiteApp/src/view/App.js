/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  TouchableHighlight,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  static navigationOptions = {
    title: 'App'
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TouchableHighlight onPress={() => {this.props.navigation.navigate('Login')}} underlayColor="white">
            <View>
              <Text style={{
                color: 'blue'
              }}>Login</Text>
            </View>
          </TouchableHighlight>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;
