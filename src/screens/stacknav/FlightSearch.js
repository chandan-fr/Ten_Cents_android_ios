import { ActivityIndicator, FlatList, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { b1, b3, black, blue, gs1, white } from '../../config/colors';
import SortBottomSheet from '../../utility/SortBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import { _Height, _Width } from '../../config/StaticVars';
import { calculateStopTime, formatDuration, getAirlinesName, getCurrentLocalTime, getFormatedDate } from '../../utility/UtilityFunctions';
import commonStyles from '../../assets/css/CommonFonts';
import { getFlightDetails } from '../../services/slices/FlightSlice';

const FlightSearch = ({ navigation }) => {
    const { flight_data, flight_loading, flight_search_data } = useSelector(state => state.flightSlice);
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const [sortBy, setSortBy] = useState("lth");
    const sortRef = useRef(null);
    const dispatch = useDispatch();

    const showFlightDetails = (flightId) => {
        const flightDetailsData = {
            flightId: flightId,
            departure: flight_search_data.originLocationCode,
            arrival: flight_search_data.destinationLocationCode,
            date: flight_search_data.departureDate,
            passengers: flight_search_data.adults.toString(),
            travelClass: flight_search_data.travelClass.toUpperCase(),
        };

        dispatch(getFlightDetails({ flightDetailsData, navigation }));
    };

    return (
        <View style={styles.parent}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            {flight_loading && <ActivityIndicator animating={flight_loading} size={"large"} style={{ width: _Width, height: _Height, zIndex: 9, position: "absolute" }} />}

            <View style={styles.wrap}>
                {/* nav head */}
                <View style={{ alignItems: "flex-start" }}>
                    <TouchableOpacity style={styles.nav} onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 25, height: 25, marginLeft: 10 }}
                            source={require("../../assets/icons/next.png")}
                        />
                        <View style={{ marginLeft: 30 }}>
                            <View style={styles.right}>
                                <Text style={styles.navHeadTxt}>{flight_search_data.originLocationCode}</Text>
                                <Image style={styles.rightImg} source={require("../../assets/icons/next.png")} />
                                <Text style={styles.navHeadTxt}>{flight_search_data.destinationLocationCode}</Text>
                            </View>
                            <Text style={styles.navSubHeadTxt}>{getFormatedDate(flight_search_data.departureDate)} | {flight_search_data.adults} Adult</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* date & price */}
                <View style={styles.dpWrap}>
                    <View style={{ alignItems: "center", marginLeft: 25, marginRight: 10 }}>
                        <Image
                            style={{ width: 25, height: 25, }}
                            source={require("../../assets/icons/calendar.png")}
                        />
                        <Text style={styles.dpMonthTxt}>Jan</Text>
                    </View>

                    <View style={{ flex: 1, marginRight: 6, borderRadius: 4 }}>
                        <ScrollView
                            style={{ columnGap: 10, rowGap: 10 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {data.map((_, i) => (
                                <View key={i} style={[styles.dateCont, i === 0 ? { marginLeft: 5 } : null]}>
                                    <Text style={styles.dateContTxt}>$ 430</Text>
                                    <Text style={styles.dateContSubTxt}>16, Tue </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    <TouchableOpacity style={[styles.arrowWrap, { right: 4 }]}>
                        <Image style={styles.arrow} source={require("../../assets/icons/right-arrow.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.arrowWrap}>
                        <Image
                            style={[styles.arrow, { transform: [{ rotate: "180deg" }] }]}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                    </TouchableOpacity>
                </View>

                {/* flight option scroll */}
                <View style={styles.flightOptnWrap}>
                    {flight_data.length ?
                        <FlatList
                            data={flight_data}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(_, i) => i}
                            renderItem={({ item, index }) => (
                                <>
                                    {index === 0 ? <View style={{ marginVertical: 5 }} /> : null}
                                    <TouchableOpacity
                                        style={styles.flightOptnCont}
                                        onPress={() => showFlightDetails(item?.id)}
                                    >
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <View style={{ flex: 1, rowGap: 4 }}>
                                                {item?.itineraries[0]?.segments?.map((flightItem, i) => (
                                                    <View key={i.toString()}>
                                                        {/* name */}
                                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                            <Image
                                                                style={{ width: 25, height: 25 }}
                                                                resizeMode='stretch'
                                                                source={getAirlinesName(flightItem?.carrierCode)?.logo}
                                                            />
                                                            <Text style={styles.indigo}>{getAirlinesName(flightItem?.carrierCode)?.name}</Text>
                                                        </View>

                                                        {/* body */}
                                                        <View style={[styles.midRow, { marginBottom: 10 }]}>
                                                            {/* departure/ origin */}
                                                            <View>
                                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                                    {flightItem?.departure?.iataCode}
                                                                </Text>
                                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                                    {getCurrentLocalTime(flightItem?.departure?.at)}
                                                                </Text>
                                                            </View>

                                                            <View>
                                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                                    {/* -{item?.itineraries[0]?.segments[1]?.departure?.iataCode}- */}
                                                                </Text>
                                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                                    {formatDuration(flightItem?.duration)}
                                                                </Text>
                                                            </View>

                                                            {/* arrival/destination */}
                                                            <View>
                                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                                    {flightItem?.arrival?.iataCode}
                                                                </Text>
                                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                                    {getCurrentLocalTime(flightItem?.arrival?.at)}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                ))}

                                                <Text style={[styles.ns400, { color: b3 }]}>Layover- {calculateStopTime(item?.itineraries[0]?.segments)}</Text>
                                            </View>

                                            <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                                <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                                    {`${item?.price?.currency === "USD" && "$"} ${item?.price?.grandTotal}`}
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                            <Image
                                                style={{ width: 18, height: 18, tintColor: gs1 }}
                                                source={require("../../assets/icons/discount-solid.png")}
                                            />
                                            <Text style={[styles.ns400, { color: gs1, marginLeft: 6 }]}>
                                                Use CASUPER code to get special $50 OFF
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </>
                            )}
                        />
                        :
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                            <Text style={[commonStyles.ns700, { fontSize: 24 }]}>No Flights Found!</Text>
                        </View>
                    }
                </View>

                {/* sticky bottom */}
                <View style={styles.stickyBtm}>
                    <View style={styles.leftWrap}>
                        <View style={{ flexDirection: "row", columnGap: 5, flex: 1 }}>
                            <TouchableOpacity
                                style={[styles.filterBtnComn, { backgroundColor: "#848484" }]}
                                onPress={() => sortRef.current.open()}
                            >
                                <Text style={[styles.ns600, { color: white, fontSize: Platform.OS === "ios" ? 12 : 10 }]}>Prices</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.filterBtnComn}
                                onPress={() => navigation.navigate("filters")}
                            >
                                <Text style={[styles.ns600, { color: white, fontSize: Platform.OS === "ios" ? 12 : 10 }]}>Non- stop only</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.filterBtnComn}
                                onPress={() => navigation.navigate("filters")}
                            >
                                <Text style={[styles.ns600, { color: white, fontSize: Platform.OS === "ios" ? 12 : 10 }]}>Morning 6.00 - 12PM</Text>
                            </TouchableOpacity>
                        </View>

                        <Text
                            style={[
                                styles.ns600,
                                { color: white, fontSize: Platform.OS === "ios" ? 11 : 10, marginVertical: 3, marginLeft: 11 }
                            ]}
                        >
                            SORT
                        </Text>
                    </View>

                    <View style={styles.filterWrap}>
                        <TouchableOpacity
                            style={{ paddingVertical: 18, paddingHorizontal: 6 }}
                            onPress={() => navigation.navigate("selectfair")}
                        >
                            <Image
                                style={{ width: 28, height: 28, }}
                                source={require("../../assets/icons/filter.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* bottom sheet */}
                <SortBottomSheet sortRef={sortRef} sortBy={sortBy} setSortBy={setSortBy} />
            </View>
        </View>
    )
};

export default FlightSearch;

const styles = StyleSheet.create({
    parent: { flex: 1, backgroundColor: white },
    wrap: { flex: 1 },
    nav: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: Platform.OS === "ios" ? 70 : 50,
        paddingRight: 5,
    },
    navHeadTxt: {
        color: b1,
        fontSize: 15,
        fontFamily: "LondonBetween",
    },
    navSubHeadTxt: {
        color: b3,
        fontSize: 12,
        fontFamily: "LondonBetween",
    },
    right: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    rightImg: {
        width: 15,
        height: 15,
        marginHorizontal: 10,
        transform: [{ rotate: "180deg" }],
    },
    dpWrap: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: blue,
        marginHorizontal: 5,
        borderRadius: 4,
        paddingVertical: 5,
        marginTop: 15,
    },
    dpMonthTxt: {
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 18,
        color: white,
        marginTop: 6,
    },
    dateCont: {
        backgroundColor: "#E3F8FF",
        alignItems: "center",
        borderRadius: 4,
        padding: 4,
        marginRight: 5,
    },
    dateContTxt: {
        fontFamily: "Inter-Regular",
        color: "#166B86",
        fontSize: 15,
    },
    dateContSubTxt: {
        color: "#166B86",
        fontSize: 14,
        marginTop: 10,
    },
    arrow: {
        width: 20,
        height: 20,
    },
    arrowWrap: {
        position: "absolute",
    },
    flightOptnWrap: {
        flex: 1,
        marginTop: 10,
        paddingBottom: Platform.OS === "ios" ? 25 : 5,
    },
    flightOptnCont: {
        backgroundColor: white,
        elevation: 5,
        paddingHorizontal: 10,
        marginHorizontal: 13,
        paddingVertical: 7,
        borderRadius: 8,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 10,
    },
    indigo: {
        fontFamily: "LondonBetween",
        fontSize: 20,
        color: b1,
        marginLeft: 10,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 13,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-Bold",
    },
    midRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginTop: 10,
    },
    stickyBtm: {
        backgroundColor: b1,
        opacity: 0.8,
        position: "absolute",
        width: _Width - 20,
        bottom: Platform.OS === "ios" ? 30 : 10,
        marginHorizontal: 10,
        borderRadius: 8,
        flexDirection: "row",
    },
    filterWrap: {
        backgroundColor: "#848484",
        alignSelf: "flex-end",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    leftWrap: {
        flex: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        marginRight: 5,
        paddingLeft: 8,
    },
    filterBtnComn: {
        paddingHorizontal: 10,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: "#848484",
        borderRadius: 2,
        paddingVertical: 6,
        marginTop: 8,
    },
    filterTxt: {
        color: white,
        fontSize: 12,
    },
});