import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b3, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import HotelItem from './HotelItem';
import image from '../../../config/ImageAssets';
import ModifyDateForHotel from './ModifyDateForHotel';

const { width, height } = Dimensions.get("window");

const HotelSearches = ({ navigation }) => {
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const [isModify, setIsModify] = useState(false);

    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.62} />
            <Header />

            <View style={styles.body}>
                {/* Travel details */}
                {isModify ?
                    <View style={[styles.tDetails, { zIndex: 1 }]}>
                        <ModifyDateForHotel navigation={navigation} />
                    </View>
                    :
                    <View style={styles.tDetails}>
                        <Text style={[commonStyles.ns400, { color: b3, lineHeight: 20 }]}>Destination</Text>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                            <Text style={[commonStyles.ns400]}>Calgary,  23-25th Dec, 1 Adult</Text>

                            <TouchableOpacity
                                style={{ flexDirection: 'row', alignItems: "center", paddingVertical: 4 }}
                                onPress={() => setIsModify(true)}
                            >
                                <Image
                                    style={{ width: 12, height: 12, tintColor: blue }}
                                    source={icon.pencil}
                                />
                                <Text style={[commonStyles.lbB1, { fontSize: 12, color: blue }]}>Modify Date</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                {/* hotels */}
                <View style={[styles.hotelItemWrap, isModify ? { marginTop: 10 } : { marginTop: -20, }]}>
                    {/* <View style={styles.bgWhite} /> */}

                    <Text style={[commonStyles.ns700, { fontSize: 24, textAlign: "center" }]}>
                        Hotels In Calgary
                    </Text>

                    {/* hotel items */}
                    <View style={{ marginTop: 15, flex: 1, marginHorizontal: 15 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ rowGap: 30 }}>
                                {data.map((_, i) => (
                                    <View key={i}>
                                        <HotelItem navigation={navigation} srcName={"hoteldetails"} />
                                        {i < 1 && <View style={styles.privacy}>
                                            <TouchableOpacity
                                                style={{ alignSelf: 'flex-end' }}
                                            >
                                                <Image
                                                    style={{ width: 18, height: 18 }}
                                                    source={icon.cross}
                                                />
                                            </TouchableOpacity>

                                            <View style={{ flexDirection: "row" }}>
                                                <Image
                                                    style={{}}
                                                    source={image.privacy}
                                                />

                                                <View style={{ rowGap: 6, flex: 1, marginHorizontal: 15 }}>
                                                    <Text style={commonStyles.ns600}>
                                                        Looking for a space of your own?
                                                    </Text>

                                                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                                                        Find privacy and peace of mind with an entire home or apartment to yourself
                                                    </Text>

                                                    <TouchableOpacity style={{ alignSelf: 'flex-start' }}>
                                                        <Text style={[commonStyles.ns600, { fontSize: 14, color: blue }]}>
                                                            Show entire homes & apartments
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>}
                                    </View>
                                ))}
                            </View>

                            <View style={{ marginVertical: 20, marginHorizontal: 8 }}>
                                <TouchableOpacity
                                    style={styles.viewall}
                                >
                                    <Text style={[commonStyles.lbB1, { fontSize: 22, color: blue }]}>
                                        Show More
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    {/* botttom filter */}
                    <View style={{ backgroundColor: b1, alignItems: "flex-end", justifyContent: "center", paddingVertical: 8, paddingHorizontal: 10 }}>
                        <TouchableOpacity
                            style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 120, alignItems: "center", justifyContent: "center", paddingVertical: 8, flexDirection: "row", columnGap: 10 }}
                            onPress={() => navigation.navigate("hotelfilter")}
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
            </View>
        </SafeAreaView>
    )
};

export default HotelSearches;

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
    hotelItemWrap: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingTop: 23,
        flex: 1,
        backgroundColor: white,
        elevation: 4,
    },
    viewall: {
        borderWidth: 2,
        borderColor: blue,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 10,
    },
    privacy: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#D8D8D8",
        backgroundColor: white,
        marginTop: 40,
        elevation: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    // bgWhite: {
    //     backgroundColor: white,
    //     // zIndex: -1,
    //     height: height * 0.6,
    //     // width: width,
    //     // position: "absolute",
    //     borderWidth: 1,
    //     borderTopLeftRadius: 12,
    //     borderTopRightRadius: 12,
    // },
});