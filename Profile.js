import React, { useContext } from 'react';
import { View, Text} from 'react-native';
import UserContext from './contexts/UserContext'


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
    </View>
    )
}
export default Profile