import { ActivityIndicator, Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';
import { blueShade1, white } from '../../config/colors';
import Flights from '../../components/Search/Flights/Flights';
import Hotels from '../../components/Search/Hotels/Hotels';
import Cars from '../../components/Search/Cars/Cars';
import GroupTickets from '../../components/Search/GroupTickets/GroupTickets';
import FlightAndHotels from '../../components/Search/FlightHotels/FlightAndHotels';
import HolidayPackages from '../../components/Search/HolidayPackages/HolidayPackages';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get("window");

const Search = ({ navigation }) => {
    const { flight_loading } = useSelector(state => state.flightSlice);
    const [selectedHMenu, setSelectedHMenu] = useState("f");
    const data = [1, 1, 1, 1, 1, 1];

    return (
        <View style={styles.parent}>
            <BgGradient width={width} height={Platform.OS === "ios" ? height * 0.7 : height * 0.79} />
            <Header />

            {flight_loading && <ActivityIndicator
                color={blueShade1}
                animating={flight_loading}
                size={"large"}
                style={{ width: width, height: height, zIndex: 9, position: "absolute" }}
            />}

            <View style={styles.body}>
                {/* booking nav bar */}
                <View style={styles.headMenuWrap}>
                    <TouchableOpacity
                        style={selectedHMenu == "f" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("f")}
                    >
                        <Text style={styles.hMenuTxt}>Flights</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedHMenu == "f&h" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("f&h")}
                    >
                        <Text style={styles.hMenuTxt}>Flight + Hotels</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedHMenu == "h" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("h")}
                    >
                        <Text style={styles.hMenuTxt}>Hotels</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedHMenu == "c" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("c")}
                    >
                        <Text style={styles.hMenuTxt}>Cars</Text>
                    </TouchableOpacity>
                </View>

                {/* extra nav bar */}
                <View style={[styles.headMenuWrap, { marginHorizontal: 100 }]}>
                    <TouchableOpacity
                        style={selectedHMenu == "hp" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("hp")}
                    >
                        <Text numberOfLines={2} style={[styles.hMenuTxt, { width: 60, textAlign: "center" }]}>
                            Holiday Packages
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={selectedHMenu == "gt" ? styles.hMenuItemActive : styles.hMenuItem}
                        onPress={() => setSelectedHMenu("gt")}
                    >
                        <Text numberOfLines={2} style={[styles.hMenuTxt, { width: 50, textAlign: "center" }]}>
                            Group Tickets
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Flights */}
                {selectedHMenu === "f" && <Flights navigation={navigation} data={data} width={width} height={height} />}

                {/* Flights + hotels */}
                {selectedHMenu === "f&h" && <FlightAndHotels navigation={navigation} data={data} />}

                {/* hotels */}
                {selectedHMenu === "h" && <Hotels navigation={navigation} data={data} width={width} height={height} />}

                {/* cars */}
                {selectedHMenu === "c" && <Cars navigation={navigation} />}

                {/* holiday packages */}
                {selectedHMenu === "hp" && <HolidayPackages navigation={navigation} />}

                {/* group tickets */}
                {selectedHMenu === "gt" && <GroupTickets navigation={navigation} data={data} width={width} height={height} />}
            </View>
        </View>
    )
};

export default Search;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 55 : 0,
    },
    body: {
        marginTop: 25,
        flex: 1,
    },
    headMenuWrap: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginBottom: 15,
    },
    hMenuItemActive: {
        borderBottomWidth: 2.5,
        borderColor: white,
    },
    hMenuItem: {
        borderColor: white,
    },
    hMenuTxt: {
        color: white,
        fontFamily: "LondonBetween",
        fontSize: 15,
        paddingBottom: Platform.OS === "ios" ? 2 : 1,
    },
});