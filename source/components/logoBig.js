import React, { Component } from 'react';
import { StyleSheet, View, Image  } from 'react-native';

import Logo from '../assets/logo.png';
import Top from '../assets/topBig.png';

class LogoBig extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={Top} style={styles.top} />
        <Image source={Logo} style={styles.logo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {  
    width: '100%',
    height: '34%',
    alignItems: 'center'
  },
  top: {
    height: '100%'
  },
  logo: {
    position: 'absolute'
  }
})

export default LogoBig;