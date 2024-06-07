import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b3, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';

const { width, height } = Dimensions.get("window");

const HpSearches = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.1} />
            <Header />

            <View style={styles.body}>
                <View style={{ flex: 1, paddingTop: 5 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ rowGap: 15 }}>
                            {/* top */}
                            <View style={{ alignItems: "center", rowGap: 10, paddingTop: 10 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Maldives
                                </Text>

                                <Text style={[commonStyles.ns400, { fontSize: 18 }]}>
                                    Exotic Water & Beach Villa Stays
                                </Text>

                                <Text style={[commonStyles.ns400, { color: b3, textAlign: "center" }]}>
                                    Choose from our exquisite water & beach villa options for a memorable holiday!
                                </Text>
                            </View>

                            {/* content */}
                            <View style={styles.comWrap}>
                                <TouchableOpacity
                                    style={styles.packeges}
                                    onPress={() => navigation.navigate("hppdetails")}
                                >
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi1}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Incredible Grand Park Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text></Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $3,223
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.packeges}
                                    onPress={() => navigation.navigate("hppdetails")}
                                >
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi2}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Meeru island resort Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text>
                                            </Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $2,718
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.packeges}
                                    onPress={() => navigation.navigate("hppdetails")}
                                >
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi3}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Taj Coral Reef Resort Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text>
                                            </Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $2,622
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* section head2 */}
                            <View style={{ rowGap: 8, alignItems: 'center', marginHorizontal: 15 }}>
                                <Text style={[commonStyles.ns400, { fontSize: 18 }]}>Luxury</Text>
                                <Text style={[commonStyles.ns400, { color: b3, textAlign: "center" }]}>
                                    Take an indulgent holiday to the Maldives with our curated luxury packages.
                                </Text>
                            </View>

                            {/* content2 */}
                            <View style={styles.comWrap}>
                                <TouchableOpacity style={styles.packeges} onPress={() => navigation.navigate("hppdetails")}>
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi1}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Incredible Grand Park Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text></Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $3,223
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.packeges} onPress={() => navigation.navigate("hppdetails")}>
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi2}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Meeru island resort Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text>
                                            </Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $2,718
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.packeges} onPress={() => navigation.navigate("hppdetails")}>
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi3}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Taj Coral Reef Resort Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text>
                                            </Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $2,622
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* section head3 */}
                            <View style={{ rowGap: 8, alignItems: 'center', marginHorizontal: 15 }}>
                                <Text style={[commonStyles.ns400, { fontSize: 18 }]}>Adventure</Text>
                                <Text style={[commonStyles.ns400, { color: b3, textAlign: "center" }]}>
                                    Get an adrenaline rush with these adventure activities in Maldives. Tick-Off Your Bucket List
                                </Text>
                            </View>

                            {/* content3 */}
                            <View style={styles.comWrap}>
                                <TouchableOpacity style={styles.packeges} onPress={() => navigation.navigate("hppdetails")}>
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi1}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Incredible Grand Park Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text></Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $3,223
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.packeges} onPress={() => navigation.navigate("hppdetails")}>
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi2}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Meeru island resort Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text>
                                            </Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $2,718
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.packeges} onPress={() => navigation.navigate("hppdetails")}>
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi3}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Taj Coral Reef Resort Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text>
                                            </Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $2,622
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* section head4 */}
                            <View style={{ rowGap: 8, alignItems: 'center', marginHorizontal: 15 }}>
                                <Text style={[commonStyles.ns400, { fontSize: 18 }]}>Honeymoon</Text>
                                <Text style={[commonStyles.ns400, { color: b3, textAlign: "center" }]}>
                                    Cherish your stay at these romantic retreats with your beloved!
                                </Text>
                            </View>

                            {/* content4 */}
                            <View style={styles.comWrap}>
                                <TouchableOpacity style={styles.packeges} onPress={() => navigation.navigate("hppdetails")}>
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi1}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Incredible Grand Park Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text></Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $3,223
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.packeges} onPress={() => navigation.navigate("hppdetails")}>
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi2}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Meeru island resort Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text>
                                            </Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $2,718
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.packeges} onPress={() => navigation.navigate("hppdetails")}>
                                    {/* top image */}
                                    <Image
                                        style={{ borderTopRightRadius: 40, width: "100%" }}
                                        source={image.hpi3}
                                    />

                                    {/* mid section */}
                                    <View style={{ marginLeft: 30, marginRight: 20, rowGap: 15, marginTop: 5 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18, }]} numberOfLines={1}>
                                            Taj Coral Reef Resort Maldives Va...
                                        </Text>

                                        {/* icons */}
                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={[styles.icon, { tintColor: b1, transform: [{ rotate: "45deg" }] }]}
                                                        source={icon.plane}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>2 Flights</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hotelSign}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>1 Hotel</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.hiking}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Activity</Text>
                                            </View>

                                            <View style={{ rowGap: 8, alignItems: 'center' }}>
                                                <View style={styles.iconWrap}>
                                                    <Image
                                                        style={styles.icon}
                                                        source={icon.transfer}
                                                    />
                                                </View>

                                                <Text style={commonStyles.ns400}>0 Transfer</Text>
                                            </View>
                                        </View>

                                        {/* duration and price */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>4N <Text style={[commonStyles.ns400, { fontSize: 17, color: b3 }]}>Maldives</Text>
                                            </Text>

                                            <View>
                                                <Text style={[commonStyles.ns400, { fontSize: 24 }]}>
                                                    $2,622
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 13, color: b3 }]}>
                                                    per person
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* bottom */}
                                    <View style={styles.pkgBtm}>
                                        <Text style={[commonStyles.ns400, { fontSize: 13 }]}>
                                            Enjoy Exclusive Deals & Discounts
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* filter */}
                <View style={{ backgroundColor: b1, alignItems: "flex-end", justifyContent: "center", paddingVertical: 8, paddingHorizontal: 10 }}>
                    <TouchableOpacity
                        style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 120, alignItems: "center", justifyContent: "center", paddingVertical: 8, flexDirection: "row", columnGap: 10 }}
                        onPress={() => navigation.navigate("hpfilter")}
                    >
                        <Image
                            style={{ width: 15, height: 15, tintColor: blue }}
                            source={icon.filters}
                        />
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
                            Filter
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default HpSearches;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 18,
        flex: 1,
    },
    comWrap: {
        backgroundColor: white,
        paddingVertical: 15,
        paddingHorizontal: 18,
        marginHorizontal: 5,
        borderRadius: 10,
        rowGap: 15,
    },
    packeges: {
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        elevation: 3,
        backgroundColor: white,
    },
    iconWrap: {
        backgroundColor: "#D9D9D9",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 15,
    },
    icon: {
        width: 14,
        height: 14,
        tintColor: b1,
    },
    pkgBtm: {
        backgroundColor: '#EAF5FF',
        alignItems: "center",
        borderBottomLeftRadius: 40,
        paddingVertical: 15,
        marginTop: 8,
    },
});