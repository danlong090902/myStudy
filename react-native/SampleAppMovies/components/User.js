import React from 'react';
import { Text, View } from 'react-native';
class UserScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>User!</Text>
            </View>
        );
    }
}

export default UserScreen