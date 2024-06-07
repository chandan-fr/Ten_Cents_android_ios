import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../../../assets/css/CommonFonts';
import { white } from '../../../config/colors';
import image from '../../../config/ImageAssets';

const HpOffers = ({ data }) => {
    const { img, details } = data;
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.pseudo2} />
            <View style={styles.pseudo1} />
            <View style={{ position: "relative", marginTop: -10 }}>
                <Image
                    style={styles.img}
                    source={img}
                />
                <View style={{ rowGap: 5, position: "absolute", bottom: 20, left: 20 }}>
                    <Text style={[commonStyles.ns700, { color: white }]}>{details.name}</Text>
                    <Text style={[commonStyles.ns600, { color: white, fontSize: 14 }]}>{details.price}</Text>
                    <Text style={[commonStyles.ns600, { color: white, fontSize: 14 }]}>per person</Text>
                </View>
            </View>
        </View>
    )
};

export default HpOffers;

const styles = StyleSheet.create({
    img: {
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    pseudo1: {
        backgroundColor: "#DCDCDC",
        height: 20,
        width: 171,
        borderTopRightRadius: 20,
        marginTop: -10,
    },
    pseudo2: {
        backgroundColor: "#F5F5F5",
        height: 20,
        width: 141,
        borderTopRightRadius: 20,
    },
});