 import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';

export default class Button extends Component {

    chooseBackground = () => {
      switch(this.props.background) {
        case 'orange':
          return '#FF7700';
        case 'blue':
          return '#0081C3';
        case 'green':
          return '#619F42';
        case 'white':
          return '#FFF';
      }
    };

    chooseColor = () => {
      switch(this.props.color) {
        case 'white':
          return '#FFFFFF';
        case 'blue':
          return '#0081C3';
      }
    };

    nextPage = () => {
      this.props.abelha(this.props.name);
      this.props.navigation.navigate(this.props.route);
    }

    render() {
      return (
        <TouchableOpacity onPress={this.nextPage} style={[styles.button, {backgroundColor: this.chooseBackground()}]}>
          <Text style={[styles.text, {color: this.chooseColor()}]}>
            {this.props.type}
          </Text>
        </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
  button: {  
    width: '80%',
    height: 60,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
})