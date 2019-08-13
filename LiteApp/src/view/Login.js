import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  CheckBox,
  Button,
  StatusBar,
  Dimensions,
  Platform,
  PixelRatio,
  Alert,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';

class Login extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberme: ''
    };
  }

  onUsernameChange = (text) => {
    this.setState({
      ...this.state,
      username: text
    });
  };

  onPasswordChange = (text) => {
    this.setState({
      ...this.state,
      password: text
    });
  };

  onRememberMeChecked = (value) => {
    this.setState({
      ...this.state,
      rememberme: value
    });
  };

  _onPressButton = () => {
    Alert.alert('You tapped the button!')
  };

  _onLongPressButton = () => {
    Alert.alert('You long-pressed the button!')
  };

  _onRedirectTo = () => {
    this.props.navigation.push('App');
  };

  render() {
    const styles = StyleSheet.create({
      scrollView: {
        backgroundColor: "#ececec",
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        fontSize: 28,
        fontWeight: "800",
        color: "white"
      }
    });

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.container}>
              <Text style={styles.title}>Please Sign In</Text>
              <View>
                <Text>Username</Text>
                <TextInput
                  onChangeText={this.onUsernameChange}
                  placeholder="Please input username">
                </TextInput>
              </View>
              <View>
                <Text>Password</Text>
                <TextInput
                  onChangeText={this.onPasswordChange}
                  placeholder="Please input password">
                </TextInput>
              </View>
              <View>
                <CheckBox onValueChange={this.onRememberMeChecked} checked={this.state.rememberme}></CheckBox>
                <Text>Remember me!</Text>
              </View>
              <Button title="Sign in"  onPress={this._onPressButton}></Button>
              <Button title="Sign up" onPress={this._onRedirectTo}></Button>
            </View>

            
            <View>
              <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableHighlight</Text>
                </View>
              </TouchableHighlight>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
              </TouchableOpacity>
              <TouchableNativeFeedback
                  onPress={this._onPressButton}
                  background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableWithoutFeedback
                  onPress={this._onPressButton}
                  >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    )
  }
}

export default Login;
