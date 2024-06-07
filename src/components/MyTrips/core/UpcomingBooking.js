import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { b2, b3, white } from '../../../config/colors';
import commonStyles from '../../../assets/css/CommonFonts';


const UpcomingBooking = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* heading */}
            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Text style={[commonStyles.lbB1, { fontSize: 16, color: b3 }]}>
                    Upcoming Bookings
                </Text>
            </View>

            {/* bookings */}
            <View style={{ marginTop: 40, marginHorizontal: 6, rowGap: 10 }}>
                <TouchableOpacity
                    style={styles.booking}
                    onPress={() => navigation.navigate("mtflights", {srcName: "Upcoming Bookings"})}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 20, borderColor: b2 }}>
                            <Image
                                style={{ width: 15, height: 15, tintColor: b2 }}
                                source={require("../../../assets/icons/airplane.png")}
                            />
                        </View>

                        <Text style={[commonStyles.ns400, { fontSize: 16, color: b2, marginLeft: 10 }]}>
                            Flights
                        </Text>
                    </View>

                    <View style={styles.bookingRight}>
                        <View style={styles.dot} />
                        <Text style={[commonStyles.ns400, { fontSize: 12, color: b2 }]}> 1 New</Text>
                        <Image
                            style={{ width: 16, height: 16, tintColor: b2, marginLeft: 10 }}
                            source={require("../../../assets/icons/right-arrow.png")}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.booking}
                    onPress={() => navigation.navigate("mthotels", {srcName: "Upcoming Bookings"})}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 20, borderColor: b2 }}>
                            <Image
                                style={{ width: 15, height: 15, tintColor: b2 }}
                                source={require("../../../assets/icons/resort.png")}
                            />
                        </View>

                        <Text style={[commonStyles.ns400, { fontSize: 16, color: b2, marginLeft: 10 }]}>
                            Hotels
                        </Text>
                    </View>

                    <View style={styles.bookingRight}>
                        {/* <View style={styles.dot} />
                            <Text style={[commonStyles.ns400, {fontSize: 12, color: b2}]}> 1 New</Text> */}
                        <Image
                            style={{ width: 16, height: 16, tintColor: b2, marginLeft: 10 }}
                            source={require("../../../assets/icons/right-arrow.png")}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.booking}
                    onPress={() => navigation.navigate("mtrntlcars", {srcName: "Upcoming Bookings"})}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 20, borderColor: b2 }}>
                            <Image
                                style={{ width: 15, height: 15, tintColor: b2 }}
                                source={require("../../../assets/icons/car-rental.png")}
                            />
                        </View>

                        <Text style={[commonStyles.ns400, { fontSize: 16, color: b2, marginLeft: 10 }]}>
                            Rental Cars
                        </Text>
                    </View>

                    <View style={styles.bookingRight}>
                        {/* <View style={styles.dot} />
              <Text style={[commonStyles.ns400, {fontSize: 12, color: b2}]}> 1 New</Text> */}
                        <Image
                            style={{ width: 16, height: 16, tintColor: b2, marginLeft: 10 }}
                            source={require("../../../assets/icons/right-arrow.png")}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default UpcomingBooking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4F4",
    },
    booking: {
        backgroundColor: white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 3,
        paddingHorizontal: 25,
        paddingVertical: 8
    },
    dot: {
        width: 7,
        height: 7,
        backgroundColor: "#31C92E",
        borderRadius: 7,
    },
    bookingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});