import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class CookiePolicy extends Component {

	constructor(props){
		super(props);
		this.state = {
			user: ' User Agreement, ',
			privacy: ' Privacy Policy,',
			Cookie: 'Cookie Policy.',
		}
	};

	renderButton = (text) => {
		return (
			<TouchableOpacity >
				<Text style={[styles.text, {textDecorationLine:'underline'}]}>
					{text}
				</Text>
		  </TouchableOpacity> 
		);
	}
  
  render() {
    return (
      <View style={styles.container}>
	    	<Text style={styles.text}>
	        By proceding, you agree to the M4A 
	      </Text>
	      {this.renderButton(this.state.user)}
	      {this.renderButton(this.state.privacy)}
	      <Text style={styles.text}> and </Text>
	      {this.renderButton(this.state.Cookie)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		width: '85%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 30,
	},
  	text: {  	
	    fontSize: 14,
	    color: '#FFF',
	}
});

export default CookiePolicy;