import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import logo from './assets/img/mainlogo.png';
import Home from './pages/Home';

const Routes = createAppContainer(
  createStackNavigator({
    Home
  }, {
      defaultNavigationOptions:{
        headerTitle: () => <Image style={{width: 120, height: 40}} source={logo}/>,
        headerTitleAlign: 'center',
        headerStyle:{
            
        },
      },
  })
);

export default Routes;