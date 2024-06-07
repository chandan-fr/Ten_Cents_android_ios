import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import icon from '../../../config/IconAssets';
import { genCurrentDate } from '../../../config/CurrentDate';
import { white, b1, b3, blue, b2, } from '../../../config/colors';
import image from '../../../config/ImageAssets';
import commonStyles from '../../../assets/css/CommonFonts';

const { width } = Dimensions.get("window");

const FhBaseReview = ({ navigation }) => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar translucent={true} barStyle={"dark-content"} />
      <View style={styles.wrap}>
        {/* nav head */}
        <View style={{ alignItems: "flex-start", marginTop: 8 }}>
          <TouchableOpacity style={styles.nav} onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 25, marginLeft: 10 }}
              source={icon.next}
            />
            <View style={{ marginLeft: 30 }}>
              <View style={styles.right}>
                <Text style={styles.navHeadTxt}>Dhaka</Text>
                <Image style={styles.rightImg} source={icon.next} />
                <Text style={styles.navHeadTxt}>Dubai</Text>
              </View>
              <Text style={styles.navSubHeadTxt}>{genCurrentDate()} | 1 Adult</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* main body scroll */}
        <View style={{ flex: 1, paddingVertical: 5, marginTop: 10 }}>
          <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View style={{ rowGap: 20 }}>
              {/* details */}
              <View style={styles.comWrap}>
                {/* hotel name */}
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', columnGap: 15 }}>
                  <Image
                    style={{ width: 100, height: 65 }}
                    source={image.hotelimg2}
                  />

                  <View style={{ flex: 1, rowGap: 6 }}>
                    <Text style={[commonStyles.ns400]}>
                      New Apartments in Cranston by GLOBALSTAY
                    </Text>
                    <Text style={[commonStyles.ns400, { color: b3 }]}>
                      Thu, Dec-21-2023 - Thu, Jan-04-2024
                    </Text>

                    {/* btn action */}
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <TouchableOpacity>
                        <Text style={[commonStyles.ns400, { color: blue, fontSize: 12 }]}>
                          Change Hotel
                        </Text>
                      </TouchableOpacity>

                      <Text>|</Text>

                      <TouchableOpacity>
                        <Text style={[commonStyles.ns400, { color: blue, fontSize: 12 }]}>
                          View Details
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* depart/ return */}
                <View style={{ rowGap: 10 }}>
                  {/* depart */}
                  <View style={styles.depart}>
                    <Text style={[commonStyles.ns400, { textAlignVertical: "bottom", marginBottom: 14 }]}>
                      Depart
                    </Text>

                    <Text style={[commonStyles.ns400, { fontSize: 12, textAlignVertical: "bottom", marginBottom: 14 }]}>
                      1:00 am (DAC)
                    </Text>

                    <View style={{ rowGap: 6 }}>
                      <Text style={[commonStyles.ns400, { fontSize: 12, textAlign: 'center' }]}>
                        1d 09h 45m
                      </Text>

                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 18 }}>
                        <Text style={[commonStyles.ns400, styles.topDest]}>BOM</Text>
                        <View style={styles.dLine} />
                        <View style={styles.diamond} />
                        <View style={[styles.dLine, { width: 20 }]} />
                        <View style={styles.diamond} />
                        <View style={styles.dLine} />
                        <Text style={[commonStyles.ns400, styles.bottomDest]}>LHR</Text>
                      </View>
                    </View>

                    <View style={{ rowGap: 10, justifyContent: "flex-end", alignItems: "flex-end" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 13, color: "#7F5F01" }]}>
                        next day
                      </Text>

                      <Text style={[commonStyles.ns400, { fontSize: 12, marginBottom: 14 }]}>
                        9:45 aM(YYC)
                      </Text>
                    </View>
                  </View>

                  {/* return */}
                  <View style={styles.depart}>
                    <Text style={[commonStyles.ns400, { textAlignVertical: "bottom", marginBottom: 14 }]}>
                      Return
                    </Text>

                    <Text style={[commonStyles.ns400, { fontSize: 12, textAlignVertical: "bottom", marginBottom: 14 }]}>
                      9:55 am (YYC)
                    </Text>

                    <View style={{ rowGap: 6 }}>
                      <Text style={[commonStyles.ns400, { fontSize: 12, textAlign: 'center' }]}>
                        2d 00h 05m
                      </Text>

                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 18 }}>
                        <Text style={[commonStyles.ns400, styles.topDest]}>LHR</Text>
                        <View style={styles.dLine} />
                        <View style={styles.diamond} />
                        <View style={[styles.dLine, { width: 20 }]} />
                        <View style={styles.diamond} />
                        <View style={styles.dLine} />
                        <Text style={[commonStyles.ns400, styles.bottomDest]}>DEL</Text>
                      </View>
                    </View>

                    <View style={{ rowGap: 10, justifyContent: "flex-end", alignItems: "flex-end" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 13, color: "#7F5F01" }]}>
                        +2 days
                      </Text>

                      <Text style={[commonStyles.ns400, { fontSize: 12, marginBottom: 14 }]}>
                        10:45 aM(DAC)
                      </Text>
                    </View>
                  </View>
                </View>

                {/* pricing */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", columnGap: 30 }}>
                  {/* left */}
                  <View style={{ rowGap: 6, width: 160 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 20 }]}>Package Price</Text>
                    <Text style={[commonStyles.ns400, { color: b3 }]}>Per person</Text>
                    <Text style={[commonStyles.ns400, { color: b3 }]}>Flight + Hotel(incl. taxes & fees)</Text>
                  </View>

                  {/* right */}
                  <View style={{ alignItems: "flex-end", width: 150, rowGap: 6 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
                        $2811
                      </Text>
                      <Text style={[commonStyles.ns400, { fontSize: 11, top: 1 }]}>
                        .49
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, { fontSize: 12, textAlign: "right" }]}>
                      As low as $351/mo with Affirm <Text style={[commonStyles.lbB1, { fontSize: 12, color: blue, textDecorationLine: "underline" }]} onPress={() => Alert.alert("Learn More")}>Learn more</Text>
                    </Text>

                    {/* btn */}
                    <TouchableOpacity
                      style={styles.btn}
                    >
                      <Text style={[commonStyles.lbB1, { color: white, fontSize: 18 }]}>
                        Continue
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* calendar scroll */}
              <View style={styles.dpWrap}>
                <View style={{ alignItems: "center", marginLeft: 25, marginRight: 10 }}>
                  <Image
                    style={{ width: 25, height: 25, }}
                    source={icon.calendar}
                  />
                  <Text style={styles.dpMonthTxt}>Jan</Text>
                </View>

                <View style={{ flex: 1, marginRight: 6, borderRadius: 4 }}>
                  <ScrollView
                    style={{ columnGap: 10, rowGap: 10 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {data.map((_, i) => (
                      <View key={i} style={[styles.dateCont, i === 0 ? { marginLeft: 5 } : null]}>
                        <Text style={styles.dateContTxt}>$ 430</Text>
                        <Text style={styles.dateContSubTxt}>16, Tue </Text>
                      </View>
                    ))}
                  </ScrollView>
                </View>

                <TouchableOpacity style={[styles.arrowWrap, { right: 4 }]}>
                  <Image style={styles.arrow} source={icon.rightArrow} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.arrowWrap}>
                  <Image
                    style={[styles.arrow, { transform: [{ rotate: "180deg" }] }]}
                    source={icon.rightArrow}
                  />
                </TouchableOpacity>
              </View>

              {/*  */}
              <View style={styles.comWrapFull}>
                {/* sort scroll */}
                <View style={{}}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                      style={[styles.sortBox, styles.sbBorderL]}
                      onPress={() => navigation.navigate("fhtripfilter")}
                    >
                      <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                        <Image
                          style={{ width: 15, height: 15, tintColor: b1 }}
                          source={icon.star}
                        />

                        <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>
                          Recomended
                        </Text>

                        <Image
                          style={{ width: 15, height: 15 }}
                          source={icon.info}
                        />
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>
                          USD 1,746
                        </Text>
                        <Text style={[commonStyles.ns600, { fontSize: 6, top: 1, color: blue }]}>
                          .08
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.sortBox]}
                      onPress={() => navigation.navigate("fhtripfilter")}
                    >
                      <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                        <Image
                          style={{ width: 15, height: 15 }}
                          source={icon.priceTag}
                        />
                        <Text style={[commonStyles.ns600, { fontSize: 12, color: "#51555E" }]}>
                          Cheapest
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>
                          USD 1,746
                        </Text>
                        <Text style={[commonStyles.ns600, { fontSize: 6, top: 1, color: blue }]}>
                          .08
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.sortBox]}
                      onPress={() => navigation.navigate("fhtripfilter")}
                    >
                      <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}>
                        <Image
                          style={{ width: 15, height: 15 }}
                          source={icon.clock}
                        />
                        <Text style={[commonStyles.ns600, { fontSize: 12, color: "#51555E" }]}>
                          Shortest
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>
                          USD 1,746
                        </Text>
                        <Text style={[commonStyles.ns600, { fontSize: 6, top: 1, color: blue }]}>
                          .08
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.sortBox, styles.sbBorderR, { borderRightWidth: 0 }]}
                      onPress={() => navigation.navigate("fhtripfilter")}
                    >
                      <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}>
                        <Image
                          style={{ width: 15, height: 15 }}
                          source={icon.calendarDate}
                        />
                        <Text style={[commonStyles.ns600, { fontSize: 12, color: "#51555E" }]}>
                          Alternate Dates
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={[commonStyles.ns600, { fontSize: 12, color: blue }]}>
                          USD 1,746
                        </Text>
                        <Text style={[commonStyles.ns600, { fontSize: 6, top: 1, color: blue }]}>
                          .08
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </ScrollView>

                  <View style={{ backgroundColor: "#FEBD01", paddingVertical: 3, paddingHorizontal: 12, borderRadius: 16, position: "absolute", top: -12, left: 6 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 10, color: "#313541" }]}>Sort by</Text>
                  </View>
                </View>

                {/* tickets */}
                <View style={{ marginTop: 20, paddingHorizontal: 5, rowGap: 10 }}>
                  <View style={styles.comWrap}>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                      {/* left */}
                      <View style={{ width: "70%", rowGap: 15 }}>
                        <View style={{ rowGap: 10 }}>
                          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 8, alignSelf: "flex-start" }}>
                            <Image
                              style={{ width: 15, height: 15 }}
                              source={icon.vistara}
                            />

                            <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                              Vistara
                            </Text>
                          </View>

                          <View style={{ width: "90%", rowGap: 6 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>-BOM + LHR-</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01:00</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 10 }]}>1d 09h 45m</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09:45</Text>
                            </View>
                          </View>
                        </View>

                        <View style={{ rowGap: 10 }}>
                          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 8, alignSelf: "flex-start" }}>
                            <Image
                              style={{ width: 15, height: 15 }}
                              source={icon.canada}
                            />

                            <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                              Air Canada
                            </Text>
                          </View>

                          <View style={{ width: "90%", rowGap: 6 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>-LHR + BOM-</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01:00</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 10 }]}>2d 0h 5m</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09:45</Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      {/* right */}
                      <View style={{ rowGap: 10 }}>
                        <Text style={[commonStyles.ns600, { textAlign: 'center' }]}>$430</Text>

                        <TouchableOpacity
                          style={styles.btn}
                        >
                          <Text style={[commonStyles.lbB1, { color: white, fontSize: 18 }]}>
                            Selected
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* flight details */}
                    <View style={{ alignItems: "flex-end" }}>
                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}
                        onPress={() => navigation.navigate("fhfdetails")}
                      >
                        <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>
                          Flight Details
                        </Text>

                        <Image
                          style={{ width: 10, height: 10, transform: [{ rotate: "90deg" }], tintColor: blue }}
                          source={icon.rightArrow}
                        />
                      </TouchableOpacity>
                    </View>

                    {/* footer */}
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap", columnGap: 15, rowGap: 8 }}>
                      <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>
                        Fare Rules
                      </Text>

                      <Text style={[commonStyles.ns600, { fontSize: 10, color: "#EB2A2A" }]}>
                        NON-REFUNDABLE
                      </Text>

                      <Text style={[commonStyles.ns600, { fontSize: 10, color: b2 }]}>
                        ECONOMY
                      </Text>

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

                      {/* seat */}
                      <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                        <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                          <Image
                            style={{ width: 10, height: 10, tintColor: blue }}
                            source={icon.seat}
                          />
                        </View>

                        <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                          8 Seats
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.comWrap}>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                      {/* left */}
                      <View style={{ width: "70%", rowGap: 15 }}>
                        <View style={{ rowGap: 10 }}>
                          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 8, alignSelf: "flex-start" }}>
                            <Image
                              style={{ width: 15, height: 15 }}
                              source={icon.vistara}
                            />

                            <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                              Vistara
                            </Text>
                          </View>

                          <View style={{ width: "90%", rowGap: 6 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>-BOM + LHR-</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01:00</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 10 }]}>1d 09h 45m</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09:45</Text>
                            </View>
                          </View>
                        </View>

                        <View style={{ rowGap: 10 }}>
                          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 8, alignSelf: "flex-start" }}>
                            <Image
                              style={{ width: 15, height: 15 }}
                              source={icon.canada}
                            />

                            <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                              Air Canada
                            </Text>
                          </View>

                          <View style={{ width: "90%", rowGap: 6 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>-LHR + BOM-</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01:00</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 10 }]}>2d 0h 5m</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09:45</Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      {/* right */}
                      <View style={{ rowGap: 10 }}>
                        <Text style={[commonStyles.ns600, { textAlign: 'center' }]}>$430</Text>

                        <TouchableOpacity
                          style={styles.btn}
                        >
                          <Text style={[commonStyles.lbB1, { color: white, fontSize: 18 }]}>
                            Book
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* flight details */}
                    <View style={{ alignItems: "flex-end" }}>
                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}
                        onPress={() => navigation.navigate("fhfdetails")}
                      >
                        <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>
                          Flight Details
                        </Text>

                        <Image
                          style={{ width: 10, height: 10, transform: [{ rotate: "90deg" }], tintColor: blue }}
                          source={icon.rightArrow}
                        />
                      </TouchableOpacity>
                    </View>

                    {/* footer */}
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap", columnGap: 15, rowGap: 8 }}>
                      <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>
                        Fare Rules
                      </Text>

                      <Text style={[commonStyles.ns600, { fontSize: 10, color: "#EEB522" }]}>
                        PARTIAL REFUNDABLE
                      </Text>

                      <Text style={[commonStyles.ns600, { fontSize: 10, color: b2 }]}>
                        ECONOMY
                      </Text>

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

                      {/* seat */}
                      <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                        <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                          <Image
                            style={{ width: 10, height: 10, tintColor: blue }}
                            source={icon.seat}
                          />
                        </View>

                        <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                          8 Seats
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.comWrap}>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                      {/* left */}
                      <View style={{ width: "70%", rowGap: 15 }}>
                        <View style={{ rowGap: 10 }}>
                          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 8, alignSelf: "flex-start" }}>
                            <Image
                              style={{ width: 15, height: 15 }}
                              source={icon.vistara}
                            />

                            <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                              Vistara
                            </Text>
                          </View>

                          <View style={{ width: "90%", rowGap: 6 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>-BOM + LHR-</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01:00</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 10 }]}>1d 09h 45m</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09:45</Text>
                            </View>
                          </View>
                        </View>

                        <View style={{ rowGap: 10 }}>
                          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 8, alignSelf: "flex-start" }}>
                            <Image
                              style={{ width: 15, height: 15 }}
                              source={icon.canada}
                            />

                            <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                              Air Canada
                            </Text>
                          </View>

                          <View style={{ width: "90%", rowGap: 6 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>-LHR + BOM-</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01:00</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 10 }]}>2d 0h 5m</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09:45</Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      {/* right */}
                      <View style={{ rowGap: 10 }}>
                        <Text style={[commonStyles.ns600, { textAlign: 'center' }]}>$430</Text>

                        <TouchableOpacity
                          style={styles.btn}
                        >
                          <Text style={[commonStyles.lbB1, { color: white, fontSize: 18 }]}>
                            Book
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* flight details */}
                    <View style={{ alignItems: "flex-end" }}>
                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}
                        onPress={() => navigation.navigate("fhfdetails")}
                      >
                        <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>
                          Flight Details
                        </Text>

                        <Image
                          style={{ width: 10, height: 10, transform: [{ rotate: "90deg" }], tintColor: blue }}
                          source={icon.rightArrow}
                        />
                      </TouchableOpacity>
                    </View>

                    {/* footer */}
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap", columnGap: 15, rowGap: 8 }}>
                      <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>
                        Fare Rules
                      </Text>

                      <Text style={[commonStyles.ns600, { fontSize: 10, color: "#34AE39" }]}>
                        REFUNDABLE
                      </Text>

                      <Text style={[commonStyles.ns600, { fontSize: 10, color: b2 }]}>
                        ECONOMY
                      </Text>

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

                      {/* seat */}
                      <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                        <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                          <Image
                            style={{ width: 10, height: 10, tintColor: blue }}
                            source={icon.seat}
                          />
                        </View>

                        <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                          8 Seats
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.comWrap}>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                      {/* left */}
                      <View style={{ width: "70%", rowGap: 15 }}>
                        <View style={{ rowGap: 10 }}>
                          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 8, alignSelf: "flex-start" }}>
                            <Image
                              style={{ width: 15, height: 15 }}
                              source={icon.vistara}
                            />

                            <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                              Vistara
                            </Text>
                          </View>

                          <View style={{ width: "90%", rowGap: 6 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>-BOM + LHR-</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01:00</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 10 }]}>1d 09h 45m</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09:45</Text>
                            </View>
                          </View>
                        </View>

                        <View style={{ rowGap: 10 }}>
                          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 8, alignSelf: "flex-start" }}>
                            <Image
                              style={{ width: 15, height: 15 }}
                              source={icon.canada}
                            />

                            <Text style={[commonStyles.lbB1, { fontSize: 16 }]}>
                              Air Canada
                            </Text>
                          </View>

                          <View style={{ width: "90%", rowGap: 6 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>DAC</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>-LHR + BOM-</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14, color: b3 }]}>YYC</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>01:00</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 10 }]}>2d 0h 5m</Text>
                              <Text style={[commonStyles.ns600, { fontSize: 14 }]}>09:45</Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      {/* right */}
                      <View style={{ rowGap: 10 }}>
                        <Text style={[commonStyles.ns600, { textAlign: 'center' }]}>$430</Text>

                        <TouchableOpacity
                          style={styles.btn}
                        >
                          <Text style={[commonStyles.lbB1, { color: white, fontSize: 18 }]}>
                            Book
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* flight details */}
                    <View style={{ alignItems: "flex-end" }}>
                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}
                        onPress={() => navigation.navigate("fhfdetails")}
                      >
                        <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>
                          Flight Details
                        </Text>

                        <Image
                          style={{ width: 10, height: 10, transform: [{ rotate: "90deg" }], tintColor: blue }}
                          source={icon.rightArrow}
                        />
                      </TouchableOpacity>
                    </View>

                    {/* footer */}
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap", columnGap: 15, rowGap: 8 }}>
                      <Text style={[commonStyles.ns600, { fontSize: 10, color: blue }]}>
                        Fare Rules
                      </Text>

                      <Text style={[commonStyles.ns600, { fontSize: 10, color: "#EEB522" }]}>
                        PARTIAL REFUNDABLE
                      </Text>

                      <Text style={[commonStyles.ns600, { fontSize: 10, color: b2 }]}>
                        ECONOMY
                      </Text>

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

                      {/* seat */}
                      <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                        <View style={[styles.seatWrap, { width: 15, height: 15 }]}>
                          <Image
                            style={{ width: 10, height: 10, tintColor: blue }}
                            source={icon.seat}
                          />
                        </View>

                        <Text style={[commonStyles.ns600, { fontSize: 10, color: b3 }]}>
                          8 Seats
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

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
            onPress={() => navigation.navigate("fhfr")}
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

