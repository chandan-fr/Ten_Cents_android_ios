import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { b1, b3, blue, green, white } from '../../config/colors';
import ToggleSwitch from 'toggle-switch-react-native';

const { width } = Dimensions.get("window");

const Filters = ({ navigation }) => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [tripOptn, setTripOptn] = useState("o");
    const [airType, setAirType] = useState("air");

    return (
        <SafeAreaView style={styles.parent}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.Wrap}>
                {/* nav */}
                <View style={styles.nav}>
                    <Text style={[styles.lbB1, { fontSize: 22, }]}>Filters</Text>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 22, height: 22, tintColor: b1 }}
                            source={require("../../assets/icons/cross.png")}
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* stops */}
                    <View style={styles.stopsWrap}>
                        <Text style={styles.stops}>Stops</Text>

                        <View style={styles.stopOptn}>
                            <TouchableOpacity style={styles.optnBtn}>
                                <Text style={styles.ns600}>Direct</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optnBtn}>
                                <Text style={styles.ns600}>1 Stop</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optnBtn}>
                                <Text style={styles.ns600}>2+ Stops</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* toggles */}
                    <View style={styles.toggleWrap}>
                        <View style={styles.toggleCont}>
                            <Text style={[styles.lbB1, { fontSize: 18 }]}>Show refundable only</Text>

                            <ToggleSwitch
                                isOn={toggle1}
                                onColor={green}
                                offColor={b3}
                                size="small"
                                onToggle={isOn => setToggle1(isOn)}
                            />
                        </View>

                        <View style={[styles.toggleCont, { marginTop: 30 }]}>
                            <Text style={[styles.lbB1, { fontSize: 18 }]}>Hide multi airline</Text>

                            <ToggleSwitch
                                isOn={toggle2}
                                onColor={green}
                                offColor={b3}
                                size="small"
                                onToggle={isOn => setToggle2(isOn)}
                            />
                        </View>
                    </View>

                    {/* trip type & time */}
                    <View style={styles.tripTimeWrap}>
                        {/* trip */}
                        <View style={styles.tripCont}>
                            <TouchableOpacity
                                style={tripOptn === "o" ? styles.tripBtnActive : styles.tripBtn}
                                onPress={() => setTripOptn("o")}
                            >
                                <Text style={tripOptn === "o" ? styles.tripTxtActive : styles.tripTxt}>
                                    One-Way
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={tripOptn === "r" ? styles.tripBtnActive : styles.tripBtn}
                                onPress={() => setTripOptn("r")}
                            >
                                <Text style={tripOptn === "r" ? styles.tripTxtActive : styles.tripTxt}>
                                    Round-trip
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* time */}
                        <View style={[styles.timeWrap, { marginTop: 30 }]}>
                            <TouchableOpacity style={styles.timeBtn}>
                                <Image style={styles.timeImg} source={require("../../assets/icons/morning.png")} />
                                <Text style={styles.timeTxt}>Morning 6 AM - 12</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.timeBtn}>
                                <Image style={styles.timeImg} source={require("../../assets/icons/noon.png")} />
                                <Text style={styles.timeTxt}>Noon 12 PM - 6</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.timeWrap, { marginTop: 20 }]}>
                            <TouchableOpacity style={styles.timeBtn}>
                                <Image style={styles.timeImg} source={require("../../assets/icons/evening.png")} />
                                <Text style={styles.timeTxt}>Evening 6 PM - 12</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.timeBtn}>
                                <Image style={styles.timeImg} source={require("../../assets/icons/night.png")} />
                                <Text style={styles.timeTxt}>Night 12 AM - 6</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginLeft: 5, width: width * 0.73, paddingBottom: 10 }}>
                        {/* flight times */}
                        <View style={{ marginTop: 20 }}>
                            <Text style={[styles.ns600, { color: b1, fontSize: 18, }]}>Flight Times</Text>

                            {/* going */}
                            <View style={{ marginTop: 20 }}>
                                <Text style={[styles.ns600, { color: b1, fontSize: 17 }]}>
                                    Going<Text style={[styles.ns400, { color: b1 }]}> to Alberta (YYC)</Text>
                                </Text>

                                <Text style={[styles.ns400, { color: b3, marginTop: 5 }]}>
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
                                <Text style={[styles.ns600, { color: b1, fontSize: 17 }]}>
                                    Returning<Text style={[styles.ns400, { color: b1 }]}> to Dhaka (DAC)</Text>
                                </Text>

                                <Text style={[styles.ns400, { color: b3, marginTop: 5 }]}>
                                    Return: 12:45 am - 9:00 pm
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                                    <View style={styles.destDot} />
                                    <View style={styles.destPath} />
                                    <View style={styles.destDot} />
                                </View>
                            </View>
                        </View>

                        {/* arrival time */}
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: "center", marginTop: 20 }}
                        >
                            <Image
                                style={{ width: 18, height: 18, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                            <Text style={[styles.ns600, { fontSize: 16, marginLeft: 10 }]}>
                                Show Arrival Times
                            </Text>
                        </TouchableOpacity>

                        {/* duration */}
                        <View style={{ marginTop: 35 }}>
                            <Text style={[styles.ns600, { color: b1, fontSize: 18, }]}>Duration</Text>

                            {/* going */}
                            <View style={{ marginTop: 20 }}>
                                <Text style={[styles.ns600, { color: b1, fontSize: 17 }]}>
                                    Going<Text style={[styles.ns400, { color: b1 }]}> to Alberta (YYC)</Text>
                                </Text>

                                <Text style={[styles.ns400, { color: b3, marginTop: 5 }]}>
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
                                <Text style={[styles.ns600, { color: b1, fontSize: 17 }]}>
                                    Returning<Text style={[styles.ns400, { color: b1 }]}> to Dhaka (DAC)</Text>
                                </Text>

                                <Text style={[styles.ns400, { color: b3, marginTop: 5 }]}>
                                    Layover Duration: up to 29h 45m
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                                    <View style={styles.destDot} />
                                    <View style={styles.destPath} />
                                    <View style={styles.destDot} />
                                </View>
                            </View>
                        </View>

                        {/* total duration */}
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: "center", marginTop: 20 }}
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
                            <Text style={[styles.ns600, { fontSize: 16, marginLeft: 10 }]}>
                                Show Total Durations
                            </Text>
                        </TouchableOpacity>

                        {/* depart/return */}
                        <View style={{ marginTop: 30, alignItems: "flex-start" }}>
                            <View style={{}}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}
                                >
                                    <View style={styles.dotOutline} />
                                    <Text style={[styles.ns400, { color: b1, fontSize: 18, marginRight: 40 }]}>
                                        Same Depart/Return Airport
                                    </Text>
                                </TouchableOpacity>

                                <View style={{ alignSelf: "flex-end", paddingRight: 20 }}>
                                    <Text style={[styles.ns600, { color: b1, fontSize: 17 }]}>
                                        USD 1,937
                                    </Text>
                                    <Text
                                        style={[styles.ns400,
                                        { color: b1, fontSize: 13, position: "absolute", right: 1 }
                                        ]}
                                    >
                                        .99
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* depart */}
                        <View style={{ marginTop: 20 }}>
                            <Text style={[styles.ns600, { fontSize: 18, color: b1, marginBottom: 10, }]}>
                                Departing from
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}
                                >
                                    <View style={styles.dotOutline} />
                                    <Text style={[styles.ns400, { color: b3, fontSize: 18 }]}>
                                        DAC - Dhaka
                                    </Text>
                                </TouchableOpacity>

                                <View style={{ paddingRight: 20, position: 'relative' }}>
                                    <Text style={[styles.ns600, { color: b3, fontSize: 17 }]}>
                                        USD 1,937
                                    </Text>
                                    <Text
                                        style={[styles.ns400,
                                        { color: b1, fontSize: 13, position: "absolute", right: 1 }
                                        ]}
                                    >
                                        .99
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* arriving */}
                        <View style={{ marginTop: 25 }}>
                            <Text style={[styles.ns600, { fontSize: 18, color: b1, marginBottom: 10, }]}>
                                Arriving at
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}
                                >
                                    <View style={styles.dotOutline} />
                                    <Text style={[styles.ns400, { color: b3, fontSize: 18 }]}>
                                        YYC - Calgary
                                    </Text>
                                </TouchableOpacity>

                                <View style={{ paddingRight: 20, position: 'relative' }}>
                                    <Text style={[styles.ns600, { color: b3, fontSize: 17 }]}>
                                        USD 1,937
                                    </Text>
                                    <Text
                                        style={[styles.ns400,
                                        { color: b1, fontSize: 13, position: "absolute", right: 1 }
                                        ]}
                                    >
                                        .99
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* connecting in */}
                        <View style={{ marginTop: 15, rowGap: 8 }}>
                            <Text style={[styles.ns600, { fontSize: 18, color: "#313541" }]}>
                                Connecting in
                            </Text>
                            <Text style={[styles.ns400, { fontSize: 17, color: b3 }]}>
                                BOM - Mumbai
                            </Text>
                            <Text style={[styles.ns400, { fontSize: 17, color: b3 }]}>
                                LHR - London Heathrow
                            </Text>
                            <Text style={[styles.ns400, { fontSize: 17, color: b3 }]}>
                                FRA - Frankfurt
                            </Text>
                        </View>

                        {/* show all connecting */}
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: "center", marginTop: 25 }}
                        >
                            <Image
                                style={{ width: 18, height: 18, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                            <Text style={[styles.ns600, { fontSize: 16, marginLeft: 10 }]}>
                                Show all connecting
                            </Text>
                        </TouchableOpacity>

                        {/* airlines */}
                        <View style={{ marginTop: 20 }}>
                            <Text style={[styles.ns600, { fontSize: 20, color: b1, marginBottom: 10, }]}>
                                Airlines
                            </Text>

                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
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
                        </View>

                        {/* cost */}
                        <View style={{ marginTop: 15, rowGap: 10, marginLeft: 4 }}>
                            {/* canada */}
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={[styles.ns400, { color: b1, fontSize: 17 }]}>
                                        Air Canada
                                    </Text>
                                    <Text style={[styles.ns400, { color: b1, fontSize: 13 }]}>
                                        (with others)
                                    </Text>
                                </View>

                                <View style={{ paddingRight: 20, position: 'relative' }}>
                                    <Text style={[styles.ns600, { color: b3, fontSize: 17 }]}>
                                        USD 1,937
                                    </Text>
                                    <Text
                                        style={[styles.ns400,
                                        { color: b1, fontSize: 13, position: "absolute", right: 1 }
                                        ]}
                                    >
                                        .99
                                    </Text>
                                </View>
                            </View>

                            {/* India/ Bharat */}
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={[styles.ns400, { color: b1, fontSize: 17 }]}>
                                        Air India
                                    </Text>
                                    <Text style={[styles.ns400, { color: b1, fontSize: 13 }]}>
                                        (with others)
                                    </Text>
                                </View>

                                <View style={{ paddingRight: 20, position: 'relative' }}>
                                    <Text style={[styles.ns600, { color: b3, fontSize: 17 }]}>
                                        USD 2,937
                                    </Text>
                                    <Text
                                        style={[styles.ns400,
                                        { color: b1, fontSize: 13, position: "absolute", right: 1 }
                                        ]}
                                    >
                                        .99
                                    </Text>
                                </View>
                            </View>

                            {/* alaska */}
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={[styles.ns400, { color: b1, fontSize: 17 }]}>
                                        Alaska Airlines
                                    </Text>
                                    <Text style={[styles.ns400, { color: b1, fontSize: 13 }]}>
                                        (with others)
                                    </Text>
                                </View>

                                <View style={{ paddingRight: 20, position: 'relative' }}>
                                    <Text style={[styles.ns600, { color: b3, fontSize: 17 }]}>
                                        USD 2,460
                                    </Text>
                                    <Text
                                        style={[styles.ns400,
                                        { color: b1, fontSize: 13, position: "absolute", right: 1 }
                                        ]}
                                    >
                                        .99
                                    </Text>
                                </View>
                            </View>

                            {/* american */}
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={[styles.ns400, { color: b1, fontSize: 17 }]}>
                                        American Airlines
                                    </Text>
                                    {/* <Text style={[styles.ns400, { color: b1, fontSize: 13 }]}>
                                        (with others)
                                    </Text> */}
                                </View>

                                <View style={{ paddingRight: 20, position: 'relative' }}>
                                    <Text style={[styles.ns600, { color: b3, fontSize: 17 }]}>
                                        USD 2,450
                                    </Text>
                                    <Text
                                        style={[styles.ns400,
                                        { color: b1, fontSize: 13, position: "absolute", right: 1 }
                                        ]}
                                    >
                                        .99
                                    </Text>
                                </View>
                            </View>

                            {/* american with others */}
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={[styles.ns400, { color: b1, fontSize: 17 }]}>
                                        American Airlines
                                    </Text>
                                    <Text style={[styles.ns400, { color: b1, fontSize: 13 }]}>
                                        (with others)
                                    </Text>
                                </View>

                                <View style={{ paddingRight: 20, position: 'relative' }}>
                                    <Text style={[styles.ns600, { color: b3, fontSize: 17 }]}>
                                        USD 2,101
                                    </Text>
                                    <Text
                                        style={[styles.ns400,
                                        { color: b1, fontSize: 13, position: "absolute", right: 1 }
                                        ]}
                                    >
                                        .99
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* show all Airlines */}
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: "center", marginTop: 25 }}
                        >
                            <Image
                                style={{ width: 18, height: 18, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                            <Text style={[styles.ns600, { fontSize: 16, marginLeft: 10 }]}>
                                Show All Airlines
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* clear filter */}
                <View style={{ marginTop: 10, alignItems: "flex-end", marginBottom: 10 }}>
                    <TouchableOpacity style={styles.clearFilter}>
                        <Text style={[styles.ns600, { color: white, fontSize: 16, textTransform: "uppercase" }]}>
                            Clear All Filters
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Filters;

const styles = StyleSheet.create({
    parent: { flex: 1 },
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
    stopsWrap: {
        marginTop: 10,
        paddingBottom: 10,
    },
    stops: {
        fontFamily: "LondonBetween",
        fontSize: 19,
        color: b1,
    },
    stopOptn: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 15,
        justifyContent: "space-evenly"
    },
    optnBtn: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 3,
        elevation: 2,
        backgroundColor: white
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-Bold",
        color: blue,
        fontSize: 15,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 16,
    },
    toggleCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    toggleWrap: {
        marginTop: 20,
    },
    tripTimeWrap: {
        marginTop: 20,
        borderColor: "#D8D8D8",
        borderWidth: 1,
        borderRadius: 4,
        elevation: 4,
        paddingHorizontal: 15,
        backgroundColor: white,
        paddingVertical: 20,
    },
    tripCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    tripBtnActive: {
        backgroundColor: "rgba(33, 180, 226, 0.1)",
        borderColor: blue,
        borderRadius: 4,
        borderWidth: 0.9,
        paddingVertical: 6,
        // paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 140
    },
    tripTxtActive: {
        fontFamily: "Assistant-SemiBold",
        fontSize: 18,
        color: blue,
    },
    tripBtn: {
        backgroundColor: white,
        borderColor: "#DEDEDE",
        borderRadius: 4,
        borderWidth: 0.9,
        paddingVertical: 6,
        // paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 140
    },
    tripTxt: {
        fontFamily: "Assistant-SemiBold",
        fontSize: 18,
        color: b3,
    },
    timeWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    timeBtn: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        minWidth: 155,
        borderRadius: 4,
        paddingVertical: 3,
        borderColor: "#D8D8D8",
    },
    timeTxt: {
        fontFamily: "Assistant-SemiBold",
        fontSize: 15,
        color: blue,
    },
    timeImg: {
        width: 33,
        height: 33,
        marginRight: 5,
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
        marginRight: 10,
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
    airBtnTxt: {
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 15,
        color: blue,
    },
    airBtnActive: {
        backgroundColor: blue,
        borderRadius: 4,
        flex: 1,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    airBtnTxtActive: {
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 15,
        color: white,
    },
    clearFilter: {
        borderRadius: 4,
        backgroundColor: "#435970",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
});