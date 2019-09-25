import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {addCardToDeck} from '../utils/api';
import {gray, red} from '../utils/colors';
import {connect} from 'react-redux';
import {addCard} from "../actions";
import FlashcardButton from "./FlashcardButton";


class AddCardToDeck extends Component {
    state = {
        question: 'Question',
        answer: 'Answer',
    };

    createCard = () => {
        if (this.state.question.length > 0 && this.state.answer.length > 0) {
            const titleOfDeck = this.props.navigation.state.params.deck;
            const questionCard = {
                question: this.state.question,
                answer: this.state.answer
            };

            this.props.createCard(titleOfDeck, questionCard);
            addCardToDeck(titleOfDeck, questionCard);
            this.setState({
                question: '',
                answer: ''
            });
            this.props.navigation.navigate('DeckDetail', {deck: titleOfDeck});
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={question => this.setState({question})}
                    value={this.state.question}
                    onFocus={() => this.setState({question: '', questionValid: false})}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={answer => this.setState({answer})}
                    value={this.state.answer}
                    onFocus={() => this.setState({answer: '', answerValid: false})}
                />
                <FlashcardButton style={styles.button} onPress={this.createCard}><Text>Add Question</Text></FlashcardButton>
                {(this.state.answer.length === 0 || this.state.question.length === 0) && <Text style={styles.error}>Sorry! Not valid!</Text>}
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
    error: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: red
    },
    input: {
        backgroundColor: gray,
        marginBottom: 20,
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
    button: {
        width: 500,
        alignItems: "center"
    }
});

const mapDispatchToProps = dispatch => ({
    createCard: (deckId, question, answer) => {
        dispatch(addCard(deckId, question, answer));
    }
});

export default connect(null, mapDispatchToProps)(AddCardToDeck);
