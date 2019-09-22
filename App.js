import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CardDeck from "./components/Carddeck";
import TabNav from "./components/TabNav";
import reducer from './reducers'

const MainNavigator = createAppContainer(createStackNavigator({
    home: {
        screen: TabNav,
        navigationOptions: {
            header: null,
        },
    },
    EntryDetail: {
        screen: CardDeck,
        navigationOptions: ({navigation}) => ({
            //headerTintColor: white,
            /*
            headerStyle: {
              backgroundColor: purple,
            },
             */
        }),
    },
}));


export default function App() {
    return (
        <Provider store={createStore(reducer)}>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <MainNavigator/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
