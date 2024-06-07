import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import image from '../../../config/ImageAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import icon from '../../../config/IconAssets';
import { white, b1, b2, b3 } from '../../../config/colors';

const { width } = Dimensions.get("window");

const HotelItem = ({ navigation, srcName, refName }) => {
    return (
        <View style={styles.main}>
            <View style={{ alignItems: "center" }}>
                <Image style={styles.img} resizeMode='cover' source={image.hotelimg} />
            </View>

            <View style={{ marginTop: 5 }}>
                <View style={{ rowGap: 6 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                        DoubleTree by Hilton Hotel & Suites
                    </Text>

                    {/* leaf */}
                    <View style={{ flexDirection: 'row', alignItems: "center", backgroundColor: "#F1FEF6", borderRadius: 4, alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 2 }}>
                        <Image
                            style={{ width: 20, height: 20, marginRight: 3, tintColor: "#1D8842" }}
                            source={icon.leafSolid}
                        />
                        <Image
                            style={{ width: 20, height: 20, marginRight: 3, tintColor: "#1D8842" }}
                            source={icon.leaf}
                        />
                        <Image
                            style={{ width: 20, height: 20, marginRight: 3, tintColor: "#1D8842" }}
                            source={icon.leaf}
                        />

                        <Text style={[commonStyles.ns600, { color: "#24AD53", fontSize: 14, marginLeft: 10 }]}>
                            Travel Sustainable Level 1
                        </Text>
                    </View>

                    {/* bed */}
                    <View style={{ rowGap: 7 }}>
                        <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                            Queen Room with Two Queen Beds - Non-Smoking
                        </Text>
                        <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                            2 queen beds
                        </Text>
                    </View>

                    {/* perks */}
                    <View style={{ flexDirection: 'row', alignItems: "center", flexWrap: "wrap", columnGap: 20 }}>
                        <Text style={[commonStyles.ns600, { color: "#24AD53", fontSize: 14 }]}>
                            Breakfast included
                        </Text>

                        <Text style={[commonStyles.ns600, { color: "#24AD53", fontSize: 14 }]}>
                            Free cancellation
                        </Text>

                        <Text style={[commonStyles.ns600, { color: "#24AD53", fontSize: 14 }]}>
                            No prepayment needed
                        </Text>
                    </View>

                    {/* rating & reviews */}
                    <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                        <View style={styles.rating}>
                            <Text style={[commonStyles.ns600, { color: white, fontSize: 14 }]}>
                                7.6
                            </Text>
                        </View>

                        <Text style={[commonStyles.ns600, { color: "#24AD53", fontSize: 14 }]}>
                            Good
                        </Text>

                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 3 }}>
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={icon.star}
                            />
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={icon.star}
                            />
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={icon.star}
                            />
                        </View>

                        <Text style={[commonStyles.ns600, { color: b2, fontSize: 14 }]}>
                            1,888 Reviews
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                $ 631
                            </Text>
                            <Text style={{ color: b1, fontSize: 12, alignSelf: "flex-start", fontFamily: "Arial", top: 3 }}>
                                .39
                            </Text>
                        </View>

                        <Text style={[commonStyles.ns400, { color: b3, fontSize: 14, marginTop: 5 }]}>
                            +US $162 taxes and charges
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate(srcName, {refName: refName})}
                    >
                        <Text style={[commonStyles.lbB1, { color: white }]}>
                            Book
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default HotelItem;

const styles = StyleSheet.create({
    main: {
    },
    img: {
        width: width - 96,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
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
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    rating: {
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: b2,
        paddingHorizontal: 25,
        paddingVertical: 3,
    },
});