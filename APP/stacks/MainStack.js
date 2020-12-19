import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import MainTabs from './MainTabs';
import Categoria from '../screens/Categoria';
import Produto from '../screens/Produto';

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="HomeTabs" component={MainTabs} />
            <Stack.Screen name="Categoria" component={Categoria} />
            <Stack.Screen name="Produto" component={Produto} />
        </Stack.Navigator>
    );
}