 import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

//Screens
import LogoImage from '../assets/logo.png';
import LogoName from '../assets/logoM4A.png'

class ValidateScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={LogoImage} />
        <Image source={LogoName} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default ValidateScreen;