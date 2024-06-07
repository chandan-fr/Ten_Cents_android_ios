import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, white, blue, b3, } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const HpPriceSum = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.1} />
            <Header />

            <View style={styles.body}>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingVertical: 5, rowGap: 15 }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center" }]}>
                                Price Summary
                            </Text>

                            {/* price details */}
                            <View style={styles.main}>

                                <Text style={[commonStyles.ns700, { marginLeft: 15 }]}>
                                    Your price summary
                                </Text>

                                {/* price */}
                                <View style={styles.priceWrap}>
                                    <Text style={[commonStyles.ns600, { fontSize: 26 }]}>
                                        Price
                                    </Text>

                                    {/* price details */}
                                    <View style={{ alignItems: "flex-end" }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={[commonStyles.ns600, { fontSize: 26 }]}>
                                                USD 1,320
                                            </Text>
                                            <Text style={{ color: b1, fontSize: 16, alignSelf: "flex-start", top: 4 }}>
                                                .39
                                            </Text>
                                        </View>

                                        <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>
                                            +USD 162 taxes and charges
                                        </Text>

                                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                                            <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>
                                                In property currency: CAD 1,794
                                            </Text>
                                            <Text style={{ color: b3, fontSize: 10, alignSelf: "flex-start", top: 1 }}>
                                                .39
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                {/* price info */}
                                <View style={{ padding: 12, rowGap: 15, paddingBottom: 0 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                        Price information
                                    </Text>

                                    <View style={{ rowGap: 15 }}>
                                        <View style={{ rowGap: 10 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                                <Image
                                                    style={{ width: 20, height: 20 }}
                                                    source={icon.cash}
                                                />

                                                <Text style={[commonStyles.ns400, { fontSize: 15 }]}>
                                                    Excludes USD162.01 in taxes and charges
                                                </Text>
                                            </View>

                                            <View style={{ rowGap: 7, marginLeft: 40 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={[commonStyles.ns400, { fontSize: 15, color: b3 }]}>
                                                        9% Tax
                                                    </Text>

                                                    <Text style={[commonStyles.ns600, { fontSize: 15, color: b3 }]}>
                                                        USD 118.84
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={[commonStyles.ns400, { fontSize: 15, color: b3 }]}>
                                                        3% City tax
                                                    </Text>

                                                    <Text style={[commonStyles.ns600, { fontSize: 15, color: b3 }]}>
                                                        USD 43.18
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 10 }}>
                                                <Image
                                                    style={{ width: 20, height: 20 }}
                                                    source={icon.info}
                                                />

                                                <Text style={[commonStyles.ns400, { fontSize: 16, width: 140, lineHeight: 20 }]}>
                                                    Damage deposit
                                                    (Fully refundable)
                                                </Text>
                                            </View>

                                            <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                                USD 74
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", columnGap: 10 }}>
                                            <Image
                                                style={{ width: 20, height: 20 }}
                                                source={icon.money}
                                            />

                                            <Text style={[commonStyles.ns400, { fontSize: 16, textAlign: "justify", flex: 1 }]}>
                                                This price is converted to show you the approximate cost in US$. You'll pay in <Text style={[commonStyles.ns700, { fontSize: 16 }]}>CAD</Text>. The exchange rate may change before you pay.
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", columnGap: 10 }}>
                                            <Image
                                                style={{ width: 20, height: 20 }}
                                                source={icon.exchangeRate}
                                            />

                                            <Text style={[commonStyles.ns400, { fontSize: 16, textAlign: "justify", flex: 1 }]}>
                                                Bear in mind that your card issuer may charge you a foreign transaction fee.
                                            </Text>
                                        </View>
                                    </View>

                                    {/* hide details */}
                                    <View style={{ alignItems: "flex-start" }}>
                                        <TouchableOpacity>
                                            <Text style={[commonStyles.ns600, { color: blue }]}>
                                                Hide details
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            {/* cancel */}
                            <View style={[styles.main, { paddingHorizontal: 15 }]}>
                                <Text style={commonStyles.ns700}>
                                    How much will it cost to cancel?
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 15, color: "#008009" }]}>
                                    Free cancellation before 20 Dec
                                </Text>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 15 }]}>
                                        From 00:00 on 20 Dec
                                    </Text>

                                    <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                        USD 97*
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* proceed */}
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
                        onPress={() => navigation.navigate("hppayment")}
                    >
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
                            proceed
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        </SafeAreaView >
    )
}

export default HpPriceSum;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 18,
        flex: 1,
    },
    main: {
        backgroundColor: white,
        marginHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        paddingVertical: 15,
        rowGap: 15,
    },
    priceWrap: {
        backgroundColor: "#EBF3FF",
        padding: 15,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: 'space-between',
    },
});