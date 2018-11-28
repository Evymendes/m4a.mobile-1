import React, { Component } from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';

//Components
import TopSwipe	from '../components/topSwipe';
import FooterSwipe from '../components/footerSwipe';
import Texts from '../components/texts';

//Image
import ImageWorld	from '../assets/tutorial1.png';
import ImageWork from '../assets/tutorial2.png';

class TutorialScreen extends Component {

  /*static navigationOptions = ({navigation}) => ({
    title: 'Bem Vindo'
  });*/
  
	render() {
		return(
			<View style={styles.container}>
				<TopSwipe />
        <View style={styles.title}>
          <Texts text="Here is how it works:" />
          <Texts text="Swipe right to match and volunteer or swipe left to skip."  style={{fontWeight: 'bold'}} />
        </View>
				<Image source={ImageWorld} style={styles.imageWorld}/>
				<Image source={ImageWork} style={styles.imageWork}/>
				<FooterSwipe 
          type='Got it!'
          route='SwipeScreen' 
          navigation={this.props.navigation}
        />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '13%'
  },
  imageWorld: {
  	right: 70,
  },
  imageWork: {
  	position: 'absolute',
  	left: 60,
  	bottom: 20,
  }
});

/*const Navegador = createStackNavigator({
  Home:{
    screen: TutorialScreen
  }
})*/

export default TutorialScreen;