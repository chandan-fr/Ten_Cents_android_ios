import React, { useState, useRef, useImperativeHandle } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const _start = -830;

const CustomBottomSheet = React.forwardRef(({ component, containerStyle }, ref) => {
    const translateY = useRef(new Animated.Value(_start)).current;
    const [isVisible, setIsVisible] = useState(false);

    const openBottomSheet = () => {
        setIsVisible(true);
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
        }).start();
    };

    const closeBottomSheet = () => {
        Animated.timing(translateY, {
            toValue: _start,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => setIsVisible(false));
    };

    useImperativeHandle(ref, () => ({
        open: openBottomSheet,
        close: closeBottomSheet,
    }));

    return (
        <>
            {isVisible && (
                <Animated.View
                    style={[styles.bottomSheet,
                    {
                        transform: [{ translateY }],
                        backgroundColor: "rgba(0,0,0,0.5)",
                        height: "100%",
                        width: "100%"
                    }
                    ]}
                >
                    {/* Content of your bottom sheet */}
                    <View style={[{ height: 200, width: "100%", backgroundColor: 'white' }, containerStyle]}>
                        {component}
                    </View>
                </Animated.View>
            )}
        </>
    );
});

const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        // zIndex: -9,
    },
});

export default CustomBottomSheet;
