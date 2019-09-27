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
        console.log(this.state.hint);
    };

    gotAnswer = (value) => {
        if (this.state.finished) {
            this.reset();
        }

        if (value) {
            this.state.score += 1;
        } else {
            this.state.score -= 1;
        }

        if (this.questionDeck.questions.length > this.state.index) {
            this.state.index += 1;
        }
        this.state.finished = this.questionDeck.questions.length === this.state.index;

        this.setState({
            index: this.state.index,
            score: this.state.score,
            finished: this.state.finished
        })
    };

    repeatSession = () => {
        this.reset();
    };

    goToDecksList = () => {
        console.log('go back');
    };

    render() {
        const {
            score,
            hint,
            index,
            finished,
        } = this.state;

        console.log(index);

        return (
            !finished ? (
                <View style={styles.container}>
                    <SoloQuestionCard gotHint={this.gotHint} question={this.questionDeck.questions[index]}/>
                    <Answer submitAnswer={this.gotAnswer}/>
                </View>
            ) : (
                <Score score={score} hint={hint} numberOfQuestions={this.questionDeck.questions.length}
                       repeatSession={this.repeatSession} goToDecksList={this.goToDecksList}></Score>
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
