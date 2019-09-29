import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {white} from "../utils/colors";
import {connect} from "react-redux";
import FlashcardButton from "./FlashcardButton";


class DeckDetail extends Component {
    render() {
        const {navigation, deck} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{deck.title}</Text>
                <Text style={styles.subheader}>Number of Questions: {deck.questions.length}</Text>
                {deck.questions.length !== 0 && (
                    <FlashcardButton onPress={() => {
                        navigation.navigate("Quiz", {deck});
                    }}><Text>Start Quiz!</Text></FlashcardButton>
                )}
                <FlashcardButton onPress={() => {
                    navigation.navigate("AddCardToDeck", {deck});
                }}><Text>Add Question</Text></FlashcardButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
    },
    header: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
    },
    subheader: {
        marginBottom: 35,
    },
});

const mapStateToProps = (state, {navigation}) => {
    return ({deck: state[navigation.getParam("deckId")]});
};

export default connect(mapStateToProps, null)(DeckDetail);
