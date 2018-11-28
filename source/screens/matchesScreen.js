import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

//Assets				
import CircuitoMais from '../assets/CircuitoMais.png';
import ChangeMakers from '../assets/ChangeMakers.png';
import Poetas from '../assets/poetas.png';

//Components
import TopSwipe	from '../components/topSwipe';
// import ChangeMakers from '../assets/ChangeMakers.png';

class MatchesScreen extends Component {

	// static NavigationOptions = (navigation) ({
	// 	title: 'msg'
	// });

	constructor(props){
		super(props);
		this.state = {
			ong: [
				{photo: 'CircuitoMais' , name: 'Circuito Mais'},
				{photo: 'ChangeMakers', name: 'ChangeMakers'},
				{photo: 'ChangeMakers', name: 'ChangeMakers'},
				{photo: 'CircuitoMais', name: 'Vai na Web'},
				{photo: 'Poetas', name: 'LGBTI Pride'}
			]
		}
	}
	
	render() {
		return(
			<View>
				<TopSwipe />
				<View style={styles.pesquisa}>
					<Text style={styles.textMatches}>Your new matches!</Text>
					<Image source={require('../assets/iconePesquisa.png')} />
				</View>
				<View style={styles.newMatches}>
					<Image source={CircuitoMais} style={styles.matchesImg}/>
					<Image source={ChangeMakers} style={styles.matchesImg}/>
					<Image source={Poetas} style={styles.matchesImg}/>				
					<Image source={CircuitoMais}style={styles.matchesImg} />
					<Image source={ChangeMakers} style={styles.matchesImg}/>
					<Image source={Poetas} style={styles.matchesImg}/>
				</View>
				<Text style={styles.textMatches}>Previous matches</Text>
				<View style={styles.matchesOng}>
					<Image source={CircuitoMais}style={styles.matchesImg} />
					<Image source={ChangeMakers} style={styles.matchesImg}/>
					<Image source={Poetas} style={styles.matchesImg}/>
				</View>
			</View>
		)
	}
} 

const styles = StyleSheet.create({
  pesquisa: {
  	margin: 30,
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  },
  newMatches: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		margin: 10
  },
  matchesImg: {
  	margin: 10
  },
  textMatches: {
  	fontSize: 18,
  	color: '#38A800'
  },
  matchesOng: {
  	margin: 30,
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  }
});

export default MatchesScreen;