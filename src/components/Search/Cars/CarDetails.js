import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, b3, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';

const { width, height } = Dimensions.get("window");

const CarDetails = ({ navigation }) => {
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
                        {/* about car */}
                        <View style={[styles.comWrap, { rowGap: 10 }]}>
                            {/* car name & desp */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                                <View style={{ flex: 2, rowGap: 10 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                        Reserve this car
                                    </Text>

                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                                        <Text style={[commonStyles.ns400, { fontSize: 18 }]}>
                                            Economy
                                        </Text>
                                        <Image
                                            style={{}}
                                            source={image.alamo}
                                        />
                                    </View>

                                    <Text style={commonStyles.ns400}>
                                        Chevrolet Spark Or Similar
                                    </Text>
                                </View>

                                <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                                    <Image
                                        style={{ width: 90, height: 52 }}
                                        source={image.car1}
                                    />
                                </View>
                            </View>

                            {/* car perks */}
                            <View style={styles.carPerks}>
                                <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                    <Image
                                        style={{ width: 15, height: 15, tintColor: blue }}
                                        source={icon.speedometer}
                                    />

                                    <Text style={commonStyles.ns400}>
                                        Unlimited mileage
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                    <Image
                                        style={{ width: 15, height: 15, tintColor: blue }}
                                        source={icon.plane}
                                    />

                                    <Text style={commonStyles.ns400}>
                                        At Airport
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                    <Image
                                        style={{ width: 15, height: 15, tintColor: blue }}
                                        source={icon.airConditioner}
                                    />

                                    <Text style={commonStyles.ns400}>
                                        Air Conditioner
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                    <Image
                                        style={{ width: 15, height: 15, tintColor: blue }}
                                        source={icon.gearshift}
                                    />

                                    <Text style={commonStyles.ns400}>
                                        Automatic
                                    </Text>
                                </View>
                            </View>

                            {/* change car */}
                            <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, }}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => navigation.navigate("cardetails")}
                                >
                                    <Text style={[commonStyles.lbB1, { color: white }]}>
                                        Change Car
                                    </Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20, width: 210 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                        <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                                            <Image
                                                style={{ width: 25, height: 25, tintColor: blue }}
                                                source={icon.baggage}
                                            />
                                        </View>

                                        <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                                            2 Bags
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                        <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: blue }}
                                                source={icon.seat}
                                            />
                                        </View>

                                        <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                                            4 Seats
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.dottedLine} />

                            {/* bottom part */}
                            <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
                                <View style={{}}>
                                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                        Pick-up: <Text style={commonStyles.ns400}>
                                            2000 Airport Road Ne AB, CA, | Thu, Dec 21 2023 / 10:00 AM
                                        </Text>
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                        Drop-off: <Text style={commonStyles.ns400}>
                                            Same as Pick-up location | Thu, Jan 04 2024 / 10:00 AM
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Driver Details */}
                        <View style={styles.comWrapEp}>
                            <View style={{ rowGap: 8 }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Driver Details
                                </Text>
                                <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                    Who is the driver?
                                </Text>
                            </View>

                            <View style={styles.hr} />

                            <Text style={[commonStyles.ns400, { color: b3, width: "90%" }]}>
                                Enter the traveler's name as it appears on passport or government-issued photo ID.
                            </Text>

                            <View style={{ width: "90%", rowGap: 8 }}>
                                <TextInput
                                    placeholder='First Name *'
                                    placeholderTextColor={b1}
                                    style={[commonStyles.ns400, styles.inputBox]}
                                />
                                <TextInput
                                    placeholder='Last Name *'
                                    placeholderTextColor={b1}
                                    style={[commonStyles.ns400, styles.inputBox]}
                                />
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 15 }}>
                                <Text style={[commonStyles.ns400, { color: b3 }]}>
                                    Are you under 25?
                                </Text>

                                <TouchableOpacity>
                                    <Text style={[commonStyles.ns400, { color: blue }]}>
                                        View Policy Here
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.hr} />

                            <Text style={commonStyles.ns600}>
                                Optional Information
                            </Text>

                            <View style={{ width: "90%", rowGap: 8 }}>
                                <TextInput
                                    placeholder='Airline'
                                    placeholderTextColor={b1}
                                    style={[commonStyles.ns400, styles.inputBox]}
                                />
                                <TextInput
                                    placeholder='Flight Number'
                                    placeholderTextColor={b1}
                                    style={[commonStyles.ns400, styles.inputBox]}
                                />
                            </View>
                        </View>

                        {/* Protect Your Car (CDW) */}
                        <View style={styles.comWrapEp}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Protect Your Car (CDW)
                                </Text>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 18, color: b3 }]}>
                                        $139
                                    </Text>
                                    <Text style={[commonStyles.ns600, { fontSize: 12, alignSelf: "flex-start", top: 1, color: b3 }]}>
                                        .30
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.hr} />

                            <View style={{ rowGap: 10 }}>
                                <Text style={[commonStyles.ns400, { fontSize: 15, color: b3 }]}>
                                    We recommend adding Rental Car Damage coverage.
                                </Text>

                                <Text style={commonStyles.ns400}>
                                    Up to $35,000 for covered loss or damage.
                                </Text>
                                <Text style={commonStyles.ns400}>
                                    Primary coverage and zero deductible to save your money.
                                </Text>
                                <Text style={commonStyles.ns400}>
                                    Includes evacuation and repatriation up to $7,500.
                                </Text>
                                <Text style={commonStyles.ns400}>
                                    Includes 24/7 traveler assistance.
                                </Text>
                            </View>

                            <View style={styles.concent}>
                                <TouchableOpacity>
                                    <View style={styles.square} />
                                </TouchableOpacity>

                                <Text style={[commonStyles.ns400, { marginTop: -3, flex: 1 }]}>
                                    Yes, I want Rental Car Damage protection for my trip.
                                </Text>
                            </View>

                            <TouchableOpacity style={{ alignSelf: 'flex-start' }}>
                                <Text style={[commonStyles.ns400, { fontSize: 16, color: blue }]}>
                                    View Plan Details and Important Disclaimers (Non-insurance services and assistance fees included in the total travel protection plan cost). Terms and Conditions Apply
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Passenger Protection (PAI) */}
                        <View style={styles.comWrapEp}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Passenger Protection (PAI)
                                </Text>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 18, color: b3 }]}>
                                        $69
                                    </Text>
                                    <Text style={[commonStyles.ns600, { fontSize: 12, alignSelf: "flex-start", top: 1, color: b3 }]}>
                                        .30
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.hr} />

                            <View style={{ rowGap: 10 }}>
                                <Text style={[commonStyles.ns400, { fontSize: 15, color: b3 }]}>
                                    Be Safe. Accidents can and do happen while traveling.
                                </Text>

                                <Text style={commonStyles.ns400}>
                                    Includes accident medical expense coverage for up to $7,500.
                                </Text>
                                <Text style={commonStyles.ns400}>
                                    Injury expenses up to $7,500.
                                </Text>
                                <Text style={commonStyles.ns400}>
                                    Medical expenses up to $7,500 are covered.
                                </Text>
                                <Text style={commonStyles.ns400}>
                                    Includes accidental death & dismemberment coverage with a principal sum of $10,000.
                                </Text>
                            </View>

                            <View style={styles.concent}>
                                <TouchableOpacity>
                                    <View style={styles.square} />
                                </TouchableOpacity>

                                <Text style={[commonStyles.ns400, { marginTop: -3, flex: 1 }]}>
                                    Yes, I want Passenger Protection for my trip
                                </Text>
                            </View>

                            <TouchableOpacity style={{ alignSelf: 'flex-start' }}>
                                <Text style={[commonStyles.ns400, { fontSize: 16, color: blue }]}>
                                    View Plan Details and Important Disclaimers (Non-insurance services and assistance fees included in the total travel protection plan cost). Terms and Conditions Apply
                                </Text>
                            </TouchableOpacity>
                        </View>


                        {/* Personal Effects Coverage (PEC) */}
                        <View style={styles.comWrapEp}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Personal Effects Coverage (PEC)
                                </Text>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 18, color: b3 }]}>
                                        $41
                                    </Text>
                                    <Text style={[commonStyles.ns600, { fontSize: 12, alignSelf: "flex-start", top: 1, color: b3 }]}>
                                        .30
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.hr} />

                            <View style={{ rowGap: 10 }}>
                                <Text style={[commonStyles.ns400, { fontSize: 15, color: b3 }]}>
                                    Be cautious… lost or stolen items can ruin your trip!
                                </Text>

                                <View style={{ rowGap: 4 }}>
                                    <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                        Did the airline lose or damage your luggage?
                                    </Text>
                                    <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                        We'll cover your gear up to $1,000.
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.concent}>
                                <TouchableOpacity>
                                    <View style={styles.square} />
                                </TouchableOpacity>

                                <Text style={[commonStyles.ns400, { marginTop: -3, flex: 1 }]}>
                                    Yes, I want Personal Effects Coverage protection for my trip.
                                </Text>
                            </View>

                            <TouchableOpacity style={{ alignSelf: 'flex-start' }}>
                                <Text style={[commonStyles.ns400, { fontSize: 16, color: blue }]}>
                                    View Plan Details and Important Disclaimers (Non-insurance services and assistance fees included in the total travel protection plan cost). Terms and Conditions Apply
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Important Notes */}
                        <View style={styles.comWrapEp}>
                            <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                Important Notes
                            </Text>

                            <View>
                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                    Please note: <Text style={commonStyles.ns400}>
                                        All bookings are quoted in USD. Your credit/debit card may be billed in multiple charges totaling the amount shown above. In the event of cancellation, any booking fees already paid are non-refundable. Cancellations are subject to the Car supplier policy and 10 Cent air's service fees.
                                    </Text>
                                </Text>
                            </View>

                            <View>
                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                    Credit Card Policy: <Text style={commonStyles.ns400}>
                                        The driver must present a valid driver's license and credit card with his/her name upon pick-up. The credit card is required as a deposit when renting any vehicle. The deposit amount is held by the car rental company. Please ensure sufficient funds are available on the card.
                                    </Text>
                                </Text>
                            </View>

                            <View>
                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                    Debit Card Policy: <Text style={commonStyles.ns400}>
                                        Debit cards are not accepted for payment or for qualification at time of pick up for most locations. See <Text style={[commonStyles.ns400, { color: blue }]}>Important Rental Information</Text> for complete debit card policy.
                                    </Text>
                                </Text>
                            </View>

                            <View>
                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                    Car Rental Notice: <Text style={commonStyles.ns400}>
                                        The total estimated car rental cost includes govt taxes and fees. Actual total cost might vary based on additional items added or services used.
                                    </Text>
                                </Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 10 }}>
                                <TouchableOpacity>
                                    <Text style={[commonStyles.ns600, { fontSize: 14, color: blue }]}>
                                        Payment Acceptance Policy
                                    </Text>
                                </TouchableOpacity>

                                <Text style={[commonStyles.ns600, { fontSize: 14, color: blue }]}>
                                    .
                                </Text>

                                <TouchableOpacity>
                                    <Text style={[commonStyles.ns600, { fontSize: 14, color: blue }]}>
                                        Privacy Policy
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Policies & Review */}
                        <View style={styles.comWrapEp}>
                            <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                Policies & Review
                            </Text>

                            <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                Please confirm that dates and times of booking and name of driver is correct. Driver must be present at the time of pick-up.
                            </Text>

                            <Text style={commonStyles.ns600}>
                                Pick-up Date: Thu, Dec 21 2023 / 10:00 AM | Drop-off Date: Thu, Jan 04 2024 / 10:00 AM
                            </Text>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                <Text style={commonStyles.ns600}>
                                    Driver:
                                </Text>

                                <TouchableOpacity>
                                    <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textDecorationLine: "underline" }]}>
                                        Make changes
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                    Cancel and Refund Policy: <Text style={commonStyles.ns400}>
                                        Cancellation is free of charge until 19 Dec 2023 10:00. A cancellation fee of 100 percent will be charged from 19 Dec 2023 10:00 until 21 Dec 2023 10:00. A no show fee of 100 percent will be charged.
                                    </Text>
                                </Text>
                            </View>

                            <View>
                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                    Please note: <Text style={[commonStyles.ns400, { color: b3 }]}>
                                        All rates quoted are USD. Please keep in mind that, in the event of cancellation, any booking fees already paid are non-refundable. Your credit/debit card may be billed in multiple charges totaling the above amount.
                                    </Text>
                                </Text>
                            </View>

                            <View style={styles.dottedLine} />

                            <View>
                                <Text style={commonStyles.ns400}>
                                    Bookings are non-transferable and name changes are not permitted. Total price shown includes all applicable taxes & fees and our service fees. Some airlines may charge additional baggage fees or other fees. Fares are not guaranteed until ticketed.
                                </Text>
                                <Text style={commonStyles.ns400}>
                                    Date and location change will be subject to Hotel Cancellation Policy, Car Rental Policy and 10 Cent air Service fees. Some car Companies may charge additional fees for added products and services. Not all taxes and property charges are included for hotel. They will be provided and collected directly at the hotel.
                                </Text>
                            </View>

                            <Text style={[commonStyles.ns400, { textAlign: "center" }]}>
                                By clicking 'Confirm & Book', I agree that I have read and accepted the above policies and 10 Cents Air.com's Terms and Conditions and Privacy Policy
                            </Text>

                            {/* Confirm & Book */}
                            <View style={{ marginTop: 20 }}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => navigation.navigate("carfaredetails")}
                                >
                                    <Text style={[commonStyles.lbB1, { color: white }]}>
                                        Confirm & Book
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView >
    )
};

