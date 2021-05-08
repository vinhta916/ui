import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import UserContext from "./contexts/UserContext";
import HomeScreen from './components/HomeScreen';
import Profile from "./components/Profile";
import SpeedDial from './components/SpeedDial';

const Stack = createStackNavigator();

class App extends React.Component{

    state = { user: 'vinh', speeddial: true}

    render(){
        return (
        <UserContext.Provider value={this.state}>
            <NavigationContainer>
            <Stack.Navigator>
            {/* home screen */}
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{title: "Home Screen"}}
            />
            {/* profile */}
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