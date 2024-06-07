import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, b3, black, blue, green, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';

const { width, height } = Dimensions.get("window");

const HotelDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.1} />
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
                                    style={{ width: 20, height: 20, marginRight: 3 }}
                                    source={icon.star}
                                />
                                <Image
                                    style={{ width: 20, height: 20, marginRight: 3 }}
                                    source={icon.star}
                                />
                                <Image
                                    style={{ width: 20, height: 20, marginRight: 3 }}
                                    source={icon.star}
                                />
                            </View>

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
                        </View>

                        {/* hotel Address */}
                        <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                            708 8th Avenue Southwest, T2P 1H2 Calgary, Canada - Great location - show map
                        </Text>

                        {/* gallery */}
                        <View style={{ rowGap: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ rowGap: 8 }}>
                                    <Image style={styles.galImg} source={image.image1} />
                                    <Image style={styles.galImg} source={image.image2} />
                                    <Image style={styles.galImg} source={image.image3} />
                                </View>

                                <Image style={styles.galImgBig} source={image.image5} />
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Image style={styles.galImg} source={image.image4} />
                                <Image style={styles.galImg} source={image.image6} />
                                <TouchableOpacity
                                    style={styles.showMorePics}
                                    onPress={() => navigation.navigate("hotelgallery")}
                                >
                                    <Image style={styles.galImg} source={image.image7} />
                                    <Text style={[commonStyles.ns700, { fontSize: 14, position: "absolute", color: white }]}>
                                        +46 photos
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* perks */}
                        <View style={styles.perksWrap}>
                            <View style={styles.perks}>
                                <Image style={{ width: 15, height: 15 }} source={icon.view} />
                                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                    View
                                </Text>
                            </View>

                            <View style={styles.perks}>
                                <Image style={{ width: 15, height: 15 }} source={icon.pawprint} />
                                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                    Pets allowed
                                </Text>
                            </View>

                            <View style={styles.perks}>
                                <Image style={{ width: 15, height: 15 }} source={icon.wifi} />
                                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                    Free WiFi
                                </Text>
                            </View>

                            <View style={styles.perks}>
                                <Image style={{ width: 15, height: 15 }} source={icon.swimming} />
                                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                    Outdoor swimming pool
                                </Text>
                            </View>

                            <View style={styles.perks}>
                                <Image style={{ width: 15, height: 15 }} source={icon.hours} />
                                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                    24-hour front desk
                                </Text>
                            </View>

                            <View style={styles.perks}>
                                <Image style={{ width: 15, height: 15 }} source={icon.coffeeShop} />
                                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                    Balcony
                                </Text>
                            </View>

                            <View style={styles.perks}>
                                <Image style={{ width: 15, height: 15 }} source={icon.airConditioner} />
                                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                    Air Conditioner
                                </Text>
                            </View>

                            <View style={styles.perks}>
                                <Image style={{ width: 15, height: 15 }} source={icon.bathTub} />
                                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                    Bath
                                </Text>
                            </View>
                        </View>

                        {/* about hotel */}
                        <View style={{ rowGap: 10 }}>
                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                Featuring on-site restaurant, Ramada Plaza by Wyndham Calgary Downtown offers convenient accommodation near entertainment, shopping, and city businesses. Free Wi-Fi is offered throughout the property. A 32" flat-screen TV features in each air-conditioned room at the Ramada Plaza by Wyndham Calgary Downtown. A work desk, coffee maker, and ironing facilities provide additional convenience. Free access to the fitness centre is provided to all guests . Valet parking only, and restrictions apply. Cheers Restaurant is family friendly, offering à la carte options for breakfast. The Fox on 6th Pub is open but has limited hours and features a full food and beverage menu. Just a block from Calgary transit, the property is a quick drive or train ride from all Calgary attractions.
                            </Text>

                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                Couples particularly like the location — they rated it 8.8 for a two-person trip for a two-person trip.
                            </Text>

                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Hotel chain/brand:</Text>

                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Ramada</Text>
                        </View>

                        {/* facilities */}
                        <View style={{ flexDirection: "row", columnGap: 25, marginTop: 5, alignItems: "flex-start" }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                    Most popular facilities
                                </Text>

                                {/* facility options */}
                                <View style={{ rowGap: 8, marginTop: 10 }}>
                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.danger} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Outdoor swimming pool
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.noSmoking} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Non-smoking rooms
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.gym} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Fitness centre
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.restaurant} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            2 restaurants
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.disabilities} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Facilities for disabled guests
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.parkingArea} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Private parking
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.coffeeMachine} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Tea/coffee maker in all rooms
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.cocktail} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Bar
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.coffee} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Breakfast
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.wifi} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Free WiFi
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* hotel logo */}
                            <View style={styles.ramada}>
                                <Image style={{}} source={image.ramada} />
                            </View>
                        </View>

                        {/* Property highlights */}
                        <View style={styles.pHigh}>
                            <Text style={commonStyles.ns700}>
                                Property highlights
                            </Text>

                            <View style={{ rowGap: 8 }}>
                                <Text style={commonStyles.ns600}>
                                    Perfect for a 2-week stay!
                                </Text>

                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 8, flex: 1 }}>
                                    <Image
                                        style={{ tintColor: b2, width: 18, height: 18 }}
                                        source={icon.location}
                                    />
                                    <Text style={[commonStyles.ns400, { fontSize: 15, flex: 1 }]}>
                                        Top location: Highly rated by recent guests (8.8)
                                    </Text>
                                </View>
                            </View>

                            <View style={{ rowGap: 8, marginTop: 6 }}>
                                <Text style={commonStyles.ns600}>
                                    Breakfast info
                                </Text>

                                <Text style={commonStyles.ns400}>
                                    American
                                </Text>

                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 8, flex: 1 }}>
                                    <Image
                                        style={{ tintColor: b2, width: 18, height: 18 }}
                                        source={icon.parkingArea}
                                    />
                                    <Text style={[commonStyles.ns400, { fontSize: 15, flex: 1 }]}>
                                        Private parking at the hotel
                                    </Text>
                                </View>
                            </View>

                            {/* reserve btn */}
                            <View style={{ marginVertical: 10 }}>
                                <TouchableOpacity
                                    style={[styles.btn, { marginHorizontal: 50 }]}
                                >
                                    <Text style={[commonStyles.lbB1, { color: white }]}>
                                        Reserve
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Availability */}
                        <View style={{ rowGap: 10, marginTop: 5 }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                Availability
                            </Text>

                            <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 7 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>
                                    Prices converted to USD
                                </Text>

                                <Image style={{ width: 15, height: 15, tintColor: b3 }} source={icon.info} />
                            </View>

                            <View style={{ backgroundColor: "#FFC355", paddingVertical: 7, paddingHorizontal: 10, borderRadius: 4 }}>
                                <View style={{ alignItems: "center", justifyContent: "space-between", rowGap: 10 }}>
                                    <TouchableOpacity style={{ backgroundColor: white, borderRadius: 2, flexDirection: 'row', alignItems: "center", paddingVertical: 10, paddingHorizontal: 20 }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: b1 }}
                                            source={icon.calendar}
                                        />
                                        <Text style={[commonStyles.ns600, { fontSize: 12, marginLeft: 6 }]}>
                                            Thu, Dec 21 - Thu, Jan 04
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ backgroundColor: white, borderRadius: 2, paddingVertical: 10, paddingHorizontal: 20 }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                            2 adults · 0 children · 1 room
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ alignItems: "center", marginTop: 10 }}>
                                    <TouchableOpacity
                                        style={[styles.btn, { marginHorizontal: 50 }]}
                                    >
                                        <Text style={[commonStyles.lbB1, { color: white }]}>
                                            Modify
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* Filter by */}
                        <View style={{ marginTop: 5 }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                Filter by:
                            </Text>

                            {/* filters */}
                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 20, marginTop: 15 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                    <TouchableOpacity>
                                        <View style={{ width: 15, height: 15, borderWidth: 1, borderRadius: 15, borderColor: blue }} />
                                    </TouchableOpacity>

                                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>Rooms</Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                    <TouchableOpacity>
                                        <View style={{ width: 15, height: 15, borderWidth: 1, borderRadius: 15, borderColor: blue }} />
                                    </TouchableOpacity>

                                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>Suites</Text>
                                </View>
                            </View>

                            {/* Room details */}
                            <View style={styles.roomDetails}>
                                <Text style={[commonStyles.ns600, { color: b2 }]}>
                                    King Room - Non-Smoking
                                </Text>

                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={icon.chart}
                                    />
                                    <Text style={[commonStyles.ns600, { fontSize: 14, color: "#D4111E" }]}>
                                        Only 4 rooms left on our site
                                    </Text>
                                </View>

                                <Text style={[commonStyles.ns400, { color: b2 }]}>
                                    1 extra-large double bed
                                </Text>

                                <View style={{ flexDirection: "row", rowGap: 6, columnGap: 6, flexWrap: "wrap", marginTop: 5 }}>
                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.door} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Room
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.swimming} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Rooftop pool
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.airConditioner} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Air conditioning
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.wifi} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Free WiFi
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.plans} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            26 m²
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.shower} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Ensuite bathroom
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.coffeeMachine} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Free Coffee machine
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 15, height: 15 }} source={icon.ledTv} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Flat-screen TV
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", rowGap: 6, columnGap: 8, flexWrap: "wrap", marginTop: 5 }}>
                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Free toiletries
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Toilet
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Bath or shower
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Towels
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Linen
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Socket near the bed
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Desk
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Seating Area
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Ironing facilities
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            TV
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Telephone
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Tea/Coffee maker
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Iron
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Interconnected room(s) available
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Heating
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Wake up service/Alarm clock
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Carpeted
                                        </Text>
                                    </View>

                                    <View style={styles.roomPerks}>
                                        <Image style={{ width: 14, height: 14, tintColor: green }} source={icon.check} />
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Clothes rack
                                        </Text>
                                    </View>
                                </View>

                                {/* breakfast 1 */}
                                <View style={styles.breakfast}>
                                    <View style={{ flex: 1, rowGap: 10 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 7 }}>
                                            <Image
                                                style={{ width: 16, height: 16 }}
                                                source={icon.user}
                                            />
                                            <Text style={commonStyles.ns600}>2 Guests</Text>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 2, marginTop: 10 }}>
                                            <Image
                                                style={{ width: 16, height: 16, tintColor: b1 }}
                                                source={icon.coffee}
                                            />
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Breakfast US$12(optional)</Text>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 5 }}>
                                            <Image
                                                style={{ width: 14, height: 14, tintColor: green, marginTop: 3 }}
                                                source={icon.check}
                                            />

                                            <View>
                                                <Text style={[commonStyles.ns600, { fontSize: 12, color: green }]}>
                                                    Free cancellation
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 12, color: green }]}>
                                                    before 20 December 2023
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 5 }}>
                                            <Image
                                                style={{ width: 14, height: 14, tintColor: green, marginTop: 3 }}
                                                source={icon.check}
                                            />

                                            <View>
                                                <Text style={[commonStyles.ns600, { fontSize: 12, color: green }]}>
                                                    No prepayment needed
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 12, color: green }]}>
                                                    - pay at the property
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, rowGap: 10 }}>
                                        <Text style={commonStyles.ns600}>USD 1,320</Text>

                                        <Text style={[commonStyles.ns600, { color: b3, fontSize: 11 }]}>
                                            +USD 162 (taxes and charges)
                                        </Text>

                                        <View style={styles.LED}>
                                            <Text style={[commonStyles.ns600, { color: white, fontSize: 12 }]}>
                                                Late Escape Deal
                                            </Text>
                                        </View>

                                        <View style={styles.incDec}>
                                            <TouchableOpacity style={styles.incDecBtn}>
                                                <Image
                                                    style={{ width: 15, height: 15 }}
                                                    source={icon.minus}
                                                />
                                            </TouchableOpacity>

                                            <Text style={commonStyles.ns600}>1</Text>

                                            <TouchableOpacity style={styles.incDecBtn}>
                                                <Image
                                                    style={{ width: 15, height: 15 }}
                                                    source={icon.plus}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                {/* breakfast 2 */}
                                <View style={styles.breakfast}>
                                    <View style={{ flex: 1, rowGap: 10 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 7 }}>
                                            <Image
                                                style={{ width: 16, height: 16 }}
                                                source={icon.user}
                                            />
                                            <Text style={commonStyles.ns600}>2 Guests</Text>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 2, marginTop: 10 }}>
                                            <Image
                                                style={{ width: 16, height: 16, tintColor: b1 }}
                                                source={icon.coffee}
                                            />
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Breakfast US$12(optional)</Text>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 5 }}>
                                            <Image
                                                style={{ width: 14, height: 14, tintColor: green, marginTop: 3 }}
                                                source={icon.check}
                                            />

                                            <View>
                                                <Text style={[commonStyles.ns600, { fontSize: 12, color: green }]}>
                                                    Free cancellation
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 12, color: green }]}>
                                                    before 20 December 2023
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 5 }}>
                                            <Image
                                                style={{ width: 14, height: 14, tintColor: green, marginTop: 3 }}
                                                source={icon.check}
                                            />

                                            <View>
                                                <Text style={[commonStyles.ns600, { fontSize: 12, color: green }]}>
                                                    No prepayment needed
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 12, color: green }]}>
                                                    - pay at the property
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, rowGap: 10 }}>
                                        <Text style={commonStyles.ns600}>USD 1,320</Text>

                                        <Text style={[commonStyles.ns600, { color: b3, fontSize: 11 }]}>
                                            +USD 162 (taxes and charges)
                                        </Text>

                                        <View style={styles.incDec}>
                                            <TouchableOpacity style={styles.incDecBtn}>
                                                <Image
                                                    style={{ width: 15, height: 15 }}
                                                    source={icon.minus}
                                                />
                                            </TouchableOpacity>

                                            <Text style={commonStyles.ns600}>1</Text>

                                            <TouchableOpacity style={styles.incDecBtn}>
                                                <Image
                                                    style={{ width: 15, height: 15 }}
                                                    source={icon.plus}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                {/* Immediate Confirmation */}
                                <View style={{ flexDirection: "row", alignItems: 'center', alignSelf: "center", columnGap: 5, marginVertical: 10 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: black, width: 10, height: 10, borderRadius: 10 }} />
                                    <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                        Immediate Confirmation
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/*  */}
                        <View style={styles.leafStand}>
                            <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                Ramada Plaza by Wyndham Calgary Downtown may charge additional fees not shown above. See <Text onPress={() => Alert.alert("")} style={[commonStyles.ns400, { fontSize: 12, color: blue, textDecorationLine: "underline" }]}>the fine print</Text> to read more about this property.
                            </Text>
                        </View>

                        {/* leaf standard */}
                        <View style={styles.leafStand}>
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

                            <Text style={[commonStyles.ns600, { fontSize: 12, marginTop: 12, marginLeft: 5 }]}>
                                This property has told us they're taking some steps towards sustainability that can have environmental and social impact. We've worked with experts including Travalyst and Sustainalize to create the Travel Sustainable programme - making it easier for you to experience the world more sustainably.
                            </Text>
                        </View>

                        {/* faq */}
                        <View style={styles.faq}>
                            <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center", marginTop: 15 }]}>
                                Travellers are asking
                            </Text>

                            <View style={{ paddingHorizontal: 20, paddingVertical: 20, borderColor: "#E7E7E7", borderWidth: 1, borderRadius: 4, marginTop: 10 }}>
                                <TouchableOpacity
                                    style={styles.booking}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: b2 }}
                                            source={icon.chat}
                                        />

                                        <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>
                                            Can I park there?
                                        </Text>
                                    </View>

                                    <View style={styles.bookingRight}>
                                        <Image
                                            style={{ width: 16, height: 16, marginLeft: 10 }}
                                            source={require("../../../assets/icons/right-arrow.png")}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <View style={styles.line} />

                                <TouchableOpacity
                                    style={styles.booking}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: b2 }}
                                            source={icon.chat}
                                        />

                                        <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>
                                            Is the swimming pool open?
                                        </Text>
                                    </View>

                                    <View style={styles.bookingRight}>
                                        <Image
                                            style={{ width: 16, height: 16, marginLeft: 10 }}
                                            source={require("../../../assets/icons/right-arrow.png")}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <View style={styles.line} />

                                <TouchableOpacity
                                    style={styles.booking}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: b2 }}
                                            source={icon.chat}
                                        />

                                        <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>
                                            Do they serve breakfast?
                                        </Text>
                                    </View>

                                    <View style={styles.bookingRight}>
                                        <Image
                                            style={{ width: 16, height: 16, marginLeft: 10 }}
                                            source={require("../../../assets/icons/right-arrow.png")}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <View style={styles.line} />

                                <TouchableOpacity
                                    style={styles.booking}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: b2 }}
                                            source={icon.chat}
                                        />

                                        <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>
                                            Is the restaurant open?
                                        </Text>
                                    </View>

                                    <View style={styles.bookingRight}>
                                        <Image
                                            style={{ width: 16, height: 16, marginLeft: 10 }}
                                            source={require("../../../assets/icons/right-arrow.png")}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <View style={styles.line} />

                                <TouchableOpacity
                                    style={styles.booking}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: b2 }}
                                            source={icon.chat}
                                        />

                                        <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>
                                            How and when do I pay?
                                        </Text>
                                    </View>

                                    <View style={styles.bookingRight}>
                                        <Image
                                            style={{ width: 16, height: 16, marginLeft: 10 }}
                                            source={require("../../../assets/icons/right-arrow.png")}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ paddingHorizontal: 20, paddingVertical: 20, borderColor: "#E7E7E7", borderWidth: 1, borderRadius: 4, marginTop: 10 }}>
                                <View style={{ alignItems: "center", rowGap: 20, marginTop: 50 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 22 }]}>
                                        Still looking?
                                    </Text>

                                    <View>
                                        <TouchableOpacity style={styles.blueBtn}>
                                            <Text style={[commonStyles.ns600, { color: blue }]}>
                                                Ask a question
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <Text style={[commonStyles.ns600, { fontSize: 15 }]}>
                                        We have an instant answer to most questions
                                    </Text>
                                </View>
                            </View>

                            <View style={{ marginVertical: 10, alignItems: "center" }}>
                                <TouchableOpacity style={styles.blueBtn}>
                                    <Text style={[commonStyles.ns600, { color: blue }]}>
                                        See other questions (20)
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* house rules */}
                        <View style={styles.houseRules}>
                            <View style={{ paddingHorizontal: 10, rowGap: 20 }}>
                                <Text style={[commonStyles.ns700, { textAlign: "center" }]}>
                                    House Rules
                                </Text>

                                <Text style={[commonStyles.ns400, { color: b3 }]}>
                                    Ramada Plaza by Wyndham Calgary Downtown takes special requests - add in the next step!
                                </Text>
                            </View>

                            <View style={styles.rules}>
                                {/* check in */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={icon.checkin}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, width: 80 }]}>
                                        Check-in
                                    </Text>

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 8 }}>
                                        <Text style={commonStyles.ns400}>
                                            From 15:00
                                        </Text>

                                        <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                                            Guests are required to show a photo identification and credit card upon check-in
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.hr} />

                                {/* check out */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={icon.checkout}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, width: 80 }]}>
                                        Check-out
                                    </Text>

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 8 }}>
                                        <Text style={commonStyles.ns400}>
                                            Until 11:00
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.hr} />

                                {/* cancel */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={icon.info}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, width: 80 }]}>
                                        Cancellation/prepayment
                                    </Text>

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 8 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Cancellation and prepayment policies vary according to accommodation type. Please check what <Text style={[commonStyles.ns700, { fontSize: 12, color: blue }]}>conditions</Text> may apply to each option when making your selection.
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.hr} />

                                {/* refund */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={icon.info}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, width: 80 }]}>
                                        Refundable damage deposit
                                    </Text>

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 8 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            A damage deposit of CAD 100 is required on arrival. That's about 73.54USD. This will be collected by credit card. You should be reimbursed on check-out. Your deposit will be refunded in full via credit card, subject to an inspection of the property.
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.hr} />

                                {/* child beds */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={icon.family}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, width: 80 }]}>
                                        Children and beds
                                    </Text>

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 8 }}>
                                        <Text style={commonStyles.ns400}>
                                            Child policies
                                        </Text>

                                        <View style={{ rowGap: 3 }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                Children of any age are welcome.
                                            </Text>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                Children 18 years and above will be charged as adults at this property.
                                            </Text>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                {/* cot & extra policies */}
                                <View style={{ marginVertical: 10, rowGap: 10 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 14, textAlign: "center" }]}>
                                        Cot and extra bed policies
                                    </Text>

                                    {/* box 1 */}
                                    <View style={styles.box}>
                                        <Text style={[commonStyles.ns600, { fontSize: 14, marginLeft: 10 }]}>
                                            0 - 2 years
                                        </Text>

                                        <View style={styles.hr} />

                                        <View style={{ marginHorizontal: 10, rowGap: 15 }}>
                                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 20 }}>
                                                <Image
                                                    style={{ width: 15, height: 15 }}
                                                    source={icon.bed}
                                                />

                                                <Text style={[commonStyles.ns400, { flex: 1, fontSize: 12 }]}>
                                                    Extra bed upon request
                                                </Text>

                                                <Text style={[commonStyles.ns400, { flex: 1, fontSize: 12 }]}>
                                                    CAD 10 per child, per night
                                                </Text>
                                            </View>

                                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 20 }}>
                                                <Image
                                                    style={{ width: 15, height: 15 }}
                                                    source={icon.barrier}
                                                />

                                                <Text style={[commonStyles.ns400, { flex: 1, fontSize: 12 }]}>
                                                    Cot upon request
                                                </Text>

                                                <Text style={[commonStyles.ns400, { flex: 1, fontSize: 12, color: "#008009" }]}>
                                                    Free
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* box 2 */}
                                    <View style={styles.box}>
                                        <Text style={[commonStyles.ns600, { fontSize: 14, marginLeft: 10 }]}>
                                            3+ years
                                        </Text>

                                        <View style={styles.hr} />

                                        <View style={{ marginHorizontal: 10, rowGap: 15 }}>
                                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 20 }}>
                                                <Image
                                                    style={{ width: 15, height: 15 }}
                                                    source={icon.bed}
                                                />

                                                <Text style={[commonStyles.ns400, { flex: 1, fontSize: 12 }]}>
                                                    Extra bed upon request
                                                </Text>

                                                <Text style={[commonStyles.ns400, { flex: 1, fontSize: 12 }]}>
                                                    CAD 10 per child, per night
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                {/* cot price */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <View style={{ width: 15, height: 15 }} />

                                    <View style={{ width: 80 }} />

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 3 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Prices for cots and extra beds are not included in the total price, and will have to be paid for separately during your stay.
                                        </Text>

                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            The number of extra beds and cots allowed is dependent on the option you choose. Please check your selected option for more information.
                                        </Text>

                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            All cots and extra beds are subject to availability.
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.hr} />

                                {/* age */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={icon.child}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, width: 80 }]}>
                                        Age restriction
                                    </Text>

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 8 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            The minimum age for check-in is 18
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.hr} />

                                {/* pets */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <Image
                                        style={{ width: 15, height: 15, tintColor: b1 }}
                                        source={icon.pawprint}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, width: 80 }]}>
                                        Pets
                                    </Text>

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 8 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Pets are allowed on request. Charges may be applicable.
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.hr} />

                                {/* groups */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <Image
                                        style={{ width: 15, height: 15, tintColor: b1 }}
                                        source={icon.group}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, width: 80 }]}>
                                        Groups
                                    </Text>

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 8 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            When booking more than 9 rooms, different policies and additional supplements may apply.
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.hr} />

                                {/* cards */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 25 }}>
                                    <Image
                                        style={{ width: 15, height: 15, tintColor: b1 }}
                                        source={icon.card}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, width: 80 }]}>
                                        Cards accepted at this hotel
                                    </Text>

                                    <View style={{ flex: 1, marginLeft: 10, rowGap: 8 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                            Ramada Plaza by Wyndham Calgary Downtown accepts all debit/credit cards and reserves the right to temporarily hold an amount prior to arrival.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* the fine print */}
                        <View style={styles.tfp}>
                            <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center" }]}>
                                The fine print
                            </Text>

                            {/* the final print rules */}
                            <View style={styles.tfpRule}>
                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    Please note, this property is 100% non-smoking.
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    Secure, heated valet parking is available at a cost of CAD 23 per night (all weekdays).
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    Please note, a valid credit card is required at checkin for all rooms, including prepaid reservations.
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    In response to Coronavirus (COVID-19), additional safety and sanitation measures are in effect at this property.
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    Food & beverage services at this property may be limited or unavailable due to Coronavirus (COVID-19).
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    Due to Coronavirus (COVID-19), this property is taking steps to help protect the safety of guests and staff. Certain services and amenities may be reduced or unavailable as a result.
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply.
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    Swimming pool #1 is closed from Sat 30 Sept 2023 until Thu 30 May 2024
                                </Text>

                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    A damage deposit of CAD 100 is required on arrival. That's about 73.54USD. This will be collected by credit card. You should be reimbursed on check-out. Your deposit will be refunded in full via credit card, subject to an inspection of the property.
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                {/* Reserve */}
                <View style={{ backgroundColor: b1, alignItems: "center", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 10, flexDirection: "row" }}>
                    <View style={{ rowGap: 3 }}>
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
                            Price
                        </Text>
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
                            $1320 + Taxes
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 150, alignItems: "center", justifyContent: "center", paddingVertical: 8 }}
                        onPress={() => navigation.navigate("hotelud")}
                    >
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
                            Reserve
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        </SafeAreaView >
    )
};

