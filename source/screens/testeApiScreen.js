import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity} from 'react-native';

import LogoSmall from '../components/logoSmall';
import Input from '../components/input';
import Title from '../components/title';
import Button from '../components/button';
import CheckBoxC from '../components/checkBox';


class TesteApiScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      textTest: '',
      textTexto: '',
      inputName: '',
      textName: '',
      textEmail: '',
      inputEmail: '',
      textPassword: '',
      inputPassword: '',
      frase: 'oiii',
    }
  }

  handleChangeTextName = (typeTextName) => {
    this.setState({textName: typeTextName});
  }

  handleChangeTextEmail = (typeTextEmail) => {
    this.setState({textEmail: typeTextEmail});
  }

  handleChangeTextPassword = (typeTextPassword) => {
    this.setState({textPassword: typeTextPassword});
  }


  addButton = () => {
    let testName = this.state.textName;
    let testEmail = this.state.textEmail;
    let testPassword = this.state.textPassword;

    fetch('http://192.168.43.170:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: testName,
        email: testEmail,
        password: testPassword
      })
    })
    .then((res) => res.json())
    .catch(err => {
      res.json(err)
      console.log(err)
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <LogoSmall width='100%' />
          <View style={{justifyContent: 'space-evenly'}}>

          <TextInput placeholder='nome'
            onChangeText = {this.handleChangeTextName}
          />
          <TextInput placeholder='email'
            onChangeText = {this.handleChangeTextEmail}
          />
          <TextInput placeholder='password'
            onChangeText = {this.handleChangeTextPassword}
          />
          <TouchableOpacity onPress={this.addButton} style={{backgroundColor: 'green'}}>
             <Text> ClickText </Text>
          </TouchableOpacity>
          <Input 
            text="Name" placeholder="Type here…" backgroundColor='white' 
            placeholderColor='orange'
            border='orange' borderRadius='round'
          />
          <Input 
            text="Email" inputWidth='large'
            placeholder="Type here…" backgroundColor='white' placeholderColor='orange'
            border='orange' borderRadius='round'
          />
          <Input 
            text="Password" inputWidth='large'
            placeholder="Type here…" backgroundColor='white' placeholderColor='orange'
            border='orange' borderRadius='round'
          />
          <Button type='Next' background='orange' color='white'/>
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
    backgroundColor: "rgba(255, 119, 0, 0.4)",
    paddingBottom: 30
  },
  CheckBox: {
    width: '50%',
    flexDirection: 'row',
  }
});

export default TesteApiScreen;

//https://react-native-training.github.io/react-native-elements/docs/checkbox.html#checked

//https://www.npmjs.com/package/react-native-checkbox

// https://docs.nativebase.io/Components.html#checkbox-headref
//https://www.youtube.com/watch?v=lcFz9ey8GXM