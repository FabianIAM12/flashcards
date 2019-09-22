import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "react-native-web/dist/exports/Text";
import {View} from "react-native-reanimated";

class CardDeck extends Component {
    render() {
    const text = 'Deck 12 Cards';

        return (
            <View>
                <Text>
                    <div>{text}</div>
                </Text>
            </View>
        )
    }
}

function mapStateToProps (state) {

    return {
    }
}

export default connect(mapStateToProps)(CardDeck)
