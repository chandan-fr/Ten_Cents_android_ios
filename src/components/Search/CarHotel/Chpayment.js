import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { blue, white, b1, b2, b3 } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const Chpayment = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={width} height={height * 0.1} />
      <Header />

      <View style={styles.body}>
        <ScrollView
          style={{ marginHorizontal: 10, marginTop: 5, flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingVertical: 5, rowGap: 15 }}>
            {/* info */}
            <View style={{ marginTop: 5 }}>
              <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                Please make your payment within the next <Text style={[commonStyles.ns600, { fontSize: 16 }]}>20 minutes</Text>
              </Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
                <Image
                  style={{ width: 15, height: 15 }}
                  source={icon.info}
                />
                <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                  to keep this session active.
                </Text>
              </View>
            </View>

            <View style={[styles.hr, { marginVertical: 5 }]} />

            {/* price breakdown */}
            <View style={{ rowGap: 15, marginBottom: 5 }}>
              {/* heading */}
              <View style={{ marginTop: 20 }}>
                <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                  Package Summary (USD)
                </Text>

                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    Stay: <Text style={[commonStyles.ns400, { color: b3 }]}>1 Room, 14 Nights</Text>
                  </Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}> | </Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    Car Rental: <Text style={[commonStyles.ns400, { color: b3 }]}>14 Days</Text>
                  </Text>
                </View>
              </View>

              {/* price details */}
              <View style={{ rowGap: 10, marginTop: 10, marginRight: 15 }}>
                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                  <Text style={[commonStyles.ns400, { fontSize: 16, width: 230 }]}>
                    Package Base Price(per person)
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={commonStyles.ns600}>
                      USD 161
                    </Text>
                    <Text style={[commonStyles.ns600, { fontSize: 11, textAlignVertical: "top" }]}>
                      .87
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                  <Text style={[commonStyles.ns400, { fontSize: 16, width: 230 }]}>
                    Taxes and Fees
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={commonStyles.ns600}>
                      USD 23
                    </Text>
                    <Text style={[commonStyles.ns600, { fontSize: 11, textAlignVertical: "top" }]}>
                      .12
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between' }}>
                  <Text style={[commonStyles.ns400, { fontSize: 16, width: 230 }]}>
                    Package Price(per person)
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={commonStyles.ns600}>
                      USD 320
                    </Text>
                    <Text style={[commonStyles.ns600, { fontSize: 11, textAlignVertical: "top" }]}>
                      .00
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.dottedLine} />

              {/* total price */}
              <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between', marginLeft: 10 }}>
                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                  Total Package Price (USD)
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                    USD 5004
                  </Text>
                  <Text style={[commonStyles.ns700, { fontSize: 11, textAlignVertical: "top" }]}>
                    .99
                  </Text>
                </View>
              </View>

              <View style={styles.dottedLine} />

              {/* pkg price */}
              <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'space-between', marginLeft: 10 }}>
                <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                  Package Price Payable Now(USD)
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Text style={[commonStyles.ns700, { fontSize: 16 }]}>
                    USD 4400
                  </Text>
                  <Text style={[commonStyles.ns700, { fontSize: 11, textAlignVertical: "top" }]}>
                    .00
                  </Text>
                </View>
              </View>

              <View style={styles.dottedLine} />

              {/* Join ClubMiles and earn 2225 points or more on this booking */}
              <View style={[styles.clubMiles, { marginTop: 0 }]}>
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                  <Image
                    style={{ marginRight: 5 }}
                    source={icon.cmiles}
                  />

                  <Text style={[commonStyles.ns600, { fontSize: 15, color: white, flex: 1 }]}>
                    Join ClubMiles and earn 2225 points or more on this booking
                  </Text>

                  <TouchableOpacity
                    style={styles.signin}
                  >
                    <Text style={[commonStyles.lbB1, { fontSize: 16, color: blue }]}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.hr} />

            {/* apply promocode */}
            <View style={styles.promo}>
              <Image
                style={{ width: 25, height: 25, tintColor: blue }}
                source={icon.tag}
              />

              <Text style={[commonStyles.ns600, { color: blue, fontSize: 14, width: 210 }]}>
                Enter promo code or gift card number
              </Text>

              <TouchableOpacity
                style={styles.btn}
              >
                <Text style={[commonStyles.lbB1, { color: white, fontSize: 16 }]}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", columnGap: 10, alignSelf: "flex-start" }}>
              <Text style={[commonStyles.ns600, { color: blue }]}>
                Pay with credit from a previous booking
              </Text>

              <Image
                style={{ width: 18, height: 18, tintColor: blue, transform: [{ rotate: "-90deg" }] }}
                source={icon.rightArrow}
              />
            </TouchableOpacity>

            <Text style={[commonStyles.ns400, { lineHeight: 20, fontSize: 16 }]}>
              To use any travel credit that you have with us from a previously canceled booking, please call  <Text style={[commonStyles.ns600, { color: "#DF1414", fontSize: 16 }]}>
                845-848-0211
              </Text>
            </Text>
          </View>
        </ScrollView>

        {/* PROCEED */}
        <View style={{ backgroundColor: b1, alignItems: "center", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 10, flexDirection: "row" }}>
          <View style={{ rowGap: 3 }}>
            <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
              Price
            </Text>
            <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
              $1320 + Taxes
            </Text>
          </View>

          <TouchableOpacity
            style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 150, alignItems: "center", justifyContent: "center", paddingVertical: 8 }}
            onPress={() => navigation.replace("success")}
          >
            <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View>
      </View >
    </SafeAreaView >
  )
};

export default Chpayment;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    marginTop: 18,
    flex: 1,
    backgroundColor: white,
  },
  hr: {
    backgroundColor: "rgba(35, 32, 32, 0.15)",
    height: 1,
  },
  dottedLine: {
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderStyle: "dashed",
  },
  clubMiles: {
    backgroundColor: b1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: -8,
  },
  signin: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: blue,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 8
  },
  promo: {
    borderWidth: 1,
    borderColor: b2,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingVertical: 10,
    marginTop: 5,
  },
  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  btnLrg: {
    borderRadius: 8,
    backgroundColor: b2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});