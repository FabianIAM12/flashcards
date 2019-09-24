import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { blue, white, gray } from "../utils/colors";
import FlashcardButton from "./FlashcardButton";

class QuizCard extends Component {
    state = {
        showAnswer: false
    };

    render () {
        const { showQuestion } = this.state;
        const { card } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    {this.state.showAnswer ? (
                        <Text style={styles.text}>{card.answer}</Text>
                    ) : (
                        <Text style={styles.text}>{card.question}</Text>
                    )}
                </View>
                <View style={{ marginTop: 30 }}>
                    <FlashcardButton
                        style={{ backgroundColor: gray }}
                        onPress={this.state.showAnswer=!this.state.showAnswer}
                    >{`See ${showQuestion ? "Answer" : "Question"}`}</FlashcardButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: blue,
        padding: 30,
        width: 350,
        height: 250,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOpacity: 0.8,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
            width: 4,
            height: 5
        }
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: white
    }
});

export default QuizCard;
