import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {blue, blueDark, gray, white} from "../utils/colors";


class Score extends Component {
    render() {
        const {score, hint, numberOfQuestions} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Congratulations! Your Score: { score }. Needed Hints: { hint } for { numberOfQuestions } Questions!
                </Text>
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

export default Score;
