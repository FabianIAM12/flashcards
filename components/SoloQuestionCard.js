import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {blueDark, gray, white} from "../utils/colors";


class SoloQuestionCard extends Component {
    state = {
        isHidden: true
    };

    toggleCard = () => {
        if (this.state.isHidden) {
            this.props.gotHint();
        }

        this.setState(state => ({
            isHidden: !state.isHidden
        }));
    };

    render() {
        const {isHidden} = this.state;
        const {question} = this.props;
        return (
            <View style={styles.card}>
                <View>
                    <Text style={styles.questionHeadline}>{question.question}</Text>
                    {!isHidden && (<Text style={styles.questionHeadline}>{question.answer}</Text>)}
                </View>
                <Text style={styles.hiddenText} onPress={this.toggleCard}>{isHidden ? (<Text>Show Solution</Text>) : (
                    <Text>Hide</Text>)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    questionHeadline: {
        marginTop: 50,
        fontSize: 30,
        textAlign: "center",
        color: blueDark
    },
    hiddenText: {
        color: white
    },
    card: {
        textAlign: "center",
        padding: 10,
        height: 400,
        backgroundColor: gray,
        shadowOpacity: 1,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
            width: 5,
            height: 5
        }
    }
});

export default SoloQuestionCard;
