import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
 
//Components
import TopSwipe	from '../components/topSwipe';
import SwiperONG from '../components/swiperONG';

class SwipeScreen extends Component {

  // static navigationOptions = ({navigation}) => ({
  //   title: 'Chat'
  // });

  	constructor(props){
  		super(props);
  		this.state= {
        match: true,
  		}
	}

  render() {
    return (
      <View  style={styles.container}>
        <TopSwipe />
        <SwiperONG />
			</View>
		)
	}
} 

const styles = StyleSheet.create({
  container: {
  	flex:1
  }
});

export default SwipeScreen;