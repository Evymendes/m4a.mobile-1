import React, { Component } from 'react';
import {StyleSheet, View, Image} from 'react-native';
		
import PhotoMatch from '../assets/fotoMatch.jpg';
import PhotoFooter from '../assets/footer-oval.png';
import PhotoShare from '../assets/icone-share.png';
import PhotoHeart from '../assets/icone-coracao.png';
import PhotoXis from '../assets/icone-xis.png';

import RenderButtom from '../components/renderButtom';

class FooterSwipe extends Component {

	constructor(props){
		super(props);
		this.state = {
      match: false
		}
	}

  nextPage = () => {
    this.props.navigation.navigate(this.props.route);
  };

  handleClickMatch = () => {
    this.setState({ 
    })
    this.nextPage()
  };
 
	render() {
		return(
      <View style={styles.container}>
        <View style={styles.PhotoFooter}>
          <Image source={PhotoFooter} />
        </View>        
        { this.props.match === true
          ? <View style={styles.footerButton}>
              <RenderButtom type='close' name='skip' match={this.state.match}/>
              <RenderButtom type='share' name='share' match={this.state.match}/>
              <RenderButtom type='like' name='volunteer' match={this.state.match}/>
            </View>
          : <View style={styles.footerButton}>
              <RenderButtom
                type={this.props.type} 
                match={this.state.match}
                route='SwipeScreen'
                navigation={this.props.navigation}
                handleClickMatch={this.handleClickMatch}/>
            </View>
        } 
      </View>
		)
	}
} 

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  PhotoFooter: {
    position: 'absolute',
    bottom: 0
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default FooterSwipe;