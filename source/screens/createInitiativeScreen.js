import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Picker } from 'react-native';

import HeaderNavigator from '../components/headerNavigator';
import Texts from '../components/texts';
import Title from '../components/title';
import Input from '../components/input';
import PickerArea from '../components/pickerArea';
import CheckBoxC from '../components/checkBox';
import FooterSwipe from '../components/footerSwipe';

class CreateInitiativeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
      <HeaderNavigator noConfirmation/>
      <ScrollView>
      <View style={{marginTop:30, marginBottom:200}}>
        <Input 
          text='Initiative name' fontSize='little' fontWeight='bold'
          border='null' backgroundColor='blue' textWidth='large'
          placeholderColor='babyBlue' placeholder='Module 1'
          inputWidth='large'  
        />
        <Input 
          text='Description' fontSize='little' fontWeight='bold'
          border='null' backgroundColor='blue'
          placeholderColor='babyBlue' placeholder='100 characters maximum, ok?' 
          inputWidth='large'  
        />
        
        <View style={styles.fieldCheckBox}>
          <Title text='Event type' fontSize='small' />
          <View style={styles.checkBox}>
            <CheckBoxC name='Ongoing'/>
            <CheckBoxC  name='One time' />
          </View>
        </View>

        <Title text='Date' fontSize='small' />
        <View style={styles.date}>
          <Input 
            text='Start' fontSize='little' fontWeight='without'
            border='null' backgroundColor='blue'
            placeholderColor='babyBlue' placeholder='12/03/18' 
             height='little'
            image='ImageCalendar' 
          />
          <Input 
            text='Finish' fontSize='little' fontWeight='without'
            border='null' backgroundColor='blue'
            placeholderColor='babyBlue' placeholder='26/03/18' 
            height='little'
            image='ImageCalendar'
          />
        </View>

        <Title text='Time' fontSize='small' />
        <View style={styles.date}>
          <Input 
            text='Start' fontSize='little' fontWeight='without'
            border='null' backgroundColor='blue'
            placeholderColor='babyBlue' placeholder='08:30pm' 
            height='little' 
            image='ImageClock'
          />
          <Input 
            text='Finish' fontSize='little' fontWeight='without'
            border='null' backgroundColor='blue'
            placeholderColor='babyBlue' placeholder='08:30pm' 
            height='little'
            image='ImageClock'
          />
        </View>

        
        <Title text='Location' fontSize='small' />
        <View >
          <Input 
            text='Address' fontSize='little' fontWeight='without'
            border='null' backgroundColor='blue'
            placeholderColor='babyBlue' placeholder='Type the address…' 
            inputWidth='large' 
            
          />
          <Input 
            text='City' fontSize='little' fontWeight='without'
            border='null' backgroundColor='blue'
            placeholderColor='babyBlue' 
            inputWidth='large' 
            
          />
        </View> 
        <View style={styles.date}>
          <Input 
            text='Country' fontSize='little' fontWeight='without'
            border='null' backgroundColor='blue'
            placeholderColor='babyBlue' 
            inputWidth='medium' height='little' 
          />
          <Input 
            text='Postal Code' fontSize='little' fontWeight='without'
            border='null' backgroundColor='blue'
            placeholderColor='babyBlue'
            inputWidth='little'  height='little'            
          />
        </View>
        <Title text='Which areas are covered by this initiative?' fontSize='small' />
        <View style={{width:'100%', paddingLeft:40}}>          
          <Texts text=' These are the areas that volunteers will match with.' fontSize='small' />
        </View> 
        <View>
          <Input 
              fontSize='little' fontWeight='without'
              border='null' backgroundColor='blue'
              placeholderColor='babyBlue'placeholder='Click and choose from the list'
                            
            />
        </View>    
        <Title text='Which Global Goals are attended by this action?' fontSize='small' />
        <View style={{width:'100%', paddingLeft:40}}>
          <Texts text='Swipe and click as many are relevant.' fontSize='small' />
        </View>
        </View>
        <FooterSwipe type='Publish!'/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  texto: {
    fontSize:15,
    color: '#FFF',
    textAlign:'center',
    marginTop:20,
    height: 34,
    padding: 10,
    backgroundColor: '#0081C3', 
    alignSelf: 'center',
    borderRadius: 5
  },
  date: {
    height: '11%',
    width: '100%',
    flexDirection: 'row'
  },
  fieldCheckBox: {
    flexDirection: 'row'
  },
  checkBox: {
    flexDirection: 'column'
  }
});

export default CreateInitiativeScreen;