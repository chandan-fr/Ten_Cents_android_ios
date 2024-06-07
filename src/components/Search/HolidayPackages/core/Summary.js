import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { b1, b3, white } from '../../../../config/colors';
import icon from '../../../../config/IconAssets';
import commonStyles from '../../../../assets/css/CommonFonts';

const Summary = ({ }) => {  
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.lato, { color: b3, textAlign: "center" }]}>
        Arrival in Male by Vistara Flight UK-273 | Departing on 20 Dec, 11:55 AM | Arriving on 20 Dec, 03:30 PM | Includes Check In Baggage
      </Text>

      <Text style={[styles.lato, { fontSize: 16, textAlign: "center" }]}>
        Maldives - 5 Nights Stay
      </Text>

      {/* journey details day wise */}
      <View>
        {/* day 1 */}
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          {/* left */}
          <View style={{ width: 90, rowGap: 3 }}>
            <Text style={[commonStyles.ns600, { fontSize: 12 }]}>Day 1</Text>
            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Dec 21, Thu</Text>
          </View>

          {/* right */}
          <View style={{ flex: 1, rowGap: 3 }}>
            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
              Check in to
            </Text>

            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
              Meeru Island Resort & Spa - Holidays Selections, 4 Star
            </Text>

            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 8 }}>
              <Image
                style={{ width: 15, height: 15, marginTop: 1 }}
                source={icon.dinner}
              />

              <View style={{ flex: 1, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections , Maldives
                </Text>
              </View>
            </View>

            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
              Speedboat from Velana International Airport to Meeru Island- Shared Transfers (4 Nights and above)
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginVertical: 10 }} />

        {/* day 2 */}
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          {/* left */}
          <View style={{ width: 90, rowGap: 3 }}>
            <Text style={[commonStyles.ns600, { fontSize: 12 }]}>Day 2</Text>
            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Dec 22, Fri</Text>
          </View>

          {/* right */}
          <View style={{ flex: 1, rowGap: 3 }}>
            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 8 }}>
              <Image
                style={{ width: 15, height: 15, marginTop: 1 }}
                source={icon.dinner}
              />

              <View style={{ flex: 1, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections , Maldives
                </Text>
              </View>
            </View>

            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
              Complimentary Snorkelling Trip at Meeru Island Resort
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginVertical: 10 }} />

        {/* day 3 */}
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          {/* left */}
          <View style={{ width: 90, rowGap: 3 }}>
            <Text style={[commonStyles.ns600, { fontSize: 12 }]}>Day 3</Text>
            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Dec 23, Sat</Text>
          </View>

          {/* right */}
          <View style={{ flex: 1, rowGap: 3 }}>
            <View>
              <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                Check out from
              </Text>

              <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                Meeru Island Resort & Spa - Holidays Selections, 4 Star
              </Text>
            </View>

            <View style={{}}>
              <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                Check in to
              </Text>

              <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                Meeru Island Resort & Spa - Holidays Selections, 4 Star
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 8 }}>
              <Image
                style={{ width: 15, height: 15, marginTop: 1 }}
                source={icon.dinner}
              />

              <View style={{ flex: 1, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections , Maldives
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginVertical: 10 }} />

        {/* day 4 */}
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          {/* left */}
          <View style={{ width: 90, rowGap: 3 }}>
            <Text style={[commonStyles.ns600, { fontSize: 12 }]}>Day 4</Text>
            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Dec 24, Sun</Text>
          </View>

          {/* right */}
          <View style={{ flex: 1, rowGap: 3 }}>
            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 8 }}>
              <Image
                style={{ width: 15, height: 15, marginTop: 1 }}
                source={icon.dinner}
              />

              <View style={{ flex: 1, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections , Maldives
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: "#D9D9D9", height: 1.5, marginVertical: 10 }} />

        {/* day 5 */}
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          {/* left */}
          <View style={{ width: 90, rowGap: 3 }}>
            <Text style={[commonStyles.ns600, { fontSize: 12 }]}>Day 5</Text>
            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Dec 25, Mon</Text>
          </View>

          {/* right */}
          <View style={{ flex: 1, rowGap: 3 }}>
            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
              Check out From
            </Text>

            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
              Meeru Island Resort & Spa - Holidays Selections, 4 Star
            </Text>

            <View style={{ flexDirection: "row", alignItems: "flex-start", columnGap: 8 }}>
              <Image
                style={{ width: 15, height: 15, marginTop: 1 }}
                source={icon.dinner}
              />

              <View style={{ flex: 1, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections , Maldives
                </Text>
              </View>
            </View>

            <Text style={[commonStyles.ns400, { fontSize: 12 }]}>
              Speedboat from Velana International Airport to Meeru Island- Shared Transfers (4 Nights and above)
            </Text>
          </View>
        </View>
      </View>

      <Text style={[styles.lato, { color: b3, textAlign: "justify" }]}>
        Departure from Male by Vistara Flight UK-274 | Departing on 24 Dec, 04:30 PM | Arriving on 24 Dec, 09:05 PM | Includes Check In Baggage
      </Text>
    </View>
  )
};

export default Summary;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 15,
    rowGap: 15,
    marginBottom: 5,
  },
  lato: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
    color: b1,
  },
});