import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation'; // Version can be specified in package.json
import Navigations from './Navigation';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container
            }>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    clearTextOnFocus={true}
                    style={styles.input}
                    onChangeText={(text) => this.setState({username: text})
                    }
                    placeholder={'请输入用户名'}
                />
                <TextInput
                    clearTextOnFocus={true}
                    style={styles.input}
                    onChangeText={(text) => this.setState({password: text})}
                    // value={this.state.text}
                    placeholder={'请输入密码'}
                    secureTextEntry={true}
                />
                <Button
                    title="Login"
                    style={styles.login}
                    onPress={() => {
                        if (this.state.password === '111111' && this.state.username === 'admin') {
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({routeName: 'Navigations'})
                                ],
                            }))
                        } else {
                            alert('用户名或密码错误')
                        }
                    }}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
    Navigations: {
        screen: Navigations
    }
}, {
    initialRouteName: 'Home',
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffff0'
    },
    title: {
        marginBottom: 20,
        fontSize: 20
    },
    input: {
        height: 40,
        width: 200,
        marginBottom: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft:10
    },
    login: {
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default createAppContainer(AppNavigator);