import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, blue } from '../../../config/colors';

const Extras = ({ width }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.commonWrap, { rowGap: 20, paddingVertical: 20 }]}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                    <View style={{ flex: 1.3 }}>
                        <Text style={[styles.ns600]}>5 KG</Text>
                        <Text style={[styles.ns600, { fontSize: 13 }]}>Extra baggage 5 KG</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row", flex: 1, alignItems: 'center',
                            justifyContent: "flex-end"
                        }}
                    >
                        <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                            $ 120
                        </Text>

                        <View style={styles.incDecBtn}>
                            <TouchableOpacity style={{ padding: 4 }}>
                                <Text style={[styles.ns600, { color: blue }]}>-</Text>
                            </TouchableOpacity>

                            <Text style={[styles.ns600, { color: blue, marginHorizontal: 10 }]}>1</Text>

                            <TouchableOpacity style={{ padding: 4 }}>
                                <Text style={[styles.ns600, { color: blue }]}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                    <View style={{ flex: 1.3 }}>
                        <Text style={[styles.ns600]}>10 KG</Text>
                        <Text style={[styles.ns600, { fontSize: 13 }]}>Extra baggage 10 KG</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row", flex: 1, alignItems: 'center',
                            justifyContent: "flex-end"
                        }}
                    >
                        <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                            $ 120
                        </Text>

                        <TouchableOpacity style={styles.add}>
                            <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                    <View style={{ flex: 1.3 }}>
                        <Text style={[styles.ns600]}>15 KG</Text>
                        <Text style={[styles.ns600, { fontSize: 13 }]}>Extra baggage 15 KG</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row", flex: 1, alignItems: 'center',
                            justifyContent: "flex-end"
                        }}
                    >
                        <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                            $ 120
                        </Text>

                        <TouchableOpacity style={styles.add}>
                            <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                    <View style={{ flex: 1.3 }}>
                        <Text style={[styles.ns600]}>20 KG</Text>
                        <Text style={[styles.ns600, { fontSize: 13 }]}>Extra baggage 20 KG</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row", flex: 1, alignItems: 'center',
                            justifyContent: "flex-end"
                        }}
                    >
                        <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                            $ 120
                        </Text>

                        <TouchableOpacity style={styles.add}>
                            <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                    <View style={{ flex: 1.3 }}>
                        <Text style={[styles.ns600]}>30 KG</Text>
                        <Text style={[styles.ns600, { fontSize: 13 }]}>Extra baggage 30 KG</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row", flex: 1, alignItems: 'center',
                            justifyContent: "flex-end"
                        }}
                    >
                        <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                            $ 120
                        </Text>

                        <TouchableOpacity style={styles.add}>
                            <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default Extras;

const styles = StyleSheet.create({
    ns600: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        color: b1,
        fontSize: 16,
    },
    ns700: {
        fontFamily: "NunitoSans_10pt-Bold",
        color: b1,
        fontSize: 18,
    },
    commonWrap: {
        marginHorizontal: 6,
        backgroundColor: "#FDFDFD",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        elevation: 3,
        marginTop: 4,
        paddingHorizontal: 15,
    },
    add: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        borderWidth: 0.7,
        borderColor: blue,
        paddingHorizontal: 15,
        paddingVertical: 4,
    },
    incDecBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: 0.7,
        borderColor: blue,
    },
});