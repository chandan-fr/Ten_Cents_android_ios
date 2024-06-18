import { Dimensions, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { b1, b3, black, blue, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import SearchPanel from './SearchPanel';
import { useDispatch } from 'react-redux';
import { getAirportCodes } from '../../../services/slices/FlightSlice';

const { width, height } = Dimensions.get("window");

const OneWay = ({ navigation, dest, openTravel, setOpenTravel, formValue, setFormValue, setOuterScrollEnabled }) => {
    const [isClass, setIsClass] = useState(dest === "opt2" ? "1 Room" : "Economy");
    const [origin, setOrigin] = useState("");
    const [determiner, setDeterminer] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [destination, setDestination] = useState("");
    const [openClass, setOpenClass] = useState(false);

    const dispatch = useDispatch();

    const handleClass = (name) => {
        setIsClass(name);
        setFormValue({ ...formValue, travelClass: name });
        setOpenClass(false);
    };

    const handleOrigin = (value) => {
        setOrigin(value.toUpperCase());
        setFormValue({ ...formValue, originLocationCode: value.toUpperCase() });
        searchAirportCodes(value);
    };

    const handleDestination = (value) => {
        setDestination(value.toUpperCase());
        setFormValue({ ...formValue, destinationLocationCode: value.toUpperCase() });
        searchAirportCodes(value);
    };

    const swapDestinationOrigin = () => {
        let temp = formValue.originLocationCode;
        setOrigin(formValue.destinationLocationCode);
        setDestination(formValue.originLocationCode);
        setFormValue({ ...formValue, originLocationCode: formValue.destinationLocationCode, destinationLocationCode: temp });
    };

    const searchAirportCodes = (searchKey) => {
        dispatch(getAirportCodes({ searchKey }));
    };

    const setLocation = (data) => {
        if (determiner === "origin") {
            setFormValue({ ...formValue, originLocationCode: data?.iataCode });
            setOrigin(data?.iataCode);
        } else {
            setDestination(data?.iataCode);
            setFormValue({ ...formValue, destinationLocationCode: data?.iataCode });
        }
        setIsShow(false);
        setOuterScrollEnabled(true);
    };

    return (
        <TouchableWithoutFeedback onPress={() => { setOpenTravel(false); Keyboard.dismiss() }}>
            <View style={styles.main}>
                {/* top selection row */}
                <View style={styles.topWrap}>
                    <View style={[styles.left, { flex: 1 }]}>
                        <Text style={styles.tbTxt}>From</Text>

                        <TextInput
                            style={[styles.inputSearch, { paddingLeft: 0 }]}
                            placeholder='Enter Location'
                            placeholderTextColor={b1}
                            value={origin}
                            onChangeText={handleOrigin}
                            onFocus={() => { setIsShow(true); setDeterminer("origin") }}
                        // onBlur={()=> setIsShow(false)}
                        />

                        <Text style={styles.tbTxt}>Origin</Text>
                    </View>

                    <TouchableOpacity style={styles.imgWrap} onPress={swapDestinationOrigin}>
                        <Image style={styles.img} source={icon.exchange} />
                    </TouchableOpacity>

                    <View style={[styles.right, { flex: 1 }]}>
                        <Text style={styles.tbTxt}>Destination</Text>

                        <TextInput
                            style={[styles.inputSearch, { textAlign: "right", paddingRight: 0 }]}
                            placeholder='Enter Location'
                            placeholderTextColor={b1}
                            value={destination}
                            onChangeText={handleDestination}
                            onFocus={() => { setIsShow(true); setDeterminer("destination") }}
                        // onBlur={()=> setIsShow(false)}
                        />

                        <Text style={styles.tbTxt}>Destination</Text>
                    </View>
                </View>

                <View style={styles.btmBrdr} />

                {/* middle selection row */}
                <View style={{ marginTop: 7, alignItems: 'flex-start' }}>
                    <View style={styles.left}>
                        <Text style={styles.tbTxt}>Depart</Text>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("traveldate", { src: "depart", setFormValue: setFormValue, formValue: formValue });
                            }}
                        >
                            <Text style={styles.midTxt}>{formValue.departureDate ? formValue.departureDate : "Select Date"}</Text>
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
                                    {formValue.adults + " Adult"}
                                    {formValue.children ? ("\n" + `${formValue.children} Children`) : ""}
                                    {formValue.infants ? ("\n" + formValue.infants + " Infants") : ""}
                                </Text>
                            </TouchableOpacity>

                            {openTravel && <View style={styles.travlOptnsWrap}>
                                {/* adults */}
                                <View style={styles.travelContWrap}>
                                    <View>
                                        <Text style={styles.travelHdTxt}>Adults</Text>
                                        <Text style={styles.travelSubHdTxt}>Aged 12+ years</Text>
                                    </View>

                                    {formValue.adults > 0 ?
                                        <View style={styles.btn}>
                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setFormValue(prevState => ({ ...prevState, adults: prevState.adults - 1 }))}>
                                                <Text style={styles.btnTxt}>-</Text>
                                            </TouchableOpacity>

                                            <View style={{ paddingHorizontal: 4 }}>
                                                <Text style={styles.btnTxt}>{formValue.adults}</Text>
                                            </View>

                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setFormValue(prevState => ({ ...prevState, adults: prevState.adults + 1 }))}>
                                                <Text style={styles.btnTxt}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <TouchableOpacity style={styles.addBtn} onPress={() => setFormValue(prevState => ({ ...prevState, adults: prevState.adults + 1 }))}>
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

                                    {formValue.children ?
                                        <View style={styles.btn}>
                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setFormValue(prevState => ({ ...prevState, children: prevState.children - 1 }))}>
                                                <Text style={styles.btnTxt}>-</Text>
                                            </TouchableOpacity>

                                            <View style={{ paddingHorizontal: 4 }}>
                                                <Text style={styles.btnTxt}>{formValue.children}</Text>
                                            </View>

                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setFormValue(prevState => ({ ...prevState, children: prevState.children + 1 }))}>
                                                <Text style={styles.btnTxt}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <TouchableOpacity style={styles.addBtn} onPress={() => setFormValue(prevState => ({ ...prevState, children: prevState.children + 1 }))}>
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

                                    {formValue.infants ?
                                        <View style={styles.btn}>
                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setFormValue(prevState => ({ ...prevState, infants: prevState.infants - 1 }))}>
                                                <Text style={styles.btnTxt}>-</Text>
                                            </TouchableOpacity>

                                            <View style={{ paddingHorizontal: 4 }}>
                                                <Text style={styles.btnTxt}>{formValue.infants}</Text>
                                            </View>

                                            <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => setFormValue(prevState => ({ ...prevState, infants: prevState.infants + 1 }))}>
                                                <Text style={styles.btnTxt}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <TouchableOpacity style={styles.addBtn} onPress={() => setFormValue(prevState => ({ ...prevState, infants: prevState.infants + 1 }))}>
                                            <Text style={styles.addBtnTxt}>Add</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>}
                        </View>

                        {/* class or room */}
                        <View style={styles.right}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text style={styles.tbTxt}>{dest === "opt2" ? "Room" : "Class"}</Text>
                                <Image style={styles.imgCls} source={icon.rightArrow} />
                            </View>

                            <TouchableOpacity onPress={() => setOpenClass(true)}>
                                <Text style={styles.midTxt}>{isClass}</Text>
                            </TouchableOpacity>

                            {dest === "opt2" ?
                                openClass && <View style={styles.classOptnsWrap}>
                                    <TouchableOpacity
                                        style={isClass === "1 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                        onPress={() => handleClass("1 Room")}
                                    >
                                        <Text style={isClass === "1 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>1 Room</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={isClass === "2 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                        onPress={() => handleClass("2 Room")}
                                    >
                                        <Text style={isClass === "2 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>2 Room</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={isClass === "3 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                        onPress={() => handleClass("3 Room")}
                                    >
                                        <Text style={isClass === "3 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>3 Room</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={isClass === "4 Room" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                        onPress={() => handleClass("4 Room")}
                                    >
                                        <Text style={isClass === "4 Room" ? styles.classOptnTxtActive : styles.classOptnTxt}>4 Room</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                openClass && <View style={styles.classOptnsWrap}>
                                    <TouchableOpacity
                                        style={isClass === "Economy" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                        onPress={() => handleClass("Economy")}
                                    >
                                        <Text style={isClass === "Economy" ? styles.classOptnTxtActive : styles.classOptnTxt}>Economy</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={isClass === "Premium Economy" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                        onPress={() => handleClass("Premium Economy")}
                                    >
                                        <Text style={isClass === "Premium Economy" ? styles.classOptnTxtActive : styles.classOptnTxt}>Premium Economy</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={isClass === "Business" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                        onPress={() => handleClass("Business")}
                                    >
                                        <Text style={isClass === "Business" ? styles.classOptnTxtActive : styles.classOptnTxt}>Business</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={isClass === "First Class" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                        onPress={() => handleClass("First Class")}
                                    >
                                        <Text style={isClass === "First Class" ? styles.classOptnTxtActive : styles.classOptnTxt}>First Class</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </View>
                </View>

                {/* search panel */}
                {isShow && <View style={determiner === "origin" ? styles.searchPanel : [styles.searchPanel, { alignSelf: "flex-end" }]}>
                    <SearchPanel setOuterScrollEnabled={setOuterScrollEnabled} setLocation={setLocation} setIsShow={setIsShow} />
                </View>}
            </View>
        </TouchableWithoutFeedback>
    )
};

export default OneWay;

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
    },
    topWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 20,
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
    inputSearch: {
        color: b1,
        fontFamily: 'NunitoSans_10pt-SemiBold',
        fontSize: 17,
        height: 40,
        width: "100%",
    },
    left: {
        // borderWidth: 1,
    },
    right: {
        alignItems: "flex-end",
        zIndex: -1,
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
        left: Platform.OS === "ios" ? 70 : 70,
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
        zIndex: 9,
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