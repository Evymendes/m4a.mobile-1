import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import LogoSmall from '../components/logoSmall';
import Title from '../components/title';
import Input from '../components/input';
import Button from '../components/button';

class OngRegisterData extends Component {

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

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <LogoSmall />
          <View>
          <Title text='Name of the' fontSize='big' color='black' />
            <Input 
              text="organization"
              backgroundColor='white' textWidth='medium'
              placeholder="Type here…" placeholderColor='blue'
              color="blue" border="blue" borderRadius='round'
            />
            <Input 
              text="Email" fontSize='big'
              backgroundColor='white' placeholder="Type here…" 
              placeholderColor='blue' border="blue" 
              borderRadius='round'
            />
            
            <Input 
              text="Password" fontSize='big' 
              border="blue" backgroundColor='white'
              placeholder="Type here…" placeholderColor='blue'
              borderRadius='round'
            />            
            <Input 
              text="Confirm password" fontSize='little'
              border="blue"  fontWeight='without' backgroundColor='white'
              placeholder="Type here…" placeholderColor='blue'
              borderRadius='round'
            />
          </View>
          <Button type='Next' background='blue' color='white'/> 
        </View>
      </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#BEE2F5",
    //justifyContent: 'space-evenly',
    paddingBottom: 20
  }
});

export default OngRegisterData;