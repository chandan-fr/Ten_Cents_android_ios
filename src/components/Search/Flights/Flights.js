import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import SearchButton from '../../SearchButton';
import { b1, b3, black, blue, white } from '../../../config/colors';
import OneWay from './OneWay';
import RoundTrip from './RoundTrip';
import MultiCity from './MultiCity';
import DealItem from './DealItem';
import icon from '../../../config/IconAssets';
import { flightData } from '../../../config/StaticVars';


const Flights = ({ navigation, data, width, height }) => {
    const [selectedMidMenu, setSelectedMidMenu] = useState("o");
    const [openTravel, setOpenTravel] = useState(false);
    const [multiFlightData, setMultiFlightData] = useState([flightData]);
    const [formValue, setFormValue] = useState({ originLocationCode: "DAC", destinationLocationCode: "DXC", departureDate: "", returnDate: "", adults: 1, children: 0, infants: 0, travelClass: "Economy" });
    const [outerScrollEnabled, setOuterScrollEnabled] = useState(true);

    const addFlight = () => {
        const data = [...multiFlightData];
        data.push(flightData);
        setMultiFlightData(data);
    };

    const handleformValue = () => {
        console.log(formValue);
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={[1]}
                scrollEnabled={outerScrollEnabled}
                showsVerticalScrollIndicator={false}
                keyExtractor={(_, i) => i}
                renderItem={({ item, index }) => (
                    <View style={{ flex: 1 }}>
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
                                {selectedMidMenu === "o" && <OneWay
                                    navigation={navigation}
                                    openTravel={openTravel}
                                    setOpenTravel={setOpenTravel}
                                    formValue={formValue}
                                    setFormValue={setFormValue}
                                    setOuterScrollEnabled={setOuterScrollEnabled}
                                />}
                                {selectedMidMenu === "r" && <RoundTrip
                                    navigation={navigation}
                                    openTravel={openTravel}
                                    setOpenTravel={setOpenTravel}
                                    formValue={formValue}
                                    setFormValue={setFormValue}
                                />}
                                {/* {selectedMidMenu === "m" && <MultiCity />} */}
                            </View>
                        </View>

                        {selectedMidMenu === "m" && <MultiCity
                            navigation={navigation}
                            openTravel={openTravel}
                            setOpenTravel={setOpenTravel}
                            multiFlightData={multiFlightData}
                            setMultiFlightData={setMultiFlightData}
                        />
                        }

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
                                onPress={addFlight}
                            >
                                <Text style={{ fontFamily: "LondonBetween", color: white, fontSize: 18 }}>
                                    Add Flight
                                </Text>
                            </TouchableOpacity>
                        </View>
                        }

                        {/* search button */}
                        <SearchButton onBtnPress={handleformValue} navigation={navigation} screenName={"flightsearch"} />

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
                        <View style={{ marginHorizontal: 15, marginTop: 18, marginBottom: 10, zIndex: -1 }}>
                            <View style={styles.addBarWrap}>
                                <Image style={{ marginLeft: 7 }} source={icon.proimg} />

                                <View style={{ flex: 1 }}>
                                    <Text style={styles.addTxtB}>Looking for last-minute deals?</Text>
                                    <Text style={styles.addTxt}>Speak to a travel expert and a get assistance 24/7</Text>
                                </View>

                                <TouchableOpacity style={styles.callImgWrap}>
                                    <Image style={styles.callImg} source={icon.mobile} />
                                </TouchableOpacity>
                            </View>
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
                    </View>
                )}
            />
        </View>
    )
};

export default Flights;

const styles = StyleSheet.create({
    mainMenuWrap: {
        marginHorizontal: 7,
        backgroundColor: white,
        borderRadius: 4,
        elevation: 6,
        marginBottom: 20,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    mmContWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 7,
        marginHorizontal: 10,
    },
    mmBtn: {
        paddingVertical: 6,
    },
    mmBtnActive: {
        paddingVertical: 6,
        backgroundColor: "rgba(33, 180, 226, 0.1)",
        paddingHorizontal: 21,
        borderRadius: 4,
        borderColor: "rgba(33, 180, 226, 1)",
        borderWidth: 0.9,
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
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
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
        columnGap: 10,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
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
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
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
});