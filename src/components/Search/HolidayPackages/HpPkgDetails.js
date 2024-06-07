import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, b3, blue, blueShade2, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import Policies from './core/Policies';
import Summary from './core/Summary';
import Itinerary from './core/Itinerary';

const { width, height } = Dimensions.get("window");

const HpPkgDetails = ({ navigation }) => {
    const [selectedChldMenu, setSelectedChldMenu] = useState("i");
    const [selectedTopMenu, setSelectedTopMenu] = useState("flt");

    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.1} />
            <Header />

            <View style={styles.body}>
                <View style={{ flex: 1 }}>
                    <ScrollView
                        style={{ marginTop: 5, flex: 1 }}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ marginHorizontal: 15, paddingVertical: 5, rowGap: 15 }}>
                            {/* hotel name */}
                            <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                Meeru Island Resort With Water Villa Stay
                            </Text>

                            {/* hotel rating */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
                                {/* star */}
                                <View style={{ flexDirection: 'row', alignItems: "center", marginRight: 10 }}>
                                    <Image
                                        style={{ width: 20, height: 20, marginRight: 3 }}
                                        source={icon.star}
                                    />
                                    <Image
                                        style={{ width: 20, height: 20, marginRight: 3 }}
                                        source={icon.star}
                                    />
                                    <Image
                                        style={{ width: 20, height: 20, marginRight: 3 }}
                                        source={icon.star}
                                    />
                                </View>

                                {/* leaf */}
                                <View style={{ flexDirection: 'row', alignItems: "center", backgroundColor: "#F1FEF6", borderRadius: 4, alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 2 }}>
                                    <Image
                                        style={{ width: 20, height: 20, marginRight: 3, tintColor: "#1D8842" }}
                                        source={icon.leafSolid}
                                    />
                                    <Image
                                        style={{ width: 20, height: 20, marginRight: 3, tintColor: "#1D8842" }}
                                        source={icon.leaf}
                                    />
                                    <Image
                                        style={{ width: 20, height: 20, marginRight: 3, tintColor: "#1D8842" }}
                                        source={icon.leaf}
                                    />

                                    <Text style={[commonStyles.ns600, { color: "#24AD53", fontSize: 14, marginLeft: 10 }]}>
                                        Travel Sustainable Level 1
                                    </Text>
                                </View>
                            </View>

                            {/* customize & 5n/6d */}
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 6 }}>
                                <View style={styles.tips}>
                                    <Text style={{ fontSize: 12, color: "#6D7278", fontFamily: "Lato-Regular" }}>
                                        Customizable
                                    </Text>
                                </View>

                                <View style={styles.tips}>
                                    <Text style={{ fontSize: 12, color: "#6D7278", fontFamily: "Lato-Regular" }}>
                                        5N/6D
                                    </Text>
                                </View>
                            </View>

                            {/* gallery */}
                            <View style={{ rowGap: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <View style={{ rowGap: 8 }}>
                                        <Image style={styles.galImg} source={image.hpgal1} />
                                        <Image style={styles.galImg} source={image.hpgal2} />
                                        <Image style={styles.galImg} source={image.hpgal3} />
                                    </View>

                                    <Image style={styles.galImgBig} source={image.hpgal7} />
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Image style={styles.galImg} source={image.hpgal4} />
                                    <Image style={styles.galImg} source={image.hpgal5} />
                                    <TouchableOpacity
                                        style={styles.showMorePics}
                                        onPress={() => navigation.navigate("hotelgallery")}
                                    >
                                        <Image style={styles.galImg} source={image.hpgal6} />
                                        <Text style={[commonStyles.ns700, { fontSize: 14, position: "absolute", color: white }]}>
                                            +46 photos
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* perks */}
                            <View style={styles.perksWrap}>
                                <View style={styles.perks}>
                                    <Image style={{ width: 15, height: 15 }} source={icon.swimming} />
                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        Outdoor swimming pool
                                    </Text>
                                </View>

                                <View style={[styles.perks, { paddingHorizontal: 16 }]}>
                                    <Image style={{ width: 15, height: 15 }} source={icon.hours} />
                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        24-hour front desk
                                    </Text>
                                </View>

                                <View style={styles.perks}>
                                    <Image style={{ width: 15, height: 15 }} source={icon.view} />
                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        View
                                    </Text>
                                </View>

                                <View style={styles.perks}>
                                    <Image style={{ width: 15, height: 15 }} source={icon.pawprint} />
                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        Pets allowed
                                    </Text>
                                </View>

                                <View style={styles.perks}>
                                    <Image style={{ width: 15, height: 15 }} source={icon.wifi} />
                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        Free WiFi
                                    </Text>
                                </View>

                                <View style={styles.perks}>
                                    <Image style={{ width: 15, height: 15 }} source={icon.coffeeShop} />
                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        Balcony
                                    </Text>
                                </View>

                                <View style={styles.perks}>
                                    <Image style={{ width: 15, height: 15 }} source={icon.airConditioner} />
                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        Air Conditioner
                                    </Text>
                                </View>

                                <View style={styles.perks}>
                                    <Image style={{ width: 15, height: 15 }} source={icon.bathTub} />
                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        Bath
                                    </Text>
                                </View>
                            </View>

                            {/* info & expectation */}
                            <View style={{ marginTop: 20, rowGap: 10 }}>
                                <Text style={[commonStyles.ns400, { fontSize: 12, color: blue }]}>
                                    Discover the original Maldivian culture all around the island including a visit to our very own state of the art island museum.
                                </Text>

                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 20 }}>
                                    <View style={{ width: 160, rowGap: 15 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blueShade2 }}
                                                source={icon.baggage}
                                            />
                                            <Text style={{ fontSize: 14, color: b1, fontFamily: "Lato-Regular", textTransform: "capitalize" }}>
                                                what to expect
                                            </Text>
                                        </View>

                                        <Text style={{ fontSize: 10, color: b3, fontFamily: "Lato-Regular" }}>
                                            Unwind at the magical beaches of Maldives during pleasant weather.
                                        </Text>
                                    </View>

                                    <View style={{ width: 160, rowGap: 15 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blueShade2 }}
                                                source={icon.star}
                                            />
                                            <Text style={{ fontSize: 14, color: b1, fontFamily: "Lato-Regular", textTransform: "capitalize" }}>
                                                things you will love
                                            </Text>
                                        </View>

                                        <Text style={{ fontSize: 10, color: b3, fontFamily: "Lato-Regular" }}>
                                            Vaadhoo Island, Snorkeling and island hopping in Maldives.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* bottom nav bar and content */}
                        <View style={{ marginTop: 15, rowGap: 15 }}>
                            {/* top nav section */}
                            <View style={styles.topNav}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <TouchableOpacity
                                        style={selectedTopMenu === "pln" ? styles.tNavOptActive : styles.tNavOpt}
                                    // onPress={()=> setSelectedTopMenu("")}
                                    >
                                        <Text style={selectedTopMenu === "pln" ? styles.tNavOptTxtActive : styles.tNavOptTxt}>
                                            6 DAY PLAN
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={selectedTopMenu === "flt" ? styles.tNavOptActive : styles.tNavOpt}
                                        onPress={() => setSelectedTopMenu("flt")}
                                    >
                                        <Text style={selectedTopMenu === "flt" ? styles.tNavOptTxtActive : styles.tNavOptTxt}>
                                            2 Flights
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={selectedTopMenu === "htl" ? styles.tNavOptActive : styles.tNavOpt}
                                        onPress={() => setSelectedTopMenu("htl")}
                                    >
                                        <Text style={selectedTopMenu === "htl" ? styles.tNavOptTxtActive : styles.tNavOptTxt}>
                                            2 Hotels
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={selectedTopMenu === "act" ? styles.tNavOptActive : styles.tNavOpt}
                                        onPress={() => setSelectedTopMenu("act")}
                                    >
                                        <Text style={selectedTopMenu === "act" ? styles.tNavOptTxtActive : styles.tNavOptTxt}>
                                            3 Activities
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* child nav */}
                            <View style={styles.chldNav}>
                                <TouchableOpacity
                                    style={styles.chldNavOpt}
                                    onPress={() => setSelectedChldMenu("i")}
                                >
                                    <Text style={[styles.chldNavOptTxt, { color: selectedChldMenu === "i" ? blue : white }]}>
                                        ITINERARY
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.chldNavOpt}
                                    onPress={() => setSelectedChldMenu("p")}
                                >
                                    <Text style={[styles.chldNavOptTxt, { color: selectedChldMenu === "p" ? blue : white }]}>
                                        POLICIES
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.chldNavOpt}
                                    onPress={() => setSelectedChldMenu("s")}
                                >
                                    <Text style={[styles.chldNavOptTxt, { color: selectedChldMenu === "s" ? blue : white }]}>
                                        SUMMARY
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* content render */}
                            <View style={styles.contWrap}>
                                {selectedChldMenu === "i" && <Itinerary selectedTopMenu={selectedTopMenu} />}
                                {selectedChldMenu === "p" && <Policies />}
                                {selectedChldMenu === "s" && <Summary />}
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* Reserve */}
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
                        onPress={() => navigation.navigate("hpsum")}
                    >
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
                            Reserve
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        </SafeAreaView >
    )
};

