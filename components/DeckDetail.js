import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {white} from "../utils/colors";
import {connect} from "react-redux";
import FlashcardButton from "./FlashcardButton";


class DeckDetail extends Component {
    /*
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam("title")
    });
    */
    render() {
        const {navigation, deck} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{deck.title}</Text>
                <Text style={styles.header}>{deck.questions.length}</Text>
                {(
                    <FlashcardButton onPress={() => {
                        navigation.navigate("Quiz", {deck});
                    }}><Text>Start Quiz!</Text></FlashcardButton>
                ) && deck.questions.length > 0}
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
        alignItems: "center"
    },
    header: {
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        marginBottom: 10
    },
});

const mapStateToProps = (state, {navigation}) => {
    const id = navigation.getParam("deckId");
    return ({deck: state[id]});
};

export default connect(
    mapStateToProps,
    null
)(DeckDetail);
