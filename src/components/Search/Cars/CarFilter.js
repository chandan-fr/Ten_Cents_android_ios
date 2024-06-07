import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import { b2, blue, white } from '../../../config/colors';


const CarFilter = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                        Filter
                    </Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20, flex: 1 }}>
                    <ScrollView
                        style={{ marginLeft: 15, marginRight: 60, flex: 1, marginBottom: 10 }}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ rowGap: 20 }}>
                            <View style={{ rowGap: 16 }}>
                                {/* car seat */}
                                <View style={{ rowGap: 10 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 18 }]}>Car Seating</Text>

                                    <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 20 }}>
                                        <TouchableOpacity
                                            style={styles.btnLrgActive}
                                        >
                                            <Text style={[commonStyles.ns400, { color: white }]}>
                                                4+
                                            </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.btnLrg}
                                        >
                                            <Text style={[commonStyles.ns400, { color: b2 }]}>
                                                6+
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* trunk space */}
                                <View style={{ rowGap: 10 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 18 }]}>Trunk Space(Bags)</Text>

                                    <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 20 }}>
                                        <TouchableOpacity
                                            style={styles.btnLrgActive}
                                        >
                                            <Text style={[commonStyles.ns400, { color: white }]}>
                                                1+
                                            </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.btnLrg}
                                        >
                                            <Text style={[commonStyles.ns400, { color: b2 }]}>
                                                4+
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Doors */}
                                <View style={{ rowGap: 10 }}>
                                    <Text style={[commonStyles.ns600, { fontSize: 18 }]}>Doors</Text>

                                    <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 20 }}>
                                        <TouchableOpacity
                                            style={styles.btnSmlActive}
                                        >
                                            <Text style={[commonStyles.ns400, { color: white }]}>
                                                1+
                                            </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.btnSml}
                                        >
                                            <Text style={[commonStyles.ns400, { color: b2 }]}>
                                                2+
                                            </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.btnSml}
                                        >
                                            <Text style={[commonStyles.ns400, { color: b2 }]}>
                                                4+
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            {/* Total Car Budget */}
                            <View style={{ rowGap: 10 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>Total Car Budget</Text>

                                <View style={{ rowGap: 7 }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                                        <TouchableOpacity style={styles.tick}>
                                            <Image
                                                style={styles.tickImg}
                                                source={icon.check}
                                            />
                                        </TouchableOpacity>

                                        <Text style={commonStyles.ns600}>$560 - $1060</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                        <TouchableOpacity>
                                            <View style={styles.circle} />
                                        </TouchableOpacity>

                                        <Text style={commonStyles.ns600}>$1061 - $1560</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                        <TouchableOpacity>
                                            <View style={styles.circle} />
                                        </TouchableOpacity>

                                        <Text style={commonStyles.ns600}>$1561 - $2060</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                        <TouchableOpacity>
                                            <View style={styles.circle} />
                                        </TouchableOpacity>

                                        <Text style={commonStyles.ns600}>$2060+</Text>
                                    </View>
                                </View>
                            </View>

                            {/* Rental Car Company */}
                            <View style={{ rowGap: 10 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>Rental Car Company</Text>

                                <View style={{ rowGap: 7, marginRight: 20 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { width: 150 }]}>Select All</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>174</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                            <TouchableOpacity>
                                                <View style={styles.circle} />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns400, { fontSize: 16, width: 150 }]}>Thrift</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>93</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                            <TouchableOpacity>
                                                <View style={styles.circle} />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns400, { fontSize: 16, width: 150 }]}>Enterpri...</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>17</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                            <TouchableOpacity>
                                                <View style={styles.circle} />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns400, { fontSize: 16, width: 150 }]}>Dollar</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>86</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                            <TouchableOpacity>
                                                <View style={styles.circle} />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns400, { fontSize: 16, width: 150 }]}>Alamo</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>70</Text>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10, alignSelf: "flex-start" }}
                                >
                                    <Text style={[commonStyles.ns600, { color: blue }]}>Show more</Text>

                                    <Image
                                        style={{ width: 16, height: 16, tintColor: blue, transform: [{ rotate: "90deg" }] }}
                                        source={icon.rightArrow}
                                    />
                                </TouchableOpacity>
                            </View>

                            {/* Category Group */}
                            <View style={{ rowGap: 10 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>Category Group</Text>

                                <View style={{ rowGap: 7, marginRight: 20 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { width: 150 }]}>Select All</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>174</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                            <TouchableOpacity>
                                                <View style={styles.circle} />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns400, { fontSize: 16, width: 150 }]}>Thrift</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>93</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                            <TouchableOpacity>
                                                <View style={styles.circle} />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns400, { fontSize: 16, width: 150 }]}>Enterpri...</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>17</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                            <TouchableOpacity>
                                                <View style={styles.circle} />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns400, { fontSize: 16, width: 150 }]}>Dollar</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>86</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 15 }}>
                                            <TouchableOpacity>
                                                <View style={styles.circle} />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns400, { fontSize: 16, width: 150 }]}>Alamo</Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>70</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default CarFilter;

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        marginLeft: 13,
    },
    btnLrg: {
        borderRadius: 4,
        paddingHorizontal: 50,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: b2,
    },
    btnSml: {
        borderRadius: 4,
        paddingHorizontal: 27,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: b2,
    },
    btnLrgActive: {
        borderRadius: 4,
        backgroundColor: b2,
        paddingHorizontal: 50,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    btnSmlActive: {
        borderRadius: 4,
        backgroundColor: b2,
        paddingHorizontal: 27,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    tick: {
        backgroundColor: blue,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    tickImg: {
        width: 12,
        height: 12,
        tintColor: white,
    },
    circle: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: blue,
    },
});