import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity} from 'react-native';

import LogoSmall from '../components/logoSmall';
import Input from '../components/input';
import Title from '../components/title';
import Button from '../components/button';
import CheckBoxC from '../components/checkBox';


class RegistrationDataScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChangeText = (typeText) => {
    this.setState({text: typeText});
  }

  addButton = () => {
    let texto = this.state.input;

    let state = this.state;
    state.input = '';
    this.setState(state);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <LogoSmall width='100%' />
          <View style={{justifyContent: 'space-evenly'}}>
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
            <Title text='Are you 18 or older?' fontSize='big'/>
            <View style={styles.CheckBox}>
              <CheckBoxC name="Yes" fontSize='big'/>
              <CheckBoxC name="No" fontSize='big' />
            </View>
            <CheckBoxC name="I agree to store personal data." />
            <Button 
              type='Next' 
              background='orange' 
              color='white' 
              route='AcaoSocialScreen'
				      navigation={this.props.navigation}
            /> 
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

export default RegistrationDataScreen;

//https://react-native-training.github.io/react-native-elements/docs/checkbox.html#checked

//https://www.npmjs.com/package/react-native-checkbox

// https://docs.nativebase.io/Components.html#checkbox-headref
//https://www.youtube.com/watch?v=lcFz9ey8GXM