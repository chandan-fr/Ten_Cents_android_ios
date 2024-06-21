import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { b1, b3, blue, red, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const ModifyDateForHotel = ({ navigation, setIsModify }) => {
    const [isRoom, setIsRoom] = useState(false);
    const [isTravel, setIsTravel] = useState(false);

    return (
        <View style={styles.main}>
            {/* cross button */}
            <TouchableOpacity
                style={{ alignSelf: "flex-end", marginBottom: 15, padding: 5, backgroundColor: w1, borderRadius: 4 }}
                onPress={() => setIsModify(false)}
            >
                <Image style={{ width: 15, height: 15, tintColor: red }} source={icon.cross} />
            </TouchableOpacity>

            {/* top selection row */}
            <View style={styles.topWrap}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>Pick - Up</Text>

                    <TouchableOpacity>
                        <Text style={styles.midTxt}>Calgary, Alberta</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.right}>
                    <Text style={styles.tbTxt}>Drop- Off</Text>

                    <TouchableOpacity>
                        <Text style={styles.midTxt}>Enter Location</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.btmBrdr} />

            {/* middle selection row */}
            <View style={[styles.topWrap, { marginTop: 7, }]}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>Check- In</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("traveldate", { src: "depart", setFormValue: {}, formValue: {} })}>
                        <Text style={styles.midTxt}>Select Date</Text>
                    </TouchableOpacity>

                    <Text style={styles.tbTxt}>Day</Text>
                </View>

                <View style={styles.right}>
                    <Text style={styles.tbTxt}>Check- Out</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("traveldate", { src: "return", setFormValue: {}, formValue: {} })}>
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
                    </View>

                    <View style={styles.right}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Text style={styles.tbTxt}>Room</Text>
                            <Image style={styles.imgCls} source={icon.rightArrow} />
                        </View>

                        <TouchableOpacity onPress={() => setIsRoom(true)}>
                            <Text style={styles.midTxt}>1 Room</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default ModifyDateForHotel;

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
        fontSize: 14,
    },
    midTxt: {
        color: b1,
        fontFamily: 'NunitoSans_10pt-SemiBold',
        fontSize: 16,
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
});