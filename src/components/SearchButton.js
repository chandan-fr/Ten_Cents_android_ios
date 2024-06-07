import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b2, white } from '../config/colors';


const SearchButton = ({ navigation, screenName, refName }) => {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.btnWrap} onPress={() => navigation.navigate(screenName, {refName: refName})}>
                <Text style={styles.btnText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
};

export default SearchButton;

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: "center",
        zIndex: -1,
    },
    btnWrap: {
        backgroundColor: b2,
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 90,
        borderRadius: 4,
    },
    btnText: {
        color: white,
        fontFamily: 'LondonBetween',
        fontSize: 19,
    },
});