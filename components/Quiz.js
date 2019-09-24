import React, {Component} from "react";
import {Text, View} from "react-native";
import QuizCard from "./QuizCard";


const starterState = {
    answeredCorrect: 0,
    answeredWrong: 0,
    index: 0
};

class Quiz extends Component {
    state = starterState;

    restartSession = () => {
        this.setState(starterState);
    };

    render() {
        const {
            answeredCorrect,
            answeredWrong,
            index,
        } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.count}>123</Text>
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
