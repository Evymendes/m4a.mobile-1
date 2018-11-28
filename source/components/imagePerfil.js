import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';

import HeaderNavigator from '../components/headerNavigator'

import ImageP from '../assets/perfil.png';

export default class ImagePerfil extends Component {

  constructor(props){
    super(props);
    this.state = {
      ImageUsuario: ImageP
    }
  }

  render() {
    return (
      <View style={styles.perfil}>
        <Image source={this.state.ImageUsuario} style={styles.photo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  perfil: {
    flex: 2,
    backgroundColor: '#0081c3', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  photo: {
    width: '60%', 
    //height: '60%', 
    borderRadius: 110,
    resizeMode: 'contain'
  }
});