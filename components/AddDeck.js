import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {saveDeck} from '../utils/api';
import {connect} from 'react-redux';
import {addDeck} from "../actions";
import FlashcardButton from "./FlashcardButton";
import {gray} from "../utils/colors";


class AddDeck extends Component {
    state = {
        title: 'Title',
        formValid: false
    };

    handleInputChange = input => {
        this.setState(() => ({
            input
        }));
    };

    handleSubmit = () => {
        let deck = {
            id: Date.now(),
            title: this.state.input,
            questions: []
        };

        this.props.addDeck(deck);
        saveDeck(deck);

        this.props.navigation.navigate("DeckDetail", {
            deckId: deck.id
        });

        this.setState(() => ({
            input: ""
        }));
    };

    render() {
        const {input} = this.state;

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={input}
                    placeholder="Your Topic!"
                    onChangeText={this.handleInputChange}
                />
                <FlashcardButton style={styles.button} onPress={this.handleSubmit}><Text>Add
                    Deck!</Text></FlashcardButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
    },
    button: {
        alignSelf: "center"
    },
    input: {
        backgroundColor: gray,
        padding: 5,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOpacity: 0.8,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
            width: 4,
            height: 5
        }
    },
});

const mapDispatchToProps = dispatch => ({
    addDeck: (id, deckName) => dispatch(addDeck(id, deckName))
});

export default connect(null, mapDispatchToProps)(AddDeck);
