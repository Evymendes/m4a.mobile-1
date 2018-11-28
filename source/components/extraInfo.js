import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Texts from '../components/texts';
import Title from '../components/title';

class ExtraInfo extends Component {

  render() {    
    return (      
      <View style={styles.container}>
          <Title text="Extra info" fontSize='small' />
          <Title text="Select the SDGs you would like to help or advocate for."fontSize='small' />
          <Texts text="Swipe and click as many are relevant." marginLeft='curt' fontSize='small'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    marginTop: 20,
    justifyContent:'space-evenly'
  }
});

export default ExtraInfo;