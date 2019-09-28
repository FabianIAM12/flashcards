import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {purple, white} from "../utils/colors";
import FlashcardButton from "./FlashcardButton";


class Score extends Component {
    render() {
        const {score, hint, numberOfQuestions, navigation} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Congratulations!
                </Text>
                <Text>
                    Your Score: {score}. Needed Hints: {hint} for {numberOfQuestions} Questions!
                </Text>
                <FlashcardButton style={styles.button} onPress={() => this.props.repeatSession()}><Text>Repeat Session</Text></FlashcardButton>
                <FlashcardButton style={styles.button} onPress={() => navigation.goBack()}><Text>Back to Deck!</Text></FlashcardButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: white,
        padding: 10
    },
    text: {
        paddingTop: 50,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: purple,
    }
});

export default Score;
