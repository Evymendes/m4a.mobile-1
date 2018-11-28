import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import ImageLogo from '../assets/logo.png';
import Top from '../assets/topSmall.png';

class Logo extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={Top} />
        <Image source={ImageLogo} style={styles.imagem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: '20%',
    resizeMode: 'contain',
    position: 'absolute'
  },
});

export default Logo;