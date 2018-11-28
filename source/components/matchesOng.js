import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
				

// import CircuitoMais from '../assets/CircuitoMais.png';
// import ChangeMakers from '../assets/ChangeMakers.png';
// import Poetas from '../assets/poetas.png';
// import ChangeMakers from '../assets/ChangeMakers.png';

class MatchesOng extends Component {

	constructor(props){
		super(props);
		this.state = {
			ong :[
				{photo: 'CircuitoMais' , name: 'Circuito Mais'},
				{photo: 'ChangeMakers', name: 'ChangeMakers'},
				{photo: 'ChangeMakers', name: 'ChangeMakers'},
				{photo: 'CircuitoMais', name: 'Vai na Web'},
				{photo: 'Poetas', name: 'LGBTI Pride'}
			]
		}
	}
	
	// listMatch = () => {
	// 	render this.state.ong.map({})
	// }

	render() {
		return(
			<View>
				<View style={styles.imagens}>
					<Image source={require('../assets/iconePerfil.png')} />
					<Image source={require('../assets/Logotipo-Match4Action.png')} />
					<Image source={require('../assets/icone-chat.png')} />				
				</View>
				<View style={styles.pesquisa}>
					<Text style={styles.textMatches}>Your new matches!</Text>
					<Image source={require('../assets/iconePesquisa.png')} />
				</View>
				<View style={styles.matchesOng}>
					<Image source={require('../assets/CircuitoMais.png')} style={styles.matchesImg}/>
					<Image source={require('../assets/ChangeMakers.png')} style={styles.matchesImg}/>
					<Image source={require('../assets/poetas.png')} style={styles.matchesImg}/>				
					<Image source={require('../assets/CircuitoMais.png')}style={styles.matchesImg} />
					<Image source={require('../assets/ChangeMakers.png')} style={styles.matchesImg}/>
					<Image source={require('../assets/poetas.png')} style={styles.matchesImg}/>
				</View>
				<Text style={styles.textMatches}>Previous matches</Text>
			</View>

		)
	}
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 119, 0, 0.4);",
    alignItems: 'center'
  },
  imagens: {
    paddingTop: 28,
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  },
  pesquisa: {
  	margin: 30,
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  },
  matchesOng: {
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
  }
});

export default MatchesOng;