import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar } from 'react-native'
import React, { useState } from 'react'
import icon from '../../../config/IconAssets';
import { b1, b2, b3, blue, white, } from '../../../config/colors';
import commonStyles from '../../../assets/css/CommonFonts';

const { width } = Dimensions.get("window");

const FhTripFilter = ({ navigation }) => {
    const [airType, setAirType] = useState("air");

    return (
        <SafeAreaView style={styles.parent}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.Wrap}>
                {/* nav */}
                <TouchableOpacity
                    style={styles.nav}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{ width: 22, height: 22, marginRight: 10 }}
                        source={icon.next}
                    />

                    <Text style={[commonStyles.ns600, { fontSize: 20, textTransform: "uppercase" }]}>
                        FILTER
                    </Text>
                </TouchableOpacity>

                <View style={{ flex: 1, marginTop: 20 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ width: "78%", marginLeft: 13 }}
                    >
                        <View style={{ rowGap: 20 }}>
                            {/* stops */}
                            <View style={{}}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>Stops</Text>

                                <View style={styles.stopOptn}>
                                    <TouchableOpacity style={styles.optnBtn}>
                                        <Text style={styles.stopBtnText}>1 Stop</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.optnBtn}>
                                        <Text style={styles.stopBtnText}>Non - Stops</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Flight Slot Times */}
                            <View style={{}}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Flight Slot Times
                                </Text>

                                <View style={[styles.stopOptn, { flexWrap: "wrap", rowGap: 15 }]}>
                                    <TouchableOpacity style={styles.optnBtn}>
                                        <Text style={styles.stopBtnText}>Morning 6 AM - 12</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.optnBtn}>
                                        <Text style={styles.stopBtnText}>Noon 12 PM - 6</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.optnBtn}>
                                        <Text style={styles.stopBtnText}>Evening 6 PM - 12</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.optnBtn}>
                                        <Text style={styles.stopBtnText}>Night 12 AM - 6</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Flight Times */}
                            <View>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Flight Times
                                </Text>

                                {/* going */}
                                <View style={{ marginTop: 20 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 16 }]}>
                                        Going<Text style={[commonStyles.ns400, { fontSize: 15 }]}> to Alberta (YYC)</Text>
                                    </Text>

                                    <Text style={[commonStyles.ns400, { color: b3, marginTop: 5 }]}>
                                        Depart: 1:00 am - 11:45 pm
                                    </Text>

                                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                                        <View style={styles.destDot} />
                                        <View style={styles.destPath} />
                                        <View style={styles.destDot} />
                                    </View>
                                </View>

                                {/* return */}
                                <View style={{ marginTop: 20 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 16 }]}>
                                        Returning<Text style={[commonStyles.ns400, { fontSize: 15 }]}> to Dhaka (DAC)</Text>
                                    </Text>

                                    <Text style={[commonStyles.ns400, { color: b3, marginTop: 5 }]}>
                                        Return: 12:45 am - 9:00 pm
                                    </Text>

                                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                                        <View style={styles.destDot} />
                                        <View style={styles.destPath} />
                                        <View style={styles.destDot} />
                                    </View>
                                </View>

                                {/* arrival time */}
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: "center", marginTop: 20, columnGap: 10, alignSelf: "flex-start" }}
                                >
                                    <Image
                                        style={{ width: 18, height: 18, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                        source={icon.rightArrow}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 15, color: blue }]}>
                                        Show Arrival Times
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* duration */}
                            <View>
                                <Text style={[commonStyles.ns600, { fontSize: 18, }]}>Duration</Text>

                                {/* going */}
                                <View style={{ marginTop: 20 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 16 }]}>
                                        Going<Text style={[commonStyles.ns400, { fontSize: 15 }]}> to Alberta (YYC)</Text>
                                    </Text>

                                    <Text style={[commonStyles.ns400, { color: b3, marginTop: 5 }]}>
                                        Layover Duration: up to 27h 00m
                                    </Text>

                                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                                        <View style={styles.destDot} />
                                        <View style={styles.destPath} />
                                        <View style={styles.destDot} />
                                    </View>
                                </View>

                                {/* return */}
                                <View style={{ marginTop: 20 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 16 }]}>
                                        Returning<Text style={[commonStyles.ns400, { fontSize: 15 }]}> to Dhaka (DAC)</Text>
                                    </Text>

                                    <Text style={[commonStyles.ns400, { color: b3, marginTop: 5 }]}>
                                        Layover Duration: up to 29h 45m
                                    </Text>

                                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                                        <View style={styles.destDot} />
                                        <View style={styles.destPath} />
                                        <View style={styles.destDot} />
                                    </View>
                                </View>

                                {/* total duration */}
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: "center", marginTop: 20, columnGap: 10, alignSelf: "flex-start" }}
                                >
                                    <View
                                        style={{
                                            width: 12, height: 12,
                                            transform: [{ rotate: "45deg" }],
                                            borderColor: blue,
                                            borderWidth: 2,
                                            marginLeft: 5,
                                        }}
                                    />
                                    <Text style={[styles.ns600, { fontSize: 15, color: blue }]}>
                                        Show Total Durations
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* depart/return */}
                            <View style={{ marginRight: 15 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}>
                                    <TouchableOpacity
                                        style={{ alignItems: 'center', padding: 3, justifyContent: 'center' }}
                                    >
                                        <View style={styles.dotOutline} />
                                    </TouchableOpacity>

                                    <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                        Same Depart/Return Airport
                                    </Text>
                                </View>

                                <View style={{ alignSelf: "flex-end", flexDirection: "row" }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 16 }]}>
                                        USD 1,937
                                    </Text>
                                    <Text style={[commonStyles.ns600, { fontSize: 11, top: 1 }]}>
                                        .99
                                    </Text>
                                </View>
                            </View>

                            {/* Departing from */}
                            <View style={{ marginRight: 15 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 16, marginBottom: 10, }]}>
                                    Departing from
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}>
                                        <TouchableOpacity
                                            style={{ alignItems: 'center', padding: 3, justifyContent: 'center' }}
                                        >
                                            <View style={styles.dotOutline} />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns400, { fontSize: 16, color: b3 }]}>
                                            DAC - Dhaka
                                        </Text>
                                    </View>

                                    <View style={{ alignSelf: "flex-end", flexDirection: "row" }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 16, color: b3 }]}>
                                            USD 1,937
                                        </Text>
                                        <Text style={[commonStyles.ns600, { fontSize: 11, top: 1, color: b3 }]}>
                                            .99
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* Arriving at */}
                            <View style={{ marginRight: 15 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 16, marginBottom: 10, }]}>
                                    Arriving at
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}>
                                        <TouchableOpacity
                                            style={{ alignItems: 'center', padding: 3, justifyContent: 'center' }}
                                        >
                                            <View style={styles.dotOutline} />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns400, { fontSize: 16, color: b3 }]}>
                                            YYC - Calgary
                                        </Text>
                                    </View>

                                    <View style={{ alignSelf: "flex-end", flexDirection: "row" }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 16, color: b3 }]}>
                                            USD 1,937
                                        </Text>
                                        <Text style={[commonStyles.ns600, { fontSize: 11, top: 1, color: b3 }]}>
                                            .99
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* connecting in */}
                            <View style={{ rowGap: 8 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 16, color: b1 }]}>
                                    Connecting in
                                </Text>

                                <Text style={[commonStyles.ns400, { fontSize: 16, color: b3 }]}>
                                    BOM - Mumbai
                                </Text>
                                <Text style={[commonStyles.ns400, { fontSize: 16, color: b3 }]}>
                                    LHR - London Heathrow
                                </Text>
                                <Text style={[commonStyles.ns400, { fontSize: 16, color: b3 }]}>
                                    FRA - Frankfurt
                                </Text>

                                {/* Show all connecting */}
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, columnGap: 10, alignSelf: "flex-start" }}
                                >
                                    <Image
                                        style={{ width: 18, height: 18, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                        source={icon.rightArrow}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 15, color: blue }]}>
                                        Show all connecting
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* airlines */}
                            <View style={{ marginRight: 3, rowGap: 10 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>Airlines</Text>

                                {/* btn */}
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <TouchableOpacity
                                        style={airType === "air" ? styles.airBtnActive : styles.airBtn}
                                        onPress={() => setAirType("air")}
                                    >
                                        <Text style={airType === "air" ? styles.airBtnTxtActive : styles.airBtnTxt}>
                                            By Airline
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={airType === "aln" ? styles.airBtnActive : styles.airBtn}
                                        onPress={() => setAirType("aln")}
                                    >
                                        <Text style={airType === "aln" ? styles.airBtnTxtActive : styles.airBtnTxt}>
                                            By Alliances
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {/* airline names and cost */}
                                <View style={{ marginHorizontal: 5, rowGap: 10 }}>
                                    {/* canada */}
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                        <View>
                                            <Text style={[commonStyles.ns400, { fontSize: 15 }]}>
                                                Air Canada
                                            </Text>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                (with others)
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 16 }]}>
                                                USD 1,937
                                            </Text>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 11, top: 1 }]}>
                                                .99
                                            </Text>
                                        </View>
                                    </View>

                                    {/* India/ Bharat */}
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                        <View>
                                            <Text style={[commonStyles.ns400, { fontSize: 15 }]}>
                                                Air India
                                            </Text>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                (with others)
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 16 }]}>
                                                USD 2,937
                                            </Text>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 11, top: 1 }]}>
                                                .99
                                            </Text>
                                        </View>
                                    </View>

                                    {/* alaska */}
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                        <View>
                                            <Text style={[commonStyles.ns400, { fontSize: 15 }]}>
                                                Alaska Airlines
                                            </Text>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                (with others)
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 16 }]}>
                                                USD 2,460
                                            </Text>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 11, top: 1 }]}>
                                                .99
                                            </Text>
                                        </View>
                                    </View>

                                    {/* american */}
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                        <View>
                                            <Text style={[commonStyles.ns400, { fontSize: 15 }]}>
                                                American Airlines
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 16 }]}>
                                                USD 2,450
                                            </Text>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 11, top: 1 }]}>
                                                .99
                                            </Text>
                                        </View>
                                    </View>

                                    {/* american with others */}
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                        <View>
                                            <Text style={[commonStyles.ns400, { fontSize: 15 }]}>
                                                American Airlines
                                            </Text>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                (with others)
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 16 }]}>
                                                USD 2,101
                                            </Text>
                                            <Text style={[commonStyles.ns400, { color: b3, fontSize: 11, top: 1 }]}>
                                                .99
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                {/* Show all airlines */}
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: "center", columnGap: 10, alignSelf: "flex-start" }}
                                >
                                    <Image
                                        style={{ width: 18, height: 18, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                        source={icon.rightArrow}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 15, color: blue }]}>
                                        Show all airlines
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* bottom */}
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                    <TouchableOpacity
                        style={styles.apply}
                    >
                        <Text style={[commonStyles.lbB1, { color: white, textTransform: 'uppercase' }]}>
                            Apply
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.clear}
                    >
                        <Text style={[commonStyles.lbB1, { color: b2, textTransform: 'uppercase' }]}>
                            CLEAR ALL FILTERS
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default FhTripFilter;

