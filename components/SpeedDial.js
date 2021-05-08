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
    >
    <SpeedDial.Action
        icon={{ name: 'add', color: '#fff' }}
        title="Home"
        onPress={() => navigation.navigate('Home') }
    />
    <SpeedDial.Action
        icon={{ name: 'delete', color: '#fff' }}
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
    />

    </SpeedDial>
    )
}

export default DialButtons