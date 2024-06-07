import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import { b2, b3, blue, white } from '../../../config/colors';
import image from '../../../config/ImageAssets';

const HotelFilter = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={{ flex: 1, marginTop: 45 }}>
                {/* nav */}
                <TouchableOpacity
                    style={styles.nav}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{ width: 22, height: 22, marginRight: 10 }}
                        source={icon.next}
                    />

                    <Text style={[commonStyles.ns600, { fontSize: 20, textTransform: "uppercase" }]}>
                        Filter
                    </Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20, flex: 1 }}>
                    <ScrollView
                        style={{ marginLeft: 15, marginRight: 60 }}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* filter by */}
                        <View style={styles.filterBy}>
                            <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Filter by:
                                </Text>
                            </View>

                            <View style={styles.hr} />

                            {/* budget */}
                            <View style={{ paddingHorizontal: 10, rowGap: 10, marginBottom: 10 }}>
                                <Text style={commonStyles.ns600}>Your Budget (per night)</Text>
                                <Text style={commonStyles.ns600}>$20 - $300+</Text>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={{}}
                                        source={image.priceBar}
                                    />
                                </View>
                            </View>

                            <View style={styles.hr} />

                            {/* Popular Filters */}
                            <View style={{ paddingHorizontal: 10, marginTop: 8 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                    Popular Filters
                                </Text>

                                {/* Popular Filters options */}
                                <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Free cancellation
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>174</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                No prepayment
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>93</Text>
                                    </View>

                                    {/* break / 2 lines */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <View style={{ marginLeft: 15, rowGap: 5 }}>
                                                <Text style={commonStyles.ns600}>
                                                    Less than 1/2 mile
                                                </Text>
                                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                                    Distance from center of Calgary
                                                </Text>
                                            </View>

                                        </View>

                                        <Text style={commonStyles.ns600}>17</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Hotels
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>86</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Breakfast Included
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>70</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                5 stars
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>3</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Calgary Stampede
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>21</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Downtown Calgary
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>45</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.hr} />

                            {/* Sustainability */}
                            <View style={{ paddingHorizontal: 10, marginTop: 8 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                    Sustainability
                                </Text>

                                <View style={{ paddingVertical: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <View style={{ marginLeft: 15, flex: 1, rowGap: 5 }}>
                                                <Text style={commonStyles.ns600}>
                                                    Travel Sustainable properties
                                                </Text>
                                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                                    Properties taking steps to make your stay more sustainable
                                                </Text>
                                            </View>

                                        </View>

                                        <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>9000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* property rating */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Property rating
                            </Text>

                            <Text style={[commonStyles.ns600, { fontSize: 14, marginTop: 2 }]}>
                                Includes stars and other ratings
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            2 stars
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>10</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            3 stars
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>62</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            4 stars
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>80</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            5 stars
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>3</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Unrated
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>35</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Distance from center of Calgary */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Distance from center of Calgary
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Less than 1/2 mile
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>17</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Less than 1 mile
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>42</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Less than 2 mile
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>54</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Fun Things To Do */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Fun Things To Do
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Fitness center
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>85</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Indoor pool
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>57</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Fitness
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>57</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Hot tub/Jacuzzi
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>48</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Golf course (within 2 miles)
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>35</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Reservation policy */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Reservation policy
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Free cancellation
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>174</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            No prepayment
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>93</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Meals */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Meals
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Kitchen amenities
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>116</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Breakfast Included
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>70</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Property Type */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Property Type
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Entire homes & apartments
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>138</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Hotels
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>86</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Apartments
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>56</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Vacation Homes
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>23</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Guesthouses
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>11</Text>
                                </View>

                                {/* show all */}
                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
                                >
                                    <Text style={[commonStyles.ns600, { color: blue, marginRight: 10 }]}>
                                        Show all {9}
                                    </Text>

                                    <Image
                                        style={{ width: 20, height: 20, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                        source={icon.rightArrow}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Number of bedrooms */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Number of bedrooms
                            </Text>

                            <View style={{ paddingVertical: 10, marginTop: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={commonStyles.ns600}>
                                    Bedrooms
                                </Text>

                                <View style={styles.incDec}>
                                    <TouchableOpacity style={styles.incDecBtn}>
                                        <Image
                                            style={{ width: 15, height: 15 }}
                                            source={icon.minus}
                                        />
                                    </TouchableOpacity>

                                    <Text style={commonStyles.ns600}>0</Text>

                                    <TouchableOpacity style={styles.incDecBtn}>
                                        <Image
                                            style={{ width: 15, height: 15 }}
                                            source={icon.plus}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Private bathrooms */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Private bathrooms
                            </Text>

                            <View style={{ paddingVertical: 10, marginTop: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={commonStyles.ns600}>
                                    Bathrooms
                                </Text>

                                <View style={styles.incDec}>
                                    <TouchableOpacity style={styles.incDecBtn}>
                                        <Image
                                            style={{ width: 15, height: 15 }}
                                            source={icon.minus}
                                        />
                                    </TouchableOpacity>

                                    <Text style={commonStyles.ns600}>0</Text>

                                    <TouchableOpacity style={styles.incDecBtn}>
                                        <Image
                                            style={{ width: 15, height: 15 }}
                                            source={icon.plus}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Landmarks */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Landmarks
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Calgary Stampede
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>21</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Calgary Tower
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>38</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Heritage Park
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>2</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Bed Preference */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Bed Preference
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Twin beds
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>1</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Double bed
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>187</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Review Score */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Review Score
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Wonderful: 9+
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>46</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Very Good: 8+
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>121</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Good: 7+
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>154</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Pleasant: 6+
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>166</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Amenities */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Amenities
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Free WiFi
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>184</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Parking
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>178</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Non-smoking rooms
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>142</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Family rooms
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>93</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            24-hour front desk
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>90</Text>
                                </View>

                                {/* show all */}
                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
                                >
                                    <Text style={[commonStyles.ns600, { color: blue, marginRight: 10 }]}>
                                        Show all {14}
                                    </Text>

                                    <Image
                                        style={{ width: 20, height: 20, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                        source={icon.rightArrow}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Room amenities */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Room amenities
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Executive lounge access
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>6</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Washing machine
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>86</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Private bathroom
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>138</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Socket near the bed
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>84</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Private pool
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>2</Text>
                                </View>

                                {/* show all */}
                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
                                >
                                    <Text style={[commonStyles.ns600, { color: blue, marginRight: 10 }]}>
                                        Show all {25}
                                    </Text>

                                    <Image
                                        style={{ width: 20, height: 20, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                        source={icon.rightArrow}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Neighborhood */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Neighborhood
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Southwest Calgary
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>19</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Downtown Calgary
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>45</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Northeast Calgary
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>47</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Beltline
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>20</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            University of Calgary District
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>6</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Seton
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>3</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Kensington
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>1</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Brands */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Brands
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Holiday Inn Express
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>5</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Comfort Inn
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>4</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Sandman Hotel Group
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>4</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Best Western Plus
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>4</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Days Inn
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>3</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Holiday Inn Hotels & Resorts
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>3</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Courtyard by Marriott
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>3</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Residence Inn
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>3</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Super 8
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>3</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Hampton Inn
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>3</Text>
                                </View>

                                {/* show all */}
                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
                                >
                                    <Text style={[commonStyles.ns600, { color: blue, marginRight: 10 }]}>
                                        Show all {20}
                                    </Text>

                                    <Image
                                        style={{ width: 20, height: 20, transform: [{ rotate: "90deg" }], tintColor: blue }}
                                        source={icon.rightArrow}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Property Accessibility */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Property Accessibility
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Wheelchair accessible
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>39</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Toilet with grab rails
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>28</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Raised toilet
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>23</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Lowered sink
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>21</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Bathroom emergency cord
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>6</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Visual aids (Braille)
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>16</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Visual aids (tactile signs)
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>9</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                            Auditory guidance
                                        </Text>
                                    </View>

                                    <Text style={commonStyles.ns600}>9</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        {/* Room Accessibility */}
                        <View style={{ paddingHorizontal: 15, marginTop: 8 }}>
                            <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                Room Accessibility
                            </Text>

                            <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Entire unit located on ground floor
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>25</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Upper floors accessible by elevator
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>54</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Entire unit wheelchair accessible
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>24</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Toilet with grab rails
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>18</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Adapted bath
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>12</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Roll-in shower
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>19</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Walk-in shower
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>36</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Raised toilet
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>19</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Lower sink
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>11</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Emergency cord in bathroom
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>3</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { marginLeft: 15, flex: 1 }]}>
                                            Shower chair
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { marginLeft: 10 }]}>11</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.hr} />

                        <View style={{ marginTop: 8, marginBottom: 10, borderRadius: 8, alignItems: "center", justifyContent: "center" }}>
                            <Image
                                style={{ width: "100%" }}
                                source={image.map}
                                resizeMode='stretch'
                            />

                            <Image
                                style={{ width: 40, height: 40, position: "absolute", top: 40 }}
                                source={icon.locDest}
                            />

                            <TouchableOpacity style={{ position: "absolute", bottom: 20 }}>
                                <Text style={commonStyles.ns600}>Show on map</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    {/* bottom */}
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                        <TouchableOpacity
                            style={styles.apply}
                        >
                            <Text style={[commonStyles.lbB1, { color: white, textTransform: 'uppercase' }]}>
                                Apply
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.clear}
                        >
                            <Text style={[commonStyles.lbB1, { color: b2, textTransform: 'uppercase' }]}>
                                CLEAR ALL FILTERS
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default HotelFilter;

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        marginLeft: 13,
    },
    filterBy: {
        borderWidth: 1,
        borderColor: '#D8D8D8',
        borderRadius: 4,
    },
    hr: {
        backgroundColor: "#D8D8D8",
        height: 1,
        marginVertical: 10,
    },
    tick: {
        backgroundColor: blue,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    tickImg: {
        width: 12,
        height: 12,
        tintColor: white,
    },
    apply: {
        borderRadius: 8,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 40,
    },
    clear: {
        borderRadius: 8,
        borderColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2
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
        paddingHorizontal: 6
    },
    incDecBtn: {
        paddingHorizontal: 6,
        paddingVertical: 8,
    },
});