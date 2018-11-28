import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import HeaderNavigator from '../components/headerNavigator'
import ImagePerfil from '../components/imagePerfil'

export default class ProfileScreen extends Component {

  // static NavigationOptions = (navigation) => ({
  //   title: 'perfil'
  // });

  render() {    
    return (
      <View style={styles.container}>
        <HeaderNavigator noConfirmation />
        <ImagePerfil />
        <View style={styles.button}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('EditRegisterScreen')} style = {[styles.buttonArea, {borderRightWidth: 1}]} >
            <Text style={[styles.buttonTitle, {color: this.props.color, textDecorationLine: this.props.line}]}>Edit profire </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateInitiativeScreen')} navigation={this.props.navigation} style = {[styles.buttonArea, {borderLeftWidth: 1}]} >
            <Text style={styles.buttonTitle}>Create initiative </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonArea: {
    width: '40%',
    height: '50%',
    borderColor: '#c6e9fb',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    width: '55%',
    fontSize: 20,
    textAlign: 'center'
  }
});