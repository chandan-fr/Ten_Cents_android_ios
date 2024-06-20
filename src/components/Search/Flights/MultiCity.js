import { Dimensions, FlatList, Image, Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { b1, b3, black, blue, red, w1, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import { useDispatch } from 'react-redux';
import { getAirportCodes } from '../../../services/slices/FlightSlice';
import SearchPanel from './SearchPanel';

const { width, height } = Dimensions.get("window");

const MultiCity = ({ navigation, multiFlightData, setMultiFlightData, setOuterScrollEnabled }) => {
    const [curIndex, setCurIndex] = useState(null);
    const [determiner, setDeterminer] = useState("");

    const dispatch = useDispatch();

    const handleClass = (name, index) => {
        setMultiFlightData(prevState => {
            const updatedData = [...prevState];
            updatedData[index] = {
                ...updatedData[index],
                travelClass: name,
                openClass: false,
            };
            return updatedData;
        });
    };

    const handleTravellers = () => {
        setMultiFlightData(prevState => {
            const updatedData = [...prevState];
            updatedData[curIndex] = {
                ...updatedData[curIndex],
                openTravel: false,
            };
            return updatedData;
        });
    };

    const handleSearchPanel = (index) => {
        setMultiFlightData(prevState => {
            const updatedData = [...prevState];
            updatedData[index] = {
                ...updatedData[index],
                isShow: true,
            };
            return updatedData;
        });
    };

    const removeFlight = (i) => {
        if (i !== 0) {
            const updatedData = multiFlightData.filter((_, index) => i !== index);
            setMultiFlightData(updatedData);
        }
    };

    const swapDestinationOrigin = (index) => {
        setMultiFlightData(prevState => {
            const updatedData = [...prevState];
            let temp = updatedData[index].originLocationCode;
            updatedData[index] = {
                ...updatedData[index],
                originLocationCode: updatedData[index].destinationLocationCode,
                destinationLocationCode: temp,
            };
            return updatedData;
        });
    };

    const searchAirportCodes = (searchKey) => {
        dispatch(getAirportCodes({ searchKey }));
    };

    const setLocation = (data, index) => {
        if (determiner === "origin") {
            setMultiFlightData(prevState => {
                const updatedData = [...prevState];
                updatedData[index] = {
                    ...updatedData[index],
                    originLocationCode: data?.iataCode,
                    isShow: false,
                };
                return updatedData;
            });
        } else {
            setMultiFlightData(prevState => {
                const updatedData = [...prevState];
                updatedData[index] = {
                    ...updatedData[index],
                    destinationLocationCode: data?.iataCode,
                    isShow: false,
                };
                return updatedData;
            });
        }
        setOuterScrollEnabled(true);
    };

    // useEffect(() => {
    //     setMultiFlightData()
    // }, []);

    return (
        <TouchableWithoutFeedback
            onPress={() => { handleTravellers(); Keyboard.dismiss() }}
        >
            <View>
                <FlatList
                    data={multiFlightData}
                    keyExtractor={(_, i) => i}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={[styles.main, { marginTop: index ? 0 : -25, }]}>
                            {/* flight index */}
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.fHdTxt}>Flight {index + 1}</Text>

                                {index !== 0 && <TouchableOpacity
                                    style={{ alignSelf: "flex-end", marginBottom: 8, padding: 5, backgroundColor: w1, borderRadius: 4 }}
                                    onPress={() => removeFlight(index)}
                                >
                                    <Image style={{ width: 15, height: 15, tintColor: red }} source={icon.cross} />
                                </TouchableOpacity>}
                            </View>

                            {/* top selection row */}
                            <View style={styles.topWrap}>
                                {/* origin */}
                                <View style={[styles.left, { flex: 1 }]}>
                                    <Text style={styles.tbTxt}>From</Text>

                                    <TextInput
                                        style={[styles.inputSearch, { paddingLeft: 0 }]}
                                        placeholder='Enter Location'
                                        placeholderTextColor={b1}
                                        value={item.originLocationCode}
                                        onChangeText={value => {
                                            setMultiFlightData(prevState => {
                                                const updatedData = [...prevState];
                                                updatedData[index] = {
                                                    ...updatedData[index],
                                                    originLocationCode: value,
                                                };
                                                return updatedData;
                                            });
                                            searchAirportCodes(value);
                                        }}
                                        onFocus={() => { handleSearchPanel(index); setDeterminer("origin") }}
                                    />

                                    <Text style={styles.tbTxt}>Origin</Text>
                                </View>

                                <TouchableOpacity style={styles.imgWrap} onPress={() => swapDestinationOrigin(index)}>
                                    <Image style={styles.img} source={icon.exchange} />
                                </TouchableOpacity>

                                {/* destination */}
                                <View style={[styles.right, { flex: 1 }]}>
                                    <Text style={styles.tbTxt}>Destination</Text>

                                    <TextInput
                                        style={[styles.inputSearch, { textAlign: "right", paddingRight: 0 }]}
                                        placeholder='Enter Location'
                                        placeholderTextColor={b1}
                                        value={item.destinationLocationCode}
                                        onChangeText={value => {
                                            setMultiFlightData(prevState => {
                                                const updatedData = [...prevState];
                                                updatedData[index] = {
                                                    ...updatedData[index],
                                                    destinationLocationCode: value,
                                                };
                                                return updatedData;
                                            });
                                            searchAirportCodes(value);
                                        }}
                                        onFocus={() => { handleSearchPanel(index); setDeterminer("destination") }}
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
                                            navigation.navigate("traveldate", { src: "multi", index: index, setFormValue: setMultiFlightData, formValue: multiFlightData });
                                        }}
                                    >
                                        <Text style={styles.midTxt}>{item?.departureDate ? item?.departureDate : "Select Date"}</Text>
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

                                        <TouchableOpacity
                                            onPress={() => {
                                                setMultiFlightData(prevState => {
                                                    const updatedData = [...prevState];
                                                    updatedData[index] = {
                                                        ...updatedData[index],
                                                        openTravel: true,
                                                    };
                                                    return updatedData;
                                                });
                                                setCurIndex(index);
                                            }}
                                        >
                                            <Text style={styles.midTxt}>
                                                {item?.adults + " Adult"}
                                                {item?.children ? ("\n" + `${item?.children} Children`) : ""}
                                                {item?.infants ? ("\n" + item?.infants + " Infants") : ""}
                                            </Text>
                                        </TouchableOpacity>

                                        {item?.openTravel && <View style={styles.travlOptnsWrap}>
                                            {/* adults */}
                                            <View style={styles.travelContWrap}>
                                                <View>
                                                    <Text style={styles.travelHdTxt}>Adults</Text>
                                                    <Text style={styles.travelSubHdTxt}>Aged 12+ years</Text>
                                                </View>

                                                {item?.adults > 0 ?
                                                    <View style={styles.btn}>
                                                        <TouchableOpacity
                                                            style={{ paddingHorizontal: 8 }}
                                                            onPress={() => setMultiFlightData(prevState => {
                                                                const updatedData = [...prevState];
                                                                updatedData[index] = {
                                                                    ...updatedData[index],
                                                                    adults: updatedData[index].adults > 1 ? updatedData[index].adults - 1 : updatedData[index].adults,
                                                                };
                                                                return updatedData;
                                                            })}
                                                        >
                                                            <Text style={styles.btnTxt}>-</Text>
                                                        </TouchableOpacity>

                                                        <View style={{ paddingHorizontal: 4 }}>
                                                            <Text style={styles.btnTxt}>{item?.adults}</Text>
                                                        </View>

                                                        <TouchableOpacity
                                                            style={{ paddingHorizontal: 8 }}
                                                            onPress={() => setMultiFlightData(prevState => {
                                                                const updatedData = [...prevState];
                                                                updatedData[index] = {
                                                                    ...updatedData[index],
                                                                    adults: updatedData[index].adults + 1,
                                                                };
                                                                return updatedData;
                                                            })}
                                                        >
                                                            <Text style={styles.btnTxt}>+</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    :
                                                    <TouchableOpacity
                                                        style={styles.addBtn}
                                                        onPress={() => setMultiFlightData(prevState => {
                                                            const updatedData = [...prevState];
                                                            updatedData[index] = {
                                                                ...updatedData[index],
                                                                adults: updatedData[index].adults + 1,
                                                            };
                                                            return updatedData;
                                                        })}
                                                    >
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

                                                {item?.children ?
                                                    <View style={styles.btn}>
                                                        <TouchableOpacity
                                                            style={{ paddingHorizontal: 8 }}
                                                            onPress={() => setMultiFlightData(prevState => {
                                                                const updatedData = [...prevState];
                                                                updatedData[index] = {
                                                                    ...updatedData[index],
                                                                    children: updatedData[index].children - 1,
                                                                };
                                                                return updatedData;
                                                            })}
                                                        >
                                                            <Text style={styles.btnTxt}>-</Text>
                                                        </TouchableOpacity>

                                                        <View style={{ paddingHorizontal: 4 }}>
                                                            <Text style={styles.btnTxt}>{item?.children}</Text>
                                                        </View>

                                                        <TouchableOpacity
                                                            style={{ paddingHorizontal: 8 }}
                                                            onPress={() => setMultiFlightData(prevState => {
                                                                const updatedData = [...prevState];
                                                                updatedData[index] = {
                                                                    ...updatedData[index],
                                                                    children: updatedData[index].children + 1,
                                                                };
                                                                return updatedData;
                                                            })}
                                                        >
                                                            <Text style={styles.btnTxt}>+</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    :
                                                    <TouchableOpacity
                                                        style={styles.addBtn}
                                                        onPress={() => setMultiFlightData(prevState => {
                                                            const updatedData = [...prevState];
                                                            updatedData[index] = {
                                                                ...updatedData[index],
                                                                children: updatedData[index].children + 1,
                                                            };
                                                            return updatedData;
                                                        })}
                                                    >
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

                                                {item?.infants ?
                                                    <View style={styles.btn}>
                                                        <TouchableOpacity
                                                            style={{ paddingHorizontal: 8 }}
                                                            onPress={() => setMultiFlightData(prevState => {
                                                                const updatedData = [...prevState];
                                                                updatedData[index] = {
                                                                    ...updatedData[index],
                                                                    infants: updatedData[index].infants - 1,
                                                                };
                                                                return updatedData;
                                                            })}
                                                        >
                                                            <Text style={styles.btnTxt}>-</Text>
                                                        </TouchableOpacity>

                                                        <View style={{ paddingHorizontal: 4 }}>
                                                            <Text style={styles.btnTxt}>{item?.infants}</Text>
                                                        </View>

                                                        <TouchableOpacity
                                                            style={{ paddingHorizontal: 8 }}
                                                            onPress={() => setMultiFlightData(prevState => {
                                                                const updatedData = [...prevState];
                                                                updatedData[index] = {
                                                                    ...updatedData[index],
                                                                    infants: updatedData[index].infants + 1,
                                                                };
                                                                return updatedData;
                                                            })}
                                                        >
                                                            <Text style={styles.btnTxt}>+</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    :
                                                    <TouchableOpacity
                                                        style={styles.addBtn}
                                                        onPress={() => setMultiFlightData(prevState => {
                                                            const updatedData = [...prevState];
                                                            updatedData[index] = {
                                                                ...updatedData[index],
                                                                infants: updatedData[index].infants + 1,
                                                            };
                                                            return updatedData;
                                                        })}
                                                    >
                                                        <Text style={styles.addBtnTxt}>Add</Text>
                                                    </TouchableOpacity>
                                                }
                                            </View>
                                        </View>}
                                    </View>

                                    {/* class */}
                                    <View style={styles.right}>
                                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                            <Text style={styles.tbTxt}>Class</Text>
                                            <Image style={styles.imgCls} source={icon.rightArrow} />
                                        </View>

                                        <TouchableOpacity
                                            onPress={() => setMultiFlightData(prevState => {
                                                const updatedData = [...prevState];
                                                updatedData[index] = {
                                                    ...updatedData[index],
                                                    openClass: true,
                                                };
                                                return updatedData;
                                            })}
                                        >
                                            <Text style={[styles.midTxt, { zIndex: 9, }]}>{item?.travelClass}</Text>
                                        </TouchableOpacity>

                                        {item?.openClass && <View style={styles.classOptnsWrap}>
                                            <TouchableOpacity
                                                style={item?.travelClass === "Economy" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                                onPress={() => handleClass("Economy", index)}
                                            >
                                                <Text style={item?.travelClass === "Economy" ? styles.classOptnTxtActive : styles.classOptnTxt}>Economy</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={item?.travelClass === "Premium Economy" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                                onPress={() => handleClass("Premium Economy", index)}
                                            >
                                                <Text style={item?.travelClass === "Premium Economy" ? styles.classOptnTxtActive : styles.classOptnTxt}>Premium Economy</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={item?.travelClass === "Business" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                                onPress={() => handleClass("Business", index)}
                                            >
                                                <Text style={item?.travelClass === "Business" ? styles.classOptnTxtActive : styles.classOptnTxt}>Business</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={item?.travelClass === "First Class" ? styles.classOptnTxtWrapActive : styles.classOptnTxtWrap}
                                                onPress={() => handleClass("First Class", index)}
                                            >
                                                <Text style={item?.travelClass === "First Class" ? styles.classOptnTxtActive : styles.classOptnTxt}>First Class</Text>
                                            </TouchableOpacity>
                                        </View>}
                                    </View>
                                </View>
                            </View>

                            {/* search panel */}
                            {item?.isShow && <View style={determiner === "origin" ? [styles.searchPanel, { left: 10 }] : [styles.searchPanel, { right: 10 }]}>
                                <SearchPanel setOuterScrollEnabled={setOuterScrollEnabled} setLocation={setLocation} setMultiFlightData={setMultiFlightData} flightIndex={index} />
                            </View>}
                        </View>
                    )}
                />
            </View>
        </TouchableWithoutFeedback>
    )
};

export default MultiCity;

const styles = StyleSheet.create({
    main: {
        backgroundColor: white,
        marginHorizontal: 7,
        paddingHorizontal: 10,
        borderRadius: 4,
        paddingBottom: 10,
        marginBottom: 20,
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
        zIndex: -1,
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
        top: Platform.OS === "ios" ? 124 : 122,
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
        left: Platform.OS === "ios" ? 70 : 65,
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
    travelTxtWrap: {
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
    fHdTxt: {
        fontFamily: 'LondonBetween',
        color: b3,
        fontSize: 15,
        marginVertical: Platform.OS === "ios" ? 15 : 10,
    },
});