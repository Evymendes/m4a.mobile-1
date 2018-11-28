import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Alert, AsyncStorage } from 'react-native';
import axios from 'axios';

//Components
import LogoBig from '../components/logoBig';
import Title from '../components/title';
import Button from '../components/button';
import CookiePolicy from '../components/cookiePolicy';

//Image
import Twitter from '../assets/socialTwitter.png';
import Linkedin from '../assets/socialLinkedin.png';
import GoogleMais from '../assets/socialGoogleMais.png';
import Facebook from '../assets/socialFacebook.png';

import { AccessToken, LoginManager, GraphRequest, GraphRequestManager, LoginButton } from "react-native-fbsdk"
import { GoogleSignin, GoogleSigninButton, statusCodes } from "react-native-google-signin";

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      socialNetworks: [
        { icon: Twitter },
        { icon: Linkedin },
        { icon: GoogleMais },
        { icon: Facebook }
      ],
      googleLoginInProgress: false
    }

    this.setUserInfo = this.setUserInfo.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.findUserAccount = this.findUserAccount.bind(this);
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
  };

  async setUserInfo(info) {
    try {
      await AsyncStorage.setItem('userinfo', JSON.stringify(info));
      // redirecionar user
    } catch(err) {
      // mostrar erro
      console.log(err);
    }
  }

  findUserAccount(email) {
    return axios({
      url: `http://192.168.1.123:3000/users/${email}`,
      method: 'get',
    });
  }

  async saveUserInfo(userInfo) {
    try {
      await this.findUserAccount(userInfo.user.email);

      await this.setUserInfo({
        name: userInfo.name,
        email: userInfo.email,
        enableRegister: false,
      });

      // redirecionar swipe
      this.props.navigation.navigate('Private');
    } catch (error) {
      if (error.response && error.response.status === 404) {

        await this.setUserInfo({
          name: userInfo.name,
          email: userInfo.email,
          enableRegister: true,
        });

        // redirecionar pra select user type
        this.props.navigation.navigate('Private');
      }
    }
  }

  handleFacebookLogin(error, result) {
    if (error) {
      console.log(err);
      return;
    }

    if (result.isCancelled) {
      return;
    }

    FB.

    AccessToken.getCurrentAccessToken().then((data) => {
      axios({
        method: 'get',
        url: `https://graph.facebook.com/v2.6/me?fields=email,name&access_token${data.accessToken}`,
      }).then((response) => {
        console.log(response);
      }).catch((err) => console.log(err.response));
    });
  }

  logoutFinished() {
    Alert.alert("Alou")
  }

  async googleLogin() {
    try {
      GoogleSignin.configure({
        webClientId: '236746791659-viru6t39321pmfukp57sbqh3i7lpgmk6.apps.googleusercontent.com',
        offlineAccess: true, 
      });

      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
      const userInfo = await GoogleSignin.signIn();

      await this.saveUserInfo({
        token: userInfo.accessToken,
        email: userInfo.user.email,
        name: userInfo.user.name
      });

      await this.findUserAccount(userInfo.user.email);

      const user = await AsyncStorage.getItem('userinfo');
      const userParsed = JSON.parse(user)

      userParsed['enableRegister'] = false
      await AsyncStorage.setItem('userinfo', JSON.stringify(userParsed));

      // redirecionar swipe
      this.props.navigation.navigate('Private');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        
        const user = await AsyncStorage.getItem('userinfo');
        const userParsed = JSON.parse(user)

        userParsed['enableRegister'] = true
        await AsyncStorage.setItem('userinfo', JSON.stringify(userParsed));

        this.props.navigation.navigate('Private');
      }
    }
  }

  render() {    
    return (
      <View style={styles.container}>
        <LogoBig />
        <View style={styles.title}>
          <Title 
            text="Let´s create"  
            fontSize='big'
          />
          <Title 
            text="your new account"  
            fontSize='big'
          />
        </View>
        <View style={styles.components}>
          <Button 
            type='Start' 
            color='blue' 
            background='white' 
            route='RegisterDataScreen'
            style={styles.button}
				    navigation={this.props.navigation}/>
          <GoogleSigninButton
            style={{ width: 280, height: 65, marginTop: 5, alignItems: 'center', justifyContent: 'center'}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={this.googleLogin}
            disabled={this.state.googleLoginInProgress}
          />
          <LoginButton
            style={{ width: 280, height: 65, marginTop: 5}}
            readPermissions={["public_profile", "email"]}
            onLoginFinished={this.handleFacebookLogin}
            onLogoutFinished={this.logoutFinished}
          />
        </View>
        <CookiePolicy />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width: '100%',
    backgroundColor: '#FF7700',
  },
  title: {
    marginTop: 10
  },
  components: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
 
export default LoginScreen;