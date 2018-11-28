import React, { Component } from 'react';
import { StyleSheet, Text, View, CheckBox, Image } from 'react-native';

class CheckBoxC extends Component {

  constructor(props){
    super(props);
    this.state = {
      check: false
    };
  }

  checkBox = () => {
    this.setState ({
      check: !this.state.check
    })
  };

   chooseFontSize = () =>{
    switch(this.props.fontSize){
      case 'big':
        return 26;
      default:
        return 19 
    }
  };

  chooseFontWeight = () =>{
    switch(this.props.fontWeight){
      case 'bold':
        return 'bold';
      default:
        return ''
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          title='Yes' value={this.state.check} 
          onChange={() => this.checkBox()} 
        />
        <Text 
          style={[styles.text, {fontSize: this.chooseFontSize(), fontWeight: this.chooseFontWeight() }]}>
            {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    marginLeft: 30,
    alignItems: 'center',
  },
  text: {
    color: '#141414'
  }
});

export default CheckBoxC;