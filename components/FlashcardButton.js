import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {blueLight, white} from "../utils/colors";

const FlashcardButton = ({children, onPress, style = {}}) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        margin: 25,
        width: 400,
        padding: 20,
        backgroundColor: blueLight,
    },
    reset: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: white
    }
});

export default FlashcardButton;
