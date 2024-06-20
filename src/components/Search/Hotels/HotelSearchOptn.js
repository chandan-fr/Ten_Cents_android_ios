import { Dimensions, Image, Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { b1, b3, black, blue, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import SearchPanel from '../Flights/SearchPanel';

const { width, height } = Dimensions.get("window");

const HotelSearchOptn = ({ navigation, openTravel, setOpenTravel, hotelData, setHotelData, setOuterScrollEnabled }) => {
    const [openRoom, setOpenRoom] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const handleRoom = (name) => {
        setHotelData({ ...hotelData, travelClass: name });
        setOpenRoom(false);
    };

    const setLocation = (data) => {
        setHotelData({ ...hotelData, destinationLocationCode: data })
        setIsShow(false);
        setOuterScrollEnabled(true);
    };

    return (
        <TouchableWithoutFeedback onPress={() => { setOpenTravel(false); Keyboard.dismiss() }}>
            <View style={styles.main}>
                {/* top selection row */}
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={[styles.left, { width: width / 2.5 }]}>
                        <Text style={styles.tbTxt}>Destination</Text>

                        <TextInput
                            style={[styles.inputSearch, { paddingLeft: 0 }]}
                            placeholder='Enter Location'
                            placeholderTextColor={b1}
                            value={hotelData.destinationLocationCode}
                            onChangeText={value => setHotelData({ ...hotelData, destinationLocationCode: value })}
                            onFocus={() => setIsShow(true)}
                        />

                        <Text style={styles.tbTxt}>Destination</Text>
                    </View>
                </View>

                <View style={styles.btmBrdr} />

                {/* middle selection row */}
                <View style={[styles.topWrap, { marginTop: 7, }]}>
                    <View style={styles.left}>
                        <Text style={styles.tbTxt}>Check- In</Text>

                        <TouchableOpacity onPress={() => navigation.navigate("traveldate", { src: "depart", setFormValue: setHotelData, formValue: hotelData })}>
                            <Text style={styles.midTxt}>{hotelData?.departureDate ? hotelData?.departureDate : "Select Date"}</Text>
                        </TouchableOpacity>

                        <Text style={styles.tbTxt}>Day</Text>
                    </View>

                    <View style={styles.right}>
                        <Text style={styles.tbTxt}>Check- Out</Text>

                        <TouchableOpacity onPress={() => navigation.navigate("traveldate", { src: "return", setFormValue: setHotelData, formValue: hotelData })}>
                            <Text style={styles.midTxt}>{hotelData.returnDate ? hotelData.returnDate : "Select Date"}</Text>
                        </TouchableOpacity>

                        <Text style={styles.tbTxt}>Day</Text>
                    </View>
                </View>

                <View style={styles.btmBrdr} />

                {/* bottom selection row */}
                <View style={{ marginTop: 7 }}>
                    <View style={styles.topWrap}>
                        {/* travellers */}
                        <View style={styles.left}>
                            <Text style={styles.tbTxt}>Travellers</Text>

                            <TouchableOpacity onPress={() => setOpenTravel(true)}>
                                <Text style={styles.midTxt}>
                                    {hotelData?.adults + " Adult"}
                                    {hotelData?.children ? ("\n" + `${hotelData?.children} Children`) : ""}
                                    {hotelData?.infants ? ("\n" + hotelData?.infants + " Infants") : ""}
                                </Text>
                            </TouchableOpacity>

                            {openTravel && <View style={styles.travlOptnsWrap}>
                                {/* adults */}
                                <View style={styles.travelContWrap}>
                                    <View>
                                        <Text style={styles.travelHdTxt}>Adults</Text>
                                        <Text style={styles.travelSubHdTxt}>Aged 12+ years</Text>
                                    </View>

                                    {hotelData?.adults > 0 ?
                                        <View style={styles.btn}>
                                            <TouchableOpacity
                                                style={{ paddingHorizontal: 8 }}
                                                onPress={() => setHotelData(prevState => ({ ...prevState, adults: prevState.adults > 1 ? prevState.adults - 1 : prevState.adults }))}
                                            >
                                                <Text style={styles.btnTxt}>-</Text>
                                            </TouchableOpacity>

                                            <View style={{ paddingHorizontal: 4 }}>
                                                <Text style={styles.btnTxt}>{hotelData?.adults}</Text>
                                            </View>

                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setHotelData(prevState => ({ ...prevState, adults: prevState.adults + 1 }))}>
                                                <Text style={styles.btnTxt}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <TouchableOpacity style={styles.addBtn} onPress={() => setHotelData(prevState => ({ ...prevState, adults: prevState.adults + 1 }))}>
                                            <Text style={styles.addBtnTxt}>Add</Text>
                                        </TouchableOpacity>
                                    }
                                </View>

                                {/* children */}
                                <View style={styles.travelContWrap}>
                                    <View>
                                        <Text style={styles.travelHdTxt}>Children</Text>
                                        <Text style={styles.travelSubHdTxt}>Aged 2-12 years</Text>
                                    </View>

                                    {hotelData?.children ?
                                        <View style={styles.btn}>
                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setHotelData(prevState => ({ ...prevState, children: prevState.children - 1 }))}>
                                                <Text style={styles.btnTxt}>-</Text>
                                            </TouchableOpacity>

                                            <View style={{ paddingHorizontal: 4 }}>
                                                <Text style={styles.btnTxt}>{hotelData?.children}</Text>
                                            </View>

                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setHotelData(prevState => ({ ...prevState, children: prevState.children + 1 }))}>
                                                <Text style={styles.btnTxt}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <TouchableOpacity style={styles.addBtn} onPress={() => setHotelData(prevState => ({ ...prevState, children: prevState.children + 1 }))}>
                                            <Text style={styles.addBtnTxt}>Add</Text>
                                        </TouchableOpacity>
                                    }
                                </View>

                                {/* infants */}
                                <View style={styles.travelContWrap}>
                                    <View>
                                        <Text style={styles.travelHdTxt}>Infants</Text>
                                        <Text style={styles.travelSubHdTxt}>Bellow 2 years</Text>
                                    </View>

                                    {hotelData?.infants ?
                                        <View style={styles.btn}>
                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setHotelData(prevState => ({ ...prevState, infants: prevState.infants - 1 }))}>
                                                <Text style={styles.btnTxt}>-</Text>
                                            </TouchableOpacity>

                                            <View style={{ paddingHorizontal: 4 }}>
                                                <Text style={styles.btnTxt}>{hotelData?.infants}</Text>
                                            </View>

                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setHotelData(prevState => ({ ...prevState, infants: prevState.infants + 1 }))}>
                                                <Text style={styles.btnTxt}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <TouchableOpacity style={styles.addBtn} onPress={() => setHotelData(prevState => ({ ...prevState, infants: prevState.infants + 1 }))}>
                                            <Text style={styles.addBtnTxt}>Add</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>}
                        </View>

                        {/* room */}
                        <View style={styles.right}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text style={styles.tbTxt}>Room</Text>
                                <Image style={styles.imgCls} source={icon.rightArrow} />
                            </View>

                            <TouchableOpacity onPress={() => setOpenRoom(true)}>
                                <Text style={styles.midTxt}>{hotelData?.travelClass}</Text>
                            </TouchableOpacity>

                            {openRoom && <View style={styles.classOptnsWrap}>
                                <TouchableOpacity
                                    style={hotelData?.travelClass === "1 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                    onPress={() => handleRoom("1 Room")}
                                >
                                    <Text style={hotelData?.travelClass === "1 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>1 Room</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={hotelData?.travelClass === "2 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                    onPress={() => handleRoom("2 Room")}
                                >
                                    <Text style={hotelData?.travelClass === "2 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>2 Room</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={hotelData?.travelClass === "3 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                    onPress={() => handleRoom("3 Room")}
                                >
                                    <Text style={hotelData?.travelClass === "3 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>3 Room</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={hotelData?.travelClass === "4 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                    onPress={() => handleRoom("4 Room")}
                                >
                                    <Text style={hotelData?.travelClass === "4 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>4 Room</Text>
                                </TouchableOpacity>
                            </View>}
                        </View>
                    </View>
                </View>

                {/* search panel */}
                {isShow && <View style={styles.searchPanel}>
                    <SearchPanel setOuterScrollEnabled={setOuterScrollEnabled} setLocation={setLocation} setIsShow={setIsShow} />
                </View>}
            </View>
        </TouchableWithoutFeedback>
    )
};

export default HotelSearchOptn;

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
    },
    topWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img: {
        width: 20,
        height: 20,
        tintColor: blue,
    },
    imgWrap: {
        width: 28,
        height: 28,
        backgroundColor: w1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tbTxt: {
        color: b3,
        fontFamily: 'NunitoSans_10pt-Regular',
        fontSize: 13,
    },
    midTxt: {
        color: b1,
        fontFamily: 'NunitoSans_10pt-SemiBold',
        fontSize: 17,
        marginVertical: 8,
    },
    left: {
        // borderWidth: 1
    },
    right: {
        alignItems: "flex-end",
    },
    inputSearch: {
        color: b1,
        fontFamily: 'NunitoSans_10pt-SemiBold',
        fontSize: 17,
        height: 40,
        width: "100%",
    },
    searchPanel: {
        width: width / 1.4,
        position: "absolute",
        backgroundColor: "#f5f5f5",
        top: Platform.OS === "ios" ? 79 : 83,
        shadowColor: black,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderRadius: 4,
        height: Platform.OS === "ios" ? height / 2.3 : height / 2,
    },
    btmBrdr: {
        backgroundColor: b3,
        height: 2,
        marginVertical: 5
    },
    imgCls: {
        width: 10,
        height: 10,
        transform: [{ rotate: "90deg" }],
        tintColor: b3,
        marginLeft: 4
    },
    travlOptnsWrap: {
        backgroundColor: white,
        width: 200,
        position: 'absolute',
        zIndex: 9,
        top: 5,
        borderWidth: 1,
        left: Platform.OS === "ios" ? 70 : 60,
        borderColor: "#D8D8D8",
        elevation: 2,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        paddingBottom: 5,
    },
    classOptnsWrap: {
        backgroundColor: white,
        width: 180,
        position: 'absolute',
        zIndex: 99,
        top: 5,
        borderWidth: 1,
        right: 60,
        borderColor: "#D8D8D8",
        elevation: 2,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    classOptnTxt: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 13,
    },
    classOptnTxtActive: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: white,
        fontSize: 13,
    },
    classOptnTxtWrap: {
        paddingVertical: 8,
        paddingLeft: 15,
    },
    classOptnTxtWrapActive: {
        paddingVertical: 8,
        paddingLeft: 15,
        backgroundColor: blue,
    },
    travelContWrap: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginHorizontal: 6,
        paddingVertical: 4,
        marginTop: 5,
    },
    travelHdTxt: {
        color: b1,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 13,
    },
    travelSubHdTxt: {
        color: b3,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 11,
    },
    btnTxt: {
        color: blue,
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 15,
        textAlign: "center",
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: blue,
        borderWidth: 0.7,
        borderRadius: 5,
        columnGap: 2
    },
    addBtnTxt: {
        color: blue,
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 15,
    },
    addBtn: {
        alignItems: "center",
        borderColor: blue,
        borderWidth: 0.7,
        borderRadius: 5,
        justifyContent: "center",
        paddingVertical: 1,
        paddingHorizontal: 20
    },
});