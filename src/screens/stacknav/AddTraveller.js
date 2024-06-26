import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import icon from '../../config/IconAssets';
import { b1, b3, blue, white } from '../../config/colors';
import commonStyles from '../../assets/css/CommonFonts';

const AddTraveller = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#EFF2F7" }}>
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
                <View style={styles.tdetailsContainer}>
                    <View style={styles.headWrap}>
                        <Text style={[commonStyles.ns700, { fontSize: 15 }]}>TRAVELLER DETAILS</Text>
                    </View>

                    {/* button */}
                    <View style={styles.btnWrap}>
                        <TouchableOpacity
                            style={styles.btnAct}
                        >
                            <Text style={[commonStyles.ns400, { fontSize: 15, color: white }]}>Personal</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                        >
                            <Text style={[commonStyles.ns400, { fontSize: 15, color: b3 }]}>Business</Text>
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
                </View>

                {/* proceed button */}
                <View style={{ alignItems: "center", marginBottom: 25 }}>
                    <TouchableOpacity
                        style={styles.continue}
                    >
                        <Text style={{ color: white, fontSize: 18, fontFamily: "LondonTwo" }}>
                            Proceed
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default AddTraveller;

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 60 : 45,
        rowGap: 30
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
        flex: 1,
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
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderWidth: 1,
        borderColor: "#D8D8D8",
    },
    btnAct: {
        paddingHorizontal: 30,
        paddingVertical: 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: blue,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        borderWidth: 1,
        borderColor: blue,
    },
    noteWrap: {
        backgroundColor: "rgba(33,180,226, 0.1)",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        marginHorizontal: 10,
        columnGap: 20,
    }
});