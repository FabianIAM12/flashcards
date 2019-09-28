import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import DeckListEntry from './DeckListEntry';
import {getAllDecks} from "../utils/api";
import {receiveDecks} from "../actions";
import AppLoading from "expo/build/launch/AppLoading";


class DeckListOverview extends Component {
    state = {
        ready: false
    };

    componentDidMount() {
        const {dispatch} = this.props;

        getAllDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks))
            })
            .then(() => {
                this.setState({ready: true});
            });

    }

    keys = (item, index) => {
        return index.toString();
    };

    navigateToDeck = (key) => {
        this.props.navigation.navigate('DeckDetail', {deckId: this.props.decks[key].id});
    };

    render() {
        const {decks} = this.props;
        const data = Object.values(decks);

        const {ready} = this.state;
        if (ready === false) {
            return <AppLoading/>
        }

        return (
            <FlatList
                style={styles.List}
                data={data}
                keyExtractor={this.keys}
                renderItem={({item}) => (
                    <DeckListEntry
                        deck={item}
                        id={item.id}
                        navigateToDeck={this.navigateToDeck}
                    />
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    List: {
        padding: 8,
        flex: 1,
        alignSelf: 'stretch',
    }
});

function mapStateToProps(decks) {
    return {decks};
}

export default connect(mapStateToProps)(DeckListOverview);
