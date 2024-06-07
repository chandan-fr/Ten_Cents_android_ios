import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { white, blue, b3, b2 } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const HpPayment = ({ navigation }) => {
    const [pmntOptn, setPmntOptn] = useState("new_card"); // paypal, gpay

    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.1} />
            <Header />

            <View style={styles.body}>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingVertical: 5, rowGap: 15 }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center" }]}>
                                Payment
                            </Text>

                            {/* payment mode */}
                            <View style={styles.comWrap}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    When would you like to pay?
                                </Text>

                                {/* pay at the property */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 15 }}>
                                    <TouchableOpacity>
                                        <View style={styles.circle} />
                                    </TouchableOpacity>

                                    <View style={{ rowGap: 10, flex: 1 }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                            Pay at the property
                                        </Text>

                                        <Text style={[commonStyles.ns400, { color: b3 }]}>
                                            Your card won't be charged, we only need your card details to guarantee your booking.
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 20, }}>
                                            <Image
                                                style={{ width: 33, height: 33, tintColor: b3 }}
                                                source={icon.card}
                                            />

                                            <Image
                                                style={{ width: 40, height: 40 }}
                                                source={icon.gpay}
                                            />

                                            <View style={{ backgroundColor: b3, alignItems: "center", paddingLeft: 4, paddingTop: 0, height: 28, justifyContent: 'center', borderRadius: 3 }}>
                                                <Image
                                                    style={{ width: 45, height: 40, tintColor: white }}
                                                    source={icon.paypallogo}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                {/* Pay on 18 Dec 2023 */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 15 }}>
                                    <TouchableOpacity>
                                        <View style={styles.circle} />
                                    </TouchableOpacity>

                                    <View style={{ rowGap: 10, flex: 1 }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                            Pay on 18 Dec 2023
                                        </Text>

                                        <Text style={[commonStyles.ns400, { color: b3 }]}>
                                            Booking.com will facilitate your payment. We'll automatically charge your selected card on 18 Dec 2023.
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 20, }}>
                                            <Image
                                                style={{ width: 33, height: 33, tintColor: b3 }}
                                                source={icon.card}
                                            />

                                            <Image
                                                style={{ width: 40, height: 40 }}
                                                source={icon.gpay}
                                            />

                                            <View style={{ backgroundColor: b3, alignItems: "center", paddingLeft: 4, paddingTop: 0, height: 28, justifyContent: 'center', borderRadius: 3 }}>
                                                <Image
                                                    style={{ width: 45, height: 40, tintColor: white }}
                                                    source={icon.paypallogo}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                {/* Pay now */}
                                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 15 }}>
                                    <TouchableOpacity>
                                        <View style={styles.circle} />
                                    </TouchableOpacity>

                                    <View style={{ rowGap: 10, flex: 1 }}>
                                        <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                            Pay now
                                        </Text>

                                        <Text style={[commonStyles.ns400, { color: b3 }]}>
                                            You'll pay with Booking.com when you complete this booking. You can cancel before 20 December 2023 for a full refund.
                                        </Text>

                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 20, }}>
                                            <Image
                                                style={{ width: 33, height: 33, tintColor: b3 }}
                                                source={icon.card}
                                            />

                                            <Image
                                                style={{ width: 40, height: 40 }}
                                                source={icon.gpay}
                                            />

                                            <View style={{ backgroundColor: b3, alignItems: "center", paddingLeft: 4, paddingTop: 0, height: 28, justifyContent: 'center', borderRadius: 3 }}>
                                                <Image
                                                    style={{ width: 45, height: 40, tintColor: white }}
                                                    source={icon.paypallogo}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/* payment method */}
                            <View style={styles.comWrap}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    How would you like to pay?
                                </Text>

                                {/* card options */}
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                    {/* new card */}
                                    <View style={{ rowGap: 10 }}>
                                        {pmntOptn === "new_card" ?
                                            <View style={styles.circleTick} >
                                                <Image
                                                    style={{ width: 10, height: 10, tintColor: white }}
                                                    source={icon.check}
                                                />
                                            </View>
                                            :
                                            <View style={styles.circleSm} />
                                        }

                                        <TouchableOpacity
                                            style={pmntOptn === "new_card" ? styles.cardOptnActive : styles.cardOptn}
                                            onPress={() => setPmntOptn("new_card")}
                                        >
                                            <Image
                                                style={styles.cardOptnImgActive}
                                                source={icon.addcard}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { fontSize: 14, textAlign: 'center' }]}>
                                            New Card
                                        </Text>
                                    </View>

                                    {/* paypal */}
                                    <View style={{ rowGap: 10 }}>
                                        {pmntOptn === "paypal" ?
                                            <View style={styles.circleTick} >
                                                <Image
                                                    style={{ width: 10, height: 10, tintColor: white }}
                                                    source={icon.check}
                                                />
                                            </View>
                                            :
                                            <View style={styles.circleSm} />
                                        }

                                        <TouchableOpacity
                                            style={pmntOptn === "paypal" ? styles.cardOptnActive : styles.cardOptn}
                                            onPress={() => setPmntOptn("paypal")}
                                        >
                                            <Image
                                                style={styles.paypal}
                                                source={icon.paypalcompltlogo}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { fontSize: 14, textAlign: 'center' }]}>
                                            Paypal
                                        </Text>
                                    </View>

                                    {/* gpay */}
                                    <View style={{ rowGap: 10 }}>
                                        {pmntOptn === "gpay" ?
                                            <View style={styles.circleTick} >
                                                <Image
                                                    style={{ width: 10, height: 10, tintColor: white }}
                                                    source={icon.check}
                                                />
                                            </View>
                                            :
                                            <View style={styles.circleSm} />
                                        }

                                        <TouchableOpacity
                                            style={pmntOptn === "gpay" ? styles.cardOptnActive : styles.cardOptn}
                                            onPress={() => setPmntOptn("gpay")}
                                        >
                                            <Image
                                                style={styles.gpay}
                                                source={icon.gpay}
                                            />
                                        </TouchableOpacity>

                                        <Text style={[commonStyles.ns600, { fontSize: 14, textAlign: 'center' }]}>
                                            Google Pay
                                        </Text>
                                    </View>
                                </View>

                                <Text style={[commonStyles.ns600, { fontSize: 22 }]}>
                                    New Card
                                </Text>

                                {/* cards */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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

                                {/* card input fields */}
                                <View style={{ width: width * 0.75, rowGap: 10 }}>
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
                            </View>

                            {/* complete booking */}
                            <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={()=> navigation.replace("success")}
                                >
                                    <Text style={[commonStyles.lbB1, { color: white }]}>
                                        Complete Booking
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View >
        </SafeAreaView >
    )
}

