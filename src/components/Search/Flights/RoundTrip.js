import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { b1, b3, blue, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';


const RoundTrip = ({ navigation, dest, src }) => {
    const [isClass, setIsClass] = useState(false);
    const [isTravel, setIsTravel] = useState(false);

    return (
        <View style={styles.main}>
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
            <View style={[styles.topWrap, { marginTop: 7 }]}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>Depart</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("traveldate")}>
                        <Text style={styles.midTxt}>Select Date</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>Day</Text>
                </View>

                <View style={styles.right}>
                    <Text style={styles.tbTxt}>Return</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("traveldate")}>
                        <Text style={styles.midTxt}>Select Date</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>Book Return</Text>
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
                                <View>
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
                                <View>
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
                                <View>
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
                            <Text style={styles.tbTxt}>{dest === "opt2" ? "Room" : "Class"}</Text>
                            <Image style={styles.imgCls} source={icon.rightArrow} />
                        </View>

                        <TouchableOpacity onPress={() => setIsClass(true)}>
                            <Text style={styles.midTxt}>{dest === "opt2" ? "1 Room" : "Class"}</Text>
                        </TouchableOpacity>

                        {dest === "opt2" ?
                            isClass && <View style={styles.classOptnsWrap}>
                                <TouchableOpacity
                                    style={styles.classOptnTxtWrapActive}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxtActive}>1 Room</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.classOptnTxtWrap}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxt}>2 Room</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.classOptnTxtWrap}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxt}>3 Room</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.classOptnTxtWrap}
                                    onPress={() => setIsClass(false)}
                                >
                                    <Text style={styles.classOptnTxt}>4 Room</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            isClass && <View style={styles.classOptnsWrap}>
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
                            </View>
                        }
                    </View>
                </View>
            </View>

            {/* extra search option section */}
            {
                dest !== "opt2" ?
                    <View style={styles.searchWrap}>
                        <View
                            style={{
                                flexDirection: "row",
                                borderBottomWidth: 1,
                                alignItems: 'center',
                                borderColor: b3,
                                paddingRight: 10,
                            }}
                        >
                            <Image
                                style={{ width: 20, height: 20, tintColor: blue, }}
                                source={icon.search}
                            />

                            <TextInput
                                placeholder='Search Preferred Airline'
                                placeholderTextColor={b3}
                                style={{
                                    height: 35,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: 10,
                                    color: b1,
                                }}
                            />
                        </View>

                        {/* radio options */}
                        <View style={{ marginTop: 20, marginLeft: 8, alignItems: "flex-start" }}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center' }}>
                                <View style={styles.radio} />
                                <Text style={styles.searchTxt}>Return to or from another city/airport?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
                                <View style={styles.radio} />
                                <Text style={styles.searchTxt}>Direct Flights</Text>
                            </TouchableOpacity>
                        </View>

                        {/* group types & currency */}
                        <View style={{ marginTop: 20, alignItems: "flex-start", marginBottom: 15 }}>
                            {/* group types */}
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Text style={styles.searchTxt}>Select Group Type</Text>
                                <Image
                                    style={styles.arrow}
                                    source={icon.rightArrow}
                                />
                            </TouchableOpacity>

                            {/* currency */}
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
                                <Text style={styles.searchTxt}>Select currency</Text>
                                <Image
                                    style={styles.arrow}
                                    source={icon.rightArrow}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    null
            }

            {/* hotel & car extra search option */}
            {src === "h&c" && <View style={styles.searchWrap}>
                <View
                    style={{
                        flexDirection: "row",
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        borderColor: b3,
                        paddingRight: 10,
                    }}
                >
                    <Image
                        style={{ width: 20, height: 20, tintColor: blue, }}
                        source={icon.search}
                    />

                    <TextInput
                        placeholder='Hotel Name'
                        placeholderTextColor={b3}
                        style={{
                            height: 35,
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: 10,
                            color: b1,
                        }}
                    />
                </View>

                {/* radio options */}
                <View style={{ marginTop: 20, marginLeft: 8, alignItems: "flex-start" }}>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center' }}>
                        <View style={styles.radio} />
                        <Text style={styles.searchTxt}>I only need this hotel for part of my trip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
                        <View style={styles.radio} />
                        <Text style={styles.searchTxt}>Homes & Apartments</Text>
                    </TouchableOpacity>
                </View>

                {/* Hotel Rating */}
                <View style={{ marginTop: 10, alignItems: "flex-start", marginBottom: 15 }}>
                    {/* currency */}
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
                        <Text style={styles.searchTxt}>Hotel Rating</Text>
                        <Image
                            style={styles.arrow}
                            source={icon.rightArrow}
                        />
                    </TouchableOpacity>
                </View>
            </View>}
        </View>
    )
};

export default RoundTrip;

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
        marginBottom: 10,
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
    searchWrap: {
        // marginTop: 5,
        alignItems: "flex-start",
    },
    searchTxt: {
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 12,
        color: b3,
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: blue,
        marginRight: 10,
    },
    arrow: {
        width: 15,
        height: 15,
        transform: [{ rotate: "90deg" }],
        marginLeft: 10,
    },
});