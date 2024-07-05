import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { _EmailRegex, _NumericRegex, _Width } from '../config/StaticVars';
import { b1, black, bs1, red, rs1, white } from '../config/colors';
import { email, eye, hidden, mobile } from '../config/IconAssets';
import commonStyles from '../assets/css/CommonFonts';
import { CountryPicker } from "react-native-country-codes-picker";


const SignIn = ({ navigation }) => {
    const [showPswd, setShowPswd] = useState(false);
    const [loginOption, setLoginOption] = useState("email");
    const [formValue, setFormValue] = useState({ email: "", password: "", phone: "" });
    const [formError, setFormError] = useState({});
    const [country, setCountry] = useState({ dialCode: "+1", flag: "🇺🇸", name: "United States" });
    const [showCountryModal, setshowCountryModal] = useState(false);

    const chooseOption = () => {
        if (loginOption === "email") setLoginOption("phone");
        else setLoginOption("email");
    };

    const validateEventData = () => {
        const error = {};
        const { email, password, phone } = formValue;

        if (loginOption === "email") {
            if (!email) {
                error.email = "Email is Required!";
            }
            else if (!_EmailRegex.test(email)) {
                error.email = "Inalid Email format!";
            }
            else if (!password) {
                error.password = "Password is Required!";
            }
            else if (password.length < 8) {
                error.password = "Password length too short!";
            }
        }

        if (loginOption === "phone") {
            if (!phone) {
                error.phone = "Phone Number is Required!";
            }
            else if (phone.length < 9) {
                error.phone = "Phone number length too short!";
            }
            else if (!_NumericRegex.test(phone)) {
                error.phone = "Only Numbers are allowed!";
            }
        }

        return error;
    };

    const handleLogin = () => {
        const validationErrors = validateEventData();
        setFormError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            if (loginOption === "phone") {
                navigation.navigate("validateotp");
                console.log('phone', formValue);
            } else {
                console.log('email', formValue);
            }
        }
    };

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
        >
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

                    <View style={{ rowGap: Platform.OS === "ios" ? 110 : 80, flex: 1, marginBottom: 100 }}>
                        {/* heading */}
                        <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                            <Text style={[styles.s2HeadingText, { color: white }]}>Sign In</Text>

                            <View style={{ width: 195, alignItems: "center", marginTop: 15 }}>
                                <Text style={styles.s2SubHeadingText}>
                                    Earn <Text style={{ fontWeight: 600 }}> 2x  points </Text> when  you're  signed  in.
                                </Text>
                            </View>
                        </View>

                        {/* middle section */}
                        <View style={Platform.OS === "ios" ? { flex: 1 } : {flex: loginOption === "phone" ? 1 : 0}}>
                            {loginOption === "email" ?
                                /* Email input section */
                                <View style={styles.inputWrap}>
                                    {/* email */}
                                    <View style={styles.inputGrp}>
                                        <TextInput
                                            style={styles.inputBox}
                                            placeholder='Email'
                                            placeholderTextColor="#111111"
                                            keyboardType='email-address'
                                            value={formValue.email}
                                            onChangeText={value => setFormValue({ ...formValue, email: value })}
                                            onFocus={() => setFormError({ ...formError, email: "" })}
                                        />
                                    </View>
                                    {formError?.email && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                        {formError?.email}
                                    </Text>}

                                    {/* password */}
                                    <View style={[styles.inputGrp, styles.passwordWrap]}>
                                        <TextInput
                                            style={[styles.inputBox, { flex: 1 }]}
                                            placeholder='Password'
                                            placeholderTextColor={"#111111"}
                                            secureTextEntry={showPswd ? false : true}
                                            value={formValue.password}
                                            onChangeText={value => setFormValue({ ...formValue, password: value })}
                                            onFocus={() => setFormError({ ...formError, password: "" })}
                                        />

                                        <TouchableOpacity
                                            style={styles.eye}
                                            onPress={() => setShowPswd(!showPswd)}
                                        >
                                            <Image style={{ width: 20, height: 20 }} source={showPswd ? eye : hidden} />
                                        </TouchableOpacity>
                                    </View>
                                    {formError?.password && <Text style={[commonStyles.ns400, styles.errorTxt]}>
                                        {formError?.password}
                                    </Text>}

                                    {/* forgot password */}
                                    <TouchableOpacity
                                        style={{ alignSelf: "center", marginTop: -10 }}
                                    >
                                        <Text style={styles.forgotPswd}>Forgot password?</Text>
                                    </TouchableOpacity>

                                    {/* login with email button */}
                                    <TouchableOpacity
                                        style={styles.solidBtn}
                                        onPress={() => handleLogin()}
                                    >
                                        <Text style={styles.solidBtnTxt}>log in</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                /* phone input section */
                                <View style={{ rowGap: 30 }}>
                                    <CountryPicker
                                        show={showCountryModal}
                                        style={{
                                            modal: {
                                                marginTop: 150,
                                                paddingBottom: Platform.OS === "ios" ? 25 : 5,
                                                flex: 1,
                                            },
                                        }}
                                        pickerButtonOnPress={(item) => {
                                            setCountry({ dialCode: item.dial_code, flag: item.flag, name: item.name.en });
                                            setshowCountryModal(false);
                                        }}
                                    />

                                    <View style={styles.countryPhoneWrap}>
                                        {/* country/ flag */}
                                        <TouchableOpacity
                                            style={[styles.phoneInputGrp, { height: 50 }]}
                                            onPress={() => setshowCountryModal(true)}
                                        >
                                            <Text style={styles.flag}>{country.flag}</Text>
                                            <Text style={styles.cName}>{country.name}</Text>
                                        </TouchableOpacity>

                                        {/* input phone */}
                                        <View style={styles.phoneInputGrp}>
                                            <View style={{ paddingHorizontal: 10 }}>
                                                <Text style={styles.dialCode}>{country.dialCode}</Text>
                                            </View>

                                            <View style={styles.vr} />

                                            <TextInput
                                                style={styles.phoneInputBox}
                                                placeholder={"00 0 0000 0000"}
                                                placeholderTextColor={white}
                                                keyboardType='number-pad'
                                                value={formValue.phone}
                                                onChangeText={value => setFormValue({ ...formValue, phone: value })}
                                                onFocus={() => setFormError({ ...formError, phone: "" })}
                                            />
                                        </View>
                                        {formError?.phone && <Text style={[commonStyles.ns400, styles.errorTxt, { marginTop: 0 }]}>
                                            {formError?.phone}
                                        </Text>}
                                    </View>

                                    {/* continue button */}
                                    <TouchableOpacity
                                        style={styles.solidBtn}
                                        onPress={() => handleLogin()}
                                    >
                                        <Text style={styles.solidBtnTxt}>continue</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>

                        {/* footer/ login option */}
                        <View>
                            {/* divider */}
                            <View style={styles.divider}>
                                <View style={styles.hr} />
                                <Text style={styles.or}>or</Text>
                                <View style={styles.hr} />
                            </View>

                            {/* phone/email option */}
                            <View style={{ marginHorizontal: 25, marginTop: 30 }}>
                                <TouchableOpacity onPress={() => chooseOption()}>
                                    {loginOption === "email" ?
                                        <View style={[styles.inputGrp, styles.optionWrap]}>
                                            <Image style={styles.optionImg} source={mobile} />
                                            <Text style={styles.optionTxt}>Continue with phone </Text>
                                        </View>
                                        :
                                        <View style={[styles.inputGrp, styles.optionWrap]}>
                                            <Image style={styles.optionImg} source={email} />
                                            <Text style={styles.optionTxt}>Continue with email </Text>
                                        </View>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default SignIn;

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
    s2SubHeadingText: {
        fontFamily: 'Poppins-Regular',
        fontSize: Platform.OS === "ios" ? 12 : 11,
        color: white,
        textAlign: "center",
    },
    inputWrap: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        rowGap: 15,
    },
    inputGrp: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: white,
        borderColor: bs1,
    },
    inputBox: {
        height: 45,
        paddingLeft: 15,
        fontFamily: "Poppins-Regular",
        fontSize: Platform.OS === "ios" ? 16 : 15,
        color: "#111111",
    },
    passwordWrap: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 3,
    },
    eye: {
        marginRight: 15,
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    forgotPswd: {
        fontFamily: "Poppins-Regular",
        fontSize: Platform.OS === "ios" ? 13 : 12,
        textDecorationLine: "underline",
        color: "#253D4E",
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
    or: {
        fontFamily: "Inter-Regular",
        fontSize: Platform.OS === "ios" ? 16 : 15,
        color: white,
        textTransform: "uppercase",
    },
    hr: {
        height: 2,
        backgroundColor: white,
        flex: 1,
    },
    divider: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingHorizontal: 50,
    },
    optionImg: {
        width: 23,
        height: 23,
        tintColor: "#699BF7",
    },
    optionWrap: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        justifyContent: "center",
        height: 45,
    },
    optionTxt: {
        color: bs1,
        fontSize: Platform.OS === "ios" ? 15 : 14,
        fontFamily: "Lato-Regular",
    },
    errorTxt: {
        color: rs1,
        fontSize: 10,
        marginLeft: 16,
        marginTop: -10,
        marginBottom: 5,
    },
    countryPhoneWrap: {
        paddingHorizontal: 10,
        rowGap: 10,
    },
    phoneInputGrp: {
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 5,
        borderColor: white,
    },
    flag: {
        fontSize: 25,
        marginRight: 10,
    },
    cName: {
        fontFamily: "NunitoSans_10pt-Medium",
        fontSize: 16,
        color: black,
        textTransform: "uppercase"
    },
    dialCode: {
        fontFamily: "NunitoSans_10pt-Medium",
        fontSize: 15,
        color: black,
    },
    vr: {
        backgroundColor: white,
        height: "80%",
        width: 1,
    },
    phoneInputBox: {
        fontFamily: "Segoe UI",
        fontSize: 16,
        color: white,
        paddingLeft: 15,
        height: 40,
        flex: 1,
    },
});