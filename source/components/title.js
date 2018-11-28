import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Title extends Component {

  chooseColor = () =>{
    switch(this.props.color){
      case 'White':
        return '#FFF';
      case 'black':  
        return '#000';
      default:
        return '#010000';
    }
  };
  
  chooseFontSizeTitle = () => {
    switch(this.props.fontSize) {
      case 'small':
        return 15;
      case 'big':
        return 30;
      default:
        null;
    }
  }

  render() {
    return (
      <View>
        <Text style={[styles.title, {color:this.chooseColor() ,fontSize: this.chooseFontSizeTitle()}]}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {    
    paddingLeft: 40,
    fontWeight: 'bold',
    color: '#141414'
  }
});

export default Title;