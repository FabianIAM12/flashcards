import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {blueLight, white} from '../utils/colors';

class DeckListEntry extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigateToDeck(this.props.deck.title)}>
                <View style={styles.entry}>
                    <Text style={styles.headline}>{this.props.deck.title} ({this.props.deck.questions.length})</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    entry: {
        backgroundColor: blueLight,
        marginBottom: 10,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width: 10, height: 10},
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 1,
        elevation: 4
    },
    headline: {
        marginBottom: 5,
        fontSize: 18,
        color: white,
    }
});

export default DeckListEntry;
