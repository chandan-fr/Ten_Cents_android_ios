import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import SearchButton from '../../SearchButton';
import { b1, b3, black, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import OneWay from '../Flights/OneWay';
import RoundTrip from '../Flights/RoundTrip';
import MultiCity from '../Flights/MultiCity';
import DealItem from '../Flights/DealItem';
import commonStyles from '../../../assets/css/CommonFonts';

const GroupTickets = ({ navigation, data, width, height }) => {
    const [selectedMidMenu, setSelectedMidMenu] = useState("r");

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
            {selectedMidMenu === "m" && <View style={{ marginVertical: 3 }} />}
            {selectedMidMenu === "m" && <BgGradient width={width} height={height + height} />}

            {/* trip option nav bar */}
            <View style={styles.mainMenuWrap}>
                <View style={styles.mmContWrap}>
                    <TouchableOpacity
                        style={selectedMidMenu == "o" ? styles.mmBtnActive : styles.mmBtn}
                        onPress={() => setSelectedMidMenu("o")}
                    >
                        <Text style={selectedMidMenu == "o" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                            One-way
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedMidMenu == "r" ? styles.mmBtnActive : styles.mmBtn}
                        onPress={() => setSelectedMidMenu("r")}
                    >
                        <Text style={selectedMidMenu == "r" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                            Round-trip
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedMidMenu == "m" ? styles.mmBtnActive : styles.mmBtn}
                        onPress={() => setSelectedMidMenu("m")}
                    >
                        <Text style={selectedMidMenu == "m" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                            Multi-city
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* trip option content */}
                <View style={{ marginHorizontal: 10, marginTop: 0, }}>
                    {selectedMidMenu === "o" && <OneWay navigation={navigation} />}
                    {selectedMidMenu === "r" && <RoundTrip navigation={navigation} />}
                    {/* {selectedMidMenu === "m" && <MultiCity />} */}
                </View>
            </View>

            {selectedMidMenu === "m" && <MultiCity navigation={navigation} />}

            {/* add flight button */}
            {selectedMidMenu === "m" && <View
                style={{
                    alignItems: 'center',
                    justifyContent: "center",
                    zIndex: -1,
                    marginBottom: 20,
                }}
            >
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: white,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 10,
                        paddingHorizontal: 75,
                        borderRadius: 4,
                    }}
                >
                    <Text style={{ fontFamily: "LondonBetween", color: white, fontSize: 18 }}>
                        Add Flight
                    </Text>
                </TouchableOpacity>
            </View>
            }

            {/* search button */}
            <SearchButton navigation={navigation} screenName={"gtdisclaimer"} />

            {/* prifile option */}
            <View style={{ marginHorizontal: 10, marginTop: 18, zIndex: -1 }}>
                <View style={styles.pBarWrap}>
                    <View style={styles.proLogoWrap}>
                        <Image style={{ marginHorizontal: 10 }} source={icon.prologo} />
                        <Text style={styles.proLogoTxt}>Welcome Back, Kevin!</Text>
                    </View>

                    <Image style={styles.arwImg} source={icon.rightArrow} />
                </View>
            </View>

            {/* calling option */}
            <View style={{ marginHorizontal: 10, marginTop: 18, marginBottom: 10 }}>
                <View style={styles.addBarWrap}>
                    <Image style={{ marginLeft: 7 }} source={icon.proimg} />

                    <View style={{ width: 250 }}>
                        <Text style={styles.addTxtB}>Looking for last-minute deals?</Text>
                        <Text style={styles.addTxt}>Speak to a travel expert and a get assistance 24/7</Text>
                    </View>

                    <TouchableOpacity style={styles.callImgWrap}>
                        <Image style={styles.callImg} source={icon.mobile} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* customer tips1 */}
            <View style={[styles.cusTips, { backgroundColor: "#B5D8FF" }]}>
                <Text style={[commonStyles.ns400, { fontSize: 18, textAlign: "center" }]}>
                    A customized fare quote to give you savings over the available fares.
                </Text>
            </View>

            {/* customer tips2 */}
            <View style={[styles.cusTips, { backgroundColor: "#BBFFBE" }]}>
                <Text style={[commonStyles.ns400, { fontSize: 18, textAlign: "center" }]}>
                    Flexibility to add names up to 7 days before the journey
                </Text>
            </View>

            {/* customer tips3 */}
            <View style={[styles.cusTips, { backgroundColor: "#FECAFF" }]}>
                <Text style={[commonStyles.ns400, { fontSize: 18, textAlign: "center" }]}>
                    A convenient interface to book, make payment and add names of travelers
                </Text>
            </View>

            {/* deals option */}
            {selectedMidMenu === "r" && <View style={styles.dealWrap}>
                <Text style={styles.dealHeadTxt}>Explore Deals from San Jose</Text>

                <View style={styles.dealContWrap}>
                    {data.map((_, i) => (
                        <View key={i}>
                            <DealItem />
                            {i == data.length - 1 ? <View style={{ marginBottom: 30 }} /> : null}
                        </View>
                    ))}
                </View>
            </View>}
        </ScrollView>
    )
};

export default GroupTickets;

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
        justifyContent: "space-between",
        marginVertical: 7,
        marginHorizontal: 5
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
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 17,
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
    cusTips: {
        marginHorizontal: 10,
        marginTop: 18,
        marginBottom: 10,
        paddingVertical: 40,
        paddingHorizontal: 26,
    },
});