const styles = StyleSheet.create({
    parent: { flex: 1 },
    Wrap: {
        flex: 1,
        marginTop: 45,
    },
    nav: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        marginLeft: 13,
        alignItems: "center",
    },
    apply: {
        borderRadius: 8,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 40,
    },
    clear: {
        borderRadius: 8,
        borderColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2
    },
    stopOptn: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 15,
        columnGap: 20,
    },
    optnBtn: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: white,
        borderColor: "#D8D8D8",
        borderWidth: 1,
    },
    stopBtnText: {
        fontFamily: "Assistant-SemiBold",
        fontSize: 14,
        color: blue,
    },
    destDot: {
        width: 16,
        height: 16,
        backgroundColor: blue,
        borderRadius: 16,
    },
    destPath: {
        backgroundColor: blue,
        height: 3,
        width: width * 0.6,
    },
    dotOutline: {
        width: 20,
        height: 20,
        borderColor: blue,
        borderRadius: 20,
        borderWidth: 2,
    },
    airBtn: {
        backgroundColor: white,
        borderRadius: 4,
        flex: 1,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#DEDEDE",
        alignItems: "center",
        justifyContent: "center",
    },
    airBtnActive: {
        backgroundColor: blue,
        borderRadius: 4,
        flex: 1,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    airBtnTxt: {
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 15,
        color: blue,
    },
    airBtnTxtActive: {
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 15,
        color: white,
    },
});