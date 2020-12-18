import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Buying from '../screens/Buying';
import Account from '../screens/Account';

import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default () =>{
    return(
        <Tab.Navigator
            tabBar={CustomTabBar}            
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Buying" component={Buying} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}