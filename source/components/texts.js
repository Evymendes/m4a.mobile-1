import React, { Component } from 'react';
import { StyleSheet, View, Text  } from 'react-native';

class TextCreat extends Component {

  chooseMarginLeft = () =>{
    switch(this.props.marginLeft){
      case 'curt':
        return 40;
      case 'long':
        return 65;
      default:
        return 0 
    }
  };
  
  chooseColor = () =>{
    switch(this.props.color){
      case 'White':
        return '#FFF';
      case 'black':  
        return '#000';
      default:
        return
    }
  };

  chooseFontSize = () =>{
    switch(this.props.fontSize){
      case 'small':
        return 15;
      default:
        return 20
    }
  };

  render(){
    return(
      <View style={[styles.container, {marginLeft:this.chooseMarginLeft()}]}>
        <Text style={[styles.text , {color:this.chooseColor(), fontSize: this.chooseFontSize()}]}>
          {this.props.text}
        </Text>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {  
    width: '79%',
    //margin: 10,
    marginLeft: 10
  },
  text: {
    color: '#141414',
    lineHeight: 30
  }
})

export default TextCreat;