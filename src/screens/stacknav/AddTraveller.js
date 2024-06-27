import { Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import icon from '../../config/IconAssets';
import { b1, b3, blue, bs1, red, white } from '../../config/colors';
import commonStyles from '../../assets/css/CommonFonts';
import { _EmailRegex, _NumericRegex } from '../../config/StaticVars';
import { useDispatch } from 'react-redux';
import { addUserAddress } from '../../services/slices/FlightSlice';

const AddTraveller = ({ navigation }) => {
    const [tDtlsType, setTDtlsType] = useState("Personal");
    const [userAddress, setUserAddress] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipcode: "",
        country: "",
        isSelected: false,
    });
    const [userAddressError, setUserAddressError] = useState({});

    const dispatch = useDispatch();


    const validateUserAddress = () => {
        const error = {};
        const { firstName, lastName, email, phone, address, city, zipcode, country } = userAddress;

        if (!firstName) {
            error.firstName = "First Name is Required!";
        } else if (!lastName) {
            error.lastName = "Last Name is Required!";
        } else if (!email) {
            error.email = "Email Name is Required!";
        } else if (!_EmailRegex.test(email)) {
            error.email = "Invalid Email Format!";
        } else if (!phone) {
            error.phone = "Contact Number is Required!";
        } else if (!_NumericRegex.test(phone)) {
            error.phone = "Only Numerics are Allowed!";
        } else if (!address) {
            error.address = "Address is Required!";
        } else if (!city) {
            error.city = "City is Required!";
        } else if (!zipcode) {
            error.zipcode = "Zipcode is Required!";
        } else if (!_NumericRegex.test(zipcode)) {
            error.zipcode = "Only Numerics are Allowed!";
        } else if (!country) {
            error.country = "Country is Required!";
        }

        return error;
    };

    const handleUserAddress = () => {
        const validationErrors = validateUserAddress();
        setUserAddressError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            dispatch(addUserAddress({ userAddress, navigation }));
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#FFFEFE" }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />

            <View style={styles.Wrap}>
                {/* top  */}
                <View style={styles.navWrap}>
                    <Text style={[commonStyles.lbB1, { fontSize: 17 }]}>Please select a fare for IndiGo</Text>

                    <TouchableOpacity style={styles.cross} onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 15, height: 15, tintColor: b3 }}
                            source={icon.cross}
                        />
                    </TouchableOpacity>
                </View>

                {/* traveller details */}
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}
                >
                    <View style={{ flex: 1 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ marginTop: 20 }}>
                                {/* traveller details section */}
                                <View style={styles.tdetailsContainer}>
                                    <View style={styles.headWrap}>
                                        <Text style={[commonStyles.ns700, { fontSize: 15, fontWeight: Platform.OS === "ios" ? "600" : "" }]}>
                                            TRAVELLER DETAILS
                                        </Text>
                                    </View>

                                    {/* button */}
                                    <View style={styles.btnWrap}>
                                        <TouchableOpacity
                                            style={[
                                                tDtlsType === "Personal" ? styles.btnAct : styles.btn,
                                                {
                                                    borderBottomLeftRadius: 30,
                                                    borderTopLeftRadius: 30,
                                                }
                                            ]}
                                            onPress={() => setTDtlsType("Personal")}
                                        >
                                            <Text style={[commonStyles.ns400, { fontSize: 15, color: tDtlsType === "Personal" ? white : b3 }]}>Personal</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[
                                                tDtlsType === "Business" ? styles.btnAct : styles.btn,
                                                {
                                                    borderBottomRightRadius: 30,
                                                    borderTopRightRadius: 30,
                                                }
                                            ]}
                                            onPress={() => setTDtlsType("Business")}
                                        >
                                            <Text style={[commonStyles.ns400, { fontSize: 15, color: tDtlsType === "Business" ? white : b3 }]}>Business</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* note */}
                                    <View style={styles.noteWrap}>
                                        <View style={{ backgroundColor: blue, borderRadius: 3, padding: 3 }}>
                                            <Text style={[commonStyles.ns600, { fontSize: 12, color: white }]}>NOTE:</Text>
                                        </View>

                                        <Text style={[commonStyles.ns400, { color: b3, flex: 1 }]}>
                                            Please make sure you enter the Name as per your govt. photo id.
                                        </Text>
                                    </View>

                                    <View style={styles.tdetailsWrap}>
                                        <View style={styles.tdetailsHead}>
                                            <Image style={{ width: 20, height: 20, tintColor: bs1 }} source={icon.usercheck} />
                                            <Text style={[commonStyles.ns600, { color: b3, fontSize: 15 }]}>Adult 1</Text>
                                        </View>

                                        {/* user details section */}
                                        <View style={styles.inputWrap}>
                                            {/* first name */}
                                            <View style={userAddressError.firstName ? styles.inputGrpErr : styles.inputGrp}>
                                                <TextInput
                                                    placeholder='First Name *'
                                                    placeholderTextColor={b1}
                                                    style={[commonStyles.ns400, styles.input]}
                                                    value={userAddress.firstName}
                                                    onChangeText={value => setUserAddress({ ...userAddress, firstName: value })}
                                                    onFocus={() => setUserAddressError({ ...userAddressError, firstName: "" })}
                                                />
                                            </View>
                                            {userAddressError.firstName && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                {userAddressError.firstName}
                                            </Text>}

                                            {/* last name */}
                                            <View style={userAddressError.lastName ? styles.inputGrpErr : styles.inputGrp}>
                                                <TextInput
                                                    placeholder='Last Name *'
                                                    placeholderTextColor={b1}
                                                    style={[commonStyles.ns400, styles.input]}
                                                    value={userAddress.lastName}
                                                    onChangeText={value => setUserAddress({ ...userAddress, lastName: value })}
                                                    onFocus={() => setUserAddressError({ ...userAddressError, lastName: "" })}
                                                />
                                            </View>
                                            {userAddressError.lastName && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                {userAddressError.lastName}
                                            </Text>}

                                            {/* email */}
                                            <View style={userAddressError.email ? styles.inputGrpErr : styles.inputGrp}>
                                                <TextInput
                                                    placeholder='E-mail Address *'
                                                    placeholderTextColor={b1}
                                                    style={[commonStyles.ns400, styles.input]}
                                                    keyboardType="email-address"
                                                    autoCapitalize='none'
                                                    value={userAddress.email}
                                                    onChangeText={value => setUserAddress({ ...userAddress, email: value })}
                                                    onFocus={() => setUserAddressError({ ...userAddressError, email: "" })}
                                                />
                                            </View>
                                            {userAddressError.email && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                {userAddressError.email}
                                            </Text>}

                                            {/* phone */}
                                            <View
                                                style={[
                                                    userAddressError.phone ? styles.inputGrpErr : styles.inputGrp,
                                                    { flexDirection: "row", alignItems: "center", columnGap: 3 }
                                                ]}
                                            >
                                                <Text style={[commonStyles.ns400, { fontSize: 13, marginLeft: Platform.OS === "ios" ? 8 : 6 }]}>
                                                    Contact Number*
                                                </Text>
                                                <View style={{ width: 1, backgroundColor: userAddressError.phone ? red : "#D8D8D8", height: "100%" }} />
                                                <TextInput
                                                    style={[commonStyles.ns400, styles.input, { flex: 1 }]}
                                                    keyboardType="number-pad"
                                                    value={userAddress.phone}
                                                    maxLength={10}
                                                    onChangeText={value => setUserAddress({ ...userAddress, phone: value })}
                                                    onFocus={() => setUserAddressError({ ...userAddressError, phone: "" })}
                                                />
                                            </View>
                                            {userAddressError.phone && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                {userAddressError.phone}
                                            </Text>}
                                        </View>

                                        {/* confirm message section */}
                                        <View style={styles.confTxtWrap}>
                                            <Text style={[commonStyles.ns400, { textAlign: "center" }]}>
                                                Confirmation email goes to this mail id and phone number
                                            </Text>
                                        </View>

                                        {/* address section */}
                                        <View style={styles.addressWrap}>
                                            <Text style={[commonStyles.ns600, { fontSize: 13 }]}>Your address*</Text>

                                            {/* user details section */}
                                            <View style={[styles.inputWrap, { marginTop: 12 }]}>
                                                {/* Address */}
                                                <View style={userAddressError.address ? styles.inputGrpErr : styles.inputGrp}>
                                                    <TextInput
                                                        placeholder='Address *'
                                                        placeholderTextColor={b1}
                                                        style={[commonStyles.ns400, styles.input]}
                                                        value={userAddress.address}
                                                        onChangeText={value => setUserAddress({ ...userAddress, address: value })}
                                                        onFocus={() => setUserAddressError({ ...userAddressError, address: "" })}
                                                    />
                                                </View>
                                                {userAddressError.address && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                    {userAddressError.address}
                                                </Text>}

                                                {/* City */}
                                                <View style={userAddressError.city ? styles.inputGrpErr : styles.inputGrp}>
                                                    <TextInput
                                                        placeholder='City*'
                                                        placeholderTextColor={b1}
                                                        style={[commonStyles.ns400, styles.input]}
                                                        value={userAddress.city}
                                                        onChangeText={value => setUserAddress({ ...userAddress, city: value })}
                                                        onFocus={() => setUserAddressError({ ...userAddressError, city: "" })}
                                                    />
                                                </View>
                                                {userAddressError.city && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                    {userAddressError.city}
                                                </Text>}

                                                {/* Zipcode */}
                                                <View style={userAddressError.zipcode ? styles.inputGrpErr : styles.inputGrp}>
                                                    <TextInput
                                                        placeholder='Zipcode*'
                                                        placeholderTextColor={b1}
                                                        style={[commonStyles.ns400, styles.input]}
                                                        keyboardType="number-pad"
                                                        maxLength={6}
                                                        value={userAddress.zipcode}
                                                        onChangeText={value => setUserAddress({ ...userAddress, zipcode: value })}
                                                        onFocus={() => setUserAddressError({ ...userAddressError, zipcode: "" })}
                                                    />
                                                </View>
                                                {userAddressError.zipcode && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                    {userAddressError.zipcode}
                                                </Text>}

                                                {/* country/region */}
                                                <View style={userAddressError.country ? styles.inputGrpErr : styles.inputGrp}>
                                                    <TextInput
                                                        placeholder='Country/ Region*'
                                                        placeholderTextColor={b1}
                                                        style={[commonStyles.ns400, styles.input]}
                                                        value={userAddress.country}
                                                        onChangeText={value => setUserAddress({ ...userAddress, country: value })}
                                                        onFocus={() => setUserAddressError({ ...userAddressError, country: "" })}
                                                    />
                                                </View>
                                                {userAddressError.country && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                    {userAddressError.country}
                                                </Text>}
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                {/* proceed button */}
                                <View style={{ alignItems: "center", marginTop: 40, marginBottom: 25 }}>
                                    <TouchableOpacity
                                        style={styles.continue}
                                        onPress={handleUserAddress}
                                    >
                                        <Text style={{ color: white, fontSize: 18, fontFamily: "LondonTwo" }}>
                                            Proceed
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
};

