import React from 'react';
import {createAppContainer} from 'react-navigation';
import {blue, blueDark, gray, purple} from '../utils/colors';
import DeckListScreen from './DeckList';
import AddDeckScreen from './AddDeck';
import QuizScreen from './Quiz';
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from 'react-navigation-stack';
import IndividualDeckScreen from "./Deck";
import AddCard from "./AddCard";
import {FontAwesome, Ionicons} from '@expo/vector-icons';

const router = {
    Decks: {
        screen: DeckListScreen,
        navigationOptions: {
            topBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <Ionicons name="ios-bookmarks" size={30} color={tintColor}/>,
        }
    },
    Add: {
        screen: AddDeckScreen,
        navigationOptions: {
            topBarLabel: 'Add New Deck',
            tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor}/>,

        }
    }
};

const navigationOptions = {
    tabBarOptions: {
        showIcon: true,
        activeTintColor: purple,
        style: {
            padding: 10,
            height: 60,
            fontSize: 18,
            backgroundColor: gray,
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

const stackOptions = {
    initialRouteName: "Home",
    navigationOptions: {
        headerTintColor: blue,
        headerStyle: {backgroundColor: blueDark},
        headerTitleStyle: {fontWeight: "bold"}
    }
};

const TabNav = createMaterialTopTabNavigator(router, navigationOptions);

const stackConfigMap =
    {
        Home: TabNav,
        IndividualDeck: IndividualDeckScreen,
        Quiz: QuizScreen,
        AddCard: AddCard,
    };

const MainNavigator = createStackNavigator(stackConfigMap, stackOptions);

export default createAppContainer(MainNavigator);