export default HpPkgDetails;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 18,
        flex: 1,
        backgroundColor: white,
    },
    galImg: {
        width: 122,
        height: 82,
    },
    galImgBig: {
        width: 253,
        height: 258,
    },
    showMorePics: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    perks: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#D8D8D8',
        backgroundColor: white,
        columnGap: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    perksWrap: {
        flexWrap: "wrap",
        paddingHorizontal: 10,
        flexDirection: "row",
        columnGap: 5,
        rowGap: 5,
        marginTop: 5,
    },
    tips: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#A6A6A6",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 3,
        paddingHorizontal: 6,
    },
    topNav: {
        backgroundColor: "#ECF7FF",
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginHorizontal: 6,
    },
    tNavOpt: {
        borderWidth: 1,
        borderColor: "#ECF7FF",
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    tNavOptActive: {
        borderWidth: 1,
        borderColor: blue,
        borderRadius: 20,
        backgroundColor: white,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    tNavOptTxt: {
        fontSize: 12,
        color: b3,
        fontFamily: "Lato-Regular",
        textTransform: "uppercase",
    },
    tNavOptTxtActive: {
        fontSize: 12,
        color: blue,
        fontFamily: "Lato-Regular",
        textTransform: "uppercase",
    },
    chldNav: {
        backgroundColor: b2,
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginHorizontal: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 4,
    },
    chldNavOpt: {
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    chldNavOptTxt: {
        ...commonStyles.ns700,
        fontSize: 16,
        textTransform: "uppercase",
    },
    contWrap: {
        backgroundColor: w1,
        marginTop: -15,
        paddingTop: 15,
    },
});