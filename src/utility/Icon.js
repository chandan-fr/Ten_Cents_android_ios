import { Image } from 'react-native'
import React from 'react'

const Icon = ({size, name, iconColor}) => {
    const imgData = {
        "Search": require("../assets/icons/search.png"),
        "Deals": require("../assets/icons/discount.png"),
        "My Trips": require("../assets/icons/destination.png"),
        "Rewards": require("../assets/icons/giftbox.png"),
    };

    return (
        <Image
            style={{
                width: size,
                height: size,
                tintColor: iconColor,
                marginTop: 12,
            }}
            source={imgData[name]}
        />
    )
}

export default Icon;