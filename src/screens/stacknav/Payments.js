import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomBottomSheet from '../../utility/CustomBtmSheet';
import { b1, b3, violet, white } from '../../config/colors';
import { genCurrentDate } from '../../config/CurrentDate';

const Payments = ({ navigation }) => {
    const tsRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const handleOpenClose = () => {
        if (isVisible) {
            tsRef.current.close();
            setIsVisible(false);
        } else {
            tsRef.current.open();
            setIsVisible(true);
        }
    };

    const paymentDetails = (
        <View>
            <View style={{ rowGap: 3, marginRight: 50, marginLeft: 20, marginTop: 10 }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>Convenience Fee</Text>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>$50</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>Fare</Text>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>$430</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>Charity</Text>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>$15</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>Seat</Text>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>$100</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>Meal</Text>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>$180</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>Baggage</Text>
                    <Text style={[styles.ns600, { fontSize: 14 }]}>$120</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[styles.hr, { flex: 1, marginTop: 0 }]} />
                <View
                    style={{
                        borderWidth: 1, borderRadius: 10, borderColor: "#D8D8D8", paddingHorizontal: 20,
                        paddingVertical: 2
                    }}
                >
                    <Text style={[styles.ns600, { fontSize: 10, color: b3 }]}>ONE WAY TRIP</Text>
                </View>
                <View style={[styles.hr, { flex: 1, marginTop: 0 }]} />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20, marginTop: 10 }}>
                <Image
                    style={{ width: 35, height: 35, marginRight: 10 }}
                    source={require("../../assets/icons/indigo.png")}
                />

                <View style={{ alignItems: "flex-start" }}>
                    <View style={styles.right}>
                        <Text style={styles.navHeadTxt}>Dhaka</Text>
                        <Image style={styles.rightImg} source={require("../../assets/icons/next.png")} />
                        <Text style={styles.navHeadTxt}>Dubai</Text>
                    </View>
                    <Text style={styles.navSubHeadTxt}>{genCurrentDate()} | 2:15 PM - 10:30 PM</Text>
                </View>
            </View>

            <View style={[styles.hr, { flex: 1, marginTop: 20 }]} />

            <View style={{ marginLeft: 20, marginVertical: 10 }}>
                <Text style={[styles.ns600, { fontSize: 12 }]}>
                    Kevin Vo (F)
                </Text>

                <Text style={[styles.ns600, { fontSize: 12 }]}>
                    kevinvo@gmail.com | +91-9876543210
                </Text>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={styles.Wrap}>
                {/* nav */}
                <TouchableOpacity style={styles.nav} onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 25, height: 25, tintColor: b1 }}
                        source={require("../../assets/icons/next.png")}
                    />
                    <Text style={[styles.lbB1, { fontSize: 20, marginLeft: 15 }]}>Payment</Text>
                </TouchableOpacity>

                {/* payment details */}
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: 20, marginHorizontal: 20 }}>
                    <View>
                        <Text style={[styles.ns700, { fontSize: 15 }]}>Due Now $ 835</Text>
                        <Text style={[styles.ns600, { color: b3, fontSize: 12 }]}>Convenience fee added</Text>
                    </View>

                    <TouchableOpacity
                        style={{ alignItems: "center", justifyContent: 'center', padding: 6, backgroundColor: violet, borderRadius: 100 }}
                        onPress={handleOpenClose}
                    >
                        <Image
                            style={{
                                width: 15, height: 15, tintColor: white,
                                transform: [isVisible ? { rotate: "-90deg" } : { rotate: "90deg" }]
                            }}
                            source={require("../../assets/icons/right-arrow.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.hr} />

                {/* payment options */}
                <View style={{ marginHorizontal: 3, rowGap: 1, borderRadius: 4, marginTop: 5, borderWidth: 1, borderColor: "#D2D6DD" }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", paddingHorizontal: 20, borderBottomWidth: 1, paddingVertical: 16, borderBlockColor: "#D2D6DD",
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: "center", flex: 1 }}>
                            <View style={{ marginRight: 30 }}>
                                <Image
                                    style={{
                                        width: 35, height: 35, tintColor: violet
                                    }}
                                    source={require("../../assets/icons/wallet.png")}
                                />
                            </View>

                            <View style={{ alignItems: 'flex-start', flex: 1 }}>
                                <Text style={[styles.ns700, { fontSize: 16 }]}>
                                    Mobile Wallets
                                </Text>

                                <Text style={[styles.ns400, { fontSize: 14, color: b3 }]}>
                                    AmazonPay,Mobikwik,Payzapp
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Image
                                style={{
                                    width: 18, height: 18, tintColor: "#777777"
                                }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* ================================================================================== */}

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", paddingHorizontal: 20, borderBottomWidth: 1, paddingVertical: 16, borderBlockColor: "#D2D6DD",
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: "center", flex: 1 }}>
                            <View style={{ marginRight: 30 }}>
                                <Image
                                    style={{
                                        width: 35, height: 35,
                                    }}
                                    source={require("../../assets/icons/snpl.png")}
                                />
                            </View>

                            <View style={{ alignItems: 'flex-start', flex: 1 }}>
                                <Text style={[styles.ns700, { fontSize: 16 }]}>
                                    Book Now Pay Later
                                </Text>

                                <Text style={[styles.ns400, { fontSize: 14, color: b3 }]}>
                                    Tripmoney, Lazypay, Simpl, ZestMoney, ICICI, HDFC and more
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Image
                                style={{
                                    width: 18, height: 18, tintColor: "#777777"
                                }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", paddingHorizontal: 20, borderBottomWidth: 1, paddingVertical: 16, borderBlockColor: "#D2D6DD",
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: "center", flex: 1 }}>
                            <View style={{ marginRight: 30 }}>
                                <Image
                                    style={{
                                        width: 35, height: 35, tintColor: violet
                                    }}
                                    source={require("../../assets/icons/bank.png")}
                                />
                            </View>

                            <View style={{ alignItems: 'flex-start', flex: 1 }}>
                                <Text style={[styles.ns700, { fontSize: 16 }]}>
                                    Net Banking
                                </Text>

                                <Text style={[styles.ns400, { fontSize: 14, color: b3 }]}>
                                    All Major Banks Available
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Image
                                style={{
                                    width: 18, height: 18, tintColor: "#777777"
                                }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", paddingHorizontal: 20, borderBottomWidth: 1, paddingVertical: 16, borderBlockColor: "#D2D6DD",
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: "center", flex: 1 }}>
                            <View style={{ marginRight: 30 }}>
                                <Image
                                    style={{
                                        width: 35, height: 35, tintColor: violet
                                    }}
                                    source={require("../../assets/icons/discount.png")}
                                />
                            </View>

                            <View style={{ alignItems: 'flex-start', flex: 1 }}>
                                <Text style={[styles.ns700, { fontSize: 16 }]}>
                                    EMI
                                </Text>

                                <Text style={[styles.ns400, { fontSize: 14, color: b3 }]}>
                                    Credit/Debit Card EMI available
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Image
                                style={{
                                    width: 18, height: 18, tintColor: "#777777"
                                }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", paddingHorizontal: 20, borderBottomWidth: 1, paddingVertical: 16, borderBlockColor: "#D2D6DD",
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: "center", flex: 2 }}>
                            <View style={{ marginRight: 30 }}>
                                <Image
                                    style={{
                                        width: 35, height: 35, tintColor: violet
                                    }}
                                    source={require("../../assets/icons/wallet.png")}
                                />
                            </View>

                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={[styles.ns700, { fontSize: 16 }]}>
                                    Mobile Wallets
                                </Text>

                                <Text style={[styles.ns400, { fontSize: 14, color: b3 }]}>
                                    AmazonPay,Mobikwik,Payzapp
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Image
                                style={{
                                    width: 18, height: 18, tintColor: "#777777"
                                }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", paddingHorizontal: 20, borderBottomWidth: 1, paddingVertical: 16, borderBlockColor: "#D2D6DD",
                        }}
                        onPress={() => navigation.navigate("success")}
                    >
                        <View style={{ flexDirection: 'row', alignItems: "center", flex: 2 }}>
                            <View style={{ marginRight: 30 }}>
                                <Image
                                    style={{
                                        width: 35, height: 35, tintColor: violet
                                    }}
                                    source={require("../../assets/icons/wallet.png")}
                                />
                            </View>

                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={[styles.ns700, { fontSize: 16 }]}>
                                    Mobile Wallets
                                </Text>

                                <Text style={[styles.ns400, { fontSize: 14, color: b3 }]}>
                                    AmazonPay,Mobikwik,Payzapp
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Image
                                style={{
                                    width: 18, height: 18, tintColor: "#777777"
                                }}
                                source={require("../../assets/icons/right-arrow.png")}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <CustomBottomSheet
                    ref={tsRef}
                    component={paymentDetails}
                    containerStyle={{ height: 290 }}
                />
            </View>
        </SafeAreaView>
    )
};

export default Payments;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        marginTop: 30,
    },
    lbB1: {
        fontFamily: "LondonBetween",
        color: b1,
    },
    ns700: {
        fontFamily: "NunitoSans_10pt-Bold",
        color: b1,
        fontSize: 18,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        color: b1,
        fontSize: 16,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 14,
    },
    nav: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginLeft: 12
    },
    hr: {
        borderWidth: 0.7,
        borderColor: "#DEDEDE",
        marginTop: 6,
    },
    navHeadTxt: {
        color: b1,
        fontSize: 16,
        fontFamily: "LondonBetween",
    },
    navSubHeadTxt: {
        color: b3,
        fontSize: 13,
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
});