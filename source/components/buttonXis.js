import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class ButtonXis extends Component {

  render() {    
    return (
        <TouchableOpacity style = {styles.button} >
          <Text style={styles.buttonTitle}>X</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '15%',
    height: '8%',
    top: 330,
    right: 20,
    justifyContent: 'center',
    backgroundColor: '#F1921E',
    borderRadius: 100,
    position: 'absolute'
  },
  buttonTitle: {
    fontSize: 40,
    color: '#FFF',
    textAlign: 'center'
  }
});

export default ButtonXis;