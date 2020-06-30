import React, { Component } from 'react';
import { View, StyleSheet,Button} from 'react-native';

export default class HomeScreen extends Component {

  static navigationOptions = {
      title:'首页'
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

  _onPressMeBtn = async () => {
    alert("this is HomeScreen");
  }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
