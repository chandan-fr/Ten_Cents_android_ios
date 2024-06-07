import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { black } from '../../config/colors';

const Deals = () => {
  return (
    <View style={styles.parent}>
      <Text style={{color: black}}>Deals Coming Soon</Text>
    </View>
  )
};

export default Deals;

const styles = StyleSheet.create({
    parent:{
        flex: 1,
        justifyContent: "center",
    },
});