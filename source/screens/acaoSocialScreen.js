import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import LogoSmall from '../components/logoSmall';
import Input from '../components/input';
import Title from '../components/title';
import Button from '../components/button';
import Texts from '../components/texts';
import CheckBoxC from '../components/checkBox';

class AcaoSocialScreen extends Component {
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
          <View>
            <Title text='What moves you?' fontSize='big'/>
            <Texts text='Choose as many as you want.' marginLeft='curt'/>
            <Button type='Animals' color='white' background='orange' />
            <Button type='People'  color='white' background='blue' />
            <Button type='Enviroment' color='white' background='green' />
            <Title text='Location' fontSize='big'/>
            <CheckBoxC name='Enable location while using' />              
            <View style={styles.line}>
              <View style={styles.lineLeft}></View>
              <Text style={styles.text}>or</Text>
              <View style={[styles.lineLeft, styles.lineRight]}></View>
            </View>
            <Texts text='tell us your ZIP code:' marginLeft='long'/>
            <View style={styles.containerInputs}>
              <Input 
                text="Country" inputWidth='test' fontWeight='without' fontSize='medium' 
                backgroundColor='white' placeholderColor='orange'
                border='orange' 
                borderRadius='round'
              />
              <Input 
                text="City" inputWidth='test'  fontWeight='without' fontSize='medium' 
                backgroundColor='white' placeholderColor='orange'
                border='orange' borderRadius='round'
              />
            </View>
            <CheckBoxC name='Allow remote volunteering' fontSize='big' fontWeight='bold'/>  
            <Button type='Next' background='orange' color='white' 
              route='SelectAreaOfVolunteerScreen'
  				    navigation={this.props.navigation}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "rgba(255, 119, 0, 0.4)",
    paddingBottom: 80
  },
  line: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 37
  },
  lineLeft: {
    width: '10%', 
    borderTopWidth: 1, 
    borderColor: '#FF7700'
  },
  lineRight: {
    width: '65%'
  }, 
  text: {
    fontSize: 19,
    color: '#141414',
    margin: 10
  },
  containerInputs: {
    height: '15%',
    flexDirection: 'row'
  },
  fielInputs: {
    flexDirection: 'column',
    margin: 15
  },
  input: {
    width: 130,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#FF7700',
    borderWidth: 1
  },
});

export default AcaoSocialScreen;