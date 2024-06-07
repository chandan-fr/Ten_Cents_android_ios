import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { b1, b3, blue, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';


const AirportTransport = ({ navigation }) => {
    const [isTravel, setIsTravel] = useState(false);

    return (
        <View style={styles.main}>
            {/* car filter */}
            <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 25, marginBottom: 20 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
                    <Text style={styles.tbTxt}>
                        All Car Transport Companies
                    </Text>
                    <Image
                        style={{ width: 11, height: 11, tintColor: b3, transform: [{ rotate: "90deg" }] }}
                        source={icon.rightArrow}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
                    <Text style={styles.tbTxt}>
                        All Car Sizes
                    </Text>
                    <Image
                        style={{ width: 11, height: 11, tintColor: b3, transform: [{ rotate: "90deg" }] }}
                        source={icon.rightArrow}
                    />
                </TouchableOpacity>
            </View>

            {/* top selection row */}
            <View style={styles.topWrap}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>PickUp</Text>

                    <TouchableOpacity>
                        <Text style={styles.midTxt}>Enter Location</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>PickUp</Text>
                </View>

                <TouchableOpacity style={styles.imgWrap}>
                    <Image style={styles.img} source={icon.exchange} />
                </TouchableOpacity>

                <View style={styles.right}>
                    <Text style={styles.tbTxt}>Drop-Off</Text>

                    <TouchableOpacity>
                        <Text style={styles.midTxt}>Enter Location</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>Drop-Off</Text>
                </View>
            </View>

            <View style={styles.btmBrdr} />

            {/* middle selection row */}
            <View style={{ marginTop: 7, alignItems: 'center', flexDirection: "row", justifyContent: 'space-between' }}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>PickUp Date</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("traveldate")}>
                        <Text style={styles.midTxt}>Select Date</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
                        <Text style={styles.tbTxt}>Time</Text>
                        <Image
                            style={{ width: 11, height: 11, tintColor: b3, transform: [{ rotate: "90deg" }] }}
                            source={icon.rightArrow}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.right}>
                    <Text style={styles.tbTxt}>Drop-Off Date</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("traveldate")}>
                        <Text style={styles.midTxt}>Select Date</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
                        <Text style={styles.tbTxt}>Time</Text>
                        <Image
                            style={{ width: 11, height: 11, tintColor: b3, transform: [{ rotate: "90deg" }] }}
                            source={icon.rightArrow}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.btmBrdr} />

            {/* bottom selection row */}
            <View style={{ marginTop: 7, marginBottom: 15 }}>
                <View style={styles.topWrap}>
                    <View style={styles.left}>
                        <Text style={styles.tbTxt}>Travellers</Text>

                        <TouchableOpacity onPress={() => setIsTravel(true)}>
                            <Text style={styles.midTxt}>1 Adult</Text>
                        </TouchableOpacity>

                        {isTravel && <View style={styles.travlOptnsWrap}>
                            <View style={styles.travelContWrap}>
                                <View style={styles.travelTxtWrap}>
                                    <Text style={styles.travelHdTxt}>Adults</Text>
                                    <Text style={styles.travelSubHdTxt}>Aged 12+ years</Text>
                                </View>

                                <View style={styles.btn}>
                                    <TouchableOpacity onPress={() => setIsTravel(false)}>
                                        <Text style={styles.btnTxt}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.btnTxt}>1</Text>

                                    <TouchableOpacity onPress={() => setIsTravel(false)}>
                                        <Text style={styles.btnTxt}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.travelContWrap}>
                                <View style={styles.travelTxtWrap}>
                                    <Text style={styles.travelHdTxt}>Children</Text>
                                    <Text style={styles.travelSubHdTxt}>Aged 2-12 years</Text>
                                </View>

                                {/* <View style={styles.btn}>
                                    <TouchableOpacity>
                                        <Text style={styles.btnTxt}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.btnTxt}>1</Text>

                                    <TouchableOpacity>
                                        <Text style={styles.btnTxt}>+</Text>
                                    </TouchableOpacity>
                                </View> */}

                                <TouchableOpacity style={styles.addBtn} onPress={() => setIsTravel(false)}>
                                    <Text style={styles.addBtnTxt}>Add</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.travelContWrap}>
                                <View style={styles.travelTxtWrap}>
                                    <Text style={styles.travelHdTxt}>Infants</Text>
                                    <Text style={styles.travelSubHdTxt}>Bellow 2 years</Text>
                                </View>

                                {/* <View style={styles.btn}>
                                    <TouchableOpacity>
                                        <Text style={styles.btnTxt}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.btnTxt}>1</Text>

                                    <TouchableOpacity>
                                        <Text style={styles.btnTxt}>+</Text>
                                    </TouchableOpacity>
                                </View> */}

                                <TouchableOpacity style={styles.addBtn} onPress={() => setIsTravel(false)}>
                                    <Text style={styles.addBtnTxt}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>}
                    </View>
                </View>
            </View>
        </View>
    )
};

export default AirportTransport;

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
    },
    topWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img: {
        width: 20,
        height: 20,
        tintColor: blue,
    },
    imgWrap: {
        width: 28,
        height: 28,
        backgroundColor: w1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tbTxt: {
        color: b3,
        fontFamily: 'NunitoSans_10pt-Regular',
        fontSize: 13,
    },
    midTxt: {
        color: b1,
        fontFamily: 'NunitoSans_10pt-Bold',
        fontSize: 18,
        marginVertical: 8,
    },
    left: {
        // borderWidth: 1
    },
    right: {
        alignItems: "flex-end",
    },
    btmBrdr: {
        backgroundColor: b3,
        height: 2,
        marginVertical: 5
    },
    imgCls: {
        width: 10,
        height: 10,
        transform: [{ rotate: "90deg" }],
        tintColor: b3,
        marginLeft: 4
    },
    travlOptnsWrap: {
        backgroundColor: white,
        width: 200,
        height: 146,
        position: 'absolute',
        zIndex: 99,
        top: 5,
        borderWidth: 1,
        left: 90,
        borderColor: "#D8D8D8",
        elevation: 2,
    },
    travelContWrap: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginHorizontal: 6,
        paddingVertical: 4,
        marginTop: 5,
    },
    travelTxtWrap: {
    },
    travelHdTxt: {
        color: b1,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 13,
    },
    travelSubHdTxt: {
        color: b3,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 11,
    },
    btnTxt: {
        color: blue,
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 15,
        letterSpacing: 15,
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: blue,
        borderWidth: 0.7,
        borderRadius: 5,
    },
    addBtnTxt: {
        color: blue,
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 15,
    },
    addBtn: {
        alignItems: "center",
        borderColor: blue,
        borderWidth: 0.7,
        borderRadius: 5,
        justifyContent: "center",
        paddingVertical: 1,
        paddingHorizontal: 20
    },
});