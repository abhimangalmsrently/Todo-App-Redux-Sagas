import React, {Component} from 'react';

import IntroScreen from './screens/IntroNameScreen';
import IntroScreenRedux from './screens/IntroNameScreenRedux';
import IntroScreenReduxClass from './screens/IntroNameScreenReduxClass';
import IntroScreenReduxApi from './screens/IntroNameScreenReduxApi';


import IntroAgeScreen from './screens/IntroAgeScreen';
import IntroAgeScreen_2 from './screens/IntroAgeScreen_2';
import IntroAgeScreen_3 from './screens/IntroAgeScreenRedux';
import IntroAgeScreen_3Api from './screens/IntroAgeScreenReduxApi';


import DashboardScreen from './screens/DashboardScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import configureStore from './store/store';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <NavigationContainer>
          <Stack.Navigator>


          <Stack.Screen
              name="IntroNameScreenReduxClassApi"
              component={IntroScreenReduxApi}
              options={{
                headerShown: false,

              }}
            />
            
          <Stack.Screen
              name="IntroNameScreenReduxClass"
              component={IntroScreenReduxClass}
              options={{
                headerShown: false,
              }}
            />

          <Stack.Screen
              name="IntroNameScreenRedux"
              component={IntroScreenRedux}
              options={{
                headerShown: false,
              }}
            />

      
            
        


        

        
            
           
            <Stack.Screen
              name="IntroNameScreen"
              component={IntroScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="IntroAgeScreen"
              component={IntroAgeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DashboardScreen"
              component={DashboardScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="IntroAgeScreen_2"
              component={IntroAgeScreen_2}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="IntroAgeScreen_3"
              component={IntroAgeScreen_3}
              options={{
                headerShown: false,
              }}
            />
             <Stack.Screen
              name="IntroAgeScreen_3Api"
              component={IntroAgeScreen_3Api}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
