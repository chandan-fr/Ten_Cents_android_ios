import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { black } from '../../config/colors';

const Rewards = () => {
    return (
        <View style={styles.parent}>
            <Text style={{color: black}}>Rewards Coming Soon</Text>
        </View>
    )
};

export default Rewards;

const styles = StyleSheet.create({
    parent:{
        flex: 1,
        justifyContent: "center",
    },
});