export default FhBaseReview;

const styles = StyleSheet.create({
  parent: { flex: 1 },
  wrap: { flex: 1 },
  nav: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 30,
    paddingRight: 5,
  },
  navHeadTxt: {
    color: b1,
    fontSize: 15,
    fontFamily: "LondonBetween",
  },
  navSubHeadTxt: {
    color: b3,
    fontSize: 12,
    fontFamily: "LondonBetween",
  },
  right: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  rightImg: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
    transform: [{ rotate: "180deg" }]
  },
  dpWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: blue,
    marginHorizontal: 5,
    borderRadius: 4,
    paddingVertical: 5,
  },
  dpMonthTxt: {
    fontFamily: "NunitoSans_10pt-Bold",
    fontSize: 18,
    color: white,
    marginTop: 6,
  },
  dateCont: {
    backgroundColor: "#E3F8FF",
    alignItems: "center",
    borderRadius: 4,
    padding: 4,
    marginRight: 5,
  },
  dateContTxt: {
    fontFamily: "Inter-Regular",
    color: "#166B86",
    fontSize: 15,
  },
  dateContSubTxt: {
    color: "#166B86",
    fontSize: 14,
    marginTop: 10
  },
  comWrap: {
    backgroundColor: white,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 6,
    borderRadius: 8,
    elevation: 4,
    rowGap: 10,
  },
  comWrapFull: {
    backgroundColor: white,
    borderRadius: 8,
    elevation: 4,
    rowGap: 10,
  },
  depart: {
    flexDirection: "row",
    columnGap: 10,
  },
  dLine: {
    backgroundColor: b3,
    height: 1.9,
    width: 30,
  },
  diamond: {
    width: 7,
    height: 7,
    backgroundColor: b3,
    transform: [{ rotate: "45deg" }],
  },
  topDest: {
    fontSize: 8,
    color: b3,
    position: "absolute",
    top: 0,
    left: 25
  },
  bottomDest: {
    fontSize: 8,
    color: b3,
    position: "absolute",
    bottom: 0,
    right: 25
  },
  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    width: "100%"
  },
  arrow: {
    width: 20,
    height: 20,
  },
  arrowWrap: {
    position: "absolute",
  },
  sortBox: {
    backgroundColor: white,
    paddingTop: 12,
    paddingBottom: 6,
    paddingLeft: 4,
    paddingRight: 8,
    elevation: 4,
    borderRightWidth: 1,
    rowGap: 8,
    minWidth: 105,
  },
  sbBorderL: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  sbBorderR: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  seatWrap: {
    backgroundColor: "rgba(33, 180, 226, 0.1)",
    borderRadius: 22,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});