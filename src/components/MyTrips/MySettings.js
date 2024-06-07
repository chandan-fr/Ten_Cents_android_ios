import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { b2, white } from '../../config/colors';
import BgGradient from '../../utility/BgGradient';
import Header from '../Header';
import commonStyles from '../../assets/css/CommonFonts';

const { width, height } = Dimensions.get("window");

const MySettings = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height} />
            <Header />

            <View style={styles.body}>
                {/* heading */}
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={commonStyles.lbB1}>
                        My Settings
                    </Text>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: white, borderRadius: 4.8, marginTop: 20, elevation: 4, marginHorizontal: 16, paddingVertical: 20 }}>
                        <Text style={[commonStyles.ns600, { textAlign: "center", marginTop: 5 }]}>
                            Email & Fare Alert Settings
                        </Text>

                        <Text style={{ textAlign: "center", marginTop: 10, fontSize: 12, color: b2, fontFamily: "Arial" }}>
                            To modify your subscriptions, check or uncheck the boxes below, and click "Update Settings" to save.
                        </Text>

                        <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 20, marginHorizontal: 10, marginBottom: 10 }}>
                            <View style={[styles.inputGrp, { borderTopLeftRadius: 12, borderBottomLeftRadius: 12, flex: 1, paddingLeft: 10 }]}>
                                <Text style={commonStyles.ns400}>
                                    Email Address
                                </Text>
                            </View>

                            <View style={[styles.inputGrp, { borderTopRightRadius: 12, borderBottomRightRadius: 12, flex: 1.5, }]}>
                                <TextInput
                                    style={[styles.inputBox, commonStyles.ns400, {borderTopRightRadius: 12, borderBottomRightRadius: 12}]}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default MySettings;

const styles = StyleSheet.create({
    parent: { flex: 1 },
    body: {
        marginTop: 25,
        backgroundColor: "#F4F4F4",
        marginHorizontal: 4,
        borderRadius: 8,
        elevation: 3,
        minHeight: height * 0.7,
        flex: 1,
    },
    inputGrp: {
        borderWidth: 1,
        borderColor: "#D8D8D8",
        backgroundColor: "#F2F2F2",
        height: 40,
        justifyContent: 'center',
    },
    inputBox: {
        backgroundColor: "#F2F2F2",
        paddingLeft: 5,
    },
});