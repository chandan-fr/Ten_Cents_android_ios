import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { b1, gs3, white } from '../../../config/colors';
import image from '../../../config/ImageAssets';
import icon from '../../../config/IconAssets';

const DirectTab = () => {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ImageBackground
                style={{ flex: 1 }}
                resizeMode='stretch'
                source={image.planeimg}
            />

            <View
                style={{ position: "absolute", left: 0, backgroundColor: white, paddingVertical: 10, paddingHorizontal: 20, rowGap: 10, top: 95 }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={icon.ocupd}
                    />
                    <Text style={[styles.ns400, { fontSize: 14, marginLeft: 15 }]}>Occupied</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: gs3, borderRadius: 30 }]} />
                    <Text style={[styles.ns400, { fontSize: 14, marginLeft: 15 }]}>Free</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#F1DD65", }]} />
                    <Text style={[styles.ns400, { fontSize: 14, marginLeft: 15 }]}>$ 25</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#EBB52C", }]} />
                    <Text style={[styles.ns400, { fontSize: 14, marginLeft: 15 }]}>$ 50</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#C7680E", }]} />
                    <Text style={[styles.ns400, { fontSize: 14, marginLeft: 15 }]}>$ 100</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#ADD1FA", }]} />
                    <Text style={[styles.ns400, { fontSize: 14, marginLeft: 15 }]}>$ 150</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#1C62DC", }]} />
                    <Text style={[styles.ns400, { fontSize: 14, marginLeft: 15 }]}>$ 200</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={icon.nc}
                    />
                    <Text style={[styles.ns400, { fontSize: 14, marginLeft: 15 }]}>Non- reclining</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={icon.elr}
                    />
                    <Text style={[styles.ns400, { fontSize: 14, marginLeft: 15 }]}>Extra leg-room</Text>
                </View>
            </View>
        </View>
    )
};

export default DirectTab;

const styles = StyleSheet.create({
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 14,
    },
    square: {
        width: 25,
        height: 25,
        borderRadius: 4,
        borderWidth: 1,
    },
});