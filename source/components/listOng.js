import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

import ImageMatch from '../assets/fotoMatch.jpg';
import ImageInfo from '../assets/info.png';

class ListOng extends Component {

	constructor(props){
		super(props);
		this.state= {
			ongs: [{
				imagem: ImageMatch,
				name: 'Vai na Web',
				action: 'Advanced digital education within favela territories.',
				details: [
					{site: 'www.vainaweb.com.br'},
					{description: 'A free advanced digital education program that prepares young slum dwellers to be major technology professionals. For young people from 16 to 29 years, passionate about technology that want to learn by doing.'},
				]
			}],
      match: true,
		}
	}

	renderOngs = () => {
    return this.state.ongs.map((organization, index) => {
      return (
        <View
          key={index}
          style={styles.ongContainer}
        >
    			<ImageBackground source={organization.imagem} style={styles.imagem}>
    				<Text style={styles.nameOng}>
    					{organization.name}
    				</Text>
    				<View style={{height: '12%'}}>
      				<Text style={styles.action}>
      					{organization.action}
      				</Text>
    				  <TouchableOpacity style={styles.imageInfo}>
                <View>
                  <Image source={ImageInfo}/>
                </View>
              </TouchableOpacity>
    				</View>
          </ImageBackground>     
        </View>
      );
    });
  }
  
  render() {
    return (
      <View  style={styles.container}>
        { this.renderOngs() }
			</View>
		)
	}
} 

const styles = StyleSheet.create({
  container: {
  	flex:1
  },
  imagem: {
  	width: '100%',
  	height: '100%',
  	justifyContent: 'center',
  },
  nameOng: {
  	margin: 20,
  	fontSize: 33,
  	color: '#FFF',
  	fontWeight: 'bold'
  },
  action: {
    marginLeft: 20,
    fontSize: 19,
  	lineHeight: 30,
    color: '#FFF',
    width: '70%'
  },
  imageInfo: {
    marginTop: 20,
    marginLeft: 200,
  	position: 'absolute',
  }
});

export default ListOng;