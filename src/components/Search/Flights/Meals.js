import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, blue } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const Meals = ({ width }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* recomended */}
                <View style={styles.commonWrap}>
                    <Text style={[styles.ns600, { fontSize: 18, marginTop: 20, }]}>Recommended</Text>
                    <View style={{ flexDirection: "row", alignItems: "flex-start", marginTop: 10, justifyContent: 'space-between' }}>
                        <View style={{ width: (width / 2) - 28, paddingBottom: 15, minHeight: 225 }}>
                            <Image
                                style={{ width: (width / 2) - 28 }}
                                resizeMode='stretch'
                                source={icon.food1}
                            />

                            <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                                <Image
                                    style={{ width: 18, height: 18 }}
                                    source={icon.veg}
                                />

                                <Text style={[styles.ns600, { fontSize: 14, marginLeft: 7 }]}>
                                    Cucumber Tomato Cheese
                                    and Lettuce Sandwich
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: 10, justifyContent: 'space-between'
                                }}
                            >
                                <Text style={[styles.ns700, { marginLeft: 25 }]}>$ 120</Text>

                                <TouchableOpacity style={styles.add}>
                                    <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: (width / 2) - 28, paddingBottom: 15, minHeight: 225 }}>
                            <Image
                                style={{ width: (width / 2) - 28 }}
                                resizeMode='stretch'
                                source={icon.food2}
                            />

                            <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                                <Image
                                    style={{ width: 18, height: 18 }}
                                    source={icon.nonveg}
                                />

                                <Text style={[styles.ns600, { fontSize: 14, marginLeft: 7 }]}>
                                    Chicken Junglee Sandwich
                                    + beverage
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: 10, justifyContent: 'space-between'
                                }}
                            >
                                <Text style={[styles.ns700, { marginLeft: 25 }]}>$ 180</Text>

                                <TouchableOpacity style={styles.add}>
                                    <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* meal item */}
                <View style={[styles.commonWrap, { marginTop: 10, rowGap: 20, paddingVertical: 20 }]}>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                        <View style={{ flex: 1.3 }}>
                            <Text style={[styles.ns600]}>Low calorie veg meal + beverage</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row", flex: 1, alignItems: 'center',
                                justifyContent: "flex-end"
                            }}
                        >
                            <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                                $ 180
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
                            <Text style={[styles.ns600]}>
                                Diabetic veg meal +
                                beverage
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row", flex: 1, alignItems: 'center',
                                justifyContent: "flex-end"
                            }}
                        >
                            <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                                $ 180
                            </Text>

                            <TouchableOpacity style={styles.add}>
                                <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                        <View style={{ flex: 1.3 }}>
                            <Text style={[styles.ns600]}>
                                Vegan meal + beverage
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row", flex: 1, alignItems: 'center',
                                justifyContent: "flex-end"
                            }}
                        >
                            <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                                $ 180
                            </Text>

                            <TouchableOpacity style={styles.add}>
                                <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                        <View style={{ flex: 1.3 }}>
                            <Text style={[styles.ns600]}>
                                6E Eats choice of the day(veg) +
                                beverage
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row", flex: 1, alignItems: 'center',
                                justifyContent: "flex-end"
                            }}
                        >
                            <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                                $ 180
                            </Text>

                            <TouchableOpacity style={styles.add}>
                                <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                        <View style={{ flex: 1.3 }}>
                            <Text style={[styles.ns600]}>
                                Regional favourite(veg) +
                                beverage
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row", flex: 1, alignItems: 'center',
                                justifyContent: "flex-end"
                            }}
                        >
                            <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                                $ 180
                            </Text>

                            <TouchableOpacity style={styles.add}>
                                <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                        <View style={{ flex: 1.3 }}>
                            <Text style={[styles.ns600]}>High calorie veg meal + beverage</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row", flex: 1, alignItems: 'center',
                                justifyContent: "flex-end"
                            }}
                        >
                            <Text style={[styles.ns700, { marginLeft: 25, fontSize: 17, marginRight: 20 }]}>
                                $ 180
                            </Text>

                            <TouchableOpacity style={styles.add}>
                                <Text style={[styles.ns600, { color: blue }]}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default Meals;

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