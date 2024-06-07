import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import HotelItem from '../Hotels/HotelItem';

const { width, height } = Dimensions.get("window");

const FhSearch = ({ navigation, route }) => {
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const { refName } = route?.params;

    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.1} />
            <Header />

            <View style={styles.body}>
                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ rowGap: 15, marginHorizontal: 15, marginBottom: 5 }}>
                            <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center", marginTop: 10 }]}>
                                Hotel Selection
                            </Text>

                            {/* hotels */}
                            <View style={{ rowGap: 30 }}>
                                {data.map((_, i) => (
                                    <View key={i}>
                                        <HotelItem navigation={navigation} srcName={"fhdetails"} refName={refName} />
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
                        </View>
                    </ScrollView>
                </View>

                {/* filter */}
                <View>
                    <View style={{ backgroundColor: b1, alignItems: "flex-end", justifyContent: "center", paddingVertical: 8, paddingHorizontal: 10 }}>
                        <TouchableOpacity
                            style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 120, alignItems: "center", justifyContent: "center", paddingVertical: 8, flexDirection: "row", columnGap: 10 }}
                            onPress={() => navigation.navigate("fhfilter")}
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
        </SafeAreaView >
    )
};

export default FhSearch;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 18,
        flex: 1,
        backgroundColor: white,
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
});