export default AddTraveller;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 60 : 45,
    },
    navWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    cross: {
        backgroundColor: "#D9D9D9",
        padding: 5,
        borderRadius: 100,
    },
    tdetailsContainer: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 8,
        borderColor: "#D8D8D8"
    },
    continue: {
        borderRadius: 4,
        backgroundColor: "#435970",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 11,
        paddingHorizontal: 60,
        marginRight: Platform.OS === "ios" && 10,
    },
    headWrap: {
        borderBottomWidth: 1,
        paddingVertical: 12,
        paddingLeft: 25,
        borderColor: "#D8D8D8",
    },
    btnWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    btn: {
        paddingHorizontal: 30,
        paddingVertical: 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: white,
        borderWidth: 1,
        borderColor: "#D8D8D8",
    },
    btnAct: {
        paddingHorizontal: 30,
        paddingVertical: 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: blue,
        borderWidth: 1,
        borderColor: blue,
    },
    noteWrap: {
        backgroundColor: "rgba(33,180,226, 0.1)",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        marginHorizontal: 12,
        columnGap: 20,
    },
    tdetailsWrap: {
        backgroundColor: "rgba(33,180,226, 0.05)",
        marginHorizontal: 6,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 6,
        borderRadius: 2,
        marginBottom: 6,
        borderBottomWidth: 0.8,
        borderBottomColor: "#E6E6E6",
    },
    tdetailsHead: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 5,
        marginTop: 10,
    },
    inputWrap: {
        rowGap: 6,
        marginTop: 25,
    },
    inputGrp: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        borderRadius: 4,
    },
    inputGrpErr: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: red,
        borderRadius: 4,
    },
    input: {
        color: b1,
        fontSize: 13,
        height: 40,
        paddingLeft: Platform.OS === "ios" ? 8 : 6,
    },
    confTxtWrap: {
        alignItems: "center",
        paddingHorizontal: Platform.OS === "ios" ? 50 : 30,
        marginVertical: 25,
    },
    errorTxt: {
        color: red,
        fontSize: 10,
        marginLeft: 6,
        marginTop: -3,
        marginBottom: 3,
    },
});