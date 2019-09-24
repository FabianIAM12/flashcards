import React from 'react';
import {View} from "react-native";
import StatusBar from "react-native-web/src/exports/StatusBar";

export default function TopStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: 0}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}
