import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView, TextInput, Platform, Dimensions, ActivityIndicator, FlatList } from 'react-native'
import React, { useRef } from 'react'
import { b1, b2, b3, blue, blueShade1, gs1, gs2, white } from '../../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import FareBreakSheet from '../../utility/FareBreakSheet';
import { useDispatch, useSelector } from 'react-redux';
import { formatDuration, getAirlinesName, getCurrentLocalDate, getCurrentLocalTime } from '../../utility/UtilityFunctions';
import { _Height, _Width } from '../../config/StaticVars';
import commonStyles from '../../assets/css/CommonFonts';
import icon from '../../config/IconAssets';
import { deleteUser, selectUser } from '../../services/slices/FlightSlice';

const { width, height } = Dimensions.get("window");

const FlightReview = ({ navigation }) => {
    const { flight_search_data, flight_details, flight_loading, travellers } = useSelector(state => state.flightSlice);
    const fareRef = useRef(null);

    const dispatch = useDispatch();

    const getSelectedUserCount = () => {
        let count = 0;
        travellers.map(item => {
            if (item.isSelected) count += 1;
        });
        return count;
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            {flight_loading && <ActivityIndicator
                animating={flight_loading}
                size={"large"}
                style={{ width: _Width, height: _Height, zIndex: 9, position: "absolute" }}
                color={blueShade1}
            />}

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
                    <FlatList
                        data={[1]}
                        keyExtractor={(_, i) => i.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <View>
                                {/* ticket */}
                                {flight_details?.itineraries[0]?.segments?.map((flightItem, i) => (
                                    <View key={i.toString()}>
                                        <View style={[styles.ticketWrap, { marginTop: 10, }]}>
                                            {/* head */}
                                            <View style={styles.ticketHead}>
                                                <Text style={[styles.lbB1, { fontSize: 18, marginRight: 15, color: white }]}>
                                                    {flightItem?.departure?.iataCode}
                                                </Text>
                                                <Image
                                                    style={{ width: 16, height: 16, tintColor: white, transform: [{ rotate: "180deg" }] }}
                                                    source={require("../../assets/icons/next.png")}
                                                />
                                                <Text style={[styles.lbB1, { fontSize: 18, color: white, marginLeft: 15 }]}>
                                                    {flightItem?.arrival?.iataCode}
                                                </Text>
                                            </View>

                                            <View style={{ marginHorizontal: 10, }}>
                                                {/* flight name & number */}
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, }}>
                                                    <Image
                                                        style={{ width: 35, height: 35 }}
                                                        resizeMode='stretch'
                                                        source={getAirlinesName(flightItem?.carrierCode)?.logo}
                                                    />
                                                    <Text style={[styles.ns600, { marginLeft: 10 }]}>
                                                        {getAirlinesName(flightItem?.carrierCode)?.name}
                                                        <Text style={[styles.ns600, { color: b3 }]}>  {`${flightItem?.carrierCode}-${flightItem?.number}`}</Text>
                                                    </Text>
                                                </View>

                                                {/* ticket details */}
                                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                                    {/* origin */}
                                                    <View style={{ alignItems: "flex-start", flex: 1, rowGap: 6 }}>
                                                        <Text style={[styles.ns600, { fontSize: 14 }]}>{getCurrentLocalDate(flightItem?.departure?.at)}</Text>
                                                        <Text style={[styles.ns700, {}]}>{getCurrentLocalTime(flightItem?.departure?.at)}</Text>
                                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Dhaka</Text>
                                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3 }]}>
                                                            {flight_search_data?.originLocation?.name}
                                                        </Text>
                                                    </View>

                                                    {/* duration */}
                                                    <View>
                                                        <Text style={[styles.ns700, { marginBottom: 45 }]}>
                                                            {formatDuration(flightItem?.duration)}
                                                        </Text>
                                                    </View>

                                                    {/* destination */}
                                                    <View style={{ alignItems: "flex-end", flex: 1, rowGap: 6 }}>
                                                        <Text style={[styles.ns600, { fontSize: 14 }]}>{getCurrentLocalDate(flightItem?.arrival?.at)}</Text>
                                                        <Text style={[styles.ns700, {}]}>{getCurrentLocalTime(flightItem?.arrival?.at)}</Text>
                                                        <Text style={[styles.ns700, { fontSize: 16 }]}>Bombay</Text>
                                                        <Text numberOfLines={2} style={[styles.ns600, { fontSize: 13, color: b3, textAlign: "right" }]}>
                                                            {flight_search_data?.destinationLocation?.name}
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

                                        {/* layover */}
                                        {flightItem?.hasOwnProperty("stops") && <Text style={[styles.ns600, { textAlign: "center", fontSize: 16, marginVertical: 15 }]}>
                                            Layover - {formatDuration(flightItem?.hasOwnProperty("stops") ? flightItem?.stops[0]?.duration : null)}
                                        </Text>}
                                    </View>
                                ))}

                                {/* class */}
                                <View
                                    style={{
                                        rowGap: 2, marginTop: 20, backgroundColor: white,
                                        padding: 7, marginHorizontal: 20
                                    }}
                                >
                                    <Text style={[styles.ns400, { color: b3 }]}>Class</Text>
                                    <Text style={[styles.ns600, { fontSize: 16 }]}>{flight_search_data?.travelClass}</Text>
                                    <Text style={[styles.ns600, { fontSize: 14, textTransform: "uppercase", color: b3 }]}>
                                        saver
                                    </Text>
                                </View>

                                {/* offers & promocode */}
                                <View style={styles.commonWrap}>
                                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: 10, marginHorizontal: 8 }}>
                                        <Text style={[styles.lbB1, { fontSize: 18, marginLeft: 15 }]}>Offers & Promocode</Text>

                                        <TouchableOpacity style={styles.viewAll}>
                                            <Text style={{ fontFamily: "LondonTwo", fontSize: 13, color: white, textTransform: "uppercase" }}>
                                                view all
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ marginHorizontal: 10, marginTop: 15, borderWidth: 1, borderColor: "#D8D8D8", flexDirection: "row", alignItems: "center", borderRadius: 4 }}>
                                        <TextInput
                                            style={{ flex: 1, height: 43, paddingLeft: 10 }}
                                            placeholder='Enter Promo Code'
                                            placeholderTextColor={b3}
                                        />

                                        <TouchableOpacity style={{ height: 43, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={[styles.ns400, { fontSize: 14, color: b3, textTransform: "uppercase", }]}>apply</Text>
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

                                                <View style={{ marginRight: 6, marginLeft: 25, flex: 1 }}>
                                                    <Text style={[styles.ns700, { fontSize: 15 }]}>CASUPER</Text>
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

                                                <View style={{ marginRight: 6, marginLeft: 25, flex: 1 }}>
                                                    <Text style={[styles.ns700, { fontSize: 15 }]}>CAINTL</Text>
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

                                                <View style={{ marginRight: 6, marginLeft: 25, flex: 1 }}>
                                                    <Text style={[styles.ns700, { fontSize: 15 }]}>CAYESINT</Text>
                                                    <Text style={[styles.ns400, { color: b3, width: width / 1.8 }]}>
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
                                            <Text style={[styles.ns400, { fontSize: 18, color: blue }]}>$15.95</Text>
                                            <Text style={[styles.ns400]}>per person</Text>
                                        </View>
                                    </View>

                                    <View style={{ marginTop: 20, flexDirection: "row", alignItems: 'center', marginHorizontal: 10, }}>
                                        <Image
                                            style={{ width: 35, height: 35, tintColor: "#435970" }}
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
                                        <Text style={[styles.ns400, { marginLeft: 15, fontSize: 13 }]}>
                                            Yes, I want travel protection for my trip.
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {/* travellers */}
                                <View style={[styles.commonWrap, { paddingLeft: 20 }]}>
                                    {/* add new travellers */}
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12, marginHorizontal: 8 }}>
                                        <View style={{}}>
                                            <Text style={[styles.lbB1, { fontSize: 18 }]}>Travellers</Text>
                                            <Text style={[styles.lbB1, { fontSize: 14, color: b3 }]}>
                                                {getSelectedUserCount()}/{travellers.length} Selected
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.viewAll}
                                            onPress={() => navigation.navigate("addtraveller")}
                                        >
                                            <Text style={{ fontFamily: "LondonTwo", fontSize: 13, color: white }}>
                                                Add new +
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* choose travellers */}
                                    <View style={{ marginTop: 20, rowGap: 10, marginLeft: 10, marginBottom: 5 }}>
                                        {travellers.length ?
                                            <FlatList
                                                data={travellers}
                                                keyExtractor={(_, i) => i.toString()}
                                                showsVerticalScrollIndicator={false}
                                                renderItem={({ item, index }) => (
                                                    <View
                                                        style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginRight: 8, marginBottom: 10 }}
                                                    >
                                                        {/* user data */}
                                                        <View
                                                            style={{ flexDirection: "row", alignItems: 'center', flex: 1, columnGap: Platform.OS === "ios" ? 10 : 6 }}
                                                        >
                                                            <Image
                                                                style={
                                                                    Platform.select({
                                                                        ios: { width: 25, height: 25 },
                                                                        android: { width: 23, height: 23 },
                                                                    })
                                                                }
                                                                source={icon.man}
                                                            />

                                                            <Text
                                                                numberOfLines={1}
                                                                style={[
                                                                    styles.ns400,
                                                                    {
                                                                        fontSize: Platform.OS === "ios" ? 13 : 12,
                                                                        width: Platform.OS === "ios" ? 110 : 95,
                                                                    }
                                                                ]}
                                                            >
                                                                {`${item.firstName} ${item.lastName} ${item.lastName}${item.lastName}${item.lastName}`}
                                                            </Text>

                                                            <Text
                                                                numberOfLines={1}
                                                                style={[
                                                                    styles.ns400,
                                                                    {
                                                                        fontSize: Platform.OS === "ios" ? 13 : 12,
                                                                        width: Platform.OS === "ios" ? 110 : 80,
                                                                        marginLeft: 5,
                                                                    }
                                                                ]}
                                                            >
                                                                {item.phone}
                                                            </Text>
                                                        </View>

                                                        {/* action buttons */}
                                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                                            <TouchableOpacity onPress={() => dispatch(deleteUser(index))}>
                                                                <Image
                                                                    style={Platform.OS === "ios" ? { width: 25, height: 25 } : { width: 23, height: 23 }}
                                                                    source={icon.bin}
                                                                />
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => dispatch(selectUser(index))}>
                                                                <View style={item.isSelected ? styles.circleFill : styles.circle} />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                )}
                                            />
                                            :
                                            <View>
                                                <Text style={commonStyles.ns600}>No Traveller Found!</Text>
                                            </View>
                                        }
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
                                                    <Text style={[styles.ns700, { fontSize: 15, marginLeft: 10 }]}>STANDARD</Text>
                                                </View>
                                                <Text style={[styles.ns700, { fontSize: 15, color: blue }]}>$ 0.00</Text>
                                            </TouchableOpacity>

                                            <View style={{ marginTop: 13, flexDirection: "row", marginHorizontal: 30 }}>
                                                <View style={{ rowGap: 6, marginRight: 30 }}>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Cancellation Fee
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Response Time
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Rescheduling Help
                                                    </Text>
                                                </View>

                                                <View style={{ rowGap: 6 }}>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Upto  $250 per ticket
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Standard
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
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
                                                    <Text style={[styles.ns700, { fontSize: 15, marginLeft: 10 }]}>
                                                        PREMIUM
                                                    </Text>
                                                </View>
                                                <Text style={[styles.ns700, { fontSize: 15, color: blue }]}>
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
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Cancellation Fee
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Response Time
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Rescheduling Help
                                                    </Text>
                                                </View>

                                                <View style={{ rowGap: 6 }}>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: gs1 }]}>
                                                        FREE
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: gs1 }]}>
                                                        FAST
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
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
                                                    <Text style={[styles.ns700, { fontSize: 15, marginLeft: 10 }]}>
                                                        SUPREME
                                                    </Text>
                                                </View>
                                                <Text style={[styles.ns700, { fontSize: 15, color: blue }]}>$ 22.99</Text>
                                            </TouchableOpacity>

                                            <View
                                                style={{ marginTop: 13, flexDirection: "row", marginHorizontal: 30 }}
                                            >
                                                <View style={{ rowGap: 6, marginRight: 40 }}>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Cancellation Fee
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Response Time
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
                                                        Rescheduling Help
                                                    </Text>
                                                </View>

                                                <View style={{ rowGap: 6 }}>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: gs1 }]}>
                                                        FREE
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: gs1 }]}>
                                                        SUPER FAST
                                                    </Text>
                                                    <Text style={[styles.lbB1, { fontSize: 13, color: b3 }]}>
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
                                        <Text style={[styles.lbB1, { fontSize: 17, marginLeft: 15, }]}>
                                            Flexible Ticket
                                        </Text>
                                    </View>

                                    <View style={{ marginVertical: 10 }}>
                                        <View style={styles.supPack}>
                                            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                                <Text style={[styles.ns700, { fontSize: 15, color: blue }]}>$ 0.00</Text>
                                            </View>

                                            <View style={{ rowGap: 6 }}>
                                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                    <Image
                                                        style={{ width: 13, height: 13, tintColor: gs1 }}
                                                        source={require("../../assets/icons/check.png")}
                                                    />
                                                    <Text
                                                        style={[styles.lbB1, { color: b3, marginLeft: 10, fontSize: 13 }]}
                                                    >
                                                        Rebooking included (subject to increase in fare)
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                    <Image
                                                        style={{ width: 13, height: 13, tintColor: gs1 }}
                                                        source={require("../../assets/icons/check.png")}
                                                    />
                                                    <Text
                                                        style={[styles.lbB1, { color: b3, marginLeft: 10, fontSize: 13 }]}
                                                    >
                                                        Name change included
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                    <Image
                                                        style={{ width: 13, height: 13, tintColor: gs1 }}
                                                        source={require("../../assets/icons/check.png")}
                                                    />
                                                    <Text
                                                        style={[styles.lbB1, { color: b3, marginLeft: 10, fontSize: 13 }]}
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
                                        <Text style={[styles.lbB1, { fontSize: 17, marginLeft: 10 }]}>
                                            Travel Assistance Classic
                                        </Text>

                                        <View style={{ alignItems: "flex-end" }}>
                                            <Text style={[styles.ns400, { fontSize: 17, color: blue }]}>$9.95</Text>
                                            <Text style={[styles.ns400]}>per person</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{ marginTop: 20, flexDirection: "row", alignItems: 'center', marginHorizontal: 10, }}
                                    >
                                        <Image
                                            style={{ width: 35, height: 35, tintColor: "#435970" }}
                                            source={require("../../assets/icons/shield.png")}
                                        />
                                        <Text style={[styles.ns600, { fontSize: 15, marginLeft: 15, }]}>
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
                                        <Text style={[styles.ns400, { marginLeft: 12, fontSize: Platform.OS === "ios" ? 14 : 12 }]}>
                                            Yes, I want travel assistance for my trip.
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
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

                        <Text style={[styles.ns600, { fontSize: 13, marginLeft: 15 }]}>
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
                            <Text style={[styles.ns700, { fontSize: 20, marginRight: 10 }]}>$ {flight_details?.price?.grandTotal}</Text>
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
                <FareBreakSheet fareDetails={flight_details?.price} fareRef={fareRef} />
            </View>
        </View>
    )
};

export default FlightReview;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 70 : 50,
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
        fontSize: 17,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        color: b1,
        fontSize: 17,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 11,
    },
    bottom: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: white,
        paddingBottom: Platform.OS === "ios" ? 25 : 5,
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
        marginRight: Platform.OS === "ios" && 10,
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
        paddingHorizontal: 22,
        alignItems: "center",
        justifyContent: 'center',
        paddingVertical: Platform.OS === "ios" ? 10 : 8,
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
        borderWidth: 1,
        borderColor: b2,
        borderRadius: 25,
        ...Platform.select({
            ios: { width: 25, height: 25 },
            android: { width: 23, height: 23 }
        })
    },
    circleFill: {
        borderRadius: 25,
        backgroundColor: blue,
        ...Platform.select({
            ios: { width: 25, height: 25 },
            android: { width: 23, height: 23 }
        }),
        borderWidth: 1,
        borderColor: b2,
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