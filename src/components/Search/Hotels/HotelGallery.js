import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';

const { width, height } = Dimensions.get("window");

const HotelGallery = ({ navigation }) => {
    const sliderData = [
        image.bi1,
        image.gal2,
        image.gal3,
        image.gal4,
        image.gal5,
        image.gal6,
        image.gal7,
        image.gal8,
        image.gal9,
        image.gal10,
        image.gal11,
        image.gal12
    ];

    const [curInd, setCurInd] = useState(0);

    const leftClick = () => {
        if (curInd !== 0) {
            setCurInd(curInd - 1);
        } else {
            setCurInd(sliderData.length - 1);
        }
    };

    const rightClick = () => {
        if (curInd !== sliderData.length - 1) {
            setCurInd(curInd + 1);
        } else {
            setCurInd(0);
        }
    };

    return (
        <SafeAreaView style={styles.parent}>
            <BgGradient width={width} height={height * 0.11} />
            <Header />

            <View style={styles.body}>
                <View style={{ paddingVertical: 5, rowGap: 10, marginHorizontal: 10 }}>
                    {/* hotel name */}
                    <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                        Ramada Plaza by Wyndham Calgary Downtown
                    </Text>

                    {/* hotel rating */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {/* star */}
                        <View style={{ flexDirection: 'row', alignItems: "center", marginRight: 10 }}>
                            <Image
                                style={{ width: 26, height: 26, marginRight: 3 }}
                                source={icon.star}
                            />
                            <Image
                                style={{ width: 26, height: 26, marginRight: 3 }}
                                source={icon.star}
                            />
                            <Image
                                style={{ width: 26, height: 26, marginRight: 3 }}
                                source={icon.star}
                            />
                        </View>

                        {/* button */}
                        <TouchableOpacity
                            style={[styles.btn, { marginHorizontal: 50 }]}
                        >
                            <Text style={[commonStyles.lbB1, { color: white }]}>
                                Reserve
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* slider */}
                    <View style={styles.slider}>
                        <TouchableOpacity style={[styles.lftRght, { left: 0 }]} onPress={()=>leftClick()}>
                            <Image
                                style={{ width: 30, height: 30, tintColor: b2, transform: [{ rotate: "180deg" }] }}
                                source={icon.rightArrow}
                            />
                        </TouchableOpacity>

                        <View>
                            <Image
                                style={{ width: 322, height: 229, borderRadius: 8 }}
                                source={sliderData[curInd]}
                            />
                        </View>

                        <TouchableOpacity style={[styles.lftRght, { right: 0 }]} onPress={()=>rightClick()}>
                            <Image
                                style={{ width: 30, height: 30, tintColor: b2 }}
                                source={icon.rightArrow}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* overview */}
                    <View style={{ rowGap: 15, marginTop: 30 }}>
                        <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                            Overview
                        </Text>

                        <View style={{ flexWrap: 'wrap', rowGap: 8, columnGap: 8, flexDirection: "row" }}>
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.bi1}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal2}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal3}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal4}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal5}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal6}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal7}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal8}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal9}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal10}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal11}
                            />
                            <Image
                                style={{ width: 88, height: 76 }}
                                source={image.gal12}
                            />
                        </View>
                    </View>
                </View>
            </View >
        </SafeAreaView >
    )
};

export default HotelGallery;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        marginTop: 25,
        flex: 1,
        backgroundColor: white,
    },
    btn: {
        borderRadius: 4,
        backgroundColor: b2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 6,
        paddingHorizontal: 50,
    },
    lftRght: {
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: 'center',
        position: "absolute",
    },
    slider: {
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: 10,
    },
});