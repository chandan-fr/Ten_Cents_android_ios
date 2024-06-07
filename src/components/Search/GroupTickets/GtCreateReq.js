import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const GtCreateReq = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.1} />
            <Header />

            <View style={styles.body}>
                <View style={{ flex: 1 }}>
                    <ScrollView
                        style={{ marginHorizontal: 5, marginTop: 5 }}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ paddingVertical: 5, rowGap: 10 }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: 'center' }]}>
                                Create Request
                            </Text>

                            <View style={styles.comWrapEp}>
                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Basic Information
                                </Text>

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

                                {/* 1st inputs */}
                                <View style={styles.inputGrp}>
                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Group Name *"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Tour Name *"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Corporate Name *"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Corporate Code *"}
                                        placeholderTextColor={b1}
                                    />
                                </View>

                                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                                    Itinerary Information
                                </Text>

                                <Text style={[commonStyles.ns600]}>
                                    Please Select Trip Type
                                </Text>

                                {/* trip types */}
                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8, flexWrap: "wrap" }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                                        <TouchableOpacity>
                                            <View style={styles.circle} />
                                        </TouchableOpacity>

                                        <Text style={commonStyles.ns400}>
                                            Round Trip
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                                        <TouchableOpacity>
                                            <View style={styles.circle} />
                                        </TouchableOpacity>

                                        <Text style={commonStyles.ns400}>
                                            One way
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                                        <TouchableOpacity>
                                            <View style={styles.circle} />
                                        </TouchableOpacity>

                                        <Text style={commonStyles.ns400}>
                                            Multiple
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                                        <TouchableOpacity>
                                            <View style={styles.circle} />
                                        </TouchableOpacity>

                                        <Text style={commonStyles.ns400}>
                                            Flexible dates
                                        </Text>
                                    </View>
                                </View>

                                {/* journey details */}
                                <View style={styles.inputGrp}>
                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"From"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"To"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Class"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Departure Date"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Flight Number"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Flight Time"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Time Duration"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Arrival Date"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Flight Number"}
                                        placeholderTextColor={b1}
                                    />
                                </View>

                                <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                                    General Information
                                </Text>

                                {/* no of travellers */}
                                <View style={styles.inputGrp}>
                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Number of Adult*"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Number of Child*"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Number of Infant*"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Group Size"}
                                        placeholderTextColor={b1}
                                    />

                                    <TextInput
                                        style={[styles.inputBox, commonStyles.ns400]}
                                        placeholder={"Expected Fare per Pax*"}
                                        placeholderTextColor={b1}
                                    />
                                </View>

                                {/* submit */}
                                <View style={{ width: width * 0.75, }}>
                                    <TouchableOpacity
                                        style={styles.btn}
                                        onPress={() => navigation.popToTop("tab")}
                                    >
                                        <Text style={[commonStyles.lbB1, { fontSize: 26, color: white }]}>
                                            Submit
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* proceed */}
                {/* <View style={{ backgroundColor: b1, alignItems: "center", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 10, flexDirection: "row" }}>
                    <View style={{ rowGap: 3 }}>
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
                            Price
                        </Text>
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
                            $1320 + Taxes
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 150, alignItems: "center", justifyContent: "center", paddingVertical: 8 }}
                        onPress={() => navigation.navigate("hotelps")}
                    >
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
                            proceed
                        </Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </SafeAreaView>
    )
};

export default GtCreateReq;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 18,
        flex: 1,
        backgroundColor: "#EFF2F7",
    },
    comWrapEp: {
        backgroundColor: white,
        paddingVertical: 20,
        borderRadius: 8,
        elevation: 3,
        rowGap: 20,
        paddingHorizontal: 10,
    },
    btn: {
        borderRadius: 20,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        elevation: 3,
    },
    info: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#D8D8D8",
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 10,
        paddingLeft: 15,
        marginRight: 20
    },
    inputGrp: {
        rowGap: 6,
        width: width * 0.75,
    },
    inputBox: {
        backgroundColor: white,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        paddingLeft: 8,
        height: 40,
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: blue,
    },
});