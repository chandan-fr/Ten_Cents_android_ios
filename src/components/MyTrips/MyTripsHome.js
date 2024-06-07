import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { white } from '../../config/colors';
import Header from '../../components/Header';
import BgGradient from '../../utility/BgGradient';
import commonStyles from '../../assets/css/CommonFonts';
import MyTripsHomeNav from './MyTripsHomeNav';

const { width, height } = Dimensions.get("window");

const MyTripsHome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height} />
            <Header />

            <View style={styles.body}>
                {/* heading */}
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={commonStyles.lbB1}>
                        My Trips
                    </Text>
                </View>

                <View style={{ flex: 1, borderRadius: 8, marginBottom: 4 }}>
                    <MyTripsHomeNav />
                </View>
            </View>
        </SafeAreaView>
    )
};

export default MyTripsHome;

const styles = StyleSheet.create({
    parent: { flex: 1 },
    body: {
        marginTop: 25,
        // backgroundColor: white,
        backgroundColor: "#F4F4F4",
        marginHorizontal: 4,
        borderRadius: 8,
        elevation: 3,
        minHeight: height * 0.7,
        flex: 1,
    },
});