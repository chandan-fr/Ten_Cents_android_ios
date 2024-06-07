import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';

const { width, height } = Dimensions.get("window");

const HotelReview = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.11} />
            <Header />

            <View style={styles.body}>
                <ScrollView
                    style={{ marginHorizontal: 15, marginTop: 5 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ paddingVertical: 5, rowGap: 10 }}>
                        {/* hotel name */}
                        <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                            Ramada Plaza by Wyndham Calgary Downtown
                        </Text>

                        {/* hotel rating */}
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {/* star */}
                            <View style={{ flexDirection: 'row', alignItems: "center", marginRight: 10 }}>
                                <Image
                                    style={{ width: 26, height: 26, marginRight: 3 }}
                                    source={icon.star}
                                />
                                <Image
                                    style={{ width: 26, height: 26, marginRight: 3 }}
                                    source={icon.star}
                                />
                                <Image
                                    style={{ width: 26, height: 26, marginRight: 3 }}
                                    source={icon.star}
                                />
                            </View>

                            {/* button */}
                            <TouchableOpacity
                                style={[styles.btn, { marginHorizontal: 50 }]}
                            >
                                <Text style={[commonStyles.lbB1, { color: white }]}>
                                    Reserve
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* rating details */}
                        <View style={{ rowGap: 15 }}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', columnGap: 5 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Rating
                                </Text>

                                <Image
                                    style={{ width: 13, height: 13, transform: [{ rotate: "90deg" }] }}
                                    source={icon.rightArrow}
                                />
                            </TouchableOpacity>

                            <View style={styles.ratingBox}>
                                {/* rating & reviews */}
                                <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15, paddingVertical: 10, paddingLeft: 20, elevation: 3, backgroundColor: white }}>
                                    <View style={styles.rating}>
                                        <Text style={[commonStyles.ns600, { color: white, fontSize: 16 }]}>
                                            7.8 / 10.0
                                        </Text>
                                    </View>

                                    <View>
                                        <Text style={[commonStyles.ns600, { color: "#24AD53", fontSize: 18 }]}>
                                            Good
                                        </Text>

                                        <Text style={[commonStyles.ns600, { color: b2, fontSize: 18 }]}>
                                            1,888 Reviews
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ paddingHorizontal: 10, rowGap: 10 }}>
                                    <Text style={styles.segoe}>
                                        Categories:
                                    </Text>

                                    {/* staff */}
                                    <View style={{ rowGap: 2 }}>
                                        <Text style={styles.segoe}>
                                            Staff
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <View style={{ flex: 1, height: 6, backgroundColor: "#EBF3FF", borderRadius: 2 }}>
                                                <View style={{ height: 6, backgroundColor: "#104581", borderRadius: 2, width: "84%" }} />
                                            </View>

                                            <Text style={[styles.segoe, { fontSize: 14, marginLeft: 15 }]}>
                                                8.4
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Facilities */}
                                    <View style={{ rowGap: 2 }}>
                                        <Text style={styles.segoe}>
                                            Facilities
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <View style={{ flex: 1, height: 6, backgroundColor: "#EBF3FF", borderRadius: 2 }}>
                                                <View style={{ height: 6, backgroundColor: "#104581", borderRadius: 2, width: "73%" }} />
                                            </View>

                                            <Text style={[styles.segoe, { fontSize: 14, marginLeft: 15 }]}>
                                                7.3
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Cleanliness */}
                                    <View style={{ rowGap: 2 }}>
                                        <Text style={styles.segoe}>
                                            Cleanliness
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <View style={{ flex: 1, height: 6, backgroundColor: "#EBF3FF", borderRadius: 2 }}>
                                                <View style={{ height: 6, backgroundColor: "#104581", borderRadius: 2, width: "79%" }} />
                                            </View>

                                            <Text style={[styles.segoe, { fontSize: 14, marginLeft: 15 }]}>
                                                7.9
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Comfort */}
                                    <View style={{ rowGap: 2 }}>
                                        <Text style={styles.segoe}>
                                            Comfort
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <View style={{ flex: 1, height: 6, backgroundColor: "#EBF3FF", borderRadius: 2 }}>
                                                <View style={{ height: 6, backgroundColor: "#104581", borderRadius: 2, width: "79%" }} />
                                            </View>

                                            <Text style={[styles.segoe, { fontSize: 14, marginLeft: 15 }]}>
                                                7.9
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Value for money */}
                                    <View style={{ rowGap: 2 }}>
                                        <Text style={styles.segoe}>
                                            Value for money
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <View style={{ flex: 1, height: 6, backgroundColor: "#EBF3FF", borderRadius: 2 }}>
                                                <View style={{ height: 6, backgroundColor: "#104581", borderRadius: 2, width: "75%" }} />
                                            </View>

                                            <Text style={[styles.segoe, { fontSize: 14, marginLeft: 15 }]}>
                                                7.5
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Location */}
                                    <View style={{ rowGap: 2 }}>
                                        <Text style={styles.segoe}>
                                            Location
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <View style={{ flex: 1, height: 6, backgroundColor: "#EBF3FF", borderRadius: 2 }}>
                                                <View style={{ height: 6, backgroundColor: "#104581", borderRadius: 2, width: "88%" }} />
                                            </View>

                                            <Text style={[styles.segoe, { fontSize: 14, marginLeft: 15 }]}>
                                                8.8
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Free WiFi */}
                                    <View style={{ rowGap: 2 }}>
                                        <Text style={styles.segoe}>
                                            Free WiFi
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <View style={{ flex: 1, height: 6, backgroundColor: "#EBF3FF", borderRadius: 2 }}>
                                                <View style={{ height: 6, backgroundColor: "#104581", borderRadius: 2, width: "82%" }} />
                                            </View>

                                            <Text style={[styles.segoe, { fontSize: 14, marginLeft: 15 }]}>
                                                8.2
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* image */}
                        <View style={{ rowGap: 15 }}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', columnGap: 5 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Images
                                </Text>

                                <Image
                                    style={{ width: 13, height: 13, transform: [{ rotate: "90deg" }] }}
                                    source={icon.rightArrow}
                                />
                            </TouchableOpacity>

                            <View style={{}}>
                                <ScrollView
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    style={{ columnGap: 10 }}
                                >
                                    <View style={{ marginRight: 10, width: 111 }}>
                                        <Image
                                            style={{}}
                                            source={image.si1}
                                        />
                                        <Text style={[commonStyles.ns400, { fontSize: 12, color: "#262626", textAlign: "center" }]}>
                                            Overview
                                        </Text>
                                    </View>

                                    <View style={{ marginRight: 10, width: 111 }}>
                                        <Image
                                            style={{}}
                                            source={image.si2}
                                        />
                                        <Text style={[commonStyles.ns400, { fontSize: 12, color: "#262626", textAlign: "center" }]}>
                                            King Room - Non-Smoking
                                        </Text>
                                    </View>

                                    <View style={{ marginRight: 10, width: 111 }}>
                                        <Image
                                            style={{ width: 111 }}
                                            source={image.si3}
                                        />
                                        <Text style={[commonStyles.ns400, { fontSize: 12, color: "#262626", textAlign: "center" }]}>
                                            Queen Room with Pool Access - Non-Smoking
                                        </Text>
                                    </View>

                                    <View style={{ marginRight: 10, width: 111 }}>
                                        <Image
                                            style={{ width: 111 }}
                                            source={image.si1}
                                        />
                                        <Text style={[commonStyles.ns400, { fontSize: 12, color: "#262626", textAlign: "center" }]}>
                                            Double Room with Two Double Beds and Balcony - Non-Smoking
                                        </Text>
                                    </View>

                                    <View style={{ marginRight: 10, width: 111 }}>
                                        <Image
                                            style={{ width: 111 }}
                                            source={image.si1}
                                        />
                                        <Text style={[commonStyles.ns400, { fontSize: 12, color: "#262626", textAlign: "center" }]}>
                                            Double Room with Two Double Beds and Pool Access - Non-Smoking
                                        </Text>
                                    </View>

                                    <View style={{ marginRight: 10, width: 111 }}>
                                        <Image
                                            style={{ width: 111 }}
                                            source={image.si1}
                                        />
                                        <Text style={[commonStyles.ns400, { fontSize: 12, color: "#262626", textAlign: "center" }]}>
                                            King Suite with Jetted Tub - Non-Smoking
                                        </Text>
                                    </View>

                                    <View style={{ width: 111 }}>
                                        <Image
                                            style={{ width: 111 }}
                                            source={image.si1}
                                        />
                                        <Text style={[commonStyles.ns400, { fontSize: 12, color: "#262626", textAlign: "center" }]}>
                                            King Room with Balcony - Non-Smoking
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>

                        {/* overview */}
                        <View style={{ rowGap: 15, marginBottom: 20 }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                Overview
                            </Text>

                            <View style={{ flexWrap: 'wrap', rowGap: 8, columnGap: 8, flexDirection: "row" }}>
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal1}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal2}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal3}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal4}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal5}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal6}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal7}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal8}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal9}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal10}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal11}
                                />
                                <Image
                                    style={{width: 88, height: 76}}
                                    source={image.gal12}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView >
    )
};

export default HotelReview;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 25,
        flex: 1,
        backgroundColor: white,
    },
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 6,
        paddingHorizontal: 50,
    },
    ratingBox: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#D8D8D8',
        backgroundColor: white,
        rowGap: 10,
        width: width * 0.8,
        paddingBottom: 30,
    },
    rating: {
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: b2,
        paddingHorizontal: 10,
        paddingVertical: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    segoe: {
        fontFamily: "Segoe UI",
        color: b1,
        fontSize: 16,
    },
});