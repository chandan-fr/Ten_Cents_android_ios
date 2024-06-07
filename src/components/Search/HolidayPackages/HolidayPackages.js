import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import SearchButton from '../../SearchButton';
import { b1, b3, black, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import HpSearchComp from './HpSearchComp';
import HpOffers from './HpOffers';
import { hpData } from '../../../config/StaticVars';

const HolidayPackages = ({ navigation }) => {
    const [selectedTopMenu, setSelectedTopMenu] = useState("h&c");

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
            {/* trip option nav bar */}
            <View style={styles.mainMenuWrap}>
                {/* trip option top nav bar */}
                <View style={styles.mmContWrap}>
                    <TouchableOpacity
                        style={selectedTopMenu == "f&h" ? styles.mmBtnActive : styles.mmBtn}
                        onPress={() => setSelectedTopMenu("f&h")}
                    >
                        <Text style={selectedTopMenu == "f&h" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                            Flight + Hotel
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedTopMenu == "h&c" ? styles.mmBtnActive : styles.mmBtn}
                        onPress={() => setSelectedTopMenu("h&c")}
                    >
                        <Text style={selectedTopMenu == "h&c" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                            Hotel + Car
                        </Text>
                    </TouchableOpacity>
                </View>

                {selectedTopMenu == "h&c" && <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5, alignSelf: "flex-start", marginLeft: 3 }}>
                        <Text style={[commonStyles.ns400, { fontSize: 16, color: b3 }]}>
                            All Car Sizes
                        </Text>
                        <Image
                            style={{ width: 11, height: 11, tintColor: b3, transform: [{ rotate: "90deg" }] }}
                            source={icon.rightArrow}
                        />
                    </TouchableOpacity>
                </View>}

                {/* trip option content */}
                <View style={{ marginHorizontal: 10, marginTop: 0, }}>
                    <HpSearchComp navigation={navigation} />
                </View>
            </View>

            {/* search button */}
            <SearchButton navigation={navigation} screenName={"hpsearch"} />

            {/* prifile option */}
            <View style={{ marginHorizontal: 15, marginTop: 18, zIndex: -1 }}>
                <View style={styles.pBarWrap}>
                    <View style={styles.proLogoWrap}>
                        <Image style={{ marginHorizontal: 10 }} source={icon.prologo} />
                        <Text style={styles.proLogoTxt}>Welcome Back, Kevin!</Text>
                    </View>

                    <Image style={styles.arwImg} source={icon.rightArrow} />
                </View>
            </View>

            {/* calling option */}
            <View style={{ marginHorizontal: 15, marginTop: 18, marginBottom: 10 }}>
                <View style={styles.addBarWrap}>
                    <Image style={{ marginLeft: 7 }} source={icon.proimg} />

                    <View>
                        <Text style={styles.addTxtB}>Looking for last-minute deals?</Text>
                        <Text style={styles.addTxt}>Speak to a travel expert and a get assistance 24/7</Text>
                    </View>

                    <TouchableOpacity style={styles.callImgWrap} onPress={()=> navigation.navigate("hpassist")}>
                        <Image style={styles.callImg} source={icon.mobile} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* deals option */}
            <View style={styles.dealWrap}>
                <Text style={styles.dealHeadTxt}>
                    International Holiday Packages On Sale
                </Text>

                <Text style={[commonStyles.ns400, { color: b3, textAlign: "center", marginTop: 10 }]}>
                    Get Flat 45% Off! Use code: 10CAHOLIDAY
                </Text>

                <View style={styles.dealContWrap}>
                    {hpData.map((item, i) => (
                        <View key={i}>
                            <HpOffers data={item} />
                            {i == hpData.length - 1 ? <View style={{ marginBottom: 30 }} /> : null}
                        </View>
                    ))}
                </View>

                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
                        <TouchableOpacity
                            style={styles.viewall}
                        >
                            <Text style={[commonStyles.lbB1, { fontSize: 22, color: blue }]}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default HolidayPackages;

const styles = StyleSheet.create({
    mainMenuWrap: {
        marginHorizontal: 7,
        backgroundColor: white,
        borderRadius: 4,
        elevation: 6,
        marginBottom: 20,
    },
    mmContWrap: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 7,
        marginHorizontal: 5,
        columnGap: 10,
    },
    mmBtn: {
        paddingVertical: 6,
        paddingHorizontal: 21,
    },
    mmBtnActive: {
        paddingVertical: 6,
        backgroundColor: "rgba(33, 180, 226, 0.1)",
        paddingHorizontal: 21,
        borderRadius: 4,
        borderColor: "rgba(33, 180, 226, 1)",
        borderWidth: 0.9
    },
    mmBtnTxtActive: {
        color: "rgba(33, 180, 226, 1)",
        fontFamily: 'NunitoSans_10pt-Bold',
        fontSize: 15,
    },
    mmBtnTxt: {
        color: b3,
        fontFamily: 'NunitoSans_10pt-Bold',
        fontSize: 15,
    },
    pBarWrap: {
        backgroundColor: white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: 4,
        paddingVertical: 12,
        elevation: 4,
    },
    callImg: {
        width: 26,
        height: 26,
    },
    callImgWrap: {
        width: 45,
        height: 45,
        backgroundColor: blue,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 7,
    },
    arwImg: {
        width: 20,
        height: 20,
        tintColor: b3,
        marginRight: 10
    },
    proLogoWrap: {
        flexDirection: "row",
        alignItems: "center",
    },
    proLogoTxt: {
        color: black,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 15,
        marginLeft: 15,
    },
    addBarWrap: {
        backgroundColor: white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingVertical: 12,
        elevation: 3,
    },
    addTxtB: {
        color: b1,
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 13,
        marginBottom: 5
    },
    addTxt: {
        color: b1,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 11,
    },
    dealWrap: {
        backgroundColor: white,
        elevation: 3,
        flex: 1,
        marginHorizontal: 7,
        borderRadius: 10,
        marginTop: 12,
    },
    dealHeadTxt: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        fontSize: 18,
        color: b1,
        textAlign: "center",
        marginTop: 25,
    },
    dealContWrap: {
        marginTop: 20,
        marginHorizontal: 20,
        flex: 1,
        rowGap: 20,
    },
    viewall: {
        borderWidth: 2,
        borderColor: blue,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 10,
    },
});