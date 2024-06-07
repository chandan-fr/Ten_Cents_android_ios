import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b3, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';

const { width, height } = Dimensions.get("window");

const CarPayment = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.11} />
            <Header />

            <View style={styles.body}>
                <ScrollView
                    style={{ marginHorizontal: 10, marginTop: 5 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ paddingVertical: 5, rowGap: 15 }}>
                        <View style={styles.comWrapEp}>
                            <Text style={[commonStyles.ns700, { color: "#313541", fontSize: 20 }]}>
                                Payment Options
                            </Text>

                            <View style={{ alignItems: 'flex-start' }}>
                                <View style={styles.ssl}>
                                    <Image
                                        style={{ width: 15, height: 15, tintColor: "#24AD53" }}
                                        source={icon.lock}
                                    />

                                    <Text style={[commonStyles.ns600, { fontSize: 12, color: "#24AD53" }]}>
                                        Secure SSL Encrypted Transaction
                                    </Text>
                                </View>
                            </View>

                            <View style={{ rowGap: 6 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                    Apply for 10 Cents Air Credit Card
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 14, color: "#24AD53" }]}>
                                            USD 50
                                        </Text>
                                        <Text style={[commonStyles.ns600, {
                                            fontSize: 9, textAlignVertical
                                                : "top", color: "#24AD53"
                                        }]}>
                                            .00
                                        </Text>
                                    </View>

                                    <Text style={[commonStyles.ns600, { fontSize: 14, color: "#24AD53" }]}>
                                        statement credit offer
                                    </Text>
                                </View>
                            </View>

                            <Text style={[commonStyles.ns600, { fontSize: 22 }]}>
                                Credit Card
                            </Text>

                            {/* cards */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                                <View style={styles.cards}>
                                    <Image
                                        style={{ width: 28, height: 22 }}
                                        source={icon.visa}
                                    />
                                </View>

                                <View style={styles.cards}>
                                    <Image
                                        style={{ width: 25, height: 20 }}
                                        source={icon.mastercard}
                                    />
                                </View>

                                <View style={styles.cards}>
                                    <Image
                                        style={{ width: 30, height: 25, tintColor: '#0072CE' }}
                                        source={icon.amex}
                                    />
                                </View>

                                <View style={styles.cards}>
                                    <Image
                                        style={{ width: 35, height: 15 }}
                                        resizeMode='stretch'
                                        source={icon.discover}
                                    />
                                </View>

                                <View style={styles.cards}>
                                    <Image
                                        style={{ width: 35, height: 25 }}
                                        source={icon.diners}
                                    />
                                </View>

                                <View style={styles.cards}>
                                    <Image
                                        style={{ width: 30, height: 20 }}
                                        source={icon.carteBlanche}
                                    />
                                </View>
                            </View>

                            {/* card inputs */}
                            <View style={{ width: width * 0.75, rowGap: 15 }}>
                                {/* number */}
                                <View style={styles.inputGrp}>
                                    <TextInput
                                        style={[commonStyles.ns600, { fontSize: 18, paddingLeft: 10 }]}
                                        placeholder='Card Number *'
                                        placeholderTextColor={b3}
                                        keyboardType='number-pad'
                                    />
                                </View>

                                {/* name */}
                                <View style={styles.inputGrp}>
                                    <TextInput
                                        style={[commonStyles.ns600, { fontSize: 18, paddingLeft: 10 }]}
                                        placeholder='Name on Card*'
                                        placeholderTextColor={b3}
                                    />
                                </View>

                                <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 15 }}>
                                    {/* expiry date */}
                                    <View style={[styles.inputGrp, { flex: 1 }]}>
                                        <Text style={[commonStyles.ns600, { fontSize: 13, marginLeft: 10, color: b3, position: "absolute", top: 1 }]}>
                                            Expiry Date *
                                        </Text>

                                        <TextInput
                                            style={[commonStyles.ns600, { fontSize: 18, paddingLeft: 10, textAlignVertical: 'bottom', paddingBottom: 4 }]}
                                            placeholder='MM/YY'
                                            placeholderTextColor={b3}
                                            keyboardType='number-pad'
                                            multiline={true}
                                            numberOfLines={2}
                                            maxLength={4}
                                        />
                                    </View>

                                    {/* cvv */}
                                    <View style={[styles.inputGrp, { flex: 1 }]}>
                                        <TextInput
                                            style={[commonStyles.ns600, { fontSize: 18, paddingLeft: 10 }]}
                                            placeholder='CVV*'
                                            placeholderTextColor={b3}
                                            maxLength={3}
                                            keyboardType='number-pad'
                                        />

                                        <Image
                                            style={{ width: 35, height: 25, position: "absolute", right: 10, borderRadius: 4 }}
                                            source={icon.cvv}
                                        />
                                    </View>
                                </View>
                            </View>

                            <Text style={commonStyles.ns600}>
                                Easy monthly payments
                            </Text>

                            <View style={{ marginTop: 50, flexDirection: "row", alignItems: "flex-start", columnGap: 20 }}>
                                <Image
                                    style={{ width: 70, height: 30 }}
                                    source={image.affirm}
                                />

                                <View style={{ rowGap: 6, flex: 1 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                        Make easy monthly payments over 6, 12, or 18 months. As low as $150 /month with Affirm. No late fees. Ever. <Text style={[commonStyles.ns600, { fontSize: 14, color: blue }]}>
                                            Learn more
                                        </Text>
                                    </Text>

                                    <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>
                                        Available only to US residents.
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.hr} />

                            <View style={{ flexDirection: "row", columnGap: 15 }}>
                                <Image
                                    style={{ width: 80, height: 80 }}
                                    source={image.mcafe}
                                    resizeMode='stretch'
                                />

                                <View style={{ flexDirection: "row", flexWrap: "wrap", flex: 1, columnGap: 20, rowGap: 10 }}>
                                    <TouchableOpacity>
                                        <Text style={[commonStyles.ns600, { fontSize: 12, color: blue, textDecorationLine: "underline" }]}>
                                            Payment Acceptance Policy
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ flexDirection: "row", alignItems: 'center', columnGap: 5 }}
                                    >
                                        <Image
                                            style={{ width: 15, height: 15 }}
                                            source={icon.lock}
                                        />

                                        <Text style={[commonStyles.ns600, { fontSize: 12, color: blue, textDecorationLine: "underline" }]}>
                                            Privacy Policy
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Text style={[commonStyles.ns600, { fontSize: 12, color: blue, textDecorationLine: "underline" }]}>
                                            Safe Shopping Guarantee
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView >
    )
};

export default CarPayment;

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
        paddingHorizontal: 15,
    },
    ssl: {
        borderWidth: 1,
        borderColor: "#99DDBA",
        paddingHorizontal: 15,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        paddingVertical: 5,
        columnGap: 6,
    },
    cards: {
        width: 50,
        height: 30,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#E2E2E2",
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputGrp: {
        borderWidth: 1,
        borderColor: "#D8D8D8",
        borderRadius: 4,
        height: 55,
        justifyContent: 'center'
    },
    hr: {
        backgroundColor: "#D8D8D8",
        height: 1,
        marginVertical: 5,
        borderTopWidth: 1,
        borderTopColor: "#D8D8D8",
    },
});