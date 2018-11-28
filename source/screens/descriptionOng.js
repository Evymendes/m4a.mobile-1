import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';

import ImageMatch from '../assets/fotoMatch.jpg';
import ImageInfo from '../assets/info.png';
import Title from '../components/title';

class DescriptionOng extends Component {

	constructor(props){
		super(props);
		this.state= {
			ong: [
  			{
        key: 0,
        imagem: ImageMatch,
				name: 'Vai na Web',
        location: '2,5km distance',
        site: 'www.vainaweb.com.br',
				description: 'A free advanced digital education program that prepares young slum dwellers to be major technology professionals. For young people from 16 to 29 years, passionate about technology that want to learn by doing.',
        initiatives:[
          {key: 1, title: 'initiatives'},
          {key: 2, volunteerArea: 'Computers & Technology'},
          {key: 3, needs: 'needs'},  
          {key: 4, descriptionNeeds: 'Laptops for the next module'}
        ]
      }]
		}
	}

  renderOng = () => {
    return this.state.ong.map((organization, index) => {
      return (
        <View>
          <ScrollView>
            <Image source={organization.imagem} style={styles.imagemTop} />
            <TouchableOpacity style = {styles.buttonArea} >
              <Text style={styles.buttonTitle}>X</Text>
            </TouchableOpacity>
            <Text style={styles.nameOng}>
              {organization.name}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '90%'}}>
              <Text style={styles.location}>
               {organization.location}
              </Text>
              <Text style={styles.site}>
                {organization.site}
              </Text>
            </View>
            <Text style={styles.description}>
              {organization.description}
            </Text>
            <Text style={styles.initiatives}>
              {organization.initiatives.title}Initiatives
            </Text>
            <Text style={styles.title}>
             {organization.initiatives.volunteerArea}Computers & Technology Needs:
            </Text>
            <Text style={styles.text}>
              {organization.initiatives.needs}Needs:
            </Text>
            <Text style={styles.text}>
             {organization.initiatives.descriptionNeeds}— Laptops for the next module
            </Text>

            <Text  style={styles.title}>
              Education
            </Text>
            <Text  style={styles.text}>
              Needs:
            </Text>
            <Text  style={styles.text}>
              — Social-emotional abilities teachers
            </Text>
            <Text style={styles.text}>
               — Programming teachers
            </Text> 
            <Text style={styles.globalGoals}>Global Goals attended by this cause</Text>
          </ScrollView>
        </View>
      );
    });
  }

  
  
  render() {
    return (
      <View  style={styles.container}>
        {this.renderOng()}
			</View>
		)
	}
} 

const styles = StyleSheet.create({
  container: {
  	flex:1
  },
  imagemTop: {    
    width: '150%',
    height: '50%',
    borderWidth: 80,
    borderBottomRightRadius: 500,
    borderBottomLeftRadius: 200
  },
  nameOng:{
    marginLeft: 33,
  	fontSize: 33,
  	color: '#101010',
  	fontWeight: 'bold'
  },
  location: {
    fontSize: 15,
    color: '#38A800'
  },
  site: {
    color: '#0081C3'
  },
  description: {
    lineHeight: 25,
    width: '75%',
    margin: 33,
    fontSize: 15
  },
  initiatives: {
    marginVertical: 10,
    marginLeft: 33,
    fontSize: 18,
    color: '#38A800',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 16,
    marginLeft: 33,
    margin: 5,
    color: '#0081C3'
  },
  text: {
    fontSize: 16,
    marginLeft: 33,
    color: '#000000',
    fontWeight: 'bold'
  },
  globalGoals: {
    marginVertical: 10,
    textAlign: 'center'
  },
  buttonArea: {
    position: 'absolute',
    width: '17%',
    height: '10%',
    top: 260,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1921E',
    borderRadius: 80
  },
  buttonTitle: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center'
  }
});

export default DescriptionOng;