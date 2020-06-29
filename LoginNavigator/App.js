/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';
//import {StackNavigator,TabNavigator} from 'react-navigation';

export default class App extends Component {
  _onPressMeBtn() {
    alert("success");

  }
  render() {
     return (
    <View style={styles.container}>
    <Button
        title='个人中心'
        onPress={this._onPressMeBtn}
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

