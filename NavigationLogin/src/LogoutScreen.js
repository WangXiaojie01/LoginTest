import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

export default class LogoutScreen extends Component {

  static navigationOptions = {
      title:'我'
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _signOutAsync = async () => {
    alert("logout success");
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
            title='注销登录'
            onPress={this._signOutAsync}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})