import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import commonStyles from '../../../assets/css/CommonFonts';
import { b2, b3, black, blue, rs1, rs2, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const ManageBooking = ({ navigation, route }) => {
    const { srcName } = route?.params;
    const [showTicket, setShowTicket] = useState(false);

    return (
        <View style={styles.container}>
            {/* heading */}
            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Text style={[commonStyles.lbB1, { fontSize: 16, color: b3 }]}>
                    {srcName}
                </Text>
            </View>

            {/* subheading */}
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <Text style={[commonStyles.lbB1, { fontSize: 14, color: b3 }]}>
                    Flights
                </Text>
            </View>

            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingVertical: 6 }}>
                        {/* ticket */}
                        <View style={styles.ticket}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 30 }}>
                                <Image
                                    style={{ width: 30, height: 30, marginRight: 15 }}
                                    source={icon.vistara}
                                />
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                                    <View>
                                        <Text style={[commonStyles.ns400, { fontSize: 12 }]}>VISTARA UK-738</Text>

                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: 8 }}>
                                            <Image
                                                style={{ width: 20, height: 20, marginRight: 10, tintColor: b3, transform: [{ rotate: "-15deg" }] }}
                                                source={icon.airplane}
                                            />
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Kolkata - Dhaka</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <View style={{ backgroundColor: "#F2F2F2", borderRadius: 15, paddingVertical: 4, marginRight: 20, paddingHorizontal: 20 }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 10, color: "#666666" }]}>
                                                Trip Complete
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={{ marginTop: 8, alignSelf: "flex-end", padding: 4 }}
                                            onPress={() => setShowTicket(!showTicket)}
                                        >
                                            <Image
                                                style={{ width: 16, height: 16, transform: [showTicket ? { rotate: "-90deg" } : { rotate: "90deg" }] }}
                                                source={icon.rightArrow}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            {/* hinge section */}
                            <View style={styles.hinge}>
                                <View style={styles.halfCircle} />
                                <View style={[styles.halfCircle, { transform: [{ rotate: "180deg" }] }]} />
                            </View>
                        </View>

                        {/* ticket details */}
                        {showTicket && <View style={styles.ticketDetails}>
                            {/* filght details */}
                            <View style={{ alignItems: "center", marginBottom: 6 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 30, }}>
                                    <Image
                                        style={{ width: 30, height: 30, marginRight: 15 }}
                                        source={icon.vistara}
                                    />

                                    <View style={{ alignItems: 'center' }}>
                                        <View style={{ backgroundColor: "#F2F2F2", borderRadius: 15, paddingVertical: 4, alignItems: 'center', paddingHorizontal: 10 }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 10, color: "#666666" }]}>
                                                Trip Complete
                                            </Text>
                                        </View>

                                        <Text style={[commonStyles.ns400, { fontSize: 12, marginTop: 3 }]}>
                                            VISTARA UK-738
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: 3 }}>
                                            <Image
                                                style={{ width: 20, height: 20, marginRight: 10, tintColor: b3, transform: [{ rotate: "-15deg" }] }}
                                                source={icon.airplane}
                                            />
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Kolkata - Dhaka</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ alignItems: "center" }}>
                                <Text style={[commonStyles.ns400, { color: "#666666" }]}>
                                    Depart on Wed, 20 Sep 2023 • Nonstop • 2h 35min
                                </Text>
                            </View>

                            <View style={styles.dotLine} />

                            {/* hinge section */}
                            <View
                                style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: -10 }}
                            >
                                <View style={styles.halfCircle} />
                                <View style={[styles.halfCircle, { transform: [{ rotate: "180deg" }] }]} />
                            </View>

                            {/* status */}
                            <View style={{ rowGap: 4, alignItems: "center", marginTop: 6 }}>
                                <Text style={{ fontSize: 12, fontFamily: "Rubik-Regular", color: blue }}>
                                    Web check-In complete
                                </Text>
                                {/* <Text style={{ fontSize: 12, fontFamily: "Rubik-Regular", color: "#1ABB21" }}>
                                    Web check-In complete
                                </Text> */}

                                <Text style={{ fontSize: 12, fontFamily: "Rubik-Regular", color: "#898B91" }}>
                                    PNR/E-TICKET NUMBER
                                </Text>

                                <Text style={[commonStyles.ns400, { fontSize: 12, color: "#141823" }]}>
                                    228-9656092894DRB987
                                </Text>
                            </View>

                            {/* destination */}
                            <View style={{ marginTop: 20, marginHorizontal: 6, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ rowGap: 2 }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                                        DEPARTURE
                                    </Text>

                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        Wed, 20 Sep 18:45
                                    </Text>

                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        CCU Kolkata
                                    </Text>
                                </View>

                                <View>
                                    <Text style={[commonStyles.ns400, { fontSize: 10, color: "#666666" }]}>
                                        2h 35min
                                    </Text>
                                </View>

                                <View style={{ rowGap: 2, alignItems: "flex-end" }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                                        ARRIVAL
                                    </Text>

                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        Wed, 20 Sep 18:45
                                    </Text>

                                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                        CCU Kolkata
                                    </Text>
                                </View>
                            </View>

                            {/* baggage */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 30, marginTop: 20, justifyContent: "space-evenly" }}>
                                <View style={{ alignItems: "center", rowGap: 3 }}>
                                    <Image
                                        style={{ width: 30, height: 30, tintColor: blue }}
                                        source={icon.baggage}
                                    />
                                    <Text style={[commonStyles.ns700, { color: b3, fontSize: 14 }]}>15 Kgs</Text>
                                    <Text style={[commonStyles.ns400, { color: b3 }]}>Check-in Baggage</Text>
                                </View>

                                <View style={{ alignItems: "center", rowGap: 3 }}>
                                    <Image
                                        style={{ width: 30, height: 30, tintColor: blue }}
                                        source={icon.backpack}
                                    />
                                    <Text style={[commonStyles.ns700, { color: b3, fontSize: 14 }]}>7 Kgs</Text>
                                    <Text style={[commonStyles.ns400, { color: b3 }]}>Cabin Baggage</Text>
                                </View>
                            </View>

                            {/* user & seat info */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15, marginTop: 20, justifyContent: "space-between" }}>
                                <View style={{ rowGap: 5 }}>
                                    <Text style={[commonStyles.ns600, { color: "#898B91", fontSize: 14 }]}>
                                        Traveller
                                    </Text>

                                    <Text style={[commonStyles.ns400, { color: black, fontSize: 12 }]}>
                                        KEVIN
                                    </Text>
                                </View>

                                <View style={{ rowGap: 5 }}>
                                    <Text style={[commonStyles.ns600, { color: "#898B91", fontSize: 14 }]}>
                                        Gender
                                    </Text>

                                    <Text style={[commonStyles.ns400, { color: black, fontSize: 12 }]}>
                                        MALE
                                    </Text>
                                </View>

                                <View style={{ rowGap: 5 }}>
                                    <Text style={[commonStyles.ns600, { color: "#898B91", fontSize: 14 }]}>
                                        Seat
                                    </Text>

                                    <Text style={[commonStyles.ns400, { color: black, fontSize: 12 }]}>
                                        25D
                                    </Text>
                                </View>
                            </View>

                            {/* meals & extras */}
                            <View style={{ alignItems: "flex-start", marginHorizontal: 6, marginTop: 30, paddingLeft: 15, rowGap: 10 }}>
                                <Text style={[commonStyles.ns400, { color: "#898B91" }]}>Meal -</Text>
                                <Text style={[commonStyles.ns400, { color: "#898B91" }]}>EXCESS BAGGAGE -</Text>
                            </View>
                        </View>}

                        {/* primary contact */}
                        <View style={{ padding: 20, borderRadius: 10, backgroundColor: white, marginTop: 15, elevation: 4 }}>
                            <View style={{ rowGap: 6 }}>
                                <Text style={[commonStyles.ns400, { color: "#141823" }]}>
                                    Primary Contact
                                </Text>
                                <Text style={[commonStyles.ns400, { color: "#898B91", fontSize: 12 }]}>
                                    We will contact you on this number. You can email or whatsapp the ticket to other contacts
                                </Text>
                            </View>

                            <View style={{ borderColor: "#E5EDF6", borderWidth: 1, marginVertical: 10 }} />

                            <View style={{ rowGap: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <View style={{ backgroundColor: "rgba(33, 180, 226, 0.2)", width: 30, height: 30, borderRadius: 30, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: blue }}
                                            source={icon.mail}
                                        />
                                    </View>
                                    <Text style={[commonStyles.ns400, { color: "#141823", fontSize: 15, marginLeft: 10 }]}>
                                        kevin321@gmail.com
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <View style={{ backgroundColor: "rgba(33, 180, 226, 0.2)", width: 30, height: 30, borderRadius: 30, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: blue }}
                                            source={icon.mobile}
                                        />
                                    </View>
                                    <Text style={[commonStyles.ns400, { color: "#141823", fontSize: 15, marginLeft: 10 }]}>
                                        +91- 9634647878
                                    </Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 20, alignItems: "center" }}>
                                <TouchableOpacity
                                    style={styles.btn}
                                >
                                    <Text style={[commonStyles.lbB1, { fontSize: 14, color: white }]}>
                                        E-mail/ SMS Ticket
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* download tickets */}
                        <View style={{ padding: 20, borderRadius: 10, backgroundColor: white, marginTop: 15, elevation: 4 }}>
                            <View style={{ rowGap: 12, alignItems: 'flex-start' }}>
                                <Text style={[commonStyles.ns400, { fontSize: 18 }]}>Ticket(s)</Text>

                                <TouchableOpacity>
                                    <Text style={[commonStyles.ns400, { fontSize: 16, color: blue }]}>
                                        Download E-ticket(s)
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={[commonStyles.ns400, { fontSize: 16, color: blue }]}>
                                        Email/SMS E-Ticket(s)
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Airline Contact */}
                        <View style={{ paddingVertical: 15, borderRadius: 10, backgroundColor: white, marginTop: 15, elevation: 4 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                                <Image
                                    style={{ width: 40, height: 40, tintColor: b3, transform: [{ rotate: "-15deg" }] }}
                                    source={icon.airplane}
                                />

                                <Text style={[commonStyles.ns400, { fontSize: 20, marginLeft: 10 }]}>
                                    Airline Contact
                                </Text>
                            </View>

                            <View style={{ height: 2, backgroundColor: "#EFF3F8", marginVertical: 6 }} />

                            <View style={{ marginTop: 6, rowGap: 10, marginLeft: 15 }}>
                                <Text style={[commonStyles.ns400, { color: b3 }]}>VISTARA</Text>
                                <Text style={[commonStyles.ns400, { fontSize: 16 }]}>9289228888</Text>
                            </View>
                        </View>

                        {/* Pricing Breakup */}
                        <View style={{ paddingVertical: 15, borderRadius: 10, backgroundColor: white, marginTop: 15, elevation: 4 }}>
                            <View style={{ paddingLeft: 10, }}>
                                <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                                    Pricing Breakup
                                </Text>
                            </View>

                            <View style={{ height: 2, backgroundColor: "#EFF3F8", marginVertical: 12 }} />

                            <View style={{ marginHorizontal: 20, rowGap: 10, }}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>Airline Base Fare</Text>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>$ 250</Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>Airline Taxes</Text>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>$ 11</Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>GI Convenience Fee</Text>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>$ 25</Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>E-Coupon</Text>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>$ 8</Text>
                                </View>

                                <View style={{ alignItems: "flex-start", paddingLeft: 15 }}>
                                    <View style={{ backgroundColor: "#E9F6EA", borderRadius: 16, paddingVertical: 4, paddingHorizontal: 15 }}>
                                        <Text style={[commonStyles.ns400, { color: "#2BAC36" }]}>GOSKYDOM</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ height: 2, backgroundColor: "#EFF3F8", marginVertical: 12 }} />

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20, marginTop: 5 }}>
                                <Text style={[commonStyles.ns400, { fontSize: 16 }]}>Total Amount</Text>
                                <Text style={[commonStyles.ns400, { fontSize: 16 }]}>$ 276</Text>
                            </View>

                            <View style={{ marginHorizontal: 20, marginTop: 15, alignItems: "flex-start" }}>
                                <TouchableOpacity style={{}}>
                                    <Text style={[commonStyles.ns400, { fontSize: 16, color: "#2276E3" }]}>
                                        Download Invoice
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* cancel/ reschedule */}
                        <View style={{ paddingVertical: 30, borderRadius: 10, backgroundColor: white, marginTop: 15, elevation: 4, alignItems: 'center', rowGap: 6 }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10, }}
                            >
                                <Image
                                    style={{ width: 20, height: 20, tintColor: "#55AC2C", marginRight: 10 }}
                                    source={icon.check}
                                />
                                <Text style={[commonStyles.ns400, { fontSize: 16, color: "#55AC2C", textTransform: "uppercase" }]}>
                                    Reschedule
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1.4, paddingVertical: 5, paddingHorizontal: 40, borderRadius: 6, borderColor: "#910F0F" }}
                            >
                                <Image
                                    style={{ width: 20, height: 20, tintColor: "#910F0F", marginRight: 10 }}
                                    source={icon.cross}
                                />
                                <Text style={[commonStyles.ns400, { fontSize: 16, color: "#910F0F", textTransform: "uppercase" }]}>
                                    Cancel Booking
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* cancell policy */}
                        <View style={{ padding: 20, borderRadius: 10, backgroundColor: white, marginTop: 15, elevation: 4, rowGap: 8 }}>
                            <Text style={commonStyles.ns400}>Cancellation Policy</Text>
                            <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                                Your flight has already departed, online cancellation is not allowed.
                            </Text>
                        </View>

                        {/* refund break up */}
                        {srcName === "Cancelled Bookings" && <View style={{ paddingVertical: 15, borderRadius: 10, backgroundColor: white, marginTop: 15, elevation: 4 }}>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={[commonStyles.ns400, { fontSize: 20 }]}>Refund Breakup</Text>
                            </View>

                            <View style={{ backgroundColor: "#EFF3F8", height: 2, marginVertical: 12 }} />

                            <View style={{ marginHorizontal: 20, rowGap: 10, }}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>Airline Base Fare</Text>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>$ 250</Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>Airline Taxes</Text>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>$ 11</Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>GI Convenience Fee</Text>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>$ 25</Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>E-Coupon</Text>
                                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>$ 8</Text>
                                </View>
                            </View>

                            <View style={{ backgroundColor: "#EFF3F8", height: 2, marginVertical: 12 }} />

                            <View style={{ alignItems: "center" }}>
                                <TouchableOpacity
                                    style={styles.btn}
                                >
                                    <Text style={[commonStyles.lbB1, { color: white, fontSize: 14 }]}>
                                        Refund
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>}

                        {/* refund break up */}
                        {/* <View style={{ paddingVertical: 15, borderRadius: 10, backgroundColor: white, marginTop: 15, elevation: 4 }}>
                            <View style={styles.notFound}>
                                <Text style={[commonStyles.ns400, { color: rs2 }]}>
                                    No Refund applicable
                                </Text>
                            </View>
                        </View> */}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

export default ManageBooking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4F4",
    },
    body: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 20,
    },
    ticket: {
        backgroundColor: white,
        elevation: 3,
        paddingVertical: 16,
        borderRadius: 10,
        position: 'relative',
    },
    halfCircle: {
        backgroundColor: "#F4F4F4",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        width: 20,
        height: 30,
    },
    hinge: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        width: width - 38,
        transform: [{ translateY: 29 }],
        zIndex: -1,
    },
    dotLine: {
        borderWidth: 1,
        borderColor: b3,
        borderStyle: "dashed",
        marginTop: 15,
    },
    ticketDetails: {
        backgroundColor: white,
        borderRadius: 10,
        elevation: 4,
        paddingVertical: 20,
        marginTop: -8,
    },
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 25,
    },
    notFound: {
        backgroundColor: rs1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        paddingHorizontal: 25,
        marginHorizontal: 6,
        paddingVertical: 10,
    },
});