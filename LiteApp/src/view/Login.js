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
} from 'react-native';

class Login extends Component {
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
  }

  onPasswordChange = (text) => {
    this.setState({
      ...this.state,
      password: text
    });
  }

  onRememberMeChecked = (value) => {
    this.setState({
      ...this.state,
      rememberme: value
    });
  }

  render() {
    const styles = StyleSheet.create({
      scrollView: {
        backgroundColor: "#ececec"
      }
    });

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Text>Please Sign In</Text>
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
              <CheckBox onValueChange={this.onRememberMeChecked}></CheckBox>
              <Text>Remember me!</Text>
            </View>
            <Button title="Sign in"></Button>
            <Button title="Sign up"></Button>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    )
  }
}

export default Login;
