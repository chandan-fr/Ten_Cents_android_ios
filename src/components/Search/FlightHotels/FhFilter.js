import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import { b2, blue, white } from '../../../config/colors';

const FhFilter = ({ navigation }) => {
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
                        Filter
                    </Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20, flex: 1 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ width: "75%", marginLeft: 15 }}
                    >
                        <View style={styles.filterWrap}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                    Popular Filters
                                </Text>

                                {/* Popular Filters options */}
                                <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Hotel
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>174</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Refundable properties
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>93</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Homes and Apartment
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>17</Text>
                                    </View>

                                    <View style={{ marginVertical: 8 }} />

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                5 Star Rating
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>86</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Guest Rating 9+
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>70</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                5 stars
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>3</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Calgary Stampede
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>21</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Downtown Calgary
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>45</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.hr} />

                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                    Property rating
                                </Text>
                                <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                    Includes stars and other ratings
                                </Text>

                                {/* Popular Filters options */}
                                <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                2 stars
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>10</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                3 stars
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>62</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                4 stars
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>80</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                5 stars
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>3</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Unrated
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>35</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.hr} />

                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                                    Hotel Amenities
                                </Text>

                                {/* Popular Filters options */}
                                <View style={{ rowGap: 10, paddingVertical: 10, marginTop: 8 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Restaurant
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>85</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Indoor pool
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>57</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Fitness
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>57</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Hot tub/Jacuzzi
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>48</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.tick}>
                                                <Image
                                                    style={styles.tickImg}
                                                    source={icon.check}
                                                />
                                            </TouchableOpacity>

                                            <Text style={[commonStyles.ns600, { marginLeft: 15 }]}>
                                                Bar
                                            </Text>
                                        </View>

                                        <Text style={commonStyles.ns600}>35</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* bottom */}
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                    <TouchableOpacity
                        style={styles.apply}
                    >
                        <Text style={[commonStyles.lbB1, { color: white, textTransform: 'uppercase' }]}>
                            Apply
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.clear}
                    >
                        <Text style={[commonStyles.lbB1, { color: b2, textTransform: 'uppercase' }]}>
                            CLEAR ALL FILTERS
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default FhFilter;

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        marginLeft: 13,
    },
    filterWrap: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#D8D8D8",
        paddingVertical: 15,
        marginBottom: 5,
    },
    hr: {
        backgroundColor: "#D8D8D8",
        height: 1,
        marginVertical: 10,
    },
    tick: {
        backgroundColor: blue,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    tickImg: {
        width: 12,
        height: 12,
        tintColor: white,
    },
    apply: {
        borderRadius: 8,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 40,
    },
    clear: {
        borderRadius: 8,
        borderColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2
    },
});