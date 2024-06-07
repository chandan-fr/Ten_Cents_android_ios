import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, b3, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import ModifyCarSearch from './ModifyCarSearch';

const { width, height } = Dimensions.get("window");

const CarSearch = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.34} />
            <Header />

            <View style={styles.body}>
                {/* modifier */}
                <View style={[styles.tDetails, { zIndex: 1 }]}>
                    <ModifyCarSearch navigation={navigation} />
                </View>

                <View style={{ flex: 1, marginTop: 15 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ rowGap: 15 }}>
                            {/* car type */}
                            <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <TouchableOpacity style={styles.carType}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 90, height: 52 }}
                                                source={image.car1}
                                            />
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                Small Cars
                                            </Text>

                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                                    $ 560
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 8, alignSelf: "flex-start", top: 1 }]}>
                                                    .91
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                            <View style={styles.seatWrap}>
                                                <Image
                                                    style={{ width: 12, height: 12, tintColor: blue }}
                                                    source={icon.seat}
                                                />
                                            </View>

                                            <Text style={[commonStyles.ns600, { fontSize: 12, color: b3 }]}>
                                                4
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.carType}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 90, height: 52 }}
                                                source={image.car3}
                                            />
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                Standard
                                            </Text>

                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                                    $ 560
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 8, alignSelf: "flex-start", top: 1 }]}>
                                                    .91
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                            <View style={styles.seatWrap}>
                                                <Image
                                                    style={{ width: 12, height: 12, tintColor: blue }}
                                                    source={icon.seat}
                                                />
                                            </View>

                                            <Text style={[commonStyles.ns600, { fontSize: 12, color: b3 }]}>
                                                5
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.carType}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 90, height: 52 }}
                                                source={image.car4}
                                            />
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                Special
                                            </Text>

                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                                    $ 700
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 8, alignSelf: "flex-start", top: 1 }]}>
                                                    .91
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                            <View style={styles.seatWrap}>
                                                <Image
                                                    style={{ width: 12, height: 12, tintColor: blue }}
                                                    source={icon.seat}
                                                />
                                            </View>

                                            <Text style={[commonStyles.ns600, { fontSize: 12, color: b3 }]}>
                                                5
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[styles.carType, { marginRight: 0 }]}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 90, height: 52 }}
                                                source={image.car2}
                                            />
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                Small Cars
                                            </Text>

                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                                                    $ 700
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 8, alignSelf: "flex-start", top: 1 }]}>
                                                    .91
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                            <View style={styles.seatWrap}>
                                                <Image
                                                    style={{ width: 12, height: 12, tintColor: blue }}
                                                    source={icon.seat}
                                                />
                                            </View>

                                            <Text style={[commonStyles.ns600, { fontSize: 12, color: b3 }]}>
                                                6
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>

                            {/* car items */}
                            <View style={{ marginHorizontal: 8, borderRadius: 8, rowGap: 10 }}>
                                <View style={styles.carItem}>
                                    {/* car name & desp */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                                        <View style={{ flex: 2, rowGap: 10 }}>
                                            <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                                                Economy ALAMO Car
                                            </Text>

                                            <Text style={commonStyles.ns400}>
                                                Chevrolet Spark Or Similar
                                            </Text>
                                        </View>

                                        <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                                            <Image
                                                style={{ width: 90, height: 52 }}
                                                source={image.car1}
                                            />
                                        </View>
                                    </View>

                                    {/* car perks */}
                                    <View style={styles.carPerks}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.speedometer}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                Unlimited mileage
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.plane}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                At Airport
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.airConditioner}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                Air Conditioner
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.gearshift}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                Automatic
                                            </Text>
                                        </View>
                                    </View>

                                    {/* price & book */}
                                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                                                    USD 500
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                                                    .99
                                                </Text>
                                            </View>

                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                Per Day
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.btn}
                                            onPress={() => navigation.navigate("cardetails")}
                                        >
                                            <Text style={[commonStyles.lbB1, { color: white }]}>
                                                Book
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.dottedLine} />

                                    {/* bottom part */}
                                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                                        <View>
                                            <Image
                                                style={{}}
                                                source={image.alamo}
                                            />
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                                <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                                                    <Image
                                                        style={{ width: 25, height: 25, tintColor: blue }}
                                                        source={icon.baggage}
                                                    />
                                                </View>

                                                <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                                                    2 Bags
                                                </Text>
                                            </View>

                                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                                <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                                                    <Image
                                                        style={{ width: 20, height: 20, tintColor: blue }}
                                                        source={icon.seat}
                                                    />
                                                </View>

                                                <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                                                    4 Seats
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.carItem}>
                                    {/* car name & desp */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                                        <View style={{ flex: 2, rowGap: 10 }}>
                                            <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                                                Compact
                                            </Text>

                                            <Text style={commonStyles.ns400}>
                                                Nissan Versa Or Similar
                                            </Text>
                                        </View>

                                        <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                                            <Image
                                                style={{ width: 90, height: 52 }}
                                                source={image.car2}
                                            />
                                        </View>
                                    </View>

                                    {/* car perks */}
                                    <View style={styles.carPerks}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.speedometer}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                Unlimited mileage
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.plane}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                At Airport
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.airConditioner}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                Air Conditioner
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.gearshift}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                Automatic
                                            </Text>
                                        </View>
                                    </View>

                                    {/* price & book */}
                                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                                                    USD 500
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                                                    .99
                                                </Text>
                                            </View>

                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                Per Day
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.btn}
                                            onPress={() => navigation.navigate("cardetails")}
                                        >
                                            <Text style={[commonStyles.lbB1, { color: white }]}>
                                                Book
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.dottedLine} />

                                    {/* bottom part */}
                                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                                        <View>
                                            <Image
                                                style={{}}
                                                source={image.alamo}
                                            />
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                                <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                                                    <Image
                                                        style={{ width: 25, height: 25, tintColor: blue }}
                                                        source={icon.baggage}
                                                    />
                                                </View>

                                                <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                                                    2 Bags
                                                </Text>
                                            </View>

                                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                                <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                                                    <Image
                                                        style={{ width: 20, height: 20, tintColor: blue }}
                                                        source={icon.seat}
                                                    />
                                                </View>

                                                <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                                                    4 Seats
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.carItem}>
                                    {/* car name & desp */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                                        <View style={{ flex: 2, rowGap: 10 }}>
                                            <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                                                Economy ALAMO Car
                                            </Text>

                                            <Text style={commonStyles.ns400}>
                                                Chevrolet Spark Or Similar
                                            </Text>
                                        </View>

                                        <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                                            <Image
                                                style={{ width: 90, height: 52 }}
                                                source={image.car3}
                                            />
                                        </View>
                                    </View>

                                    {/* car perks */}
                                    <View style={styles.carPerks}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.speedometer}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                Unlimited mileage
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.plane}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                At Airport
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.airConditioner}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                Air Conditioner
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                                            <Image
                                                style={{ width: 15, height: 15, tintColor: blue }}
                                                source={icon.gearshift}
                                            />

                                            <Text style={commonStyles.ns400}>
                                                Automatic
                                            </Text>
                                        </View>
                                    </View>

                                    {/* price & book */}
                                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                                                    USD 500
                                                </Text>
                                                <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                                                    .99
                                                </Text>
                                            </View>

                                            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                                                Per Day
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.btn}
                                            onPress={() => navigation.navigate("cardetails")}
                                        >
                                            <Text style={[commonStyles.lbB1, { color: white }]}>
                                                Book
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.dottedLine} />

                                    {/* bottom part */}
                                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                                        <View>
                                            <Image
                                                style={{}}
                                                source={image.alamo}
                                            />
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                                <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                                                    <Image
                                                        style={{ width: 25, height: 25, tintColor: blue }}
                                                        source={icon.baggage}
                                                    />
                                                </View>

                                                <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                                                    2 Bags
                                                </Text>
                                            </View>

                                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                                <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                                                    <Image
                                                        style={{ width: 20, height: 20, tintColor: blue }}
                                                        source={icon.seat}
                                                    />
                                                </View>

                                                <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                                                    4 Seats
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* botttom filter */}
                <View style={{ backgroundColor: b1, alignItems: "flex-end", justifyContent: "center", paddingVertical: 8, paddingHorizontal: 10 }}>
                    <TouchableOpacity
                        style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 120, alignItems: "center", justifyContent: "center", paddingVertical: 8, flexDirection: "row", columnGap: 10 }}
                        onPress={() => navigation.navigate("carfilter")}
                    >
                        <Image
                            style={{ width: 15, height: 15, tintColor: blue }}
                            source={icon.filters}
                        />
                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
                            Filter
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default CarSearch;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 25,
        flex: 1,
    },
    tDetails: {
        backgroundColor: "#FFFEFE",
        borderRadius: 8,
        elevation: 4,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    carType: {
        borderRadius: 2,
        elevation: 3,
        backgroundColor: white,
        paddingVertical: 10,
        width: 130,
        rowGap: 10,
        marginRight: 10,
        paddingHorizontal: 1,
    },
    seatWrap: {
        backgroundColor: "rgba(33, 180, 226, 0.1)",
        borderRadius: 22,
        width: 22,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carItem: {
        backgroundColor: white,
        elevation: 3,
        paddingTop: 15,
        borderRadius: 8,
    },
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 40,
        marginRight: 10,
    },
    dottedLine: {
        borderColor: b3,
        borderWidth: 1,
        marginVertical: 10,
        borderStyle: "dashed",
    },
    carPerks: {
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop: 15,
        justifyContent: "space-between",
        rowGap: 10,
        marginLeft: 15,
        width: 250,
    },
});