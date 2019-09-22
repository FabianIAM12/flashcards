import React from 'react';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from "react-navigation-tabs";

import Carddeck from "./Carddeck";

const router = {
    History: {
        screen: Carddeck,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor}) =>
                Platform.OS === 'ios' && <Ionicons name="ios-bookmarks" size={30} color={tintColor}/>,
        },
    },
    AddEntry: {
        screen: Carddeck,
        navigationOptions: {
            tabBarLabel: 'Add Entry',
            tabBarIcon: ({tintColor}) =>
                Platform.OS === 'ios' && <FontAwesome name="plus-square" size={30} color={tintColor}/>,
        },
    },
};

const navigationOptions = {
    tabBarOptions: {
        showIcon: true,
        activeTintColor: Platform.OS === 'ios' ? '#4e4cb8' : '#4e4cb8',
        style: {
            padding: 10,
            height: Platform.OS === 'ios' ? 60 : 'auto',
            fontSize: 18,
            backgroundColor: Platform.OS === 'ios' ? '#4e4cb8' : '#4e4cb8',
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowRadius: 6,
            shadowOpacity: 1,
        },
    },
};

const TabNav =
    Platform.OS === 'ios'
        ? createBottomTabNavigator(router, navigationOptions)
        : createMaterialTopTabNavigator(router, navigationOptions);

export default createAppContainer(TabNav);
