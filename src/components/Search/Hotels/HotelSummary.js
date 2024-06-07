import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, white, blue, b3, b2 } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const HotelSummary = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={width} height={height * 0.1} />
      <Header />

      <View style={styles.body}>
        <View style={{ flex: 1, marginTop: 10 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{}}
          >
            <View style={{ paddingVertical: 5, rowGap: 15 }}>
              <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center" }]}>
                Hotel Summary
              </Text>

              {/* hotel */}
              <View style={styles.comWrap}>
                {/* hotel and star */}
                <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>Hotel</Text>

                  {/* star */}
                  <View style={{ flexDirection: 'row', alignItems: "center", marginRight: 10 }}>
                    <Image
                      style={{ width: 15, height: 15, marginRight: 3 }}
                      source={icon.star}
                    />
                    <Image
                      style={{ width: 15, height: 15, marginRight: 3 }}
                      source={icon.star}
                    />
                    <Image
                      style={{ width: 15, height: 15, marginRight: 3 }}
                      source={icon.star}
                    />
                  </View>
                </View>

                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                  Ramada Plaza by Wyndham Calgary Downtown
                </Text>

                <Text style={[commonStyles.ns400]}>
                  708 8th Avenue Southwest, T2P 1H2 Calgary, Canada
                </Text>

                <Text style={[commonStyles.ns600, { fontSize: 14, color: "#24AD53" }]}>
                  Great location — 8.8
                </Text>

                {/* rating */}
                <View style={{ flexDirection: "row", columnGap: 10 }}>
                  <View style={styles.rating}>
                    <Text style={[commonStyles.ns600, { color: white, fontSize: 14 }]}>
                      7.3
                    </Text>
                  </View>

                  <Text style={commonStyles.ns400}>Good   ·</Text>
                  <Text style={commonStyles.ns400}>1,301 reviews</Text>
                </View>

                {/* perks */}
                <View style={styles.perks}>
                  <View style={styles.roomPerks}>
                    <Image style={{ width: 18, height: 18, tintColor: b1 }} source={icon.pawprint} />
                    <Text style={[commonStyles.ns400]}>
                      Pets allowed
                    </Text>
                  </View>

                  <View style={styles.roomPerks}>
                    <Image style={{ width: 18, height: 18, tintColor: b1 }} source={icon.wifi} />
                    <Text style={[commonStyles.ns400]}>
                      Free WiFi
                    </Text>
                  </View>

                  <View style={styles.roomPerks}>
                    <Image style={{ width: 18, height: 18, tintColor: b1 }} source={icon.parkingArea} />
                    <Text style={[commonStyles.ns400]}>
                      Parking
                    </Text>
                  </View>

                  <View style={styles.roomPerks}>
                    <Image style={{ width: 18, height: 18, tintColor: b1 }} source={icon.restaurant} />
                    <Text style={[commonStyles.ns400]}>
                      Restaurant
                    </Text>
                  </View>

                  <View style={styles.roomPerks}>
                    <Image style={{ width: 18, height: 18, tintColor: b1 }} source={icon.swimming} />
                    <Text style={[commonStyles.ns400]}>
                      Swimming Pool
                    </Text>
                  </View>
                </View>
              </View>

              {/* booking details */}
              <View style={[styles.comWrap, { paddingHorizontal: 0 }]}>
                {/* top */}
                <View style={{ paddingHorizontal: 15 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                    Your booking details
                  </Text>

                  {/* check in/ out */}
                  <View style={{ marginTop: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ rowGap: 5 }}>
                      <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                        Check - in
                      </Text>
                      <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                        Thu 21 Dec 2023
                      </Text>
                      <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>
                        From 15:00
                      </Text>
                    </View>

                    <View style={{ rowGap: 5 }}>
                      <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                        Check - out
                      </Text>
                      <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                        Thu 4 Jan 2024
                      </Text>
                      <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>
                        Until 11:00
                      </Text>
                    </View>
                  </View>

                  {/* stay duration */}
                  <View style={{ marginTop: 15 }}>
                    <Text style={commonStyles.ns600}>
                      Total length of stay:
                    </Text>

                    <Text style={[commonStyles.ns600, { color: b3 }]}>
                      2 weeks
                    </Text>
                  </View>
                </View>

                <View style={styles.line} />

                {/* bottom */}
                <View style={{ paddingHorizontal: 15 }}>
                  <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ rowGap: 5 }}>
                      <Text style={commonStyles.ns600}>
                        You selected
                      </Text>

                      <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                        1 room for 2 adults
                      </Text>
                    </View>

                    <TouchableOpacity>
                      <Image
                        style={{ width: 20, height: 20, tintColor: blue, transform: [{ rotate: "90deg" }] }}
                        source={icon.rightArrow}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={{ marginTop: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                      1 x Queen Room with Balcony - Non-Smoking
                    </Text>

                    <Text style={commonStyles.ns400}>
                      2 adults
                    </Text>
                  </View>

                  <View style={{ marginTop: 10, alignItems: "flex-start" }}>
                    <TouchableOpacity>
                      <Text style={[commonStyles.ns600, { color: blue }]}>
                        Change your selection
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* price details */}
              <View style={styles.main}>

                <Text style={[commonStyles.ns700, { marginLeft: 15 }]}>
                  Your price summary
                </Text>

                {/* price */}
                <View style={styles.priceWrap}>
                  <Text style={[commonStyles.ns600, { fontSize: 26 }]}>
                    Price
                  </Text>

                  {/* price details */}
                  <View style={{ alignItems: "flex-end" }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[commonStyles.ns600, { fontSize: 26 }]}>
                        USD 1,320
                      </Text>
                      <Text style={{ color: b1, fontSize: 16, alignSelf: "flex-start", top: 4 }}>
                        .39
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>
                      +USD 162 taxes and charges
                    </Text>

                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>
                        In property currency: CAD 1,794
                      </Text>
                      <Text style={{ color: b3, fontSize: 10, alignSelf: "flex-start", top: 1 }}>
                        .39
                      </Text>
                    </View>
                  </View>
                </View>

                {/* price info */}
                <View style={{ padding: 12, rowGap: 15, paddingBottom: 0 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                    Price information
                  </Text>

                  <View style={{ rowGap: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={icon.cash}
                      />

                      <Text style={[commonStyles.ns400, { fontSize: 15 }]}>
                        Excludes USD162.01 in taxes and charges
                      </Text>
                    </View>

                    <View style={{ rowGap: 7, marginLeft: 40 }}>
                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={[commonStyles.ns400, { fontSize: 15, color: b3 }]}>
                          9% Tax
                        </Text>

                        <Text style={[commonStyles.ns600, { fontSize: 15, color: b3 }]}>
                          USD 118.84
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={[commonStyles.ns400, { fontSize: 15, color: b3 }]}>
                          3% City tax
                        </Text>

                        <Text style={[commonStyles.ns600, { fontSize: 15, color: b3 }]}>
                          USD 43.18
                        </Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                      <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 10 }}>
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={icon.info}
                        />

                        <Text style={[commonStyles.ns400, { fontSize: 16, width: 140, lineHeight: 20 }]}>
                          Damage deposit
                          (Fully refundable)
                        </Text>
                      </View>

                      <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                        USD 74
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", columnGap: 10 }}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={icon.money}
                      />

                      <Text style={[commonStyles.ns400, { fontSize: 16, textAlign: "justify", flex: 1 }]}>
                        This price is converted to show you the approximate cost in US$. You'll pay in <Text style={[commonStyles.ns700, { fontSize: 16 }]}>CAD</Text>. The exchange rate may change before you pay.
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", columnGap: 10 }}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={icon.exchangeRate}
                      />

                      <Text style={[commonStyles.ns400, { fontSize: 16, textAlign: "justify", flex: 1 }]}>
                        Bear in mind that your card issuer may charge you a foreign transaction fee.
                      </Text>
                    </View>
                  </View>

                  {/* hide details */}
                  <View style={{ alignItems: "flex-start" }}>
                    <TouchableOpacity>
                      <Text style={[commonStyles.ns600, { color: blue }]}>
                        Hide details
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* cancel */}
              <View style={[styles.main, { paddingHorizontal: 15 }]}>
                <Text style={commonStyles.ns700}>
                  How much will it cost to cancel?
                </Text>

                <Text style={[commonStyles.ns600, { fontSize: 15, color: "#008009" }]}>
                  Free cancellation before 20 Dec
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={[commonStyles.ns600, { fontSize: 15 }]}>
                    From 00:00 on 20 Dec
                  </Text>

                  <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                    USD 97*
                  </Text>
                </View>
              </View>

              {/* limited supply */}
              <View style={styles.comWrapRed}>
                <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 10 }}>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={icon.alarm}
                  />

                  <View style={{ rowGap: 10 }}>
                    <Text style={[commonStyles.ns700, { fontSize: 18, color: "#1A1A1A" }]}>
                      Limited supply for your dates:
                    </Text>

                    <Text style={[commonStyles.ns400, { fontSize: 16, color: "#1A1A1A" }]}>
                      47 three-star hotels like this are already unavailable on our site
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* proceed */}
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
            onPress={() => navigation.navigate("hotelpay")}
          >
            <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
              proceed
            </Text>
          </TouchableOpacity>
        </View>
      </View >
    </SafeAreaView >
  )
};

export default HotelSummary;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    marginTop: 18,
    flex: 1,
    backgroundColor: white,
  },
  comWrap: {
    backgroundColor: white,
    marginHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    paddingVertical: 15,
    rowGap: 15,
    paddingHorizontal: 15,
  },
  priceWrap: {
    backgroundColor: "#EBF3FF",
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: 'space-between',
  },
  rating: {
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: b2,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  roomPerks: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  perks: {
    flexDirection: "row",
    rowGap: 10,
    columnGap: 10,
    flexWrap: "wrap",
    marginTop: 5,
  },
  line: {
    backgroundColor: white,
    borderTopWidth: 1,
    borderTopColor: "#D8D8D8",
    height: 1,
  },
  main: {
    backgroundColor: white,
    marginHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    paddingVertical: 15,
    rowGap: 15,
  },
  comWrapRed: {
    backgroundColor: "#FFF5F5",
    marginHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    paddingVertical: 15,
    rowGap: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#D4111E",
  },
});