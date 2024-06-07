import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { b1, b3, black, blue, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const HotelSearchOptn = ({ navigation, openTravel, setOpenTravel }) => {
    const [isRoom, setIsRoom] = useState("1 Room");
    const [isTravel, setIsTravel] = useState("");
    const [openRoom, setOpenRoom] = useState(false);

    const handleRoom = (name)=>{
        setIsRoom(name);
        setOpenRoom(false);
    };

    return (
        <View style={styles.main}>
            {/* top selection row */}
            <View style={{ alignItems: 'flex-start' }}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>Destination</Text>

                    <TouchableOpacity>
                        <Text style={styles.midTxt}>Enter Location</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>Destination</Text>
                </View>
            </View>

            <View style={styles.btmBrdr} />

            {/* middle selection row */}
            <View style={[styles.topWrap, { marginTop: 7, }]}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>Check- In</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("traveldate")}>
                        <Text style={styles.midTxt}>Select Date</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>Day</Text>
                </View>

                <View style={styles.right}>
                    <Text style={styles.tbTxt}>Check- Out</Text>

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

                        <TouchableOpacity onPress={() => setOpenTravel(true)}>
                            <Text style={styles.midTxt}>1 Adult</Text>
                        </TouchableOpacity>

                        {openTravel && <View style={styles.travlOptnsWrap}>
                            <View style={styles.travelContWrap}>
                                <View style={{}}>
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
                                <View style={{}}>
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
                                <View style={{}}>
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
                            <Text style={styles.tbTxt}>Room</Text>
                            <Image style={styles.imgCls} source={icon.rightArrow} />
                        </View>

                        <TouchableOpacity onPress={() => setOpenRoom(true)}>
                            <Text style={styles.midTxt}>{isRoom}</Text>
                        </TouchableOpacity>

                        {openRoom && <View style={styles.classOptnsWrap}>
                            <TouchableOpacity
                                style={isRoom === "1 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                onPress={() => handleRoom("1 Room")}
                            >
                                <Text style={isRoom === "1 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>1 Room</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={isRoom === "2 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                onPress={() => handleRoom("2 Room")}
                            >
                                <Text style={isRoom === "2 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>2 Room</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={isRoom === "3 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                onPress={() => handleRoom("3 Room")}
                            >
                                <Text style={isRoom === "3 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>3 Room</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={isRoom === "4 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                onPress={() => handleRoom("4 Room")}
                            >
                                <Text style={isRoom === "4 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>4 Room</Text>
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>
            </View>
        </View>
    )
};

export default HotelSearchOptn;

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
        position: 'absolute',
        zIndex: 99,
        top: 5,
        borderWidth: 1,
        left: 90,
        borderColor: "#D8D8D8",
        elevation: 2,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        paddingBottom: 5,
    },
    classOptnsWrap: {
        backgroundColor: white,
        width: 180,
        position: 'absolute',
        zIndex: 99,
        top: 5,
        borderWidth: 1,
        right: 60,
        borderColor: "#D8D8D8",
        elevation: 2,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
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
});