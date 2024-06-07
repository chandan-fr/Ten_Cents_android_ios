import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { b1, b3, blue, gs1, white } from '../../config/colors';
import { genCurrentDate } from '../../config/CurrentDate';
import SortBottomSheet from '../../utility/SortBottomSheet';

const { width } = Dimensions.get("window");

const FlightSearch = ({ navigation }) => {
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const sortRef = useRef();

    return (
        <SafeAreaView style={styles.parent}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
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
                                <Text style={styles.navHeadTxt}>Dhaka</Text>
                                <Image style={styles.rightImg} source={require("../../assets/icons/next.png")} />
                                <Text style={styles.navHeadTxt}>Dubai</Text>
                            </View>
                            <Text style={styles.navSubHeadTxt}>{genCurrentDate()} | 1 Adult</Text>
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
                    <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                        <View style={{ rowGap: 10 }}>
                            <TouchableOpacity
                                style={[styles.flightOptnCont, { marginTop: 5 }]}
                                onPress={() => navigation.navigate("flightreview")}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={require("../../assets/icons/indigo.png")}
                                            />
                                            <Text style={styles.indigo}>Indigo</Text>
                                        </View>

                                        <View style={styles.midRow}>
                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DAC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    14:10
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    -BOM-
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                    10h 20m
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DXC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    22:30
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.ns400, { color: b3 }]}>Layover- 04h 30m</Text>
                                    </View>

                                    <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                        <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                            $ 430
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

                            {/* ================================================================== */}
                            <TouchableOpacity
                                style={[styles.flightOptnCont, { marginTop: 5 }]}
                                onPress={() => navigation.navigate("flightreview")}
                            >
                                <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between"}}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={require("../../assets/icons/indigo.png")}
                                            />
                                            <Text style={styles.indigo}>Indigo</Text>
                                        </View>

                                        <View style={styles.midRow}>
                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DAC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    14:10
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    -BOM-
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                    10h 20m
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DXC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    22:30
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.ns400, { color: b3 }]}>Layover- 04h 30m</Text>
                                    </View>

                                    <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                        <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                            $ 430
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

                            <TouchableOpacity
                                style={[styles.flightOptnCont, { marginTop: 5 }]}
                                onPress={() => navigation.navigate("flightreview")}
                            >
                                <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between"}}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={require("../../assets/icons/indigo.png")}
                                            />
                                            <Text style={styles.indigo}>Indigo</Text>
                                        </View>

                                        <View style={styles.midRow}>
                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DAC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    14:10
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    -BOM-
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                    10h 20m
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DXC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    22:30
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.ns400, { color: b3 }]}>Layover- 04h 30m</Text>
                                    </View>

                                    <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                        <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                            $ 430
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

                            <TouchableOpacity
                                style={[styles.flightOptnCont, { marginTop: 5 }]}
                                onPress={() => navigation.navigate("flightreview")}
                            >
                                <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between"}}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={require("../../assets/icons/indigo.png")}
                                            />
                                            <Text style={styles.indigo}>Indigo</Text>
                                        </View>

                                        <View style={styles.midRow}>
                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DAC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    14:10
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    -BOM-
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                    10h 20m
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DXC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    22:30
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.ns400, { color: b3 }]}>Layover- 04h 30m</Text>
                                    </View>

                                    <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                        <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                            $ 430
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

                            <TouchableOpacity
                                style={[styles.flightOptnCont, { marginTop: 5 }]}
                                onPress={() => navigation.navigate("flightreview")}
                            >
                                <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between"}}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={require("../../assets/icons/indigo.png")}
                                            />
                                            <Text style={styles.indigo}>Indigo</Text>
                                        </View>

                                        <View style={styles.midRow}>
                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DAC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    14:10
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    -BOM-
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                    10h 20m
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DXC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    22:30
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.ns400, { color: b3 }]}>Layover- 04h 30m</Text>
                                    </View>

                                    <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                        <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                            $ 430
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

                            <TouchableOpacity
                                style={[styles.flightOptnCont, { marginTop: 5 }]}
                                onPress={() => navigation.navigate("flightreview")}
                            >
                                <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between"}}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={require("../../assets/icons/indigo.png")}
                                            />
                                            <Text style={styles.indigo}>Indigo</Text>
                                        </View>

                                        <View style={styles.midRow}>
                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DAC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    14:10
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    -BOM-
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                    10h 20m
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DXC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    22:30
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.ns400, { color: b3 }]}>Layover- 04h 30m</Text>
                                    </View>

                                    <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                        <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                            $ 430
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

                            <TouchableOpacity
                                style={[styles.flightOptnCont, { marginTop: 5 }]}
                                onPress={() => navigation.navigate("flightreview")}
                            >
                                <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between"}}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={require("../../assets/icons/indigo.png")}
                                            />
                                            <Text style={styles.indigo}>Indigo</Text>
                                        </View>

                                        <View style={styles.midRow}>
                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DAC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    14:10
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    -BOM-
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                    10h 20m
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DXC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    22:30
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.ns400, { color: b3 }]}>Layover- 04h 30m</Text>
                                    </View>

                                    <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                        <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                            $ 430
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

                            <TouchableOpacity
                                style={[styles.flightOptnCont, { marginTop: 5 }]}
                                onPress={() => navigation.navigate("flightreview")}
                            >
                                <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between"}}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={require("../../assets/icons/indigo.png")}
                                            />
                                            <Text style={styles.indigo}>Indigo</Text>
                                        </View>

                                        <View style={styles.midRow}>
                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DAC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    14:10
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    -BOM-
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                    10h 20m
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DXC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    22:30
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.ns400, { color: b3 }]}>Layover- 04h 30m</Text>
                                    </View>

                                    <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                        <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                            $ 430
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

                            <TouchableOpacity
                                style={[styles.flightOptnCont, { marginTop: 5 }]}
                                onPress={() => navigation.navigate("flightreview")}
                            >
                                <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between"}}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={require("../../assets/icons/indigo.png")}
                                            />
                                            <Text style={styles.indigo}>Indigo</Text>
                                        </View>

                                        <View style={styles.midRow}>
                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DAC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    14:10
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    -BOM-
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 13, color: b1, marginTop: 8 }]}>
                                                    10h 20m
                                                </Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b3 }]}>
                                                    DXC
                                                </Text>
                                                <Text style={[styles.ns600, { fontSize: 15, color: b1, marginTop: 8 }]}>
                                                    22:30
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.ns400, { color: b3 }]}>Layover- 04h 30m</Text>
                                    </View>

                                    <View style={{ flex: 0.5, alignItems: "flex-end", marginTop: 50 }}>
                                        <Text style={[styles.ns600, { color: b1, fontSize: 16 }]}>
                                            $ 430
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
                        </View>
                    </ScrollView>
                </View>

                {/* sticky bottom */}
                <View style={styles.stickyBtm}>
                    <View style={styles.leftWrap}>
                        <View style={{ flexDirection: "row", columnGap: 5, flex: 1 }}>
                            <TouchableOpacity
                                style={[styles.filterBtnComn, { backgroundColor: "#848484" }]}
                                onPress={() => sortRef.current.open()}
                            >
                                <Text style={[styles.ns600, { color: white }]}>Prices</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.filterBtnComn}
                                onPress={() => navigation.navigate("filters")}
                            >
                                <Text style={[styles.ns600, { color: white }]}>Non- stop only</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.filterBtnComn}
                                onPress={() => navigation.navigate("filters")}
                            >
                                <Text style={[styles.ns600, { color: white }]}>Morning 6.00 - 12PM</Text>
                            </TouchableOpacity>
                        </View>

                        <Text
                            style={[
                                styles.ns600,
                                { color: white, fontSize: 12, marginVertical: 3, marginLeft: 11 }
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
                <SortBottomSheet sortRef={sortRef} />
            </View>
        </SafeAreaView>
    )
};

export default FlightSearch;

const styles = StyleSheet.create({
    parent: { flex: 1, backgroundColor: white },
    wrap: { flex: 1 },
    nav: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 30,
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
        transform: [{ rotate: "180deg" }]
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
        marginTop: 10
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
        marginTop: 15,
        marginHorizontal: 13,
    },
    flightOptnCont: {
        backgroundColor: white,
        elevation: 5,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 8,
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
        marginTop: 10
    },
    stickyBtm: {
        backgroundColor: b1,
        opacity: 0.9,
        position: "absolute",
        width: width - 20,
        bottom: 10,
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
        paddingHorizontal: 6,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: "#848484",
        borderRadius: 2,
        paddingVertical: 6,
        marginTop: 8
    },
    filterTxt: {
        color: white,
        fontSize: 12
    },
});