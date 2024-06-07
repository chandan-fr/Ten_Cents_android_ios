import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import { b1, b2, b3, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';

const { width, height } = Dimensions.get("window");

const ChPackegeDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar translucent={true} barStyle={"light-content"} />
      <BgGradient width={width} height={height * 0.1} />
      <Header />

      <View style={styles.body}>
        <ScrollView
          style={{ marginHorizontal: 5, marginTop: 10, flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ rowGap: 10 }}>
            {/* ticket */}
            <View style={styles.comWrap}>
              {/* hotel name */}
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', columnGap: 15 }}>
                {/* left */}
                <Image
                  style={{ width: 100, height: 65 }}
                  source={image.hotelimg2}
                />

                {/* right */}
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
            </View>

            {/* car details */}
            <View style={[styles.comWrap, { rowGap: 10 }]}>
              {/* car name & desp */}
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                <View style={{ flex: 2, rowGap: 10 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}>
                    <Text style={[commonStyles.ns400, { fontSize: 18 }]}>
                      Economy
                    </Text>
                    <Image
                      style={{}}
                      source={image.alamo}
                    />
                  </View>

                  <Text style={commonStyles.ns400}>
                    Chevrolet Spark Or Similar
                  </Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                  <Image
                    style={{ width: 90, height: 52 }}
                    source={image.car1}
                  />
                </View>
              </View>

              {/* car perks */}
              <View style={styles.carPerks}>
                <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: blue }}
                    source={icon.speedometer}
                  />

                  <Text style={commonStyles.ns400}>
                    Unlimited mileage
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: blue }}
                    source={icon.plane}
                  />

                  <Text style={commonStyles.ns400}>
                    At Airport
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: blue }}
                    source={icon.airConditioner}
                  />

                  <Text style={commonStyles.ns400}>
                    Air Conditioner
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: blue }}
                    source={icon.gearshift}
                  />

                  <Text style={commonStyles.ns400}>
                    Automatic
                  </Text>
                </View>
              </View>

              {/* change car */}
              <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20, width: 210 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                    <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                      <Image
                        style={{ width: 25, height: 25, tintColor: blue }}
                        source={icon.baggage}
                      />
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                      2 Bags
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                    <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                      <Image
                        style={{ width: 20, height: 20, tintColor: blue }}
                        source={icon.seat}
                      />
                    </View>

                    <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                      4 Seats
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.chngCar}
                >
                  <Text style={[commonStyles.lbB1, { color: white }]}>
                    Change Car
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dottedLine} />

              {/* bottom part */}
              <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
                <View style={{}}>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    Pick-up: <Text style={commonStyles.ns400}>
                      2000 Airport Road Ne AB, CA, | Thu, Dec 21 2023 / 10:00 AM
                    </Text>
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    Drop-off: <Text style={commonStyles.ns400}>
                      Same as Pick-up location | Thu, Jan 04 2024 / 10:00 AM
                    </Text>
                  </Text>
                </View>
              </View>
            </View>

            {/* pricing */}
            <View style={styles.comWrap}>
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
                    style={[styles.btn, { width: "100%" }]}
                  >
                    <Text style={[commonStyles.lbB1, { color: white, fontSize: 18 }]}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* othres car pkg */}
            <View style={{ rowGap: 10 }}>
              <View style={styles.carItem}>
                {/* car name & desp */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                  <View style={{ flex: 2, rowGap: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                      Economy ALAMO Car
                    </Text>

                    <Text style={commonStyles.ns400}>
                      Chevrolet Spark Or Similar
                    </Text>
                  </View>

                  <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                    <Image
                      style={{ width: 90, height: 52 }}
                      source={image.car1}
                    />
                  </View>
                </View>

                {/* car perks */}
                <View style={styles.carPerks}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.speedometer}
                    />

                    <Text style={commonStyles.ns400}>
                      Unlimited mileage
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.plane}
                    />

                    <Text style={commonStyles.ns400}>
                      At Airport
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.airConditioner}
                    />

                    <Text style={commonStyles.ns400}>
                      Air Conditioner
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.gearshift}
                    />

                    <Text style={commonStyles.ns400}>
                      Automatic
                    </Text>
                  </View>
                </View>

                {/* price & book */}
                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, marginRight: 8 }}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                        USD 500
                      </Text>
                      <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                        .99
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                      Per Day
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.btn, { paddingHorizontal: 30 }]}
                    onPress={() => navigation.navigate("cardetails")}
                  >
                    <Text style={[commonStyles.lbB1, { color: white }]}>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.dashedLine} />

                {/* bottom part */}
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                  <View>
                    <Image
                      style={{}}
                      source={image.alamo}
                    />
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 25, height: 25, tintColor: blue }}
                          source={icon.baggage}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        2 Bags
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 20, height: 20, tintColor: blue }}
                          source={icon.seat}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        4 Seats
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.carItem}>
                {/* car name & desp */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                  <View style={{ flex: 2, rowGap: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                      Compact
                    </Text>

                    <Text style={commonStyles.ns400}>
                      Nissan Versa Or Similar
                    </Text>
                  </View>

                  <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                    <Image
                      style={{ width: 90, height: 52 }}
                      source={image.car2}
                    />
                  </View>
                </View>

                {/* car perks */}
                <View style={styles.carPerks}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.speedometer}
                    />

                    <Text style={commonStyles.ns400}>
                      Unlimited mileage
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.plane}
                    />

                    <Text style={commonStyles.ns400}>
                      At Airport
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.airConditioner}
                    />

                    <Text style={commonStyles.ns400}>
                      Air Conditioner
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.gearshift}
                    />

                    <Text style={commonStyles.ns400}>
                      Automatic
                    </Text>
                  </View>
                </View>

                {/* price & book */}
                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, marginRight: 8 }}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                        USD 506
                      </Text>
                      <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                        .99
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                      Per Day
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.btn, { paddingHorizontal: 30 }]}
                    onPress={() => navigation.navigate("cardetails")}
                  >
                    <Text style={[commonStyles.lbB1, { color: white }]}>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.dashedLine} />

                {/* bottom part */}
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                  <View>
                    <Image
                      style={{}}
                      source={image.alamo}
                    />
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 25, height: 25, tintColor: blue }}
                          source={icon.baggage}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        2 Bags
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 20, height: 20, tintColor: blue }}
                          source={icon.seat}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        4 Seats
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.carItem}>
                {/* car name & desp */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                  <View style={{ flex: 2, rowGap: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                      Mid-Size
                    </Text>

                    <Text style={commonStyles.ns400}>
                      Kia Forte Or Similar
                    </Text>
                  </View>

                  <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                    <Image
                      style={{ width: 90, height: 52 }}
                      source={image.car3}
                    />
                  </View>
                </View>

                {/* car perks */}
                <View style={styles.carPerks}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.speedometer}
                    />

                    <Text style={commonStyles.ns400}>
                      Unlimited mileage
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.plane}
                    />

                    <Text style={commonStyles.ns400}>
                      At Airport
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.airConditioner}
                    />

                    <Text style={commonStyles.ns400}>
                      Air Conditioner
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.gearshift}
                    />

                    <Text style={commonStyles.ns400}>
                      Automatic
                    </Text>
                  </View>
                </View>

                {/* price & book */}
                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, marginRight: 8 }}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                        USD 656
                      </Text>
                      <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                        .99
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                      Per Day
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.btn, { paddingHorizontal: 30 }]}
                    onPress={() => navigation.navigate("cardetails")}
                  >
                    <Text style={[commonStyles.lbB1, { color: white }]}>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.dashedLine} />

                {/* bottom part */}
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                  <View>
                    <Image
                      style={{}}
                      source={image.alamo}
                    />
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 25, height: 25, tintColor: blue }}
                          source={icon.baggage}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        2 Bags
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 20, height: 20, tintColor: blue }}
                          source={icon.seat}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        4 Seats
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.carItem}>
                {/* car name & desp */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                  <View style={{ flex: 2, rowGap: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                      Compact SUV
                    </Text>

                    <Text style={commonStyles.ns400}>
                      Toyota C-hr Or Similar
                    </Text>
                  </View>

                  <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                    <Image
                      style={{ width: 90, height: 52 }}
                      source={image.car1}
                    />
                  </View>
                </View>

                {/* car perks */}
                <View style={styles.carPerks}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.speedometer}
                    />

                    <Text style={commonStyles.ns400}>
                      Unlimited mileage
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.plane}
                    />

                    <Text style={commonStyles.ns400}>
                      At Airport
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.airConditioner}
                    />

                    <Text style={commonStyles.ns400}>
                      Air Conditioner
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.gearshift}
                    />

                    <Text style={commonStyles.ns400}>
                      Automatic
                    </Text>
                  </View>
                </View>

                {/* price & book */}
                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, marginRight: 8 }}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                        USD 708
                      </Text>
                      <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                        .99
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                      Per Day
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.btn, { paddingHorizontal: 30 }]}
                    onPress={() => navigation.navigate("cardetails")}
                  >
                    <Text style={[commonStyles.lbB1, { color: white }]}>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.dashedLine} />

                {/* bottom part */}
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                  <View>
                    <Image
                      style={{}}
                      source={image.alamo}
                    />
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 25, height: 25, tintColor: blue }}
                          source={icon.baggage}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        2 Bags
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 20, height: 20, tintColor: blue }}
                          source={icon.seat}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        4 Seats
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.carItem}>
                {/* car name & desp */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                  <View style={{ flex: 2, rowGap: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                      Standard
                    </Text>

                    <Text style={commonStyles.ns400}>
                      Volkswagen Jetta Or Similar
                    </Text>
                  </View>

                  <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                    <Image
                      style={{ width: 90, height: 52 }}
                      source={image.car1}
                    />
                  </View>
                </View>

                {/* car perks */}
                <View style={styles.carPerks}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.speedometer}
                    />

                    <Text style={commonStyles.ns400}>
                      Unlimited mileage
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.plane}
                    />

                    <Text style={commonStyles.ns400}>
                      At Airport
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.airConditioner}
                    />

                    <Text style={commonStyles.ns400}>
                      Air Conditioner
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.gearshift}
                    />

                    <Text style={commonStyles.ns400}>
                      Automatic
                    </Text>
                  </View>
                </View>

                {/* price & book */}
                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, marginRight: 8 }}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                        USD 670
                      </Text>
                      <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                        .99
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                      Per Day
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.btn, { paddingHorizontal: 30 }]}
                    onPress={() => navigation.navigate("cardetails")}
                  >
                    <Text style={[commonStyles.lbB1, { color: white }]}>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.dashedLine} />

                {/* bottom part */}
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                  <View>
                    <Image
                      style={{}}
                      source={image.alamo}
                    />
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 25, height: 25, tintColor: blue }}
                          source={icon.baggage}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        2 Bags
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 20, height: 20, tintColor: blue }}
                          source={icon.seat}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        4 Seats
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.carItem}>
                {/* car name & desp */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                  <View style={{ flex: 2, rowGap: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                      Standard SUV
                    </Text>

                    <Text style={commonStyles.ns400}>
                      Ford Edge Or Similar
                    </Text>
                  </View>

                  <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                    <Image
                      style={{ width: 90, height: 52 }}
                      source={image.car1}
                    />
                  </View>
                </View>

                {/* car perks */}
                <View style={styles.carPerks}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.speedometer}
                    />

                    <Text style={commonStyles.ns400}>
                      Unlimited mileage
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.plane}
                    />

                    <Text style={commonStyles.ns400}>
                      At Airport
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.airConditioner}
                    />

                    <Text style={commonStyles.ns400}>
                      Air Conditioner
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.gearshift}
                    />

                    <Text style={commonStyles.ns400}>
                      Automatic
                    </Text>
                  </View>
                </View>

                {/* price & book */}
                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, marginRight: 8 }}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                        USD 670
                      </Text>
                      <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                        .99
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                      Per Day
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.btn, { paddingHorizontal: 30 }]}
                    onPress={() => navigation.navigate("cardetails")}
                  >
                    <Text style={[commonStyles.lbB1, { color: white }]}>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.dashedLine} />

                {/* bottom part */}
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                  <View>
                    <Image
                      style={{}}
                      source={icon.entLogo}
                    />
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 25, height: 25, tintColor: blue }}
                          source={icon.baggage}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        2 Bags
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 20, height: 20, tintColor: blue }}
                          source={icon.seat}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        4 Seats
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.carItem}>
                {/* car name & desp */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, }}>
                  <View style={{ flex: 2, rowGap: 10 }}>
                    <Text style={[commonStyles.ns600, { fontSize: 20 }]}>
                      Fullsize
                    </Text>

                    <Text style={commonStyles.ns400}>
                      Toyota Camry Or Similar
                    </Text>
                  </View>

                  <View style={{ flex: 1, alignItems: 'center', rowGap: 10 }}>
                    <Image
                      style={{ width: 90, height: 52 }}
                      source={image.car1}
                    />
                  </View>
                </View>

                {/* car perks */}
                <View style={styles.carPerks}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.speedometer}
                    />

                    <Text style={commonStyles.ns400}>
                      Unlimited mileage
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.plane}
                    />

                    <Text style={commonStyles.ns400}>
                      At Airport
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.airConditioner}
                    />

                    <Text style={commonStyles.ns400}>
                      Air Conditioner
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 8 }}>
                    <Image
                      style={{ width: 15, height: 15, tintColor: blue }}
                      source={icon.gearshift}
                    />

                    <Text style={commonStyles.ns400}>
                      Automatic
                    </Text>
                  </View>
                </View>

                {/* price & book */}
                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: "space-between", marginLeft: 15, marginRight: 8 }}>
                  <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[commonStyles.ns400, { fontSize: 20 }]}>
                        USD 670
                      </Text>
                      <Text style={[commonStyles.ns400, { fontSize: 12, alignSelf: "flex-start", top: 3 }]}>
                        .99
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                      Per Day
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.btn, { paddingHorizontal: 30 }]}
                    onPress={() => navigation.navigate("cardetails")}
                  >
                    <Text style={[commonStyles.lbB1, { color: white }]}>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.dashedLine} />

                {/* bottom part */}
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginLeft: 15, marginBottom: 8 }}>
                  <View>
                    <Image
                      style={{}}
                      source={icon.entLogo}
                    />
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, columnGap: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 25, height: 25, tintColor: blue }}
                          source={icon.baggage}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        2 Bags
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                      <View style={[styles.seatWrap, { width: 35, height: 35 }]}>
                        <Image
                          style={{ width: 20, height: 20, tintColor: blue }}
                          source={icon.seat}
                        />
                      </View>

                      <Text style={[commonStyles.ns600, { fontSize: 13, color: b3 }]}>
                        4 Seats
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* pagination */}
            <View style={styles.pagination}>
              <TouchableOpacity
                style={styles.pBox}
              >
                <Image
                  style={[styles.pBoxImg, { transform: [{ rotate: "180deg" }] }]}
                  source={icon.rightArrow}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.pBoxActive}
              >
                <Text style={[commonStyles.ns400, styles.pBoxTxtActive]}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.pBox}
              >
                <Text style={[commonStyles.ns400, styles.pBoxTxt]}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.pBox}
              >
                <Text style={[commonStyles.ns400, styles.pBoxTxt]}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.pBox}
              >
                <Text style={[commonStyles.ns400, styles.pBoxTxt]}>...</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.pBox}
              >
                <Text style={[commonStyles.ns400, styles.pBoxTxt]}>70</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.pBox}
              >
                <Image
                  style={styles.pBoxImgActive}
                  source={icon.rightArrow}
                />
              </TouchableOpacity>
            </View>
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
            onPress={() => navigation.navigate("chreview")}
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