export default CarDetails;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 25,
        flex: 1,
        backgroundColor: "#EFF2F7",
    },
    comWrap: {
        backgroundColor: white,
        paddingTop: 10,
        borderRadius: 8,
        elevation: 3,
    },
    comWrapEp: {
        backgroundColor: white,
        paddingVertical: 20,
        borderRadius: 8,
        elevation: 3,
        rowGap: 15,
        paddingHorizontal: 15,
    },
    seatWrap: {
        backgroundColor: "rgba(33, 180, 226, 0.1)",
        borderRadius: 22,
        width: 22,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        borderRadius: 8,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginRight: 10,
    },
    dottedLine: {
        borderColor: b3,
        borderWidth: 1,
        marginTop: 5,
        borderStyle: "dashed",
    },
    carPerks: {
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop: 15,
        justifyContent: "space-between",
        rowGap: 10,
        marginLeft: 15,
        width: 250,
    },
    hr: {
        backgroundColor: "rgba(35, 32, 32, 0.15)",
        height: 1,
    },
    inputBox: {
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#D8D8D8',
    },
    square: {
        width: 16,
        height: 16,
        borderWidth: 1,
    },
    concent: {
        backgroundColor: '#FEF6F4',
        flexDirection: "row",
        alignItems: 'flex-start',
        columnGap: 10,
        paddingLeft: 10,
        paddingVertical: 10,
        width: "100%",
    },
});