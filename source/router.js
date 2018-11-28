import React from 'react';
import { 
  createSwitchNavigator,
  createStackNavigator,
  createTabNavegador,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

// Screens
import ValidateScreen from './screens/validateScreen';
import LoginScreen from './screens/loginScreen';

import SelectTypeScreen from './screens/selectTypeScreen';

import TutorialScreen from './screens/tutorialScreen';
import SwipeScreen from './screens/swipeScreen';

import RegisterDataScreen from './screens/registerDataScreen';
import AcaoSocialScreen from './screens/acaoSocialScreen';
import SelectAreaOfVolunteerScreen from './screens/selectAreaOfVolunteerScreen';

import EndUserScreen from './screens/endUserScreen';

import ProfileScreen from './screens/profileScreen';
import EditRegisterScreen from './screens/editRegisterScreen';

import CreateInitiativeScreen from './screens/createInitiativeScreen';


const Main = createStackNavigator({
  SelectUserType: {
    screen: SelectTypeScreen,
    navigationOptions:{
      header: null
    }
  },
  RegisterUser:{
    screen: RegisterDataScreen,
    navigationOptions:{
      header: null
    }
  },
  RegisterUserFirstStep:{
    screen: AcaoSocialScreen,
    navigationOptions:{
      header: null
    }
  },
  RegisterUserSecondStep:{
    screen: SelectAreaOfVolunteerScreen,
    navigationOptions:{
      header: null
    }
  },
  RegisterUserConfirmation:{
    screen: EndUserScreen,
    navigationOptions:{
      header: null
    }
  },
  ProfileScreen:{
    screen: ProfileScreen,
    navigationOptions:{
      header: null
    }
  },
  EditUserScreen:{
    screen: EditRegisterScreen,
    navigationOptions:{
    }
  },
  CreateInitiativeScreen:{
    screen: CreateInitiativeScreen,
    navigationOptions:{
      header: null
    }
  },
  TutorialScreen: {
    screen: TutorialScreen,
    navigationOptions: {
      header: null
    }
  },  
  SwipeScreen: {
    screen: SwipeScreen,
    navigationOptions: {
      header: null
    }
  }
},
{
  mode: 'card',
  initialRouteName: 'SelectUserType',
  //headerMode: 'float',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: '#FFF'
  }
});

const Login = createSwitchNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  
}, {
  initialRouteName: 'LoginScreen',
});

const MainStack = createSwitchNavigator({
  Public: Login,
  Private: Main,
}, {
  initialRouteName: 'Public',
});

export default createAppContainer(MainStack);