import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Input, Card } from 'react-native-elements';

import UserContext from '../contexts/UserContext'
import SpeedDial from './SpeedDial';


const Profile = ({ navigation, route}) => {

    const userContext = useContext(UserContext)
    const [date, setDate] = useState(new Date())

    return (
        <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input date={date} onDateChange={setDate} />
      </Card>
      
      <SpeedDial navigation={navigation} />
    </View>
    )
}
export default Profile