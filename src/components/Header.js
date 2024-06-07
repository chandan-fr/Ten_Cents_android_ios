import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { blue, white } from '../config/colors';



const Header = () => {
  return (
    <View style={styles.body}>
      {/* left bell icon */}
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.bellWrap}>
          <Image style={styles.bell} source={require("../assets/icons/bell.png")} />
          <View style={styles.bellDot} />
        </TouchableOpacity>
      </View>

      {/* name icon */}
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text style={styles.heading}>10 Cents Air</Text>
      </View>

      {/* right icon */}
      <View style={styles.rightWrap}>
        <TouchableOpacity style={styles.beaconWrap}>
          <Image style={styles.beacon} source={require("../assets/icons/beacon.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.piWrap}>
          <Text style={styles.pi}>KV</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Header;

const styles = StyleSheet.create({
  body: {
    marginTop: Platform.OS === "ios" ? 10 : 50,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bell: {
    width: 26,
    height: 26,
  },
  bellWrap: {
    width: 29,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    position: 'relative',
  },
  bellDot: {
    backgroundColor: blue,
    width: 12,
    height: 12,
    borderRadius: 12,
    position: "absolute",
    top: 1,
    right: 3,
  },
  pi: {
    color: white,
    fontSize: 13,
    fontFamily: 'LondonBetween',
  },
  piWrap: {
    width: 29,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: white,
  },
  heading: {
    color: white,
    fontSize: 22,
    fontFamily: 'LondonBetween',
  },
  rightWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    flex: 1,
  },
  beacon: {
    width: 22,
    height: 22,
  },
  beaconWrap: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
});