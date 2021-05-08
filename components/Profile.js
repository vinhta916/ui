import React, { useContext } from 'react';
import { View, Text} from 'react-native';

import UserContext from '../contexts/UserContext'
import SpeedDial from './SpeedDial';


const Profile = ({ navigation, route}) => {

    const userContext = useContext(UserContext)

    return (
        <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{ userContext.user}</Text>
      <SpeedDial navigation={navigation} />
    </View>
    )
}
export default Profile