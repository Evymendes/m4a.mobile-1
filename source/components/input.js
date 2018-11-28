 import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';

import ImageCalendar from '../assets/calendar.png';
import ImageClock from '../assets/clock.png';

class Input extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  
 /* handleChangeText = (this.props.typeText) => {
    this.setState({text: this.props.typeText})
  }*/

  chooseTextWith = () => {
    switch(this.props.textWidth){
      case 'little':
        return 150;
      case 'large':
        return 250;
      case 'medium':
        return '65%';
      default:
        return null;
    }
  };

  chooseText = () =>{
    switch(this.props.fontSize){
      case 'medium':  
        return 16;
      case 'little':  
        return 15;
      default:
        return 28;
    }
  };

  chooseFontWeight = () => {
    switch(this.props.fontWeight){
      case 'without':
        return '';
      default:
        return 'bold';
    }
  };

  chooseInputWith = () => {
    switch(this.props.inputWidth){
      case 'little':
        return '97%';
      case 'median':
        return '100%';
      case 'medium':
        return '140%';
      case 'test':
        return '110%' 
      default:
        return '83%';
    }
  };

  chooseInputHeight = () => {
    switch(this.props.height){
      case 'little':
        return '60%';
      default:
        return '90%';
    }
  };

  
  chooseBorder = () => {
    switch(this.props.border) {
      case 'orange':
        return '#FF7700';
      case 'blue':
        return '#0081C3';
      case 'null':
        return 'transparent';
      default:
        return null;
    }
  };

  chooseBackgroundColor = () => {
    switch(this.props.backgroundColor) {
      case 'white':
          return '#FFF';
      case 'blue':
          return '#E8F7FF';
      case 'null':
        return 'transparent';
      default:
        return null;
    }
  };

  chooseBorderRadius = () => {
    switch(this.props.borderRadius){
      case 'round':
        return 8;
      default:
        return null;
    }
  };
  
  choosePlaceholderColor = () => {
    switch(this.props.placeholderColor) {
      case 'orange':
        return 'rgba(255, 119, 0, 0.55)';
      case 'blue':
        return 'rgba(0, 129, 195, 0.35)';
      case 'black':
        return '#141414';
      case 'babyBlue':
        return '#6ECEFF';
      default:
        return null;
    }
  };

  chooseImage = () => {
    switch(this.props.image){
      case 'ImageCalendar':
        return ImageCalendar;
      case 'ImageClock':
        return ImageClock;
      default:
        return null;
    }
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { 
          width:this.chooseTextWith(), 
          fontSize:this.chooseText(),          
          fontWeight:this.chooseFontWeight(),      
        }]}>
            {this.props.text}
        </Text>
        <View>
          <TextInput 
            style={[styles.input, {
              width:this.chooseInputWith(), 
              height:this.chooseInputHeight(),
              borderColor: this.chooseBorder(),
              backgroundColor: this.chooseBackgroundColor(),
              borderRadius:this.chooseBorderRadius()
            }]}
            underlineColorAndroid='transparent'
            placeholder={this.props.placeholder}
            placeholderTextColor={this.choosePlaceholderColor()}
          />
          <Text>{this.state.text}</Text>
          <Image source={this.chooseImage()} style={styles.imagem}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 30,
    marginTop: 0,
    marginBottom: 40,
  },
  title: {
    marginLeft: 12,
    marginVertical: 3,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    padding: 10,
    paddingLeft: 10,
    padding: 1,
    borderWidth: 1,
  },
  imagem: {
    position: 'absolute',
    resizeMode: 'contain',
    height: '60%',
    backgroundColor: '#E8F7FF',
    alignSelf: 'flex-end',    
  }
});

export default Input;