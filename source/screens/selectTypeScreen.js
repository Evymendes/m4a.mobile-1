import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
  
import LogoBig from '../components/logoBig';
import Title from '../components/title';
import Button from '../components/button';
import CookiePolicy from '../components/cookiePolicy';

class SelectTypeScreen extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
    this.abelha = this.abelha.bind(this);
  }

  async abelha(name) {
    try {
      const user = await AsyncStorage.getItem('userinfo');
      const userParsed = JSON.parse(user)

      userParsed['userProfile'] = name;
      await AsyncStorage.setItem('userinfo', JSON.stringify(userParsed));

      console.log(userParsed)
    } catch (error){
      console.log(error)
    }  
  }
  
  render() {    
    return (
      <View style={styles.container}>
        <LogoBig />
        <View style={styles.components}>
          <View>
            <Title text="Let´s create"  fontSize='big'/>
            <Title text="your new account"  fontSize='big'/>
          </View>
          <Title 
            text="I am a ..." fontSize='big'
          />
          <Button 
            name='people'
            type='Volunteer'  
            color='blue' 
            background='white' 
            route='SelectSocialStartScreen'
				    navigation={this.props.navigation}
            abelha={this.abelha}
          />
          <Button 
            type="Organization"  color='blue' background='white' 
            route='SelectSocialStartScreen'
				    navigation={this.props.navigation}
          />
          <CookiePolicy />          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#FF7700',
  },
  components: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
 
export default SelectTypeScreen;