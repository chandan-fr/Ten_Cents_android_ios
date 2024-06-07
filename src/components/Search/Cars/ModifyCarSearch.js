import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, b3, blue, w1 } from '../../../config/colors';
import icon from '../../../config/IconAssets';


const ModifyCarSearch = ({ navigation }) => {
    return (
        <View style={styles.main}>
            {/* top selection row */}
            <View style={styles.topWrap}>
                <View style={styles.left}>
                    <Text style={styles.tbTxt}>PickUp</Text>

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

            <View style={[styles.btmBrdr, {marginBottom: -4}]} />
        </View>
    )
};

export default ModifyCarSearch;

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