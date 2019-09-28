import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FlashcardButton from "./FlashcardButton";


class Answer extends Component {
    render() {
        const {submitAnswer} = this.props;
        return (
            <View style={styles.container}>
                <FlashcardButton style={styles.button} onPress={() => submitAnswer(true)}><Text>I was Right (+1)</Text></FlashcardButton>
                <FlashcardButton style={styles.button} onPress={() => submitAnswer(false)}><Text>I was Wrong (-1)</Text></FlashcardButton>
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
