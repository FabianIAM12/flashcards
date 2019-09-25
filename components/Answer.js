import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {addCardToDeck} from '../utils/api';
import {gray, red} from '../utils/colors';
import {connect} from 'react-redux';
import {addCard} from "../actions";
import FlashcardButton from "./FlashcardButton";


class Answer extends Component {
    render() {
        const { submitAnswer } = this.props;
        return (
            <View style={styles.container}>
                <FlashcardButton style={styles.button} onPress={() => submitAnswer(true)}><Text>I was Right</Text></FlashcardButton>
                <FlashcardButton style={styles.button} onPress={() => submitAnswer(false)}><Text>I Wrong</Text></FlashcardButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    button: {
        width: 500,
        alignItems: "center"
    }
});

export default Answer;