export default ChPackegeDetails;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    marginTop: 18,
    flex: 1,
  },
  comWrap: {
    backgroundColor: white,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 4,
    rowGap: 15,
  },
  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  dottedLine: {
    borderColor: b3,
    borderWidth: 1,
    marginTop: 5,
    borderStyle: "dashed",
  },
  dashedLine: {
    borderColor: b3,
    borderWidth: 1,
    marginVertical: 15,
    borderStyle: "dashed",
  },
  carItem: {
    backgroundColor: white,
    elevation: 3,
    paddingTop: 15,
    borderRadius: 8,
  },
  carPerks: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginTop: 15,
    justifyContent: "space-between",
    rowGap: 10,
    marginLeft: 15,
    width: 250,
  },
  chngCar: {
    borderRadius: 8,
    backgroundColor: b2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  seatWrap: {
    backgroundColor: "rgba(33, 180, 226, 0.1)",
    borderRadius: 22,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    flexDirection: "row",
    alignItems: 'center',
    columnGap: 10,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 6
  },
  pBox: {
    backgroundColor: white,
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  pBoxActive: {
    backgroundColor: blue,
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  pBoxImg: {
    width: 15,
    height: 15,
    tintColor: blue,
    opacity: 0.3,
  },
  pBoxImgActive: {
    width: 15,
    height: 15,
    tintColor: blue,
  },
  pBoxTxt: {
    fontSize: 12,
    color: blue,
  },
  pBoxTxtActive: {
    fontSize: 12,
    color: white,
  },
});