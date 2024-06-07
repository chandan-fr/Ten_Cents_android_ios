import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Alert } from 'react-native'
import React from 'react'
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, blue, white } from '../../../config/colors';

const HpAssistance = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
            <StatusBar translucent={true} barStyle={"dark-content"} />
            <View style={{ flex: 1, marginTop: 45 }}>
                {/* nav */}
                <TouchableOpacity
                    style={styles.nav}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{ width: 22, height: 22, marginRight: 10 }}
                        source={icon.next}
                    />

                    <Text style={[commonStyles.ns600, { fontSize: 20, textTransform: "uppercase" }]}>
                        ASSISTANCE
                    </Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20, flex: 1, marginHorizontal: 15 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={[commonStyles.ns400, { textAlign: "center" }]}>
                            Get in touch with us
                        </Text>

                        <View style={{ borderWidth: 1, marginTop: 12, borderColor: "#D9D9D9", borderRadius: 4, rowGap: 8, paddingVertical: 15, paddingHorizontal: 25 }}>
                            <View style={{ rowGap: 8 }}>
                                <Text style={[commonStyles.ns400, { textTransform: "uppercase" }]}>
                                    Destination
                                </Text>

                                <TextInput
                                    style={styles.inputBox}
                                />
                            </View>

                            <View style={{ rowGap: 8 }}>
                                <Text style={[commonStyles.ns400, { textTransform: "uppercase" }]}>
                                    Departure City
                                </Text>

                                <TextInput
                                    style={styles.inputBox}
                                />
                            </View>

                            <View style={{ rowGap: 8 }}>
                                <Text style={[commonStyles.ns400, { textTransform: "uppercase" }]}>
                                    Name
                                </Text>

                                <TextInput
                                    style={styles.inputBox}
                                />
                            </View>

                            <View style={{ rowGap: 8 }}>
                                <Text style={[commonStyles.ns400, { textTransform: "uppercase" }]}>
                                    Phone
                                </Text>

                                <TextInput
                                    style={styles.inputBox}
                                />
                            </View>

                            <View style={{ rowGap: 8 }}>
                                <Text style={[commonStyles.ns400, { textTransform: "uppercase" }]}>
                                    Email ID
                                </Text>

                                <TextInput
                                    style={styles.inputBox}
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 15, columnGap: 8, flexDirection: "row", alignItems: "flex-start" }}>
                            <TouchableOpacity>
                                <View style={styles.circle} />
                            </TouchableOpacity>

                            <Text style={styles.dcltn}>
                                I have read and agree to the
                                <Text onPress={() => Alert.alert("User Agreement")} style={[styles.dcltn, { color: "#008CFF" }]}> User Agreement </Text>
                                &
                                <Text onPress={() => Alert.alert("Privacy Policy")} style={[styles.dcltn, { color: "#008CFF" }]}> Privacy Policy</Text>
                            </Text>
                        </View>

                        <View style={{ marginTop: 15, alignItems: 'center' }}>
                            <TouchableOpacity
                                style={styles.btn}
                            >
                                <Text style={{ fontSize: 18, color: white, fontFamily: "Lato-Regular" }}>
                                    Get a Callback
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontSize: 13, color: b1, fontFamily: "Lato-Regular" }}>
                                750+ Travel Experts | 40 Lac+ Travelers | 65+ Destinations
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView >
    )
};

export default HpAssistance;

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "flex-start",
        marginLeft: 13,
    },
    inputBox: {
        borderWidth: 1,
        borderRadius: 3.6,
        borderColor: blue,
        backgroundColor: white,
        paddingLeft: 10,
    },
    circle: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: blue,
        borderRadius: 10,
    },
    dcltn: {
        fontFamily: "Lato-Regular",
        fontSize: 12,
        color: b1,
    },
    btn: {
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
});