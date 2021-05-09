import React, { useState } from 'react';
import { SpeedDial } from 'react-native-elements';

const DialButtons = ({ navigation }) => {

    const [open, setOpen] = useState(false)

    return(<SpeedDial
        isOpen={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() =>setOpen(true)}
        onClose={() => setOpen(false)}
        buttonStyle={{backgroundColor: '#2196F3'}}
    >
    <SpeedDial.Action
        icon={{ name: 'home', color: '#fff' }}
        title="Home"
        onPress={() => {navigation.navigate('Home'); setOpen(false) }}
        buttonStyle={{backgroundColor: '#2196F3'}}
    />
    <SpeedDial.Action
        icon={{ name: 'account-box', color: '#fff' }}
        title="Profile"
        onPress={() => {navigation.navigate('Profile'); setOpen(false )}}
        buttonStyle={{backgroundColor: '#2196F3'}}
    />

    </SpeedDial>
    )
}

export default DialButtons