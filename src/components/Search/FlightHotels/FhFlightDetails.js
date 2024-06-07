import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React from 'react'
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, b3, blue, white } from '../../../config/colors';

const FhFlightDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={true} barStyle={"dark-content"} />
      <View style={{ flex: 1, marginTop: 45 }}>
        {/* nav */}
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 22, height: 22, marginRight: 10 }}
            source={icon.next}
          />

          <Text style={[commonStyles.ns600, { fontSize: 20, textTransform: "uppercase" }]}>
            FLIGHT DETAILS
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20, flex: 1 }}>
          <ScrollView
            style={{ flex: 1, }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ rowGap: 16, marginHorizontal: 5, backgroundColor: white, paddingTop: 20, paddingHorizontal: 15, paddingBottom: 10, marginBottom: 5, borderRadius: 8 }}>
              {/* Depart */}
              <Text style={[commonStyles.ns600]}>
                Depart Fri, Dec 22
              </Text>

              {/* vistara */}
              <View style={{ flexDirection: 'row', columnGap: 4, alignItems: "center" }}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={icon.vistara}
                  resizeMode='stretch'
                />

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                  Vistara
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", columnGap: 40 }}>
                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01.00</Text>
                </View>

                <Image
                  style={{ width: 50, height: 15, tintColor: b1 }}
                  source={icon.longArrow}
                />

                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>BOM</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09.45</Text>
                </View>
              </View>

              {/* air canada */}
              <View style={{ flexDirection: 'row', columnGap: 4, alignItems: "center" }}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={icon.canada}
                  resizeMode='stretch'
                />

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                  Air Canada
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", columnGap: 40 }}>
                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>BOM</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01.00</Text>
                </View>

                <Image
                  style={{ width: 50, height: 15, tintColor: b1 }}
                  source={icon.longArrow}
                />

                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>LHR</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09.45</Text>
                </View>
              </View>

              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3, marginTop: 10 }]}>
                Layover: 14h 20m
              </Text>

              {/* air canada */}
              <View style={{ flexDirection: 'row', columnGap: 4, alignItems: "center" }}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={icon.canada}
                  resizeMode='stretch'
                />

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                  Air Canada
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", columnGap: 40 }}>
                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>LHR</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01.00</Text>
                </View>

                <Image
                  style={{ width: 50, height: 15, tintColor: b1 }}
                  source={icon.longArrow}
                />

                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09.45</Text>
                </View>
              </View>

              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3, marginTop: 10 }]}>
                Layover: 3h 40m
              </Text>

              <Text style={[commonStyles.ns400, { color: "#8A6D3B", textAlign: "center" }]}>
                A <Text onPress={() => Alert.alert("Transit Visa")} style={[commonStyles.ns400, { color: blue, textDecorationLine: "underline" }]}>Transit Visa</Text> may be required when connecting through Canada
              </Text>

              {/* duration */}
              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                Total Trip Duration : 40h  15m
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", columnGap: 15 }}>
                {/* personal bag */}
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                  <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                    <Image
                      style={{ width: 10, height: 10, tintColor: blue }}
                      source={icon.backpack}
                    />
                  </View>

                  <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                    1 Personal Item
                  </Text>
                </View>

                {/* carry-on bag */}
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                  <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                    <Image
                      style={{ width: 10, height: 10, tintColor: blue }}
                      source={icon.duffleBag}
                    />
                  </View>

                  <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                    1 Carry-on bag
                  </Text>
                </View>

                {/* bag */}
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                  <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                    <Image
                      style={{ width: 10, height: 10, tintColor: blue }}
                      source={icon.baggage}
                    />
                  </View>

                  <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                    2 Checked Bags
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", columnGap: 15 }}>
                <TouchableOpacity>
                  <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>Air Canada</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>Baggage Policy</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dottedLine} />

              {/* Return */}
              <Text style={[commonStyles.ns600]}>
                Return Thu, Jan 04
              </Text>



              {/* air canada */}
              <View style={{ flexDirection: 'row', columnGap: 4, alignItems: "center" }}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={icon.canada}
                  resizeMode='stretch'
                />

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                  Air Canada
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", columnGap: 40 }}>
                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>LHR</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01.00</Text>
                </View>

                <Image
                  style={{ width: 50, height: 15, tintColor: b1 }}
                  source={icon.longArrow}
                />

                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09.45</Text>
                </View>
              </View>

              {/* air canada */}
              <View style={{ flexDirection: 'row', columnGap: 4, alignItems: "center" }}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={icon.canada}
                  resizeMode='stretch'
                />

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                  Air Canada
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", columnGap: 40 }}>
                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>BOM</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01.00</Text>
                </View>

                <Image
                  style={{ width: 50, height: 15, tintColor: b1 }}
                  source={icon.longArrow}
                />

                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>LHR</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09.45</Text>
                </View>
              </View>

              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3, marginTop: 10 }]}>
                Layover: 14h 20m
              </Text>

              {/* vistara */}
              <View style={{ flexDirection: 'row', columnGap: 4, alignItems: "center" }}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={icon.vistara}
                  resizeMode='stretch'
                />

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                  Vistara
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>|</Text>

                <Text style={[commonStyles.ns400, { fontSize: 11 }]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", columnGap: 40 }}>
                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01.00</Text>
                </View>

                <Image
                  style={{ width: 50, height: 15, tintColor: b1 }}
                  source={icon.longArrow}
                />

                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>BOM</Text>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09.45</Text>
                </View>
              </View>

              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3, marginTop: 10 }]}>
                Layover: 3h 40m
              </Text>

              <Text style={[commonStyles.ns400, { color: "#8A6D3B", textAlign: "center" }]}>
                A <Text onPress={() => Alert.alert("Transit Visa")} style={[commonStyles.ns400, { color: blue, textDecorationLine: "underline" }]}>Transit Visa</Text> may be required when connecting through Canada
              </Text>

              {/* duration */}
              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                Total Trip Duration : 40h  15m
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", columnGap: 15 }}>
                {/* personal bag */}
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                  <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                    <Image
                      style={{ width: 10, height: 10, tintColor: blue }}
                      source={icon.backpack}
                    />
                  </View>

                  <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                    1 Personal Item
                  </Text>
                </View>

                {/* carry-on bag */}
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                  <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                    <Image
                      style={{ width: 10, height: 10, tintColor: blue }}
                      source={icon.duffleBag}
                    />
                  </View>

                  <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                    1 Carry-on bag
                  </Text>
                </View>

                {/* bag */}
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                  <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                    <Image
                      style={{ width: 10, height: 10, tintColor: blue }}
                      source={icon.baggage}
                    />
                  </View>

                  <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                    2 Checked Bags
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", columnGap: 15 }}>
                <TouchableOpacity>
                  <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>Air Canada</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>Baggage Policy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default FhFlightDetails;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 13,
  },
  seatWrap: {
    backgroundColor: "rgba(33, 180, 226, 0.1)",
    borderRadius: 22,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dottedLine: {
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderTopColor: b3,
    marginVertical: 30,
  },
});