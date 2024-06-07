import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { b1, b3, gs1, white } from '../../config/colors';

const SelectFair = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.Wrap}>
                {/* nav */}
                <View style={styles.nav}>
                    <Text style={[styles.lbB1, { fontSize: 20, }]}>
                        Please select a fare for Indigo
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.cross}
                    >
                        <Image
                            style={{ width: 15, height: 15, tintColor: b1 }}
                            source={require("../../assets/icons/cross.png")}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.fair}>
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}
                    >
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            {/* saver */}
                            <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                                <View style={styles.check}>
                                    <Image
                                        style={{ width: 10, height: 10, tintColor: white }}
                                        source={require("../../assets/icons/check.png")}
                                    />
                                </View>
                                <Text style={[styles.ns600, { textTransform: "uppercase" }]}>saver</Text>
                            </View>

                            <View
                                style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}
                            >
                                <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                                    <Image
                                        style={{ width: 17, height: 17, tintColor: b3 }}
                                        source={require("../../assets/icons/seat.png")}
                                    />
                                    <Text style={[styles.lbB1, { color: b3, fontSize: 17, marginLeft: 30 }]}>
                                        Seat
                                    </Text>
                                </View>

                                <Text style={[styles.lbB1, { color: b3, fontSize: 17 }]}>
                                    Limited <Text style={[styles.lbB1, { color: gs1, fontSize: 17 }]}>FREE</Text> seats
                                </Text>
                            </View>
                        </View>

                        <Text style={[styles.ns600, { textTransform: "uppercase", marginTop: 10, marginLeft: 6 }]}>
                            $430
                        </Text>
                    </View>

                    <View style={styles.bottom}>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                            <Image
                                style={{ width: 20, height: 20, tintColor: "#306D3F" }}
                                source={require("../../assets/icons/discount-solid.png")}
                            />
                            <Text style={[styles.lbB1, { color: gs1, fontSize: 17, marginLeft: 10 }]}>
                                Get $50 OFF on CASUPER;
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 60, alignItems: "center" }}>
                    <TouchableOpacity style={styles.bookNow} onPress={()=> navigation.replace("flightreview")}>
                        <Text style={[styles.ns600, { color: white, fontSize: 16 }]}>
                            Book Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default SelectFair;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        marginHorizontal: 12,
        marginTop: 30,
    },
    nav: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 15,
        marginBottom: 10,
    },
    lbB1: {
        fontFamily: "LondonBetween",
        color: b1,
    },
    cross: {
        backgroundColor: "#D9D9D9",
        padding: 8,
        borderRadius: 100,
    },
    fair: {
        borderRadius: 8,
        borderColor: "#D8D8D8",
        borderWidth: 1,
        marginTop: 30,
        paddingTop: 6,
    },
    check: {
        backgroundColor: "#435970",
        borderRadius: 20,
        marginRight: 15,
        alignItems: "center",
        justifyContent: 'center',
        width: 20,
        height: 20,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-Bold",
        color: b1,
        fontSize: 20,
    },
    bottom: {
        marginTop: 20,
        backgroundColor: "#E9F7EA",
        paddingLeft: 20,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: "center"
    },
    bookNow: {
        borderRadius: 4,
        backgroundColor: "#435970",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: 60,
    },
});