export default HpPayment;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 18,
        flex: 1,
    },
    comWrap: {
        backgroundColor: white,
        marginHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        paddingVertical: 15,
        rowGap: 20,
        paddingHorizontal: 15,
    },
    circle: {
        borderColor: blue,
        borderWidth: 2,
        width: 27,
        height: 27,
        borderRadius: 30,
    },
    cardOptn: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        borderWidth: 3,
        borderColor: "#D8D8D8",
        width: 110,
        height: 85,
    },
    cardOptnActive: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        borderWidth: 3,
        borderColor: blue,
        width: 110,
        height: 85,
    },
    cardOptnImg: {
        width: 45,
        height: 45,
        tintColor: b3,
    },
    cardOptnImgActive: {
        width: 45,
        height: 45,
        tintColor: blue,
    },
    paypal: {
        width: 70,
        height: 70,
    },
    gpay: {
        width: 50,
        height: 50,
    },
    circleSm: {
        borderColor: blue,
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 30,
        position: 'absolute',
        left: 8,
        top: 12,
    },
    circleTick: {
        backgroundColor: blue,
        width: 20,
        height: 20,
        borderRadius: 30,
        position: 'absolute',
        left: 8,
        top: 12,
        alignItems: 'center',
        justifyContent: 'center',
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
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginHorizontal: 25,
    },
});