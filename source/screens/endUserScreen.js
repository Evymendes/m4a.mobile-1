import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';

//Components
import Button from '../components/button';
import LogoSmall from '../components/logoSmall';
import Texts from '../components/texts';
import Title from '../components/title';

//Assets
import Account from '../assets/account.png';

class EndUserscreen extends Component {

  constructor(props){
    super(props);
    this.state={
      input:false
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <LogoSmall />
          <Title text="Your account was created!" color='White' fontSize='big' />
          <View style={styles.field}>
            <Texts text='Click on the link sent to your email to activate your account.' color='White' />
            <Image source={Account} style={styles.image} />
            <Texts text="Visit your profile to add more info." color='White'/>
            <Button type='Ok' color='blue' background='white' 
              route='ProfileScreen'
			        navigation={this.props.navigation}/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
    backgroundColor: '#619F42'   
  },
  field: {
    flex: 1, 
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain'
  }, 
});
 
export default EndUserscreen;