import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, white, blue, green, b3, } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const { width, height } = Dimensions.get("window");

const HpUserDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={width} height={height * 0.1} />
      <Header />

      <View style={styles.body}>
        <View style={{ flex: 1, marginTop: 10 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingVertical: 5, rowGap: 15 }}>
              <Text style={[commonStyles.ns600, { fontSize: 18, textAlign: "center" }]}>
                Enter your details
              </Text>

              {/* user info wrapper */}
              <View style={styles.uiWrap}>
                {/* info */}
                <View style={styles.info}>
                  <Image
                    style={{ width: 20, height: 20, marginRight: 15 }}
                    source={icon.info}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 12 }]}>
                    Almost done! Just fill in the required info
                  </Text>
                </View>

                {/* user info */}
                <View style={styles.inputGrp}>
                  <TextInput
                    style={[styles.inputBox, commonStyles.ns400]}
                    placeholder={"First Name *"}
                    placeholderTextColor={b1}
                  />

                  <TextInput
                    style={[styles.inputBox, commonStyles.ns400]}
                    placeholder={"Last Name *"}
                    placeholderTextColor={b1}
                  />

                  <TextInput
                    style={[styles.inputBox, commonStyles.ns400]}
                    placeholder={"E-mail Address *"}
                    placeholderTextColor={b1}
                  />

                  <Text style={[commonStyles.ns400, { textAlign: "center" }]}>
                    Confirmation email goes to this address
                  </Text>
                </View>

                {/* address */}
                <View style={{ rowGap: 10 }}>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    Your address*
                  </Text>

                  <View style={styles.inputGrp}>
                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={"Address *"}
                      placeholderTextColor={b1}
                    />

                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={"City *"}
                      placeholderTextColor={b1}
                    />

                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={"Zipcode *"}
                      placeholderTextColor={b1}
                    />

                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={"Country/ Region*"}
                      placeholderTextColor={b1}
                    />

                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={"Mobile Number*"}
                      placeholderTextColor={b1}
                    />

                    <Text style={commonStyles.ns400}>
                      Needed by the property to validate your booking
                    </Text>
                  </View>

                  <View style={{ rowGap: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                      Who are you booking for?
                    </Text>

                    <View style={{ rowGap: 8, alignItems: "flex-start" }}>
                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}
                      >
                        <View style={styles.circle} />

                        <Text style={commonStyles.ns400}>
                          I am the main guest
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}
                      >
                        <View style={styles.circle} />

                        <Text style={commonStyles.ns400}>
                          Booking is for someone else
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{ rowGap: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                      Are you travelling for work?
                    </Text>

                    <View style={{ columnGap: 8, flexDirection: "row" }}>
                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}
                      >
                        <View style={styles.circle} />

                        <Text style={commonStyles.ns400}>
                          Yes
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}
                      >
                        <View style={styles.circle} />

                        <Text style={commonStyles.ns400}>
                          No
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              {/* room details */}
              <View style={styles.uiWrap}>
                <Text style={commonStyles.ns600}>
                  Queen Room with Balcony - Non-Smoking
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: "#24AD53" }}
                    source={icon.location}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 14, color: green }]}>
                    Free cancellation before 20 December 2023
                  </Text>
                  <Image
                    style={{ width: 15, height: 15, tintColor: blue }}
                    source={icon.question}
                  />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                  <Image
                    style={{ width: 15, height: 15 }}
                    source={icon.people}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                    Guests: 2 adults
                  </Text>
                  <Image
                    style={{ width: 15, height: 15, tintColor: blue }}
                    source={icon.question}
                  />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                  <Image
                    style={{ width: 15, height: 15 }}
                    source={icon.clean}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                    Cleanliness score - 7.9
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: b1 }}
                    source={icon.noSmoking}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                    No smoking
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', flexWrap: "wrap", columnGap: 6, rowGap: 6 }}>
                  <View style={styles.perks}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: "#24AD53" }}
                      source={icon.plans}
                    />
                    <Text style={[commonStyles.ns400, { color: "#24AD53" }]}>
                      26 m²
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: "#24AD53" }}
                      source={icon.coffeeShop}
                    />
                    <Text style={[commonStyles.ns400, { color: "#24AD53" }]}>
                      Balcony
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: "#24AD53" }}
                      source={icon.ledTv}
                    />
                    <Text style={[commonStyles.ns400, { color: "#24AD53" }]}>
                      Flat-screen TV
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: "#24AD53" }}
                      source={icon.coffeeShop}
                    />
                    <Text style={[commonStyles.ns400, { color: "#24AD53" }]}>
                      Terrace
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: "#24AD53" }}
                      source={icon.swimming}
                    />
                    <Text style={[commonStyles.ns400, { color: "#24AD53" }]}>
                      Pool view
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: "#24AD53" }}
                      source={icon.swimming}
                    />
                    <Text style={[commonStyles.ns400, { color: "#24AD53" }]}>
                      Pool with a view
                    </Text>
                  </View>
                </View>

                <View style={styles.inputGrp}>
                  <TextInput
                    style={[styles.inputBox, commonStyles.ns400]}
                    placeholder={"Full Guest Name*"}
                    placeholderTextColor={b1}
                  />
                </View>
              </View>

              {/* arrival time */}
              <View style={styles.uiWrap}>
                <Text style={[commonStyles.ns600, { fontSize: 18 }]}>
                  Your arrival time
                </Text>

                <View style={{ marginTop: 20, rowGap: 15 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                    <View style={{ borderColor: "#24AD53", borderWidth: 2, alignItems: "center", justifyContent: "center", borderRadius: 20, width: 26, height: 26 }}>
                      <Image
                        style={{ width: 16, height: 16, tintColor: "#24AD53" }}
                        source={icon.check}
                      />
                    </View>

                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>
                      Your room will be ready for check-in at 15:00
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                    <Image
                      style={{ width: 26, height: 26, tintColor: "#24AD53" }}
                      source={icon.reception}
                    />

                    <Text style={[commonStyles.ns400, { fontSize: 15 }]}>
                      24-hour front desk - Help whenever you need it!
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                      Add your estimated arrival time
                    </Text>

                    <Text style={[commonStyles.ns600, { fontSize: 12, color: b3 }]}>
                      (optional)
                    </Text>
                  </View>

                  <View style={{ rowGap: 4, marginBottom: 10 }}>
                    <View style={[styles.inputGrpTime]}>
                      <TextInput
                        style={[styles.inputBoxTime, commonStyles.ns400, { fontSize: 16 }]}
                        placeholder={"13:00 - 14:00"}
                        placeholderTextColor={b1}
                        editable={false}
                      />

                      <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image
                          style={{ width: 20, height: 20, transform: [{ rotate: "180deg" }] }}
                          source={icon.rightArrow}
                        />
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={icon.rightArrow}
                        />
                      </TouchableOpacity>
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 12, color: b3 }]}>
                      Time is for Calgary time zone
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Reserve */}
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
            onPress={() => navigation.navigate("hppricesum")}
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

export default HpUserDetails;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    marginTop: 18,
    flex: 1,
    // backgroundColor: white,
  },
  uiWrap: {
    backgroundColor: white,
    marginHorizontal: 6,
    borderRadius: 8,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 15,
    rowGap: 15,
  },
  info: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#D8D8D8",
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingLeft: 15,
    marginRight: 20
  },
  inputGrp: {
    rowGap: 6,
    width: width * 0.75,
  },
  inputBox: {
    backgroundColor: white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    paddingLeft: 8,
    height: 40,
  },
  inputGrpTime: {
    width: width * 0.75,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    flexDirection: "row",
    alignItems: "center"
  },
  inputBoxTime: {
    backgroundColor: white,
    borderRadius: 4,
    paddingLeft: 8,
    height: 40,
    flex: 1
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: blue,
  },
  perks: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    backgroundColor: "#E7FDE9",
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderColor: "#97E59C",
    borderWidth: 1,
    borderRadiusL: 4,
  },
});