import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import Profile from "./Profile";
import UserContext from './contexts/UserContext';

const Stack = createStackNavigator();

class App extends React.Component{

  state = { user: 'vinh'}

  render(){
    return (
      <UserContext.Provider value={this.state}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{title: "Home Screen"}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{title: "Profile"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </UserContext.Provider>
    );
  }
}

export default App;