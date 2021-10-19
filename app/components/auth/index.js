import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from "react-native";
import AuthLogo from './authLogo';
import AuthForm from './authForm';

class AuthComponent extends Component {
    state = {
        loading: false
    }

    goWithoutLogin = () => {
        this.props.navigation.navigate("AppTabComponent");
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator />
                </View>
            )
        }else {
            return (
                <View style={styles.container}>
                    <AuthLogo />
                    <AuthForm goWithoutLogin={this.goWithoutLogin}/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    loading: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#7487C5',
        paddingTop: 130,
        paddingLeft: 50,
        paddingRight: 50,
    },
});

export default AuthComponent;
