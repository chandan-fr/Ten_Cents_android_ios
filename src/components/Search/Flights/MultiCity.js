import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { b1, b3, blue, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const MultiCity = ({ navigation }) => {
    const [isClass, setIsClass] = useState(false);
    const [isTravel, setIsTravel] = useState(false);

    return (
        <View>
            <View style={[styles.main, { marginTop: -25, paddingBottom: 10 }]}>
                <Text style={styles.fHdTxt}>Flight 1</Text>
                {/* top selection row */}
                <View style={styles.topWrap}>
                    <View style={styles.left}>
                        <Text style={styles.tbTxt}>From</Text>

                        <TouchableOpacity>
                            <Text style={styles.midTxt}>Enter Location</Text>
                        </TouchableOpacity>

                        <Text style={styles.tbTxt}>Origin</Text>
                    </View>

                    <TouchableOpacity style={styles.imgWrap}>
                        <Image style={styles.img} source={icon.exchange} />
                    </TouchableOpacity>

                    <View style={styles.right}>
                        <Text style={styles.tbTxt}>Destination</Text>

                        <TouchableOpacity>
                            <Text style={styles.midTxt}>Enter Location</Text>
                        </TouchableOpacity>

                        <Text style={styles.tbTxt}>Destination</Text>
                    </View>
                </View>

                <View style={styles.btmBrdr} />

                {/* middle selection row */}
                <View style={{ marginTop: 7, alignItems: 'flex-start' }}>
                    <View style={styles.left}>
                        <Text style={styles.tbTxt}>Depart</Text>

                        <TouchableOpacity onPress={() => navigation.navigate("traveldate")}>
                            <Text style={styles.midTxt}>Select Date</Text>
                        </TouchableOpacity>

                        <Text style={styles.tbTxt}>Day</Text>
                    </View>
                </View>

                <View style={styles.btmBrdr} />

                {/* bottom selection row */}
                <View style={{ marginTop: 7 }}>
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

                        <View style={styles.right}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text style={styles.tbTxt}>Class</Text>
                                <Image style={styles.imgCls} source={icon.rightArrow} />
                            </View>

                            <TouchableOpacity onPress={() => setIsClass(true)}>
                                <Text style={styles.midTxt}>Class</Text>
                            </TouchableOpacity>

                            {isClass && <View style={styles.classOptnsWrap}>
                                <TouchableOpacity
                                    style={styles.classOptnTxtWrapActive}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxtActive}>Economy</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.classOptnTxtWrap}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxt}>Premium Economy</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.classOptnTxtWrap}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxt}>Business</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.classOptnTxtWrap}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxt}>First Class</Text>
                                </TouchableOpacity>
                            </View>}
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.main, { marginVertical: 20, paddingBottom: 10 }]}>
                <Text style={styles.fHdTxt}>Flight 2</Text>

                {/* top selection row */}
                <View style={styles.topWrap}>
                    <View style={styles.left}>
                        <Text style={styles.tbTxt}>From</Text>

                        <TouchableOpacity>
                            <Text style={styles.midTxt}>Enter Location</Text>
                        </TouchableOpacity>

                        <Text style={styles.tbTxt}>Origin</Text>
                    </View>

                    <TouchableOpacity style={styles.imgWrap}>
                        <Image style={styles.img} source={icon.exchange} />
                    </TouchableOpacity>

                    <View style={styles.right}>
                        <Text style={styles.tbTxt}>Destination</Text>

                        <TouchableOpacity>
                            <Text style={styles.midTxt}>Enter Location</Text>
                        </TouchableOpacity>

                        <Text style={styles.tbTxt}>Destination</Text>
                    </View>
                </View>

                <View style={styles.btmBrdr} />

                {/* middle selection row */}
                <View style={{ marginTop: 7, alignItems: 'flex-start' }}>
                    <View style={styles.left}>
                        <Text style={styles.tbTxt}>Depart</Text>

                        <TouchableOpacity>
                            <Text style={styles.midTxt}>Select Date</Text>
                        </TouchableOpacity>

                        <Text style={styles.tbTxt}>Day</Text>
                    </View>
                </View>

                <View style={styles.btmBrdr} />

                {/* bottom selection row */}
                <View style={{ marginTop: 7 }}>
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

                        <View style={styles.right}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text style={styles.tbTxt}>Class</Text>
                                <Image style={styles.imgCls} source={icon.rightArrow} />
                            </View>

                            <TouchableOpacity onPress={() => setIsClass(true)}>
                                <Text style={styles.midTxt}>Class</Text>
                            </TouchableOpacity>

                            {isClass && <View style={styles.classOptnsWrap}>
                                <TouchableOpacity
                                    style={styles.classOptnTxtWrapActive}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxtActive}>Economy</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.classOptnTxtWrap}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxt}>Premium Economy</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.classOptnTxtWrap}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxt}>Business</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.classOptnTxtWrap}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxt}>First Class</Text>
                                </TouchableOpacity>
                            </View>}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default MultiCity;

const styles = StyleSheet.create({
    main: {
        backgroundColor: white,
        marginHorizontal: 7,
        paddingHorizontal: 10,
        borderRadius: 4,
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
        fontFamily: 'NunitoSans_10pt-SemiBold',
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
    classOptnsWrap: {
        backgroundColor: white,
        width: 180,
        height: 146,
        position: 'absolute',
        zIndex: 99,
        top: 5,
        borderWidth: 1,
        right: 60,
        borderColor: "#D8D8D8",
        elevation: 2,
    },
    classOptnTxt: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 13,
    },
    classOptnTxtActive: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: white,
        fontSize: 13,
    },
    classOptnTxtWrap: {
        paddingVertical: 8,
        paddingLeft: 15,
    },
    classOptnTxtWrapActive: {
        paddingVertical: 8,
        paddingLeft: 15,
        backgroundColor: blue,
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
    fHdTxt: {
        fontFamily: 'LondonBetween',
        color: b3,
        fontSize: 15,
        marginVertical: Platform.OS === "ios" ? 15 : 10,
    }
});