export default HotelDetails;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 18,
        flex: 1,
        backgroundColor: white,
    },
    galImg: {
        width: 122,
        height: 82,
    },
    galImgBig: {
        width: 253,
        height: 258,
    },
    showMorePics: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    perks: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#D8D8D8',
        backgroundColor: white,
        columnGap: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    perksWrap: {
        flexWrap: "wrap",
        paddingHorizontal: 10,
        flexDirection: "row",
        columnGap: 5,
        rowGap: 5,
        marginTop: 5,
    },
    ramada: {
        borderWidth: 1,
        borderColor: "#EBF3FF",
        backgroundColor: white,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: 'center',
    },
    pHigh: {
        backgroundColor: "#E4F4FF",
        borderRadius: 2,
        marginHorizontal: 6,
        paddingVertical: 10,
        paddingHorizontal: 15,
        rowGap: 10,
    },
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    roomDetails: {
        backgroundColor: white,
        elevation: 3,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        rowGap: 10,
    },
    roomPerks: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    breakfast: {
        flexDirection: "row",
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "#D8D8D8",
        marginTop: 10,
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderRadius: 4,
        columnGap: 10,
    },
    LED: {
        backgroundColor: "#24AD53",
        borderColor: "#24AD53",
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: "flex-start",
        paddingVertical: 3,
    },
    incDec: {
        borderWidth: 1,
        borderColor: b3,
        borderRadius: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        width: 150,
        paddingVertical: 8,
        paddingHorizontal: 6,
    },
    incDecBtn: {
        paddingHorizontal: 6,
        paddingVertical: 6,
    },
    faq: {
        rowGap: 10,
        marginTop: 6,
        paddingHorizontal: 10,
        backgroundColor: white,
        paddingBottom: 10,
    },
    leafStand: {
        borderRadius: 2,
        borderColor: "#FAFCFF",
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: white,
    },
    booking: {
        backgroundColor: white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    bookingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#E7E7E7',
        height: 1,
        marginVertical: 2,
    },
    blueBtn: {
        borderWidth: 1,
        borderColor: blue,
        borderRadius: 2,
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    houseRules: {
        backgroundColor: white,
        paddingTop: 10,
        rowGap: 20,
    },
    rules: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#D8D8D8",
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    hr: {
        backgroundColor: '#D8D8D8',
        height: 1,
        marginVertical: 10,
    },
    box: {
        borderWidth: 1,
        borderColor: "#D8D8D8",
        borderRadius: 3,
        marginHorizontal: 20,
        paddingVertical: 8,
    },
    tfp: {
        marginBottom: 10,
    },
    tfpRule: {
        marginTop: 20,
        backgroundColor: "#EBF3FF",
        borderWidth: 1,
        borderColor: "#D8D8D8",
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 10,
        rowGap: 10,
    },
});