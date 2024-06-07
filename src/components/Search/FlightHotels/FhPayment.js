import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { blue, white, b1, b2 } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const FhPayment = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.1} />
            <Header />

            <View style={styles.body}>
                <ScrollView
                    style={{ marginHorizontal: 10, marginTop: 5, flex: 1 }}
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
                        <View style={{ rowGap: 15, marginBottom: 5 }}>
                            <View>
                                <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                                    Price Breakdown (USD)
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                    Dhaka(DAC) to Calgary(YYC)
                                </Text>
                            </View>

                            {/* price details */}
                            <View style={{ rowGap: 4, marginTop: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 16, width: 230 }]}>
                                        Package Base Price(per person)
                                    </Text>

                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={commonStyles.ns600}>
                                            USD 2242
                                        </Text>
                                        <Text style={[commonStyles.ns600, { fontSize: 11, textAlignVertical: "top" }]}>
                                            .08
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 16, width: 230 }]}>
                                        Taxes and Fees
                                    </Text>

                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={commonStyles.ns600}>
                                            USD 350
                                        </Text>
                                        <Text style={[commonStyles.ns600, { fontSize: 11, textAlignVertical: "top" }]}>
                                            .91
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 16, width: 230 }]}>
                                        Package Price(per person)
                                    </Text>

                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={commonStyles.ns600}>
                                            USD 2593
                                        </Text>
                                        <Text style={[commonStyles.ns600, { fontSize: 11, textAlignVertical: "top" }]}>
                                            .99
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.dottedLine} />

                            {/* add travel protection */}
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                        Travel Protection
                                    </Text>

                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={commonStyles.ns400}>
                                                USD 267
                                            </Text>
                                            <Text style={[commonStyles.ns400, { fontSize: 10, top: 1 }]}>
                                                .95
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns400}>
                                            per person
                                        </Text>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: "center", columnGap: 6, borderWidth: 1, borderColor: blue, backgroundColor: "rgba(33,180,226, 0.1)", borderRadius: 4, paddingHorizontal: 10, paddingVertical: 4, justifyContent: 'center' }}
                                >
                                    <Image
                                        style={{ width: 11, height: 11, tintColor: blue }}
                                        source={icon.plus}
                                    />

                                    <Text style={[commonStyles.lbB1, { fontSize: 16, color: blue }]}>
                                        Add
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.dottedLine} />

                            {/* total */}
                            <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                                    <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                        Total Package Price (USD)
                                    </Text>
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={icon.info}
                                    />
                                </View>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                        USD 2593
                                    </Text>
                                    <Text style={[commonStyles.ns700, { fontSize: 11, textAlignVertical: "top" }]}>
                                        .99
                                    </Text>
                                </View>
                            </View>

                            {/* add car */}
                            <TouchableOpacity
                                style={{ alignSelf: "flex-start", marginTop: 8, marginLeft: 4 }}
                            >
                                <Text style={[commonStyles.ns400, { color: blue }]}>
                                    Add car to your trip
                                </Text>
                            </TouchableOpacity>

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

                        {/* apply promocode */}
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

                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", columnGap: 10, marginTop: 10, alignSelf: "flex-start" }}>
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
                    </View>
                </ScrollView>

                {/* PROCEED */}
                <View style={{ backgroundColor: b1, alignItems: "center", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 10, flexDirection: "row" }}>
                    <View style={{ rowGap: 3 }}>
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
                            Price
                        </Text>
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
                            $1320 + Taxes
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 150, alignItems: "center", justifyContent: "center", paddingVertical: 8 }}
                        onPress={() => navigation.replace("success")}
                    >
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
                            PROCEED
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        </SafeAreaView >
    )
};

export default FhPayment;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 18,
        flex: 1,
        backgroundColor: white,
    },
    hr: {
        backgroundColor: "rgba(35, 32, 32, 0.15)",
        height: 1,
        marginVertical: 5,
    },
    dottedLine: {
        borderColor: "#D8D8D8",
        borderWidth: 1,
        borderStyle: "dashed",
    },
    clubMiles: {
        backgroundColor: b1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: -8,
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