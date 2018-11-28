import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
		
import PhotoMatch from '../assets/fotoMatch.jpg';
import PhotoOval from '../assets/footer-oval.png';
import PhotoShare from '../assets/icone-share.png';
import PhotoHeart from '../assets/icone-coracao.png';
import PhotoXis from '../assets/icone-xis.png';

class FooterButton extends Component {

  chooseContainerStyle = () => {
    if (this.props.type === 'share') {
      return Object.assign({}, styles.footerImage, styles.fieldFooterShare);
    }
    return styles.footerImage;
  };
  
  chooseIcon = () => {
    switch(this.props.type) {
      case 'close':
        return PhotoXis;
      case 'share':
       return PhotoShare;
      case 'like':
        return PhotoHeart;
      default:
        return null;
    };
  };


  render () {
    return (
      <View style={styles.container}>
        <View  style={this.chooseContainerStyle()}>
          { this.props.match === true
            ? <TouchableOpacity onPress={this.nextPage}>
                 <Image source={this.chooseIcon()} style={styles.image}/>
              </TouchableOpacity>
            : <TouchableOpacity onPress={this.props.handleClickMatch}> 
                  <Text style={styles.text}> {this.props.type} </Text>
              </TouchableOpacity>
          }
        </View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerImage: {
    margin: 10,
    width: 60,
    height: 60,
  	backgroundColor: '#0081C3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldFooterShare: {
    width: 48,
    height: 48,
  },
  text: {
    color: '#FFF',
    fontSize: 15
  }
});

export default FooterButton;

 {/*<View style={styles.container}>
      <View  style={this.chooseContainerStyle()}>
        <TouchableOpacity onPress={this.nextPage}>
        { this.props.match === true
          ? <Image source={this.chooseIcon()} style={styles.image}/>
          : <Text> Go It! </Text>
        }
        </TouchableOpacity>
      </View>
        <Text style={styles.footerText}>{this.props.name}</Text>
      </View>*/}