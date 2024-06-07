import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { b1, b3, black, green, white } from '../../../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import image from '../../../config/ImageAssets';

const { width } = Dimensions.get("window");

const DealItem = () => {
    return (
        <View style={styles.main}>
            <Image style={styles.img} resizeMode='cover' source={image.dealpic} />

            <View style={styles.contWrap}>
                <View style={styles.topItemWrap}>
                    <View>
                        <Text style={[styles.ns700, { color: b1, fontSize: 19 }]}>San Diego</Text>
                        <Text style={[styles.ns400, { color: b1, fontSize: 14, marginVertical: 5 }]}>SJC - SAN</Text>
                    </View>

                    <View style={{}}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={[styles.ns700, { color: green, fontSize: 20 }]}>
                                $80
                            </Text>
                            <Text style={{ color: green, fontSize: 13, alignSelf: "flex-start", fontFamily: "Arial", top: 3 }}>
                                .99*
                            </Text>
                        </View>

                        <Text style={[styles.ns400, { color: b3, fontSize: 10, textAlign: "center" }]}>
                            Round Trip
                        </Text>
                    </View>
                </View>

                <Text style={[styles.ns400, { color: b3, fontSize: 15, marginLeft: 5, }]}>
                    Oct 28 - Oct 30
                </Text>

                <View style={{ marginHorizontal: 30, marginVertical: 18 }}>
                    <LinearGradient
                        style={{ height: 16, borderRadius: 48 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[
                            "rgba(49, 154, 52, 1)",
                            "rgba(244, 222, 25, 1)",
                            "rgba(245, 172, 86, 1)",
                            "rgba(202, 18, 18, 1)"
                        ]}
                    />

                    <View style={styles.moneyRangeTxtWrap}>
                        <Text style={styles.moneyRangeTxt}>$126</Text>
                        <Text style={styles.moneyRangeTxt}>$96</Text>
                    </View>
                </View>

                <Text style={[styles.ns400, { color: b3, fontSize: 15, textAlign: "center", marginBottom: 20 }]}>
                    Similar trip cost to San Diego
                </Text>
            </View>
        </View>
    )
};

export default DealItem;

const styles = StyleSheet.create({
    main: {
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: white,
        elevation: 4,
        paddingBottom: 20,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    img: {
        borderTopRightRadius: 40,
        width: width - 54.9,
    },
    contWrap: {
        marginTop: 20,
    },
    topItemWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 5,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
    },
    ns700: {
        fontFamily: "NunitoSans_10pt-Bold",
    },
    moneyRangeTxt: {
        color: b3,
        fontSize: 15,
        fontFamily: "Arial"
    },
    moneyRangeTxtWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    },
});