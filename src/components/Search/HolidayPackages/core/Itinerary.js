import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, b2, b3, black, blue, white } from '../../../../config/colors';
import icon from '../../../../config/IconAssets';
import image from '../../../../config/ImageAssets';

const Itinerary = ({ selectedTopMenu }) => {
    return (
        <View style={styles.wrapper}>
            {/* head */}
            <View style={{ paddingVertical: 10, paddingHorizontal: 5, rowGap: 10 }}>
                <Text style={[styles.lato, { fontSize: 16, color: b3 }]}>
                    Day Plan
                </Text>

                <View style={{}}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2 }}>
                            <TouchableOpacity style={{ backgroundColor: b3, borderRadius: 16, width: 80, alignItems: 'center', justifyContent: "center", paddingVertical: 5 }}>
                                <Text style={[styles.lato, { fontSize: 10, color: white }]}>
                                    21 Dec, Thu
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderRadius: 16, width: 80, alignItems: 'center', justifyContent: "center", paddingVertical: 5 }}>
                                <Text style={[styles.lato, { fontSize: 10, color: b3 }]}>
                                    22 Dec, Fri
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderRadius: 16, width: 80, alignItems: 'center', justifyContent: "center", paddingVertical: 5 }}>
                                <Text style={[styles.lato, { fontSize: 10, color: b3 }]}>
                                    23 Dec, Sat
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderRadius: 16, width: 80, alignItems: 'center', justifyContent: "center", paddingVertical: 5 }}>
                                <Text style={[styles.lato, { fontSize: 10, color: b3 }]}>
                                    24 Dec, Sun
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderRadius: 16, width: 80, alignItems: 'center', justifyContent: "center", paddingVertical: 5 }}>
                                <Text style={[styles.lato, { fontSize: 10, color: b3 }]}>
                                    25 Dec, Mon
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderRadius: 16, width: 80, alignItems: 'center', justifyContent: "center", paddingVertical: 5 }}>
                                <Text style={[styles.lato, { fontSize: 10, color: b3 }]}>
                                    26 Dec, Tue
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderRadius: 16, width: 80, alignItems: 'center', justifyContent: "center", paddingVertical: 5 }}>
                                <Text style={[styles.lato, { fontSize: 10, color: b3 }]}>
                                    27 Dec, Wed
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderRadius: 16, width: 80, alignItems: 'center', justifyContent: "center", paddingVertical: 5 }}>
                                <Text style={[styles.lato, { fontSize: 10, color: b3 }]}>
                                    28 Dec, Thu
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>

            {/* flights */}
            {selectedTopMenu === "flt" && <View>
                {/* day 1 */}
                <View style={{ paddingBottom: 10, paddingHorizontal: 5, rowGap: 10 }}>
                    <View style={{ backgroundColor: "#D9D9D9", borderRadius: 30, paddingLeft: 15, paddingVertical: 8 }}>
                        <Text style={[styles.lato, { fontSize: 14 }]}>
                            Day 1 - Arrival in Male
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12 }]}>
                            INCLUDED:
                        </Text>

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, transform: [{ rotate: "45deg" }], tintColor: b1 }}
                                source={icon.plane}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Flight
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, tintColor: b1 }}
                                source={icon.hotelSign}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Hotel
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={icon.hiking}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Activity
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>
                            Flight from New Delhi to Male <Text style={[styles.lato, { fontSize: 14 }]}>04h 05m</Text>
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}>
                        <TouchableOpacity style={{ paddingVertical: 2, paddingHorizontal: 5 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: blue, textTransform: "uppercase" }]}>
                                Remove
                            </Text>
                        </TouchableOpacity>

                        <View style={{ backgroundColor: "#D9D9D9", width: 1.5, height: 18 }} />

                        <TouchableOpacity style={{ paddingVertical: 2, paddingHorizontal: 5 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: blue, textTransform: "uppercase" }]}>
                                Change
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 25, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                            UK-273
                        </Text>

                        <View>
                            <Text style={[styles.lato, { fontSize: 16 }]}>11:55</Text>
                            <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>Wed, 20 Dec</Text>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>New Delhi</Text>
                        </View>

                        <Image
                            style={{ width: 30, height: 15 }}
                            source={icon.longArrow}
                        />

                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={[styles.lato, { fontSize: 16 }]}>15:30</Text>
                            <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>Wed, 20 Dec</Text>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>Male</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                            Baggage
                        </Text>

                        <View style={{ flexDirection: "row", columnGap: 5, alignItems: 'center' }}>
                            <Image
                                style={{ width: 16, height: 16 }}
                                source={icon.duffleBag}
                            />
                            <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>
                                Cabin :7 Kgs
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", columnGap: 5, alignItems: 'center' }}>
                            <Image
                                style={{ width: 18, height: 18 }}
                                source={icon.baggage}
                            />
                            <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>
                                Check-in :20 Kgs
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginVertical: 5 }} />

                {/* day 3 */}
                <View style={{ paddingVertical: 10, paddingHorizontal: 5, rowGap: 10 }}>
                    <View style={{ backgroundColor: "#D9D9D9", borderRadius: 30, paddingLeft: 15, paddingVertical: 8 }}>
                        <Text style={[styles.lato, { fontSize: 14 }]}>
                            Day 4 - Departure from Male
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12 }]}>
                            INCLUDED:
                        </Text>

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, transform: [{ rotate: "45deg" }], tintColor: b1 }}
                                source={icon.plane}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Flight
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, tintColor: b1 }}
                                source={icon.hotelSign}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Hotel
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={icon.hiking}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Activity
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>
                            Flight from New Delhi to Male <Text style={[styles.lato, { fontSize: 14 }]}>04h 05m</Text>
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}>
                        <TouchableOpacity style={{ paddingVertical: 2, paddingHorizontal: 5 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: blue, textTransform: "uppercase" }]}>
                                Remove
                            </Text>
                        </TouchableOpacity>

                        <View style={{ backgroundColor: "#D9D9D9", width: 1.5, height: 18 }} />

                        <TouchableOpacity style={{ paddingVertical: 2, paddingHorizontal: 5 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: blue, textTransform: "uppercase" }]}>
                                Change
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 25, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                            UK-273
                        </Text>

                        <View>
                            <Text style={[styles.lato, { fontSize: 16 }]}>11:55</Text>
                            <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>Wed, 20 Dec</Text>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>New Delhi</Text>
                        </View>

                        <Image
                            style={{ width: 30, height: 15 }}
                            source={icon.longArrow}
                        />

                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={[styles.lato, { fontSize: 16 }]}>15:30</Text>
                            <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>Wed, 20 Dec</Text>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>Male</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                            Baggage
                        </Text>

                        <View style={{ flexDirection: "row", columnGap: 5, alignItems: 'center' }}>
                            <Image
                                style={{ width: 16, height: 16 }}
                                source={icon.duffleBag}
                            />
                            <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>
                                Cabin :7 Kgs
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", columnGap: 5, alignItems: 'center' }}>
                            <Image
                                style={{ width: 18, height: 18 }}
                                source={icon.baggage}
                            />
                            <Text style={[styles.lato, { fontSize: 14, color: b3 }]}>
                                Check-in :20 Kgs
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginBottom: 15, marginTop: 5 }} />
            </View>}

            {/* hotels */}
            {selectedTopMenu === "htl" && <View>
                {/* day 1 */}
                <View style={{ paddingBottom: 10, paddingHorizontal: 5, rowGap: 10 }}>
                    <View style={{ backgroundColor: "#D9D9D9", borderRadius: 30, paddingLeft: 15, paddingVertical: 8 }}>
                        <Text style={[styles.lato, { fontSize: 14 }]}>
                            Day 1 - Maldives
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12 }]}>
                            INCLUDED:
                        </Text>

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, transform: [{ rotate: "45deg" }], tintColor: b1 }}
                                source={icon.plane}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Flight
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, tintColor: b1 }}
                                source={icon.hotelSign}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Hotel
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={icon.hiking}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Activity
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 15 }}>
                        <Image
                            style={{ borderRadius: 8 }}
                            source={image.hpgal2}
                        />

                        {/* right */}
                        <View style={{ flex: 1, rowGap: 5 }}>
                            <TouchableOpacity
                                style={{ alignSelf: "flex-end" }}
                            >
                                <Text style={[styles.lato, { fontSize: 13, color: blue }]}>
                                    Change
                                </Text>
                            </TouchableOpacity>

                            <View style={{ backgroundColor: b2, alignSelf: "flex-start", paddingVertical: 4, borderRadius: 4, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[styles.lato, { fontSize: 10, color: white }]}>4.5/5</Text>
                            </View>

                            <Text style={[styles.lato, { fontSize: 12 }]}>
                                Hotel
                            </Text>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                Activity in Maldives
                                <Text style={[styles.lato, { fontSize: 12 }]}> 1 Hr</Text>
                            </Text>

                            <Text style={[styles.lato, { fontSize: 16 }]}>
                                Meeru Island Resort & Spa - Holidays Selections
                            </Text>
                            <Text style={[styles.lato, { fontSize: 13, color: b3 }]}>
                                North Male Atoll
                            </Text>
                            <Text style={[styles.lato, { fontSize: 13, color: b3 }]}>
                                Wed, 20 Dec 2023 - Fri, 22 Dec 2023
                            </Text>
                        </View>
                    </View>

                    {/* conclusion */}
                    <View style={styles.conclusion}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={styles.lato}>
                                Jacuzzi Beach Villa (Adult Only)
                            </Text>

                            <TouchableOpacity
                                style={{ paddingVertical: 5 }}
                            >
                                <Text style={[styles.lato, { fontSize: 10, color: blue }]}>
                                    CHANGE ROOM
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.lato, { color: b3 }]}>
                            Meal Plan : All meals - Breakfast, Lunch & Dinner
                        </Text>
                        <Text style={[styles.lato, { color: b3 }]}>
                            Room Inclusions
                        </Text>

                        <View style={{ rowGap: 2 }}>
                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 4 }}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: "#249995" }}
                                    source={icon.check}
                                />
                                <Text style={[styles.lato, { color: "#249995", fontSize: 12, flex: 1 }]}>
                                    Free Honeymoon Package: No. of Units - 1; Type of Services - Fruit Basket, Sparkling wine, Flowers; Valid for marriage date within (in month) - 6; Wedding Card or Photo required - Yes
                                </Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 4 }}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: "#249995" }}
                                    source={icon.check}
                                />
                                <Text style={[styles.lato, { color: "#249995", fontSize: 12, flex: 1 }]}>
                                    Complimentary Golden jubilee Anniversary/Silver Jubilee Anniversary inclusions are provided Sparkling wine/Fruit Platter/Flowers.
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={{ paddingVertical: 4, alignSelf: "flex-start" }}
                        >
                            <Text style={[styles.lato, { color: blue, fontSize: 10 }]}>
                                VIEW ALL INCLUSIONS
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginHorizontal: 6, rowGap: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: "flex-start", columnGap: 8 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                Day Meals
                            </Text>

                            <View style={{ flexDirection: 'row', alignItems: "flex-start", flex: 1 }}>
                                <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                    Lunch & Dinner :
                                </Text>
                                <Text style={[styles.lato, { fontSize: 12, color: b3, flex: 1 }]}>
                                    Included at Meeru Island Resort & Spa - Holidays Selections , Maldives
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: "flex-start", columnGap: 5 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                End Of Day -
                            </Text>

                            <Text style={[styles.lato, { fontSize: 12, color: b3, flex: 1 }]}>
                                Spend time at Leisure or add an activity to your day
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginBottom: 15, marginTop: 5 }} />

                {/* day 3 */}
                <View style={{ paddingBottom: 10, paddingHorizontal: 5, rowGap: 10 }}>
                    <View style={{ backgroundColor: "#D9D9D9", borderRadius: 30, paddingLeft: 15, paddingVertical: 8 }}>
                        <Text style={[styles.lato, { fontSize: 14 }]}>
                            Day 3 - Maldives
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12 }]}>
                            INCLUDED:
                        </Text>

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, transform: [{ rotate: "45deg" }], tintColor: b1 }}
                                source={icon.plane}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Flight
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, tintColor: b1 }}
                                source={icon.hotelSign}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Hotel
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={icon.hiking}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Activity
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 15 }}>
                        <Image
                            style={{ borderRadius: 8 }}
                            source={image.hpgal2}
                        />

                        {/* right */}
                        <View style={{ flex: 1, rowGap: 5 }}>
                            <TouchableOpacity
                                style={{ alignSelf: "flex-end" }}
                            >
                                <Text style={[styles.lato, { fontSize: 13, color: blue }]}>
                                    Change
                                </Text>
                            </TouchableOpacity>

                            <View style={{ backgroundColor: b2, alignSelf: "flex-start", paddingVertical: 4, borderRadius: 4, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[styles.lato, { fontSize: 10, color: white }]}>4.5/5</Text>
                            </View>

                            <Text style={[styles.lato, { fontSize: 12 }]}>
                                Hotel
                            </Text>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                Activity in Maldives
                                <Text style={[styles.lato, { fontSize: 12 }]}> 1 Hr</Text>
                            </Text>

                            <Text style={[styles.lato, { fontSize: 16 }]}>
                                Meeru Island Resort & Spa - Holidays Selections
                            </Text>
                            <Text style={[styles.lato, { fontSize: 13, color: b3 }]}>
                                North Male Atoll
                            </Text>
                            <Text style={[styles.lato, { fontSize: 13, color: b3 }]}>
                                Wed, 20 Dec 2023 - Fri, 22 Dec 2023
                            </Text>
                        </View>
                    </View>

                    {/* conclusion */}
                    <View style={styles.conclusion}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={styles.lato}>
                                Jacuzzi Beach Villa (Adult Only)
                            </Text>

                            <TouchableOpacity
                                style={{ paddingVertical: 5 }}
                            >
                                <Text style={[styles.lato, { fontSize: 10, color: blue }]}>
                                    CHANGE ROOM
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.lato, { color: b3 }]}>
                            Meal Plan : All meals - Breakfast, Lunch & Dinner
                        </Text>
                        <Text style={[styles.lato, { color: b3 }]}>
                            Room Inclusions
                        </Text>

                        <View style={{ rowGap: 2 }}>
                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 4 }}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: "#249995" }}
                                    source={icon.check}
                                />
                                <Text style={[styles.lato, { color: "#249995", fontSize: 12, flex: 1 }]}>
                                    Free Honeymoon Package: No. of Units - 1; Type of Services - Fruit Basket, Sparkling wine, Flowers; Valid for marriage date within (in month) - 6; Wedding Card or Photo required - Yes
                                </Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 4 }}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: "#249995" }}
                                    source={icon.check}
                                />
                                <Text style={[styles.lato, { color: "#249995", fontSize: 12, flex: 1 }]}>
                                    Complimentary Golden jubilee Anniversary/Silver Jubilee Anniversary inclusions are provided Sparkling wine/Fruit Platter/Flowers.
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={{ paddingVertical: 4, alignSelf: "flex-start" }}
                        >
                            <Text style={[styles.lato, { color: blue, fontSize: 10 }]}>
                                VIEW ALL INCLUSIONS
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginHorizontal: 6, rowGap: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: "flex-start", columnGap: 8 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                Day Meals
                            </Text>

                            <View style={{ flexDirection: 'row', alignItems: "flex-start", flex: 1 }}>
                                <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                    Lunch & Dinner :
                                </Text>
                                <Text style={[styles.lato, { fontSize: 12, color: b3, flex: 1 }]}>
                                    Included at Meeru Island Resort & Spa - Holidays Selections , Maldives
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: "flex-start", columnGap: 5 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                End Of Day -
                            </Text>

                            <Text style={[styles.lato, { fontSize: 12, color: b3, flex: 1 }]}>
                                Spend time at Leisure or add an activity to your day
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginBottom: 15, marginTop: 5 }} />
            </View>}

            {/* activity */}
            {selectedTopMenu === "act" && <View>
                {/* day 1 */}
                <View style={{ paddingBottom: 10, paddingHorizontal: 5, rowGap: 10 }}>
                    <View style={{ backgroundColor: "#D9D9D9", borderRadius: 30, paddingLeft: 15, paddingVertical: 8 }}>
                        <Text style={[styles.lato, { fontSize: 14 }]}>
                            Day 1 - Maldives
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12 }]}>
                            INCLUDED:
                        </Text>

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, transform: [{ rotate: "45deg" }], tintColor: b1 }}
                                source={icon.plane}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Flight
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, tintColor: b1 }}
                                source={icon.hotelSign}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Hotel
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={icon.hiking}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Activity
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 15 }}>
                        <Image
                            style={{ borderRadius: 8 }}
                            source={image.hpgal2}
                        />

                        {/* right */}
                        <View style={{ flex: 1, rowGap: 5 }}>
                            <View style={{ backgroundColor: b2, alignSelf: "flex-start", paddingVertical: 4, borderRadius: 4, paddingHorizontal: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[styles.lato, { fontSize: 10, color: white }]}>5/5</Text>
                            </View>

                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                Activity in Maldives
                                <Text style={[styles.lato, { fontSize: 12 }]}> 1 Hr</Text>
                            </Text>

                            <Text style={styles.lato}>
                                Speedboat from Velana International Airport to Meeru Island- Shared Transfers (4 Nights and above)
                            </Text>

                            <Text style={[styles.lato, { color: b3 }]}>
                                Maldives
                            </Text>

                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                "Enjoy an exhilarating ride on a speedboat as you head to Meeru Island from Velana International Airport. Note: This is a shared transfer. The duration of the commute is approximately 50 minutes. This service is not available between 0200
                                <Text onPress={() => Alert.alert("Read More")} style={[styles.lato, { fontSize: 13, color: blue }]}> Read More...</Text>
                            </Text>
                        </View>
                    </View>

                    {/* conclusion */}
                    <View style={styles.conclusion}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={styles.lato}>
                                Jacuzzi Beach Villa (Adult Only)
                            </Text>

                            <TouchableOpacity
                                style={{ paddingVertical: 5 }}
                            >
                                <Text style={[styles.lato, { fontSize: 10, color: blue }]}>
                                    CHANGE ROOM
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.lato, { color: b3 }]}>
                            Meal Plan : All meals - Breakfast, Lunch & Dinner
                        </Text>
                        <Text style={[styles.lato, { color: b3 }]}>
                            Room Inclusions
                        </Text>

                        <View style={{ rowGap: 2 }}>
                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 4 }}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: "#249995" }}
                                    source={icon.check}
                                />
                                <Text style={[styles.lato, { color: "#249995", fontSize: 12, flex: 1 }]}>
                                    Free Honeymoon Package: No. of Units - 1; Type of Services - Fruit Basket, Sparkling wine, Flowers; Valid for marriage date within (in month) - 6; Wedding Card or Photo required - Yes
                                </Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 4 }}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: "#249995" }}
                                    source={icon.check}
                                />
                                <Text style={[styles.lato, { color: "#249995", fontSize: 12, flex: 1 }]}>
                                    Complimentary Golden jubilee Anniversary/Silver Jubilee Anniversary inclusions are provided Sparkling wine/Fruit Platter/Flowers.
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={{ paddingVertical: 4, alignSelf: "flex-start" }}
                        >
                            <Text style={[styles.lato, { color: blue, fontSize: 10 }]}>
                                VIEW ALL INCLUSIONS
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginHorizontal: 6, rowGap: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: "flex-start", columnGap: 8 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                Day Meals
                            </Text>

                            <View style={{ flexDirection: 'row', alignItems: "flex-start", flex: 1 }}>
                                <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                    Lunch & Dinner :
                                </Text>
                                <Text style={[styles.lato, { fontSize: 12, color: b3, flex: 1 }]}>
                                    Included at Meeru Island Resort & Spa - Holidays Selections , Maldives
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: "flex-start", columnGap: 5 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                End Of Day -
                            </Text>

                            <Text style={[styles.lato, { fontSize: 12, color: b3, flex: 1 }]}>
                                Spend time at Leisure or add an activity to your day
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginBottom: 15, marginTop: 5 }} />

                {/* day 3 */}
                <View style={{ paddingBottom: 10, paddingHorizontal: 5, rowGap: 10 }}>
                    <View style={{ backgroundColor: "#D9D9D9", borderRadius: 30, paddingLeft: 15, paddingVertical: 8 }}>
                        <Text style={[styles.lato, { fontSize: 14 }]}>
                            Day 3 - Maldives
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", columnGap: 10, alignItems: 'center' }}>
                        <Text style={[styles.lato, { fontSize: 12 }]}>
                            INCLUDED:
                        </Text>

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, transform: [{ rotate: "45deg" }], tintColor: b1 }}
                                source={icon.plane}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Flight
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10, tintColor: b1 }}
                                source={icon.hotelSign}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Hotel
                            </Text>
                        </View>

                        <View style={{ backgroundColor: black, width: 1.5, height: 18 }} />

                        <View style={{ flexDirection: "row", columnGap: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={icon.hiking}
                            />
                            <Text style={[styles.lato, { fontSize: 10 }]}>
                                1 Activity
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 15 }}>
                        <Image
                            style={{ borderRadius: 8 }}
                            source={image.hpgal2}
                        />

                        {/* right */}
                        <View style={{ flex: 1, rowGap: 5 }}>
                            <View style={{ backgroundColor: b2, alignSelf: "flex-start", paddingVertical: 4, borderRadius: 4, paddingHorizontal: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[styles.lato, { fontSize: 10, color: white }]}>5/5</Text>
                            </View>

                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                Activity in Maldives
                                <Text style={[styles.lato, { fontSize: 12 }]}> 1 Hr</Text>
                            </Text>

                            <Text style={styles.lato}>
                                Speedboat from Velana International Airport to Meeru Island- Shared Transfers (4 Nights and above)
                            </Text>

                            <Text style={[styles.lato, { color: b3 }]}>
                                Maldives
                            </Text>

                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                "Enjoy an exhilarating ride on a speedboat as you head to Meeru Island from Velana International Airport. Note: This is a shared transfer. The duration of the commute is approximately 50 minutes. This service is not available between 0200
                                <Text onPress={() => Alert.alert("Read More")} style={[styles.lato, { fontSize: 13, color: blue }]}> Read More...</Text>
                            </Text>
                        </View>
                    </View>

                    {/* conclusion */}
                    <View style={styles.conclusion}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={styles.lato}>
                                Jacuzzi Beach Villa (Adult Only)
                            </Text>

                            <TouchableOpacity
                                style={{ paddingVertical: 5 }}
                            >
                                <Text style={[styles.lato, { fontSize: 10, color: blue }]}>
                                    CHANGE ROOM
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.lato, { color: b3 }]}>
                            Meal Plan : All meals - Breakfast, Lunch & Dinner
                        </Text>
                        <Text style={[styles.lato, { color: b3 }]}>
                            Room Inclusions
                        </Text>

                        <View style={{ rowGap: 2 }}>
                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 4 }}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: "#249995" }}
                                    source={icon.check}
                                />
                                <Text style={[styles.lato, { color: "#249995", fontSize: 12, flex: 1 }]}>
                                    Free Honeymoon Package: No. of Units - 1; Type of Services - Fruit Basket, Sparkling wine, Flowers; Valid for marriage date within (in month) - 6; Wedding Card or Photo required - Yes
                                </Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 4 }}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: "#249995" }}
                                    source={icon.check}
                                />
                                <Text style={[styles.lato, { color: "#249995", fontSize: 12, flex: 1 }]}>
                                    Complimentary Golden jubilee Anniversary/Silver Jubilee Anniversary inclusions are provided Sparkling wine/Fruit Platter/Flowers.
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={{ paddingVertical: 4, alignSelf: "flex-start" }}
                        >
                            <Text style={[styles.lato, { color: blue, fontSize: 10 }]}>
                                VIEW ALL INCLUSIONS
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginHorizontal: 6, rowGap: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: "flex-start", columnGap: 8 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                Day Meals
                            </Text>

                            <View style={{ flexDirection: 'row', alignItems: "flex-start", flex: 1 }}>
                                <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                    Lunch & Dinner :
                                </Text>
                                <Text style={[styles.lato, { fontSize: 12, color: b3, flex: 1 }]}>
                                    Included at Meeru Island Resort & Spa - Holidays Selections , Maldives
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: "flex-start", columnGap: 5 }}>
                            <Text style={[styles.lato, { fontSize: 12, color: b3 }]}>
                                End Of Day -
                            </Text>

                            <Text style={[styles.lato, { fontSize: 12, color: b3, flex: 1 }]}>
                                Spend time at Leisure or add an activity to your day
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginBottom: 15, marginTop: 5 }} />
            </View>}
        </View>
    )
};

export default Itinerary;

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 8,
        backgroundColor: white,
        borderRadius: 4,
        marginHorizontal: 5,
        marginBottom: 5,
    },
    lato: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
        color: b1,
    },
    conclusion: {
        marginHorizontal: 6,
        backgroundColor: "#EEEEEE",
        borderColor: "#D8D8D8",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 14,
        rowGap: 8,
    },
});