import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

const AuthStack = createNativeStackNavigator();
const MainScreeTab = createBottomTabNavigator();

/*
    Stack Navigator
        - Stack Screen A

    Stack Navigator
        - Tab Navigator
            -Tab Screen B
            -Tab Screen C
 */

const isLoggedIn = false;

const AppTablComponent = () => {
    return (
        <MainScreeTab.Navigator>
            <MainScreeTab.Screen name="Diary" component={Diary} />
            <MainScreeTab.Screen name="News" component={News} />
        </MainScreeTab.Navigator>
    )
}

export const Rootnaviagtor = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            {isLoggedIn ? (
                <AuthStack.Screen name="Main" component={AppTablComponent} />
            ) : (
                <>
                    <AuthStack.Screen name="SignIn" component={SignIn} />
                    <AuthStack.Screen name="AppTabComponent" component={AppTablComponent} />
                </>
            )}
        </AuthStack.Navigator>
    )
}
