import React from 'react';
import {View} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {blueDark} from "./utils/colors";
import MainNavigator from "./components/Navigation";
import TopStatusBar from "./components/TopStatusBar";
import {setLocalNotification} from "./utils/notification";


const store = createStore(reducer);

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification()
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <TopStatusBar backgroundColor={blueDark} barStyle='light-content'/>
                    <MainNavigator/>
                </View>
            </Provider>
        );
    }
}
