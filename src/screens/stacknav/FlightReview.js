import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView, TextInput } from 'react-native'
import React, { useRef } from 'react'
import { b1, b2, b3, blue, gs1, gs2, white } from '../../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import FareBreakSheet from '../../utility/FareBreakSheet';


const FlightReview = ({ navigation }) => {
    const fareRef = useRef();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.Wrap}>
                {/* nav */}
                <TouchableOpacity style={styles.nav} onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 25, height: 25, tintColor: b1 }}
                        source={require("../../assets/icons/next.png")}
                    />
                    <Text style={[styles.lbB1, { fontSize: 20, marginLeft: 15 }]}>Review</Text>
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* ticket 1 */}
                        <View style={[styles.ticketWrap, { marginTop: 10, }]}>
                            {/* head */}
                            <View style={styles.ticketHead}>
                                <Text style={[styles.lbB1, { fontSize: 18, marginRight: 15, color: white }]}>
                                    Dhaka
                                </Text>
                                <Image
                                    style={{ width: 16, height: 16, tintColor: white, transform: [{ rotate: "180deg" }] }}
                                    source={require("../../assets/icons/next.png")}
                                />
                                <Text style={[styles.lbB1, { fontSize: 18, color: white, marginLeft: 15 }]}>
                                    Dubai
                                </Text>
                            </View>

                            <View style={{ marginHorizontal: 10, }}>
                                {/* flight name & number */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, }}>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require("../../assets/icons/indigo.png")}
                                    />
                                    <Text style={[styles.ns600, { marginLeft: 10 }]}>
                                        IndiGo
                                        <Text style={[styles.ns600, { color: b3 }]}>  6E-1118</Text>
                                    </Text>
                                </View>

                                {/* ticket details */}
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                    <View style={{ alignItems: "flex-start", flex: 1, rowGap: 6 }}>
                                        <Text style={[styles.ns600, { fontSize: 14 }]}>08 Nov, Sat</Text>
                                        <Text style={[styles.ns700, {}]}>14:15</Text>
                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Dhaka</Text>
                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3 }]}>
                                            Indira Gandhi
                                            International Airport
                                        </Text>
                                    </View>

                                    <View>
                                        <Text style={[styles.ns700, { marginBottom: 45 }]}>
                                            02h 30m
                                        </Text>
                                    </View>

                                    <View style={{ alignItems: "flex-end", flex: 1, rowGap: 6 }}>
                                        <Text style={[styles.ns600, { fontSize: 14 }]}>08 Nov, Sat</Text>
                                        <Text style={[styles.ns700, {}]}>16:15</Text>
                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Bombay</Text>
                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3, textAlign: "right" }]}>
                                            Chhatrapati Shivaji
                                            International Airport
                                        </Text>
                                    </View>
                                </View>

                                {/* baggage */}
                                <View
                                    style={{
                                        marginTop: 40,
                                        flexDirection: "row", alignItems: "center", justifyContent: "space-evenly",
                                        marginBottom: 70,
                                    }}
                                >
                                    <View style={{ alignItems: "center", rowGap: 7 }}>
                                        <Image
                                            style={{ width: 35, height: 35, tintColor: blue }}
                                            source={require("../../assets/icons/backpack.png")}
                                        />
                                        <Text style={[styles.ns700, { color: b3, fontSize: 16 }]}>7 Kgs</Text>
                                        <Text style={[styles.ns400, { color: b3 }]}>Cabin Baggage</Text>
                                    </View>

                                    <View style={{ alignItems: "center", rowGap: 7 }}>
                                        <Image
                                            style={{ width: 40, height: 40, tintColor: blue }}
                                            source={require("../../assets/icons/baggage.png")}
                                        />
                                        <Text style={[styles.ns700, { color: b3, fontSize: 16 }]}>15 Kgs</Text>
                                        <Text style={[styles.ns400, { color: b3 }]}>Check-In Baggage</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <Text style={[styles.ns600, { textAlign: "center", fontSize: 16, marginVertical: 15 }]}>
                            Layover - 03h 45m
                        </Text>

                        {/* ticket 2 */}
                        <View style={styles.ticketWrap}>
                            <View style={{ marginHorizontal: 10, }}>
                                {/* flight name & number */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, }}>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require("../../assets/icons/indigo.png")}
                                    />
                                    <Text style={[styles.ns600, { marginLeft: 10 }]}>
                                        IndiGo
                                        <Text style={[styles.ns600, { color: b3 }]}>  6E-1407</Text>
                                    </Text>
                                </View>

                                {/* ticket details */}
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                    <View style={{ alignItems: "flex-start", flex: 1, rowGap: 6 }}>
                                        <Text style={[styles.ns600, { fontSize: 14 }]}>08 Nov, Sat</Text>
                                        <Text style={[styles.ns700, {}]}>20:55</Text>
                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Bombay</Text>
                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3 }]}>
                                            Chhatrapati Shivaji
                                            International Airport
                                        </Text>
                                    </View>

                                    <View>
                                        <Text style={[styles.ns700, { marginBottom: 45 }]}>
                                            03h 55m
                                        </Text>
                                    </View>

                                    <View style={{ alignItems: "flex-end", flex: 1, rowGap: 6 }}>
                                        <Text style={[styles.ns600, { fontSize: 14 }]}>08 Nov, Sat</Text>
                                        <Text style={[styles.ns700, {}]}>22:30</Text>
                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Dubai</Text>
                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3, textAlign: "right" }]}>
                                            Dubai International
                                            Airport
                                        </Text>
                                    </View>
                                </View>

                                {/* baggage */}
                                <View
                                    style={{
                                        marginTop: 40,
                                        flexDirection: "row", alignItems: "center", justifyContent: "space-evenly",
                                        marginBottom: 70,
                                    }}
                                >
                                    <View style={{ alignItems: "center", rowGap: 7 }}>
                                        <Image
                                            style={{ width: 35, height: 35, tintColor: blue }}
                                            source={require("../../assets/icons/backpack.png")}
                                        />
                                        <Text style={[styles.ns700, { color: b3, fontSize: 16 }]}>7 Kgs</Text>
                                        <Text style={[styles.ns400, { color: b3 }]}>Cabin Baggage</Text>
                                    </View>

                                    <View style={{ alignItems: "center", rowGap: 7 }}>
                                        <Image
                                            style={{ width: 40, height: 40, tintColor: blue }}
                                            source={require("../../assets/icons/baggage.png")}
                                        />
                                        <Text style={[styles.ns700, { color: b3, fontSize: 16 }]}>15 Kgs</Text>
                                        <Text style={[styles.ns400, { color: b3 }]}>Check-In Baggage</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* class */}
                        <View
                            style={{
                                rowGap: 2, marginTop: 20, backgroundColor: white,
                                padding: 7, marginHorizontal: 20
                            }}
                        >
                            <Text style={[styles.ns400, { color: b3 }]}>Class</Text>
                            <Text style={[styles.ns600, { fontSize: 16 }]}>Economy</Text>
                            <Text style={[styles.ns600, { fontSize: 14, textTransform: "uppercase", color: b3 }]}>
                                saver
                            </Text>
                        </View>

                        {/* offers & promocode */}
                        <View style={styles.commonWrap}>
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: 10, marginHorizontal: 8 }}>
                                <Text style={[styles.lbB1, { fontSize: 19, marginLeft: 15 }]}>Offers & Promocode</Text>

                                <TouchableOpacity style={styles.viewAll}>
                                    <Text style={{ fontFamily: "LondonTwo", fontSize: 15, color: white, textTransform: "uppercase" }}>
                                        view all
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginHorizontal: 10, marginTop: 15, borderWidth: 1, borderColor: "#D8D8D8", flexDirection: "row", alignItems: "center", borderRadius: 4 }}>
                                <TextInput
                                    style={{ flex: 1, height: 43 }}
                                    placeholder='Enter Promo Code'
                                    placeholderTextColor={b3}
                                />

                                <TouchableOpacity style={{ height: 43, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={[styles.ns400, { fontSize: 16, color: b3, textTransform: "uppercase", }]}>apply</Text>
                                </TouchableOpacity>
                            </View>

                            {/* offers */}
                            <View style={styles.offers}>
                                <TouchableOpacity style={styles.offer}>
                                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
                                        <View style={{ marginLeft: 8 }}>
                                            <Image
                                                style={{ width: 16, height: 16, tintColor: gs2 }}
                                                source={require("../../assets/icons/discount-solid.png")}
                                            />
                                        </View>

                                        <View style={{ marginRight: 6, marginLeft: 35, flex: 1 }}>
                                            <Text style={[styles.ns700, { fontSize: 16 }]}>CASUPER</Text>
                                            <Text style={[styles.ns400, { color: b3 }]}>
                                                Get $15 instant discount.
                                            </Text>
                                        </View>
                                    </View>

                                    <View>
                                        <View style={styles.circle} />
                                    </View>
                                </TouchableOpacity>

                                {/* ========================================================= */}
                                <TouchableOpacity style={styles.offer}>
                                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
                                        <View style={{ marginLeft: 8 }}>
                                            <Image
                                                style={{ width: 16, height: 16, tintColor: gs2 }}
                                                source={require("../../assets/icons/discount-solid.png")}
                                            />
                                        </View>

                                        <View style={{ marginRight: 6, marginLeft: 35, flex: 1 }}>
                                            <Text style={[styles.ns700, { fontSize: 16 }]}>CAINTL</Text>
                                            <Text style={[styles.ns400, { color: b3 }]}>
                                                Get $10 discount.
                                            </Text>
                                        </View>
                                    </View>

                                    <View>
                                        <View style={styles.circle} />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.offer}>
                                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
                                        <View style={{ marginLeft: 8 }}>
                                            <Image
                                                style={{ width: 19, height: 16 }}
                                                resizeMode='contain'
                                                source={require("../../assets/icons/yes-bank.png")}
                                            />
                                        </View>

                                        <View style={{ marginRight: 6, marginLeft: 35, flex: 1 }}>
                                            <Text style={[styles.ns700, { fontSize: 16 }]}>CAYESINT</Text>
                                            <Text style={[styles.ns400, { color: b3 }]}>
                                                Get $50 OFF using YES Bank Credit & Debit Card Interest- Free EMI.
                                            </Text>
                                        </View>
                                    </View>

                                    <View>
                                        <View style={styles.circle} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* travel insurance */}
                        <View style={styles.commonWrap}>
                            <View style={{ marginTop: 10, marginHorizontal: 10, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                                <Text style={[styles.lbB1, { fontSize: 18, marginLeft: 10 }]}>
                                    Travel Insurance
                                </Text>

                                <View style={{ alignItems: "flex-end" }}>
                                    <Text style={[styles.ns400, { fontSize: 18, color: blue }]}>$ 15.95</Text>
                                    <Text style={[styles.ns400]}>per person</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 20, flexDirection: "row", alignItems: 'center', marginHorizontal: 10, }}>
                                <Image
                                    style={{ width: 40, height: 40, tintColor: "#435970" }}
                                    source={require("../../assets/icons/shield.png")}
                                />
                                <Text style={[styles.ns600, { fontSize: 16, marginLeft: 15, }]}>
                                    What will be covered?
                                </Text>
                            </View>

                            {/* coverage */}
                            <View style={{ marginTop: 20, marginHorizontal: 20, flexDirection: 'row' }}>
                                <View style={{ flex: 1, rowGap: 8, marginLeft: 10 }}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>Trip cancellation</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>
                                            Mechanical issues
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>
                                            Baggage Delay
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flex: 1, rowGap: 8 }}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>
                                            Travel Delay
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>
                                            Trip interruption
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>
                                            Airline Bankruptcy
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity
                                style={{ marginBottom: 30, flexDirection: "row", alignItems: 'center', marginHorizontal: 30, marginTop: 20 }}
                            >
                                <View style={styles.circle} />
                                <Text style={[styles.ns400, { marginLeft: 15, fontSize: 16 }]}>
                                    Yes, I want travel protection for my trip.
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* travellers */}
                        <View style={[styles.commonWrap, { paddingLeft: 30 }]}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12, marginHorizontal: 8 }}>
                                <View style={{}}>
                                    <Text style={[styles.lbB1, { fontSize: 18 }]}>Travellers</Text>
                                    <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>0/1 Selected</Text>
                                </View>

                                <TouchableOpacity style={styles.viewAll}>
                                    <Text style={{ fontFamily: "LondonTwo", fontSize: 15, color: white }}>
                                        Add new +
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* choose travellers */}
                            <View style={{ marginTop: 20, rowGap: 10, marginLeft: 10, marginBottom: 10 }}>
                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginRight: 8 }}
                                >
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 25, height: 25 }}
                                            source={require("../../assets/icons/man.png")}
                                        />
                                        <Text style={[styles.ns400, { marginLeft: 15 }]}>Kevin Vo, 40</Text>
                                    </View>

                                    <View style={styles.circle} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginRight: 8 }}
                                >
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 25, height: 25 }}
                                            source={require("../../assets/icons/woman.png")}
                                        />
                                        <Text style={[styles.ns400, { marginLeft: 15 }]}>Kevin Vo, 40</Text>
                                    </View>

                                    <View style={styles.circle} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* customer support packege */}
                        <View style={[styles.commonWrap, { paddingHorizontal: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                                <Image
                                    style={{ width: 35, height: 35, tintColor: b2 }}
                                    source={require("../../assets/icons/customer-service.png")}
                                />
                                <Text style={[styles.lbB1, { fontSize: 18, marginLeft: 15, }]}>
                                    Customer Support Package
                                </Text>
                            </View>

                            <View style={{ marginVertical: 10, rowGap: 15, }}>
                                {/* standard */}
                                <View style={styles.supPack}>
                                    <TouchableOpacity
                                        style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                                    >
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={styles.circleSm} />
                                            <Text style={[styles.ns700, { fontSize: 16, marginLeft: 10 }]}>STANDARD</Text>
                                        </View>
                                        <Text style={[styles.ns700, { fontSize: 16, color: blue }]}>$ 0.00</Text>
                                    </TouchableOpacity>

                                    <View
                                        style={{ marginTop: 13, flexDirection: "row", marginHorizontal: 30 }}
                                    >
                                        <View style={{ rowGap: 6, marginRight: 40 }}>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Cancellation Fee
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Response Time
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Rescheduling Help
                                            </Text>
                                        </View>

                                        <View style={{ rowGap: 6 }}>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Upto  $250 per ticket
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Standard
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Standard
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                {/* premium */}
                                <View style={styles.supPack}>
                                    <TouchableOpacity
                                        style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                                    >
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={styles.circleSm} />
                                            <Text style={[styles.ns700, { fontSize: 16, marginLeft: 10 }]}>
                                                PREMIUM
                                            </Text>
                                        </View>
                                        <Text style={[styles.ns700, { fontSize: 16, color: blue }]}>
                                            $ 14.95
                                        </Text>
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            marginTop: 13, flexDirection: "row", marginHorizontal: 30,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <View style={{ rowGap: 6, marginRight: 40 }}>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Cancellation Fee
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Response Time
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Rescheduling Help
                                            </Text>
                                        </View>

                                        <View style={{ rowGap: 6 }}>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: gs1 }]}>
                                                FREE
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: gs1 }]}>
                                                FAST
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Priority
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                {/* supreme */}
                                <View style={styles.supPack}>
                                    <TouchableOpacity
                                        style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                                    >
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={styles.circleSm} />
                                            <Text style={[styles.ns700, { fontSize: 16, marginLeft: 10 }]}>
                                                SUPREME
                                            </Text>
                                        </View>
                                        <Text style={[styles.ns700, { fontSize: 16, color: blue }]}>$ 22.99</Text>
                                    </TouchableOpacity>

                                    <View
                                        style={{ marginTop: 13, flexDirection: "row", marginHorizontal: 30 }}
                                    >
                                        <View style={{ rowGap: 6, marginRight: 40 }}>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Cancellation Fee
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Response Time
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                Rescheduling Help
                                            </Text>
                                        </View>

                                        <View style={{ rowGap: 6 }}>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: gs1 }]}>
                                                FREE
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: gs1 }]}>
                                                SUPER FAST
                                            </Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                High Priority
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* flexible ticket */}
                        <View style={[styles.commonWrap, { paddingHorizontal: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                                <Image
                                    style={{ width: 35, height: 35, tintColor: b2 }}
                                    source={require("../../assets/icons/customer-service.png")}
                                />
                                <Text style={[styles.lbB1, { fontSize: 18, marginLeft: 15, }]}>
                                    Flexible Ticket
                                </Text>
                            </View>

                            <View style={{ marginVertical: 10 }}>
                                <View style={styles.supPack}>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                        <Text style={[styles.ns700, { fontSize: 16, color: blue }]}>$ 0.00</Text>
                                    </View>

                                    <View style={{ rowGap: 6 }}>
                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: gs1 }}
                                                source={require("../../assets/icons/check.png")}
                                            />
                                            <Text
                                                style={[styles.lbB1, { color: b3, marginLeft: 12, fontSize: 14 }]}
                                            >
                                                Rebooking included (subject to increase in fare)
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: gs1 }}
                                                source={require("../../assets/icons/check.png")}
                                            />
                                            <Text
                                                style={[styles.lbB1, { color: b3, marginLeft: 12, fontSize: 14 }]}
                                            >
                                                Name change included
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: gs1 }}
                                                source={require("../../assets/icons/check.png")}
                                            />
                                            <Text
                                                style={[styles.lbB1, { color: b3, marginLeft: 12, fontSize: 14 }]}
                                            >
                                                Cancellation within 24 hours
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Travel Assistance Classic */}
                        <View style={[styles.commonWrap, { marginBottom: 10 }]}>
                            <View
                                style={{ marginTop: 10, marginHorizontal: 10, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}
                            >
                                <Text style={[styles.lbB1, { fontSize: 18, marginLeft: 10 }]}>
                                    Travel Assistance Classic
                                </Text>

                                <View style={{ alignItems: "flex-end" }}>
                                    <Text style={[styles.ns400, { fontSize: 18, color: blue }]}>$ 9.95</Text>
                                    <Text style={[styles.ns400]}>per person</Text>
                                </View>
                            </View>

                            <View
                                style={{ marginTop: 20, flexDirection: "row", alignItems: 'center', marginHorizontal: 10, }}
                            >
                                <Image
                                    style={{ width: 40, height: 40, tintColor: "#435970" }}
                                    source={require("../../assets/icons/shield.png")}
                                />
                                <Text style={[styles.ns600, { fontSize: 16, marginLeft: 15, }]}>
                                    Hire you own personal concierge
                                </Text>
                            </View>

                            {/* coverage */}
                            <View style={{ marginTop: 20, marginHorizontal: 20, flexDirection: 'row' }}>
                                <View style={{ flex: 1, rowGap: 8, marginLeft: 10 }}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>
                                            Emergency medical assistance
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>
                                            $50 upto saving coupon and more
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>
                                            Visa & Passport assistance
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 15, height: 15, tintColor: gs1 }}
                                            source={require("../../assets/icons/check.png")}
                                        />
                                        <Text style={[styles.ns400, { color: b3, marginLeft: 12 }]}>
                                            Personal concierge assistance
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity
                                style={{ marginBottom: 30, flexDirection: "row", alignItems: 'center', marginHorizontal: 30, marginTop: 20 }}
                            >
                                <View style={styles.circle} />
                                <Text style={[styles.ns400, { marginLeft: 15, fontSize: 16 }]}>
                                    Yes, I want travel assistance for my trip.
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                {/* bottom */}
                <View style={styles.bottom}>
                    <View
                        style={{
                            flexDirection: "row", alignItems: 'center', backgroundColor: "#F9F7FD",
                        }}
                    >
                        <TouchableOpacity style={styles.wallet}>
                            <View style={{ position: 'relative' }}>
                                <Image
                                    style={{ width: 30, height: 30, tintColor: b1 }}
                                    source={require("../../assets/icons/wallet.png")}
                                />

                                <View
                                    style={{
                                        backgroundColor: blue, position: "absolute", left: -10, top: 4,
                                        paddingHorizontal: 4, paddingVertical: 0,
                                        alignItems: "center", justifyContent: "center",
                                        borderRadius: 4,
                                    }}
                                >
                                    <Text style={{ fontFamily: "Assistant-SemiBold", fontSize: 12, color: white }}>
                                        $ 0
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <Text style={[styles.ns600, { fontSize: 15, marginLeft: 15 }]}>
                            Book and earn 156 points instantly
                        </Text>
                    </View>

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["rgba(195, 175, 253, 0.56)", "rgba(123, 88, 222, 1)"]}
                        style={{ height: 5 }}
                    />

                    <View
                        style={{
                            flexDirection: 'row', alignItems: "center", justifyContent: "space-between",
                            marginTop: 6, paddingBottom: 6, paddingHorizontal: 4
                        }}
                    >
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: "center", marginLeft: 15 }}
                            onPress={() => fareRef.current.open()}
                        >
                            <Text style={[styles.ns700, { fontSize: 20, marginRight: 10 }]}>$ 495</Text>
                            <Image
                                style={{ width: 15, height: 15, transform: [{ rotate: "-90deg" }] }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.continue} onPress={() => navigation.navigate("addons")}>
                            <Text style={{ color: white, fontSize: 18, fontFamily: "LondonTwo" }}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* bottom sheet */}
                <FareBreakSheet fareRef={fareRef} />
            </View>
        </SafeAreaView>
    )
};

