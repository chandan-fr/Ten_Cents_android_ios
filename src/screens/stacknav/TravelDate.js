import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, b2, b3, black, blue, white } from '../../config/colors';
import { genCurrentDate } from '../../config/CurrentDate';
import CalendarPicker from "react-native-calendar-picker";

const TravelDate = ({ navigation }) => {
    const today = new Date();
    const nxtMonth = new Date(2024, today.getMonth() + 1, 1).toString();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const startOfNxtMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const endOfNxtMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    return (
        <SafeAreaView style={styles.parent}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.wrap}>
                {/* nav head */}
                <TouchableOpacity style={styles.nav} onPress={() => navigation.goBack()}>
                    <Image style={{ width: 25, height: 25 }} source={require("../../assets/icons/next.png")} />

                    <View style={styles.planeWrap}>
                        <Image style={{ width: 15, height: 15 }} source={require("../../assets/icons/plane.png")} />
                    </View>

                    <Text style={styles.navTxt}>Pick a journey date</Text>
                </TouchableOpacity>

                {/* body */}
                <View style={styles.body}>
                    <View style={{ alignItems: 'center', marginVertical: 10, }}>
                        <Text style={styles.curDateTxt}>Today is {genCurrentDate()}</Text>
                    </View>

                    <View style={{ borderWidth: 0, flex: 1, marginHorizontal: 10 }}>
                        <CalendarPicker
                            weekdays={["S", "M", "T", "W", "T", "F", "S"]}
                            allowRangeSelection={true}
                            textStyle={styles.calTxtStl}
                            todayBackgroundColor={"transparent"}
                            restrictMonthNavigation={true}
                            dayShape={"square"}
                            minDate={startOfMonth}
                            maxDate={endOfMonth}
                            selectedRangeStyle={{ backgroundColor: "rgba(33, 180, 226, 0.3)" }}
                            selectedRangeStartStyle={{ backgroundColor: blue, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                            selectedRangeEndStyle={{ backgroundColor: blue, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                            selectedRangeStartTextStyle={{ color: white }}
                            selectedRangeEndTextStyle={{ color: white }}
                        />

                        <View style={{ marginVertical: 15, }} />

                        <CalendarPicker
                            initialDate={nxtMonth}
                            weekdays={["S", "M", "T", "W", "T", "F", "S"]}
                            allowRangeSelection={true}
                            textStyle={styles.calTxtStl}
                            minDate={startOfNxtMonth}
                            maxDate={endOfNxtMonth}
                            restrictMonthNavigation={true}
                            selectedRangeStyle={{ backgroundColor: "rgba(33, 180, 226, 0.3)" }}
                            selectedRangeStartStyle={{ backgroundColor: blue, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                            selectedRangeEndStyle={{ backgroundColor: blue, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                            selectedRangeStartTextStyle={{ color: white }}
                            selectedRangeEndTextStyle={{ color: white }}
                        />
                    </View>

                    <View style={{ alignItems: "flex-end", marginRight: 10, marginBottom: 20 }}>
                        <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
                            <Text style={styles.closeBtnTxt}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default TravelDate;

const styles = StyleSheet.create({
    parent: { flex: 1, backgroundColor: white },
    wrap: { flex: 1 },
    nav: {
        marginTop: 40,
        marginLeft: 15,
        flexDirection: "row",
        alignItems: 'center',
    },
    navTxt: {
        color: b1,
        fontFamily: "LondonTwo",
        fontSize: 17
    },
    planeWrap: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: b2,
        borderRadius: 30,
        marginLeft: 15,
        marginRight: 5,
    },
    body: {
        flex: 1,
        backgroundColor: white,
        elevation: 4,
        marginHorizontal: 10,
        marginTop: 15,
        borderRadius: 5,
        marginBottom: 5,
    },
    curDateTxt: {
        color: b1,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 17,
    },
    calTxtStl: {
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 17,
    },
    closeBtn: {
        backgroundColor: "#118ACB",
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    closeBtnTxt: {
        color: white,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 13,
    },
});