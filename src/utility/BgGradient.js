import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const BgGradient = ({ width, height }) => {
    return (
        <LinearGradient
            colors={["rgba(67, 89, 112, 1)", "rgba(102, 152, 197, 0.75)"]}
            style={{
                width: width,
                height: height,
                position: "absolute",
                zIndex: -1
            }}
        />
    )
};

export default BgGradient;