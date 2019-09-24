import React from 'react';
import {createAppContainer} from 'react-navigation';
import {blue, blueDark, blueLight, gray} from '../utils/colors';
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import DeckListOverview from "./DeckListOverview";
import AddDeck from "./AddDeck";
import DeckDetail from "./DeckDetail";

const router = {
    Decks: {
        screen: DeckListOverview,
        navigationOptions: {
            topBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <Ionicons name="ios-bookmarks" size={30} color={tintColor}/>,
        }
    },
    Add: {
        screen: AddDeck,
        navigationOptions: {
            topBarLabel: 'Add New Deck',
            tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor}/>,

        }
    }
};

const navigationOptions = {
    tabBarOptions: {
        showIcon: true,
        activeTintColor: blueLight,
        style: {
            padding: 12,
            height: 90,
            fontSize: 18,
            backgroundColor: gray,
            shadowColor: blue,
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowRadius: 8,
            shadowOpacity: 1,
        },
    },
};

const stackOptions = {
    initialRouteName: "Home",
    navigationOptions: {
        headerTintColor: blueLight,
        headerStyle: {backgroundColor: blueDark},
        headerTitleStyle: {fontWeight: "bold"}
    }
};

const TabNav = createMaterialTopTabNavigator(router, navigationOptions);

const stackConfigMap =
    {
        Home: TabNav,
        DeckDetail: DeckDetail,
        // Quiz: QuizScreen,
        // AddCard: AddCard,
    };

const MainNavigator = createStackNavigator(stackConfigMap, stackOptions);

export default createAppContainer(MainNavigator);
