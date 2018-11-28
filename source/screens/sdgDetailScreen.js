import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import HeaderNavigator from '../components/headerNavigator'
import Texts from '../components/texts'
import ButtonXis from '../components/buttonXis'
import Poverty from '../assets/poverty.png';

class SDGDetailScreen extends Component {

  render() {    
    return (
      <ScrollView>
      <View style={styles.container}>
        <Image source={Poverty} style={styles.ImageSDG}/>          
          <ButtonXis />
          <Texts 
            text='Eradicating poverty is not a task of charity, it is an act of justice 
            and the key to unlocking an enormous human potential. Still, nearly half of 
            the world’s population lives in poverty, and lack of food and clean water is 
            killing thousands every single day of the year. Together, we can feed the hungry, 
            wipe out disease and give everyone in the world a chance to prosper and live a 
            productive and rich life.'
          />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ImageSDG:{
    width: '100%',
    resizeMode: 'contain'
  }
});

export default SDGDetailScreen;