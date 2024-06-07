import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { b1, b2, white } from '../../config/colors';
import BgGradient from '../../utility/BgGradient';
import Header from '../Header';
import commonStyles from '../../assets/css/CommonFonts';
import icon from '../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const MyDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height} />
            <Header />

            <View style={styles.body}>
                {/* heading */}
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={commonStyles.lbB1}>
                        My Details
                    </Text>
                </View>

                <View style={{ flex: 1, marginTop: 10 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingVertical: 5, rowGap: 10 }}>
                            {/* info */}
                            <View style={styles.info}>
                                <Image
                                    style={{ width: 20, height: 20, marginRight: 15 }}
                                    source={icon.info}
                                />
                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                    Almost done! Just fill in the required info
                                </Text>
                            </View>

                            <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                                {/* sign in info */}
                                <View style={{ marginHorizontal: 12, marginTop: 10 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 14, textAlign: "center" }]}>
                                        Sign In Info
                                    </Text>

                                    <View style={styles.inputGrp}>
                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"E-mail Id *"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Password *"}
                                            placeholderTextColor={b1}
                                        />
                                    </View>
                                </View>

                                {/* personal info */}
                                <View style={{ marginHorizontal: 12, marginTop: 15 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 14, textAlign: "center" }]}>
                                        Personal Info
                                    </Text>

                                    <View style={styles.inputGrp}>
                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"First Name *"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Last Name *"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"E-mail Address *"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Date of Birth*"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Gender*"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Passport No.*"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Date of Issue*"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Expiry Date*"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Place of Issue*"}
                                            placeholderTextColor={b1}
                                        />
                                    </View>
                                </View>

                                {/* billing info */}
                                <View style={{ marginHorizontal: 12, marginTop: 10 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 14, textAlign: "center" }]}>
                                        Billing Info
                                    </Text>

                                    <View style={styles.inputGrp}>
                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Address *"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"City*"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Zipcode*"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Country/ Region*"}
                                            placeholderTextColor={b1}
                                        />

                                        <TextInput
                                            style={[styles.inputBox, commonStyles.ns400]}
                                            placeholder={"Mobile Number*"}
                                            placeholderTextColor={b1}
                                        />
                                    </View>
                                </View>
                            </View>

                            {/* save */}
                            <View style={{ alignItems: "center", marginTop: 20 }}>
                                <TouchableOpacity
                                    style={styles.btn}>
                                    <Text style={[commonStyles.lbB1, { fontSize: 14, color: white, textTransform: 'uppercase' }]}>
                                        Save
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default MyDetails;

const styles = StyleSheet.create({
    parent: { flex: 1 },
    body: {
        marginTop: 25,
        backgroundColor: "#F4F4F4",
        marginHorizontal: 4,
        borderRadius: 8,
        elevation: 3,
        minHeight: height * 0.7,
        flex: 1,
    },
    info: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#D8D8D8",
        backgroundColor: "#F5F5F5",
        marginHorizontal: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10,
    },
    inputGrp: {
        rowGap: 10,
        marginTop: 15,
    },
    inputBox: {
        backgroundColor: white,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        paddingLeft: 8,
    },
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 25,
    },
});