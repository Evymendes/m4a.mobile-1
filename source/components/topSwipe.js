import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
				
import IconePerfil from '../assets/iconePerfil.png';
import LogotipoMatch from '../assets/Logotipo-Match4Action.png';
import IconeChat from '../assets/icone-chat.png';

class TopSwipe extends Component {

	render() {
		return(
			<View style={styles.container}>
        <TouchableOpacity>
				  <Image source={IconePerfil} />
        </TouchableOpacity>
				<Image source={LogotipoMatch} style={styles.imageM4A}/>
        <TouchableOpacity>
				  <Image source={IconeChat} style={styles.imageMsg}/>				
        </TouchableOpacity>
			</View>
		)
	}
}
 
const styles = StyleSheet.create({
  container: {
    height: '9%',
    width: '100%',
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  	alignItems: 'center',
  	borderBottomWidth: 1,
  	borderColor: 'rgba(0, 129, 195, 0.19)'
  },
  imageM4A: {
  	width: '50%',
  	height: '57%',
  	resizeMode: 'contain',
  },
  imageMsg: {   
    resizeMode: 'contain',
    height: '63%',    
  }
});

export default TopSwipe;