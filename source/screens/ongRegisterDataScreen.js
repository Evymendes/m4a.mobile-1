 import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,ScrollView } from 'react-native';

import Button from '../components/button';
import LogoSmall from '../components/logoSmall';
import Input from '../components/input';
import Title from '../components/title';


class OngRegisterDataScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      input:false
    }
  }

   render() {
    return (
        <ScrollView >
          <View style={styles.container}>
            <LogoSmall />
            <View >
              <Title text='What is/are your main focus?' fontSize='big'/>
              <Button type='Animals' color='white' background='orange' />
              <Button type='People'  color='white' background='blue' />
              <Button type='Enviroment' color='white' background='green' />
              <Title text='Tell us where are you located?' fontSize='big'/> 
                <Input 
                  text='Address' textWidth='lit' fontWeight='without'
                  placeholder='Type here…' 
                  backgroundColor='white'
                  border='blue' borderRadius='round'
                  placeholderColor='blue' fontSize='little' 
                  
                />
                <View style={styles.inputsBox}>
                  <Input 
                    style={{backgroundColor: 'black'}}
                    text='Number' fontWeight='without'
                    backgroundColor='white'
                    border='blue' borderRadius='round'
                    placeholder='Type here…' placeholderColor='blue' 
                    inputWidth='medium'  textWidth='lit'
                    fontSize='little'
                  />
                  <Input 
                  style={{backgroundColor: 'pink'}}
                    text='City' fontWeight='without' 
                    backgroundColor='white' 
                    border='blue' borderRadius='round'
                    placeholder='Type here…' placeholderColor='blue'
                    inputWidth='little' fontSize='little' 
                  />
                </View>
                <View style={styles.inputsBox}>
                  <Input 
                    text='Country'  fontWeight='without'
                    backgroundColor='white' 
                    border='blue' borderRadius='round'
                    placeholderColor='blue' placeholder='Type here…'
                    inputWidth='medium' fontSize='little' 
                  />
                  <Input 
                    text='ZIP code'  fontWeight='without'
                    backgroundColor='white' 
                    border='blue' borderRadius='round'
                    placeholderColor='blue' placeholder='Type here…'
                    inputWidth='little' fontSize='little'/>
                </View>
              <Button type='Next' background='blue' color='white'/>
            </View>
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
    paddingBottom: 30,
  },
  text: {
    fontSize: 19,
    color: '#141414',
    margin: 10,
  },
  inputsBox:{
    width:'100%',
    height:100,
    flexDirection:'row'
  }
});

 export default OngRegisterDataScreen;