import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';
import { b1, b3, white } from '../config/colors';

const SortBottomSheet = ({ sortRef }) => {
    return (
        <RBSheet
            ref={sortRef}
            animationType='slide'
            openDuration={1000}
            closeDuration={300}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
                wrapper: {
                    backgroundColor: "#4C4C4C",
                    opacity: 0.8,
                },
                draggableIcon: {
                    // backgroundColor: "#000",
                    display: "none",
                },
                container: {
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    height: 220,
                    backgroundColor: white,
                }
            }}
        >
            <View style={styles.parent}>
                {/* nav */}
                <View style={styles.navWrap}>
                    <Text style={[styles.ns600, { textTransform: "uppercase" }]}>Sort By</Text>

                    <TouchableOpacity style={styles.cross} onPress={() => sortRef.current.close()}>
                        <Image
                            style={{ width: 20, height: 20, tintColor: b3 }}
                            source={require("../assets/icons/cross.png")}
                        />
                    </TouchableOpacity>
                </View>

                {/* body */}
                <View style={styles.body}>
                    <TouchableOpacity style={styles.sortOptn}>
                        <Text style={styles.ns400}>Price - High To Low</Text>

                        {/* <View style={styles.check}>
                            <Image
                                style={{ width: 10, height: 10, tintColor: white }}
                                source={require("../assets/icons/check.png")}
                            />
                        </View> */}
                    </TouchableOpacity>

                    <View style={{ borderBottomWidth: 1, marginTop: 5, marginBottom: 13, borderColor: b3 }} />

                    <TouchableOpacity style={styles.sortOptn}>
                        <Text style={styles.ns400}>Price - Low To High</Text>

                        <View style={styles.check}>
                            <Image
                                style={{ width: 10, height: 10, tintColor: white }}
                                source={require("../assets/icons/check.png")}
                            />
                        </View>
                    </TouchableOpacity>

                    <View style={{ borderBottomWidth: 1, marginTop: 5, marginBottom: 10, borderColor: b3 }} />
                </View>
            </View>
        </RBSheet>
    )
};

export default SortBottomSheet;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        margin: 20,
    },
    navWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 18,
        color: b1,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 18,
        color: b1,
    },
    cross: {
        backgroundColor: "#D9D9D9",
        padding: 8,
        borderRadius: 100,
    },
    check: {
        backgroundColor: b1,
        padding: 7,
        borderRadius: 100,
        marginRight: 10,
    },
    body: {
        marginTop: 18,
    },
    sortOptn: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 3,
    },
});