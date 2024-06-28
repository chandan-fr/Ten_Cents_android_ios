import { ImageBackground, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { _Width } from '../config/StaticVars';
import { b1, white } from '../config/colors';

const SignIn = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={"dark-content"} />
            <ImageBackground
                source={require("../assets/images/13.jpg")}
                resizeMode='cover'
                style={styles.imgBkgrnd}
            >
                {/* skip */}
                <TouchableOpacity style={styles.skipWrap} onPress={() => navigation.replace("tab")}>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>

                <View>
                    <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                        <Text style={[styles.s2HeadingText, { color: white }]}>Sign In</Text>

                        <View style={{ width: 195, alignItems: "center", marginTop: 15 }}>
                            <Text style={styles.s2SubHeadingText}>
                                Earn <Text style={{ fontWeight: 600 }}> 2x  points </Text> when  you're  signed  in.
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

export default SignIn;

const styles = StyleSheet.create({
    imgBkgrnd: {
        width: _Width,
        height: "100%",
    },
    skip: {
        fontFamily: "Rubik-Regular",
        fontSize: 16,
        color: white,
    },
    skipWrap: {
        marginLeft: 10,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            ios: { marginTop: 55 },
            android: { marginTop: 40 },
        }),
    },
    s2HeadingText: {
        fontFamily: 'LondonBetween',
        fontSize: 22,
        color: b1,
    },
    s2SubHeadingText: {
        fontFamily: 'Poppins-Regular',
        fontSize: Platform.OS === "ios" ? 12 : 11,
        color: white,
        textAlign: "center",
    },
});