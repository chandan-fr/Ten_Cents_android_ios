import { Alert, ImageBackground, Keyboard, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { _Width } from '../../config/StaticVars';
import { black, white } from '../../config/colors';
import useTimer from '../../utility/TimerComponent';

const ValidateOTP = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            if (box1Ref.current) box1Ref.current.focus();
        }, 500);
    }, []);

    const [otp, setOtp] = useState({ box1: "", box2: "", box3: "", box4: "", box5: "" });
    const [focusedBox, setFocusedBox] = useState(null);
    const timeLeft = useTimer('1m');

    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const box4Ref = useRef(null);
    const box5Ref = useRef(null);

    const handleTextChange = (value, ref, nextRef, prevRef) => {
        if (value.length === 1 && nextRef) {
            nextRef.current.focus();
        } else if (value.length === 0 && prevRef) {
            prevRef.current.focus();
        }
    };

    const submitOTP = () => {

    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
            <View style={{ flex: 1 }}>
                <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={"dark-content"} />

                <ImageBackground
                    source={require("../../assets/images/13.jpg")}
                    resizeMode='cover'
                    style={styles.imgBkgrnd}
                >
                    {/* skip */}
                    <TouchableOpacity style={styles.skipWrap} onPress={() => navigation.replace("tab")}>
                        <Text style={styles.skip}>Skip</Text>
                    </TouchableOpacity>

                    <View style={{ marginHorizontal: 15, marginTop: 30, rowGap: 35 }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.entrCode}>Enter Code</Text>
                        </View>

                        {/* input otp */}
                        <View style={styles.inputWrap}>
                            {/* box1 */}
                            <View style={[styles.inputGrp, { borderColor: focusedBox === "box1" ? "#3C3D6C" : "#CDCDCD" }]}>
                                <TextInput
                                    ref={box1Ref}
                                    style={styles.inputBox}
                                    value={otp.box1}
                                    onFocus={() => { box1Ref.current.focus(); setFocusedBox("box1") }}
                                    onBlur={() => setFocusedBox(null)}
                                    onChangeText={(value) => { handleTextChange(value, box1Ref, box2Ref); setOtp({ ...otp, box1: value }) }}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                />
                            </View>

                            {/* box2 */}
                            <View style={[styles.inputGrp, { borderColor: focusedBox === "box2" ? "#3C3D6C" : "#CDCDCD" }]}>
                                <TextInput
                                    ref={box2Ref}
                                    style={styles.inputBox}
                                    value={otp.box2}
                                    onFocus={() => { box2Ref.current.focus(); setFocusedBox("box2") }}
                                    onBlur={() => setFocusedBox(null)}
                                    onChangeText={(value) => { handleTextChange(value, box2Ref, box3Ref, box1Ref); setOtp({ ...otp, box2: value }) }}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                />
                            </View>

                            {/* box3 */}
                            <View style={[styles.inputGrp, { borderColor: focusedBox === "box3" ? "#3C3D6C" : "#CDCDCD" }]}>
                                <TextInput
                                    ref={box3Ref}
                                    style={styles.inputBox}
                                    value={otp.box3}
                                    onFocus={() => { box3Ref.current.focus(); setFocusedBox("box3") }}
                                    onBlur={() => setFocusedBox(null)}
                                    onChangeText={(value) => { handleTextChange(value, box3Ref, box4Ref, box2Ref); setOtp({ ...otp, box3: value }) }}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                />
                            </View>

                            {/* box4 */}
                            <View style={[styles.inputGrp, { borderColor: focusedBox === "box4" ? "#3C3D6C" : "#CDCDCD" }]}>
                                <TextInput
                                    ref={box4Ref}
                                    style={styles.inputBox}
                                    value={otp.box4}
                                    onFocus={() => { box4Ref.current.focus(); setFocusedBox("box4") }}
                                    onBlur={() => setFocusedBox(null)}
                                    onChangeText={(value) => { handleTextChange(value, box4Ref, box5Ref, box3Ref); setOtp({ ...otp, box4: value }) }}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                />
                            </View>

                            {/* box5 */}
                            <View style={[styles.inputGrp, { borderColor: focusedBox === "box5" ? "#3C3D6C" : "#CDCDCD" }]}>
                                <TextInput
                                    ref={box5Ref}
                                    style={styles.inputBox}
                                    value={otp.box5}
                                    onFocus={() => { box5Ref.current.focus(); setFocusedBox("box5") }}
                                    onBlur={() => setFocusedBox(null)}
                                    onChangeText={(value) => { handleTextChange(value, box5Ref, null, box4Ref); setOtp({ ...otp, box5: value }) }}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                />
                            </View>
                        </View>

                        {/* note */}
                        <View>
                            <Text style={styles.note}>
                                We've sent an SMS with an activation code to your phone <Text style={{ color: black }}>+55 47 9 9991 5060</Text>
                            </Text>
                        </View>

                        {/* send code again */}
                        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity
                                disabled={timeLeft === "00:00" ? false : true}
                                onPress={() => Alert.alert("send Again")}
                            >
                                <Text style={styles.note}>Send code again</Text>
                            </TouchableOpacity>

                            {timeLeft !== "00:00" && <Text style={styles.note}> {timeLeft}</Text>}
                        </View>

                        {/* continue button */}
                        <TouchableOpacity
                            style={styles.solidBtn}
                            onPress={() => submitOTP()}
                        >
                            <Text style={styles.solidBtnTxt}>continue</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ValidateOTP;

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
    entrCode: {
        fontSize: 22,
        fontFamily: "LondonBetween",
        color: white,
    },
    inputWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    inputGrp: {
        backgroundColor: "#9092EF",
        borderRadius: 10,
        width: (_Width - 80) / 5,
        borderWidth: 1.4,
    },
    inputBox: {
        borderRadius: 10,
        height: (_Width - 60) / 5,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: "NunitoSans_10pt-Bold",
        color: white,
    },
    note: {
        fontFamily: "NunitoSans_10pt-Medium",
        fontSize: 16,
        color: white,
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
});