export default FlightReview;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        // marginHorizontal: 12,
        marginTop: 30,
    },
    nav: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginLeft: 12
    },
    lbB1: {
        fontFamily: "LondonBetween",
        color: b1,
    },
    ticketWrap: {
        elevation: 4,
        borderRadius: 4,
        backgroundColor: white,
        marginHorizontal: 10,
    },
    ticketHead: {
        backgroundColor: "#333E5C",
        flexDirection: "row",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingVertical: 13,
        alignItems: "center",
        paddingLeft: 15,
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
    bottom: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: white,
    },
    wallet: {
        backgroundColor: "#EAE3FF",
        paddingVertical: 8,
        paddingLeft: 18,
        paddingRight: 10,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    continue: {
        borderRadius: 4,
        backgroundColor: "#435970",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 11,
        paddingHorizontal: 60,
    },
    commonWrap: {
        marginHorizontal: 10,
        backgroundColor: "#FDFDFD",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        elevation: 3,
        marginTop: 20,
    },
    viewAll: {
        backgroundColor: blue,
        borderRadius: 4,
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    offers: {
        marginTop: 30,
        rowGap: 15,
        paddingBottom: 60,
    },
    offer: {
        flexDirection: "row",
        marginHorizontal: 10,
        alignItems: 'flex-start',
    },
    circle: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: b2,
        borderRadius: 25,
    },
    circleSm: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: b2,
        borderRadius: 25,
    },
    supPack: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        padding: 10,
    },
});