import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { white, b1, b3, black, blue } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import SearchButton from '../../SearchButton';
import RentalCars from './RentalCars';
import AirportTransport from './AirportTransport';



const Cars = ({ navigation }) => {
    const [selectedMidMenu, setSelectedMidMenu] = useState("rc");

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
            {/* trip option nav bar */}
            <View style={styles.mainMenuWrap}>
                <View style={styles.mmContWrap}>
                    <TouchableOpacity
                        style={selectedMidMenu == "rc" ? styles.mmBtnActive : styles.mmBtn}
                        onPress={() => setSelectedMidMenu("rc")}
                    >
                        <Text style={selectedMidMenu == "rc" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                            Rental Cars
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedMidMenu == "at" ? styles.mmBtnActive : styles.mmBtn}
                        onPress={() => setSelectedMidMenu("at")}
                    >
                        <Text style={selectedMidMenu == "at" ? styles.mmBtnTxtActive : styles.mmBtnTxt}>
                            Airport Transportation
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* trip option content */}
                <View style={{ marginHorizontal: 10, marginTop: 0, }}>
                    {selectedMidMenu === "rc" && <RentalCars navigation={navigation} />}
                    {selectedMidMenu === "at" && <AirportTransport navigation={navigation} />}
                </View>
            </View>

            {/* search button */}
            <SearchButton navigation={navigation} screenName={"carsearch"} />

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

                    <TouchableOpacity style={styles.callImgWrap}>
                        <Image style={styles.callImg} source={icon.mobile} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};

export default Cars;

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
});