import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {gray, white} from "../utils/colors";
import SoloQuestionCard from "./SoloQuestionCard";
import Answer from "./Answer";
import Score from "./Score";


const starterState = {
    score: 0,
    hint: 0,
    index: 0,
    finished: false,
};

class Quiz extends Component {
    state = starterState;
    questionDeck = this.props.navigation.getParam("deck");

    reset = () => {
        this.setState(starterState);
    };

    gotHint = () => {
        this.state.hint += 1;
    };

    gotAnswer = (value) => {
        let {finished, score, index} = this.state;

        if (finished) {
            this.reset();
        }

        if (value) {
            score += 1;
        } else {
            score -= 1;
        }

        if (this.questionDeck.questions.length > index) {
            index += 1;
        }
        finished = this.questionDeck.questions.length === index;

        this.setState({index, score, finished })
    };

    repeatSession = () => {
        this.reset();
    };

    goToDecksList = () => {
        return this.props.navigation.getParam("deck");
    };

    render() {
        const { score, hint, index, finished } = this.state;

        return (
            !finished ? (
                <View style={styles.container}>
                    <SoloQuestionCard gotHint={this.gotHint} question={this.questionDeck.questions[index]} questionsRemaining={this.questionDeck.questions.length - index}/>
                    <Answer submitAnswer={this.gotAnswer}/>
                </View>
            ) : (
                <Score score={score} hint={hint} numberOfQuestions={this.questionDeck.questions.length}
                       repeatSession={this.repeatSession} goToDecksList={this.goToDecksList}>
                </Score>
            )
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: white,
        padding: 10
    },
    count: {
        color: gray,
        fontSize: 20,
        marginTop: 10
    }
});

export default Quiz;
