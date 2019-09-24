import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {saveDeck} from '../utils/api';
import {red} from '../utils/colors';
import {connect} from 'react-redux';
import {addDeck} from "../actions";
import FlashcardButton from "./FlashcardButton";


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
                    style={styles.titleInput}
                    value={input}
                    placeholder="Your Topic!"
                    onChangeText={this.handleInputChange}
                />
                <FlashcardButton style={styles.button} onPress={this.handleSubmit}><Text>Add Question</Text></FlashcardButton>
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
    error: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: red
    },
    titleInput: {
        padding: 10,
        marginTop: 35,
        marginBottom: 10,
        fontSize: 17
    },
});

const mapDispatchToProps = dispatch => ({
    addDeck: (id, deckName) => dispatch(addDeck(id, deckName))
});

export default connect(null, mapDispatchToProps)(AddDeck);
