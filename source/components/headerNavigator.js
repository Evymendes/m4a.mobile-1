import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Back from '../assets/back.png';

export default class HeaderNavigator extends Component {

  render() {    
    return (
      <View style={styles.container}>
          <TouchableOpacity>
            <Image source={Back} style={styles.back} />
          </TouchableOpacity>
          <Text style={styles.name}> Hélio Silva </Text>
          {!this.props.noConfirmation 
            ? <TouchableOpacity>
                <Text style={styles.name}>Done</Text>
              </TouchableOpacity>
            : <View />
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '9%',
    backgroundColor: '#E8F7FF',
    flexDirection: 'row',
    borderColor: '#c6e9fb',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  back: {
    width: 20, 
    height: 20,
    resizeMode: 'contain'
  },
  name: {
    fontSize: 18,
    color: '#141414',
    fontWeight: 'bold'
  }
});