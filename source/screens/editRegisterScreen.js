import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, CheckBox, Picker, Image } from 'react-native';

import HeaderNavigator from '../components/headerNavigator';
import ImagePerfil from '../components/imagePerfil';
import Title from '../components/title';
import Texts from '../components/texts';
import Input from '../components/input';
import CheckBoxC from '../components/checkBox'
import FooterSwipe from '../components/footerSwipe';
import ExtraInfo from '../components/extraInfo';

class EditRegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      servico:0,
      checked: false,
      checkboxEnviroment: false,
      checkboxAnimals: false,
      servicos:[
        {nome:'Alinhamento', valor:30},
        {nome:'Balanceamento', valor:20},
        {nome:'Rodízio de Pneus', valor:50},
        {nome:'Dar uma voltinha', valor:10}
      ]
    };
  }

  handleChange = () => {
    this.setState({ checked: !this.state.checked }); 
  }

  render() {    
      return (      
        <View style={styles.container}>
          <HeaderNavigator />
          <ScrollView>
          <View style={styles.field}>
            <ImagePerfil />
            <View style={styles.info}>
              <View style={styles.infoProfile}>
                <Text style={styles.infoPersonal1}> Email </Text>
                <Text style={styles.infoPersonal2}> Password </Text>
                <Text style={styles.infoPersonal3}> Name </Text>
                <Text style={styles.infoPersonal4}> Birthday </Text>
              </View>
              <View style={styles.dateUser}>
                <Input border='null' placeholder="Insert here..." placeholderColor='black' height="large" inputWidth="large"/>
                <Input border='null' style={styles.infoUser} placeholder="Insert here..." placeholderColor='black' height="large" inputWidth="little"/>
                <Input border='null' style={styles.infoUser} placeholder="Insert here..." placeholderColor='black' height="large" inputWidth="little"/>
                <Input border='null' style={styles.infoUser} placeholder="Insert here..." placeholderColor='black' height="large" inputWidth="medium"/>                            
              <View style={{ flexDirection:'column'}}>
                <View style={{width: '50%',justifyContent:'flex-start' }}>
                  <Texts text='Causes' />
                </View> 
                <CheckBoxC
                  name='Peolple'
                />
                <CheckBoxC
                  name='Environment'
                />
                <CheckBoxC
                  name='Animals'
                />
              </View>
              </View>
            </View>
            <ExtraInfo />
            <Title text='Skills' fontSize='small'/>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder="Click and choose from the list"
              placeholderTextColor='#6ECEFF' 
              type="checkbox" 
            /> 
            <Title text="About " fontSize='small'/>
            <Texts text="Tell more about you." marginLeft='curt' fontSize='small'/>
          </View>
          </ScrollView>
          <FooterSwipe type='Done'/>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  field: {
    justifyContent: 'space-around',
    marginBottom: 100
  },
  info: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderColor: '#2FB9FF',
  },
  infoProfile: {
    width: '30%',
    height: 300,
    paddingTop: 24,
    paddingLeft:30,
    // marginRight: 30,
    alignItems: 'flex-start',
    textAlign: 'left',
    justifyContent: 'space-between',

    //backgroundColor:'blue'
  },
  dateUser: {
    width: '65%',
    //paddingLeft: 20,
    //alignItems:'center',

    //backgroundColor:'yellow'
  },
  infoUser: {
    padding: 13,
    fontSize: 15,
  },
  checkCauses: {
    width: 14,
    height: 14,
    marginTop: 20,
    alignSelf:'flex-start',
    borderColor: '#0081C3',
    borderWidth: 1,
  },
   input: {
    width: 295,
    height: 34,
    marginLeft: 40,
    backgroundColor: '#E8F7FF',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop:5,
  },
});

export default EditRegisterScreen;