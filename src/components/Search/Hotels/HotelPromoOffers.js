import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, b2, b3, white } from '../../../config/colors';
import image from '../../../config/ImageAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import icon from '../../../config/IconAssets';

const { width } = Dimensions.get("window");

const HotelPromoOffers = ({ origin, screenName }) => {
    return (
        <View style={styles.main}>
            <Image style={styles.img} resizeMode='cover' source={image.hotelimg} />

            <View style={{ marginTop: 5 }}>
                <View style={{ rowGap: 8 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                        DoubleTree by Hilton Hotel & Suites
                    </Text>

                    {/* destination glimpse */}
                    {origin === "f&h" && <View style={{ rowGap: 4 }}>
                        <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                            <Image
                                style={{ width: 13, height: 13, tintColor: b1, transform: [{ rotate: "45deg" }] }}
                                source={icon.plane}
                            />

                            <Text style={commonStyles.ns400}>
                                Roundtrip flight + Taxes and fees
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                            <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                                Los Angeles
                            </Text>

                            <View style={{ backgroundColor: b3, width: 16, height: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{ width: 10, height: 10, tintColor: white }}
                                    source={icon.exchange}
                                />
                            </View>

                            <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                                Las Vegas
                            </Text>
                        </View>

                        <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                            (Dec 17, 2023 - Dec 21, 2023)
                        </Text>

                        <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                            Class - Economy
                        </Text>
                    </View>}

                    {/* star */}
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image
                            style={{ width: 15, height: 15, marginRight: 3 }}
                            source={icon.star}
                        />
                        <Image
                            style={{ width: 15, height: 15, marginRight: 3 }}
                            source={icon.star}
                        />
                        <Image
                            style={{ width: 15, height: 15, marginRight: 3 }}
                            source={icon.star}
                        />
                    </View>

                    {/* location */}
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image
                            style={{ tintColor: b1, width: 15, height: 15, marginRight: 6 }}
                            source={icon.location}
                        />

                        <Text style={[commonStyles.ns600, { color: b1, fontSize: 14 }]}>
                            New York
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
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
                            Hotel (incl. taxes & fees)
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.btn}
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

export default HotelPromoOffers;

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 20,
        marginTop: 10,
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
});