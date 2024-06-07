import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b2, white } from '../../../config/colors';

const { width, height } = Dimensions.get("window");

const GtDisclaimer = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.11} />
            <Header />

            <View style={styles.body}>
                <ScrollView
                    style={{ marginHorizontal: 8, marginTop: 5 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ paddingVertical: 5, rowGap: 10 }}>
                        <View style={styles.comWrapEp}>
                            <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: 'center' }]}>
                                Welcome to Group Booking Travel
                            </Text>

                            <Text style={[commonStyles.ns400, { lineHeight: 25, marginTop: 50 }]}>
                                Dear Customer
                            </Text>

                            <Text style={[commonStyles.ns400, { lineHeight: 25, marginTop: 15 }]}>
                                Welcome to 10 Cents Air Booking Platform. If your travelling party has 10 or more travellers, then 10 Cents Air offers you following benefits:
                            </Text>

                            <View style={{ rowGap: 10 }}>
                                <Text style={[commonStyles.ns400, { lineHeight: 25 }]}>
                                    (1) A customized fare quote to give you savings over the available fares.
                                </Text>
                                <Text style={[commonStyles.ns400, { lineHeight: 25 }]}>
                                    (2) Flexibility to add names up to 7 days before the journey.
                                </Text>
                                <Text style={[commonStyles.ns400, { lineHeight: 25 }]}>
                                    (3) A convenient interface to book, make payment and add names of travelers.
                                </Text>
                                <Text style={[commonStyles.ns400, { lineHeight: 25 }]}>
                                    (4) Pay using a host of convenient payment options also enjoy the flexibility of paying partially for your group for travel outside 21 days.
                                </Text>
                            </View>

                            <Text style={[commonStyles.ns400, { lineHeight: 25 }]}>
                                Fill up the form below and we will getback to you very soon with our attractive fare quote for your journey.
                            </Text>

                            <View>
                                <Text style={[commonStyles.ns400, { lineHeight: 25 }]}>
                                    Best Regards
                                </Text>

                                <Text style={[commonStyles.ns400, { lineHeight: 25 }]}>
                                    10 Cents Air Team
                                </Text>
                            </View>

                            <View style={{marginTop: 30, marginHorizontal: 60}}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => navigation.navigate("gtcreatereq")}
                                >
                                    <Text style={[commonStyles.lbB1, { fontSize: 16, color: white }]}>
                                        PROCEED
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

export default GtDisclaimer;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 25,
        flex: 1,
        backgroundColor: "#EFF2F7",
    },
    comWrapEp: {
        backgroundColor: white,
        paddingVertical: 20,
        borderRadius: 8,
        elevation: 3,
        rowGap: 15,
        paddingHorizontal: 10,
    },
    btn: {
        borderRadius: 34,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginRight: 10,
        elevation: 3,
    },
});