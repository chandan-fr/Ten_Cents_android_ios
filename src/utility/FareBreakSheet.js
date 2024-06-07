import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';
import { b1, b2, b3, white } from '../config/colors';
import { genCurrentDate } from '../config/CurrentDate';

const FareBreakSheet = ({ fareRef }) => {
    return (
        <RBSheet
            ref={fareRef}
            animationType='slide'
            openDuration={1000}
            closeDuration={300}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
                wrapper: {
                    backgroundColor: "#4C4C4C",
                    opacity: 0.8,
                },
                draggableIcon: {
                    display: "none",
                },
                container: {
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    height: 380,
                    backgroundColor: white,
                }
            }}
        >
            <View style={styles.parent}>
                {/* nav */}
                <View style={styles.navWrap}>
                    <Text style={[styles.ns600, { textTransform: "uppercase" }]}>Fare Breakup</Text>

                    <TouchableOpacity style={styles.cross} onPress={() => fareRef.current.close()}>
                        <Image
                            style={{ width: 20, height: 20, tintColor: b3 }}
                            source={require("../assets/icons/cross.png")}
                        />
                    </TouchableOpacity>
                </View>

                {/* destination */}
                <View style={{ alignItems: "flex-start" }}>
                    <View style={styles.right}>
                        <Text style={styles.navHeadTxt}>Dhaka</Text>
                        <Image style={styles.rightImg} source={require("../assets/icons/next.png")} />
                        <Text style={styles.navHeadTxt}>Dubai</Text>
                    </View>
                    <Text style={styles.navSubHeadTxt}>{genCurrentDate()} | 1 Adult</Text>
                </View>

                {/* fares */}
                <View style={{ marginTop: 20, rowGap: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                style={{ width: 20, height: 20, tintColor: b1 }}
                                source={require("../assets/icons/tag.png")}
                            />
                            <Text style={[styles.ns400, { fontSize: 16, marginLeft: 10 }]}>Base Fare</Text>
                        </View>
                        <Text style={[styles.ns400, { fontSize: 16 }]}>$ 215</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                style={{ width: 20, height: 20, tintColor: b1 }}
                                source={require("../assets/icons/users.png")}
                            />
                            <Text style={[styles.ns400, { fontSize: 16, marginLeft: 10 }]}>1 Adult</Text>
                        </View>
                        <Text style={[styles.ns400, { fontSize: 16 }]}>$ 215</Text>
                    </View>
                </View>

                {/* divider */}
                <View style={styles.divider} />

                <View
                    style={{
                        flexDirection: "row", alignItems: "center", justifyContent: "space-between",
                        marginLeft: 30,
                    }}
                >
                    <Text style={[styles.ns400, { fontSize: 16 }]}>
                        Taxes & Surcharges
                    </Text>
                    <Text style={[styles.ns400, { fontSize: 16 }]}>$ 215</Text>
                </View>

                {/* divider */}
                <View style={styles.divider} />

                <View
                    style={{
                        flexDirection: "row", alignItems: "center", justifyContent: "space-between",
                        marginLeft: 30, paddingVertical: 5
                    }}
                >
                    <Text style={[styles.ns400, { fontSize: 14, color: b3 }]}>
                        Donate $15 towards flood relief efforts
                    </Text>
                    <View style={styles.check}>
                        <Image
                            style={{ width: 10, height: 10, tintColor: white }}
                            source={require("../assets/icons/check.png")}
                        />
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row", alignItems: "center", justifyContent: "space-between",
                        marginLeft: 30, marginTop: 30
                    }}
                >
                    <Text style={[styles.ns400, { fontSize: 16 }]}>
                        Grand Total
                    </Text>
                    <Text style={[styles.ns400, { fontSize: 16 }]}>$ 495</Text>
                </View>
            </View>
        </RBSheet>
    )
};

export default FareBreakSheet;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        margin: 20,
    },
    navWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    cross: {
        backgroundColor: "#D9D9D9",
        padding: 8,
        borderRadius: 100,
    },
    lbB1: {
        fontFamily: "LondonBetween",
        color: b1,
    },
    ns700: {
        fontFamily: "NunitoSans_10pt-Bold",
        color: b1,
        fontSize: 18,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        color: b1,
        fontSize: 18,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 14,
    },
    navHeadTxt: {
        color: b1,
        fontSize: 16,
        fontFamily: "LondonBetween",
    },
    navSubHeadTxt: {
        color: b3,
        fontSize: 13,
        fontFamily: "LondonBetween",
    },
    right: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    rightImg: {
        width: 15,
        height: 15,
        marginHorizontal: 10,
        transform: [{ rotate: "180deg" }]
    },
    divider: {
        borderColor: b3,
        borderWidth: 1,
        marginVertical: 15
    },
    check: {
        backgroundColor: b2,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        width: 20,
        height: 20,
    },
});