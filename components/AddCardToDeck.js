import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {addCardToDeck} from '../utils/api';
import {red} from '../utils/colors';
import {connect} from 'react-redux';
import {addCard} from "../actions";
import FlashcardButton from "./FlashcardButton";


class AddCardToDeck extends Component {
    state = {
        question: 'Question',
        answer: 'Answer',
        valid: true,
    };

    createCard = () => {
        if (this.state.question.length > 0 && this.state.answer.length > 0) {
            const titleOfDeck = this.props.navigation.state.params.deck;
            const questionCard = {
                question: this.state.question,
                answer: this.state.answer
            };

            addCardToDeck(titleOfDeck, questionCard);
            this.props.addCard(titleOfDeck, questionCard);
            this.setState({
                question: '',
                answer: ''
            });
            this.props.navigation.navigate('DeckDetail', {deck: titleOfDeck});
        } else {
            this.state.valid = false;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    underlineColorAndroid='#2962ff'
                    style={styles.input}
                    onChangeText={question => this.setState({question})}
                    value={this.state.question}
                    onFocus={() => this.setState({question: '', questionValid: false})}
                />
                <TextInput
                    underlineColorAndroid='#2962ff'
                    style={styles.input}
                    onChangeText={answer => this.setState({answer})}
                    value={this.state.answer}
                    onFocus={() => this.setState({answer: '', answerValid: false})}
                />
                <FlashcardButton style={styles.button} onPress={this.createCard}><Text>Add
                    Question</Text></FlashcardButton>
                {!this.state.valid && <Text style={styles.error}>Sorry! Not valid!</Text>}
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
        padding: 10,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 17
    },
    button: {
        alignItems: "center"
    }
});

const mapDispatchToProps = dispatch => ({
    createCard: (deckId, question, answer) => {
        dispatch(addCard(deckId, question, answer));
    }
});

export default connect(null, mapDispatchToProps)(AddCardToDeck);
