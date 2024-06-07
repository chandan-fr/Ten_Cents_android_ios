import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, b3, blue, violet, white } from '../../config/colors';

const Success = ({ navigation }) => {
    const mytrips = () => {
        navigation.navigate("tab", { screen: "My Trips" });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF2F7" }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.Wrap}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.success}>SUCCESS!</Text>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Image
                        style={{ width: "100%" }}
                        resizeMode='stretch'
                        source={require("../../assets/images/success.png")}
                    />
                </View>

                <View style={{ marginHorizontal: 25 }}>
                    <Text style={[styles.ns400, { fontSize: 20, textAlign: "center", color: b3, lineHeight: 27 }]}>
                        Your flight has been confirmed for 08 Feb'24. Check details at
                        <Text onPress={mytrips} style={{ color: violet }}>  My Trips </Text> section.
                    </Text>
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
                    <TouchableOpacity
                        style={styles.backToHome}
                        onPress={() => navigation.popToTop("tab")}
                    >
                        <Text style={[styles.ns600, { fontSize: 20, color: blue }]}>
                            BACK TO HOME
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Success;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        marginVertical: 100,
        marginHorizontal: 23,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        color: b1,
        fontSize: 16,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 14,
    },
    success: {
        color: b1,
        fontFamily: "MarkoOne-Regular",
        fontSize: 38,
        letterSpacing: 5,
    },
    backToHome: {
        borderColor: blue,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: white,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 8
    }
});