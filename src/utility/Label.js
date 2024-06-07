import { Platform, StyleSheet, Text } from 'react-native'
import React from 'react'

const Label = ({ focused, children }) => {
    return (
        <Text style={focused ? styles.active : styles.common}>{children}</Text>
    )
};

export default Label;

const styles = StyleSheet.create({
    active: {
        color: "rgba(47, 98, 145, 1)",
        fontSize: 13,
        fontFamily: "LondonBetween",
        borderBottomWidth: 2,
        borderBottomColor: "#2F6291",
        ...Platform.select({
            ios: {
                marginTop: 10,
            },
            android: {
                marginBottom: 3,
                marginTop: 5,
            }
        }),
    },
    common: {
        color: "rgba(35, 32, 32, 1)",
        fontFamily: "LondonBetween",
        fontSize: 13,
        ...Platform.select({
            ios: {
                marginTop: 10,
            },
            android: {
                marginBottom: 3,
                marginTop: 5,
            }
        }),
    },
});