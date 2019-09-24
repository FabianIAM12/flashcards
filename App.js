import React from 'react';
import {View} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {blueDark} from "./utils/colors";
import MainNavigator from "./components/Navigation";
import TopStatusBar from "./components/TopStatusBar";


const store = createStore(reducer, middleware);

export default function App() {
    return (
        <Provider store={store}>
            <View style={{flex: 1}}>
                <TopStatusBar backgroundColor={blueDark} barStyle='light-content'/>
                <MainNavigator/>
            </View>
        </Provider>
    );
}
