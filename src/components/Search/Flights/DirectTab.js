import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { b1, black, gs3, white } from '../../../config/colors';
import image from '../../../config/ImageAssets';
import icon from '../../../config/IconAssets';
import * as Animatable from 'react-native-animatable';

const DirectTab = () => {
    const [floatingPanel, setFloatingPanel] = useState(false);
    const [renderPanel, setRenderPanel] = useState(false);

    useEffect(() => {
        if (floatingPanel) {
            setRenderPanel(true);
        }
    }, [floatingPanel]);

    const handleAnimationEnd = () => {
        if (!floatingPanel) {
            setRenderPanel(false);
        }
    };

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ImageBackground
                style={{ flex: 1 }}
                resizeMode='stretch'
                source={image.planeimg}
            />

            <TouchableOpacity
                style={styles.floatBtn}
                onPress={() => setFloatingPanel(!floatingPanel)}
            >
                <Image style={floatingPanel ? styles.floatBtnImg : [styles.floatBtnImg, { transform: [{ rotate: "180deg" }] }]} source={icon.rightArrow} />
            </TouchableOpacity>

            {renderPanel && <Animatable.View
                style={{ position: "absolute", left: 0, backgroundColor: white, paddingVertical: 10, paddingHorizontal: 20, rowGap: 10, top: 95 }}
                animation={floatingPanel ? "fadeInLeft" : "fadeOutLeft"}
                duration={300}
                onAnimationEnd={handleAnimationEnd}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={icon.ocupd}
                    />
                    <Text style={[styles.ns400, { marginLeft: 15 }]}>Occupied</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: gs3, borderRadius: 30 }]} />
                    <Text style={[styles.ns400, { marginLeft: 15 }]}>Free</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#F1DD65", }]} />
                    <Text style={[styles.ns400, { marginLeft: 15 }]}>$ 25</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#EBB52C", }]} />
                    <Text style={[styles.ns400, { marginLeft: 15 }]}>$ 50</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#C7680E", }]} />
                    <Text style={[styles.ns400, { marginLeft: 15 }]}>$ 100</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#ADD1FA", }]} />
                    <Text style={[styles.ns400, { marginLeft: 15 }]}>$ 150</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.square, { borderColor: "#1C62DC", }]} />
                    <Text style={[styles.ns400, { marginLeft: 15 }]}>$ 200</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={icon.nc}
                    />
                    <Text style={[styles.ns400, { fontSize: 10, marginLeft: 15 }]}>Non- reclining</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={icon.elr}
                    />
                    <Text style={[styles.ns400, { fontSize: 10, marginLeft: 15 }]}>Extra leg-room</Text>
                </View>
            </Animatable.View>}
        </View>
    )
};

export default DirectTab;

const styles = StyleSheet.create({
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 10,
    },
    square: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
    },
    floatBtnImg: {
        width: 15,
        height: 15,
        tintColor: white,
    },
    floatBtn: {
        backgroundColor: black,
        position: "absolute",
        top: 35,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
});