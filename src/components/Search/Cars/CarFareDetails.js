import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, b3, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const CarFareDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.11} />
            <Header />

            <View style={styles.body}>
                <ScrollView
                    style={{ marginHorizontal: 10, marginTop: 5 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ paddingVertical: 5, rowGap: 15 }}>
                        <View style={{ marginTop: 15 }}>
                            <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                Please make your payment within the next <Text style={[commonStyles.ns600, { fontSize: 16 }]}>20 minutes</Text>
                            </Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
                                <Image
                                    style={{ width: 15, height: 15 }}
                                    source={icon.info}
                                />
                                <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                    to keep this session active.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* price breakdown */}
                        <View style={{ rowGap: 10, marginBottom: 5 }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                Price Breakdown (USD)
                            </Text>

                            <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                Car Rental: <Text style={[commonStyles.ns400, { color: b3 }]}>14 Days</Text>
                            </Text>

                            <View style={{ rowGap: 4 }}>
                                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 16, width: 230 }]}>
                                        Base Rental Price x 14 Day(s)
                                    </Text>

                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 16 }]}>
                                            USD 567
                                        </Text>
                                        <Text style={[commonStyles.ns600, { fontSize: 11, textAlignVertical: "top" }]}>
                                            .87
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 16, width: 230 }]}>
                                        Booking Fee
                                    </Text>

                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 16 }]}>
                                            USD 0
                                        </Text>
                                        <Text style={[commonStyles.ns600, { fontSize: 11, textAlignVertical: "top" }]}>
                                            .00
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.dottedLine} />

                            <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16, width: 230 }]}>
                                    Total Package Price (USD)
                                </Text>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                        USD 567
                                    </Text>
                                    <Text style={[commonStyles.ns700, { fontSize: 11, textAlignVertical: "top" }]}>
                                        .87
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.dottedLine} />

                            {/* Join ClubMiles and earn 2225 points or more on this booking */}
                            <View style={styles.clubMiles}>
                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                    <Image
                                        style={{ marginRight: 5 }}
                                        source={icon.cmiles}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 15, color: white, flex: 1 }]}>
                                        Join ClubMiles and earn 2225 points or more on this booking
                                    </Text>

                                    <TouchableOpacity
                                        style={styles.signin}
                                    >
                                        <Text style={[commonStyles.lbB1, { fontSize: 16, color: blue }]}>
                                            Sign In
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* promocode */}
                        <View style={styles.promo}>
                            <Image
                                style={{ width: 25, height: 25, tintColor: blue }}
                                source={icon.tag}
                            />

                            <Text style={[commonStyles.ns600, { color: blue, fontSize: 14, width: 210 }]}>
                                Enter promo code or gift card number
                            </Text>

                            <TouchableOpacity
                                style={styles.btn}
                            >
                                <Text style={[commonStyles.lbB1, { color: white, fontSize: 16 }]}>
                                    Apply
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", columnGap: 10, marginTop: 10 }}>
                            <Text style={[commonStyles.ns600, { color: blue }]}>
                                Pay with credit from a previous booking
                            </Text>

                            <Image
                                style={{ width: 18, height: 18, tintColor: blue, transform: [{ rotate: "-90deg" }] }}
                                source={icon.rightArrow}
                            />
                        </TouchableOpacity>

                        <Text style={[commonStyles.ns400, { lineHeight: 20 }]}>
                            To use any travel credit that you have with us from a previously canceled booking, please call  <Text style={[commonStyles.ns600, { color: "#DF1414", fontSize: 14 }]}>
                                845-848-0211
                            </Text>
                        </Text>

                        {/* Confirm & Book */}
                        <View style={{ marginTop: 50, alignItems: 'center' }}>
                            <TouchableOpacity
                                style={styles.btnLrg}
                                onPress={() => navigation.navigate("carpayment")}
                            >
                                <Text style={[commonStyles.lbB1, { color: white }]}>
                                    Proceed To Payment
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView >
    )
};

export default CarFareDetails;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 25,
        flex: 1,
        backgroundColor: "#EFF2F7",
    },
    hr: {
        backgroundColor: "rgba(35, 32, 32, 0.15)",
        height: 1,
        marginVertical: 5,
    },
    dottedLine: {
        borderColor: b3,
        borderWidth: 1,
        borderStyle: "dashed",
    },
    clubMiles: {
        backgroundColor: b1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 8,
    },
    signin: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: blue,
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 8
    },
    promo: {
        borderWidth: 1,
        borderColor: b2,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        paddingVertical: 10,
        marginTop: 5,
    },
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 30,
    },
    btnLrg: {
        borderRadius: 8,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
});