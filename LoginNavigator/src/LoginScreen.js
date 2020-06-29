import React, { Component } from 'react';
import { View ,StyleSheet,Button} from 'react-native';

export default class LoginScreen extends Component {

  static navigationOptions = {
      title:'登录'
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

//点击登录，本地持久化保存用户token，并跳转到首页
  _signInAsync = async () => {
      alert("logins success");
  };
  render() {
    return (
      <View style={styles.container}>
            <Button
            title='点击登录'
            onPress={this._signInAsync}
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