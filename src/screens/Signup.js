import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { _EmailRegex, _NameRegex, _NumericRegex, _Width } from '../config/StaticVars';
import { b1, red, white } from '../config/colors';
import commonStyles from '../assets/css/CommonFonts';
import { useDispatch } from 'react-redux';

const Signup = ({ navigation }) => {
    const [userDetails, setUserDetails] = useState({
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
    const [userDetailsError, setUserDetailsError] = useState({});

    const dispatch = useDispatch();


    const validateUserDetails = () => {
        const error = {};
        const { firstName, lastName, email, phone, address, city, zipcode, country } = userDetails;

        if (!firstName) {
            error.firstName = "First Name is Required!";
        } else if (!_NameRegex.test(firstName)) {
            error.firstName = "Only Alphabets & blank space are Allowed!";
        } else if (!lastName) {
            error.lastName = "Last Name is Required!";
        } else if (!_NameRegex.test(lastName)) {
            error.lastName = "Only Alphabets & blank space are Allowed!";
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

    const handleSignup = () => {
        const validationErrors = validateUserDetails();
        setUserDetailsError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // dispatch(addUserAddress({ userAddress, navigation }));
            console.log();
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={"dark-content"} />

            <ImageBackground
                source={require("../assets/images/13.jpg")}
                resizeMode='cover'
                style={styles.imgBkgrnd}
            >
                {/* skip */}
                <TouchableOpacity style={styles.skipWrap} onPress={() => navigation.replace("tab")}>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>

                {/* body */}
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
                >
                    <View style={{ flex: 1, marginBottom: Platform.OS === "ios" ? 15 : 5, paddingTop: 10 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1 }}>
                                {/* heading */}
                                <View style={{ alignItems: "center", marginTop: Platform.OS === "ios" ? 30 : 20, marginBottom: 45 }}>
                                    <Text style={[styles.s2HeadingText, { color: white }]}>Enter Details</Text>
                                </View>

                                {/* input section */}
                                <View style={styles.tdetailsWrap}>
                                    {/* user details section */}
                                    <View style={styles.inputWrap}>
                                        {/* first name */}
                                        <View style={userDetailsError.firstName ? styles.inputGrpErr : styles.inputGrp}>
                                            <TextInput
                                                placeholder='First Name *'
                                                placeholderTextColor={b1}
                                                style={[commonStyles.ns400, styles.input]}
                                                value={userDetails.firstName}
                                                onChangeText={value => setUserDetails({ ...userDetails, firstName: value })}
                                                onFocus={() => setUserDetailsError({ ...userDetailsError, firstName: "" })}
                                            />
                                        </View>
                                        {userDetailsError.firstName && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                            {userDetailsError.firstName}
                                        </Text>}

                                        {/* last name */}
                                        <View style={userDetailsError.lastName ? styles.inputGrpErr : styles.inputGrp}>
                                            <TextInput
                                                placeholder='Last Name *'
                                                placeholderTextColor={b1}
                                                style={[commonStyles.ns400, styles.input]}
                                                value={userDetails.lastName}
                                                onChangeText={value => setUserDetails({ ...userDetails, lastName: value })}
                                                onFocus={() => setUserDetailsError({ ...userDetailsError, lastName: "" })}
                                            />
                                        </View>
                                        {userDetailsError.lastName && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                            {userDetailsError.lastName}
                                        </Text>}

                                        {/* email */}
                                        <View style={userDetailsError.email ? styles.inputGrpErr : styles.inputGrp}>
                                            <TextInput
                                                placeholder='E-mail Address *'
                                                placeholderTextColor={b1}
                                                style={[commonStyles.ns400, styles.input]}
                                                keyboardType="email-address"
                                                autoCapitalize='none'
                                                value={userDetails.email}
                                                onChangeText={value => setUserDetails({ ...userDetails, email: value })}
                                                onFocus={() => setUserDetailsError({ ...userDetailsError, email: "" })}
                                            />
                                        </View>
                                        {userDetailsError.email && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                            {userDetailsError.email}
                                        </Text>}

                                        {/* phone */}
                                        <View
                                            style={[
                                                userDetailsError.phone ? styles.inputGrpErr : styles.inputGrp,
                                                { flexDirection: "row", alignItems: "center", columnGap: 3 }
                                            ]}
                                        >
                                            <Text style={[commonStyles.ns400, { fontSize: 13, marginLeft: Platform.OS === "ios" ? 8 : 6 }]}>
                                                Contact Number*
                                            </Text>
                                            <View style={{ width: 1, backgroundColor: userDetailsError.phone ? red : "#D8D8D8", height: "100%" }} />
                                            <TextInput
                                                style={[commonStyles.ns400, styles.input, { flex: 1 }]}
                                                keyboardType="number-pad"
                                                value={userDetails.phone}
                                                maxLength={10}
                                                onChangeText={value => setUserDetails({ ...userDetails, phone: value })}
                                                onFocus={() => setUserDetailsError({ ...userDetailsError, phone: "" })}
                                            />
                                        </View>
                                        {userDetailsError.phone && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                            {userDetailsError.phone}
                                        </Text>}
                                    </View>

                                    {/* confirm message section */}
                                    <View style={styles.confTxtWrap}>
                                        <Text style={[commonStyles.ns400, { textAlign: "center", fontSize: 12 }]}>
                                            Confirmation email goes to this mail id and phone number
                                        </Text>
                                    </View>

                                    {/* address section */}
                                    <View style={styles.addressWrap}>
                                        <Text style={[commonStyles.ns600, { fontSize: 13 }]}>Your address*</Text>

                                        {/* user details section */}
                                        <View style={[styles.inputWrap, { marginTop: 12 }]}>
                                            {/* Address */}
                                            <View style={userDetailsError.address ? styles.inputGrpErr : styles.inputGrp}>
                                                <TextInput
                                                    placeholder='Address *'
                                                    placeholderTextColor={b1}
                                                    style={[commonStyles.ns400, styles.input]}
                                                    value={userDetails.address}
                                                    onChangeText={value => setUserDetails({ ...userDetails, address: value })}
                                                    onFocus={() => setUserDetailsError({ ...userDetailsError, address: "" })}
                                                />
                                            </View>
                                            {userDetailsError.address && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                {userDetailsError.address}
                                            </Text>}

                                            {/* City */}
                                            <View style={userDetailsError.city ? styles.inputGrpErr : styles.inputGrp}>
                                                <TextInput
                                                    placeholder='City*'
                                                    placeholderTextColor={b1}
                                                    style={[commonStyles.ns400, styles.input]}
                                                    value={userDetails.city}
                                                    onChangeText={value => setUserDetails({ ...userDetails, city: value })}
                                                    onFocus={() => setUserDetailsError({ ...userDetailsError, city: "" })}
                                                />
                                            </View>
                                            {userDetailsError.city && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                {userDetailsError.city}
                                            </Text>}

                                            {/* Zipcode */}
                                            <View style={userDetailsError.zipcode ? styles.inputGrpErr : styles.inputGrp}>
                                                <TextInput
                                                    placeholder='Zipcode*'
                                                    placeholderTextColor={b1}
                                                    style={[commonStyles.ns400, styles.input]}
                                                    keyboardType="number-pad"
                                                    maxLength={6}
                                                    value={userDetails.zipcode}
                                                    onChangeText={value => setUserDetails({ ...userDetails, zipcode: value })}
                                                    onFocus={() => setUserDetailsError({ ...userDetailsError, zipcode: "" })}
                                                />
                                            </View>
                                            {userDetailsError.zipcode && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                {userDetailsError.zipcode}
                                            </Text>}

                                            {/* country/region */}
                                            <View style={userDetailsError.country ? styles.inputGrpErr : styles.inputGrp}>
                                                <TextInput
                                                    placeholder='Country/ Region*'
                                                    placeholderTextColor={b1}
                                                    style={[commonStyles.ns400, styles.input]}
                                                    value={userDetails.country}
                                                    onChangeText={value => setUserDetails({ ...userDetails, country: value })}
                                                    onFocus={() => setUserDetailsError({ ...userDetailsError, country: "" })}
                                                />
                                            </View>
                                            {userDetailsError.country && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                                {userDetailsError.country}
                                            </Text>}
                                        </View>
                                    </View>
                                </View>

                                {/* sign up button */}
                                <View style={{ alignItems: "center", marginTop: 20 }}>
                                    {/* continue button */}
                                    <TouchableOpacity
                                        style={styles.solidBtn}
                                        onPress={() => handleSignup()}
                                    >
                                        <Text style={styles.solidBtnTxt}>Sign up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )
};

export default Signup;

const styles = StyleSheet.create({
    imgBkgrnd: {
        width: _Width,
        height: "100%",
    },
    skip: {
        fontFamily: "Rubik-Regular",
        fontSize: 16,
        color: white,
    },
    skipWrap: {
        marginLeft: 10,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            ios: { marginTop: 55 },
            android: { marginTop: 40 },
        }),
    },
    s2HeadingText: {
        fontFamily: 'LondonBetween',
        fontSize: 22,
        color: b1,
    },
    solidBtn: {
        backgroundColor: "#111111",
        borderRadius: 100,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: _Width / 2,
        marginTop: 10,
    },
    solidBtnTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: Platform.OS === "ios" ? 14 : 13,
        color: white,
        textTransform: "uppercase",
    },
    tdetailsWrap: {
        backgroundColor: "rgba(33,180,226, 0.05)",
        marginHorizontal: 10,
        paddingHorizontal: 15,
        marginTop: 6,
        borderRadius: 2,
        marginBottom: 6,
    },
    inputWrap: {
        rowGap: 6,
    },
    inputGrp: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        borderRadius: 20,
    },
    inputGrpErr: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: red,
        borderRadius: 20,
    },
    input: {
        color: b1,
        fontSize: 13,
        height: 40,
        paddingLeft: Platform.OS === "ios" ? 16 : 15,
    },
    confTxtWrap: {
        alignItems: "center",
        paddingHorizontal: Platform.OS === "ios" ? 70 : 50,
        marginBottom: 30,
        marginTop: 10,
    },
    errorTxt: {
        color: red,
        fontSize: 10,
        marginLeft: 6,
        marginTop: -3,
        marginBottom: 3,
    },
    addressWrap: {

    },
});