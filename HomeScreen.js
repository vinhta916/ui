import React from 'react';
import { View, Text, Button} from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Button
            title="Profile"
            onPress={() =>
              navigation.navigate('Profile')
            }
        />
      <Text>Home Screen</Text>
    </View>
    )
}
export default HomeScreen