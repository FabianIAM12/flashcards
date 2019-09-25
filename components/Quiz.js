import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {gray, white} from "../utils/colors";
import SoloQuestionCard from "./SoloQuestionCard";
import Answer from "./Answer";


const starterState = {
    score: 0,
    hint: 0,
    index: 0
};

class Quiz extends Component {
    state = starterState;
    questionDeck = this.props.navigation.getParam("deck");

    restartSession = () => {
        this.setState(starterState);
    };

    gotHint = () => {
        this.state.hint += 1;
        console.log(this.state.hint);
    };

    gotAnswer = (value) => {
        if (value) {
            this.state.score +=1;
        } else {
            this.state.score -=1;
        }

        if (this.questionDeck.questions.length < this.state.index) {
            this.state.index += 1;
        }
    };

    render() {
        const {
            score,
            hint,
            index,
        } = this.state;
        console.log(index);

        return (
            <View style={styles.container}>
                <SoloQuestionCard gotHint={this.gotHint} question={this.questionDeck.questions[index]}/>
                <Answer submitAnswer={this.gotAnswer}/>
            </View>
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
