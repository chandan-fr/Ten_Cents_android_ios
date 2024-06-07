const { StyleSheet } = require("react-native");
const { b1 } = require("../../config/colors");

const commonStyles = StyleSheet.create({
    lbB1: {
        fontFamily: "LondonBetween",
        color: b1,
        fontSize: 20
    },
    ns700: {
        fontFamily: "NunitoSans_10pt-Bold",
        color: b1,
        fontSize: 18,
    },
    ns600: {
        fontFamily: "NunitoSans_10pt-SemiBold",
        color: b1,
        fontSize: 16,
    },
    ns400: {
        fontFamily: "NunitoSans_10pt-Regular",
        color: b1,
        fontSize: 14,
    },
});

module.exports = commonStyles;