import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { b3, white } from '../../../../config/colors';
import commonStyles from '../../../../assets/css/CommonFonts';

const Policies = ({ }) => {
  return (
    <View style={{ flex: 1, rowGap: 10 }}>
      {/* cancellation */}
      <View style={styles.wrapper}>
        <View style={{ paddingLeft: 25, paddingRight: 15 }}>
          <Text style={[commonStyles.ns400, { fontSize: 18 }]}>
            Cancellation & Date Change
          </Text>

          <View style={{ marginTop: 40, rowGap: 10 }}>
            <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
              Package Cancellation Policy
            </Text>
            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>
              Cancellation not possible after booking
            </Text>
            <Text style={[commonStyles.ns400, { fontSize: 16 }]}>
              Package Date Change Policy
            </Text>
            <Text style={[commonStyles.ns400, { fontSize: 16, color: "#EB2026" }]}>
              Date Change not possible after booking
            </Text>
          </View>
        </View>
      </View>

      {/* t&c */}
      <View style={styles.wrapper}>
        <Text style={[commonStyles.ns400, { fontSize: 18, textAlign: "center" }]}>
          Terms and Conditions
        </Text>

        <View style={{ marginTop: 20, rowGap: 10 }}>
          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Please note that once your booking is confirmed, you will receive an e-mail as well as an SMS on your registered mobile number confirming your booking. However, if you would like to get in touch with us please call us on 0124-4859749.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Please note that these packages are customizable, which means that you will be able to make changes to the itinerary/activity if you so desire.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Hotel/Cruise Bed types are subject to availability in cases where options are given Example – Double/Twin Bed or 1 Queen-size Bed +1 Single Sofa Bed/1 Single Sofa Bed (or similar).
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Visa for Visa on Arrival destinations (Thailand/Bali/Mauritius/Maldives) are not included in the packages.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            A maximum of 3 adults are allowed in one room and shall be provided a mattress/rollaway bed if mentioned. Children are not given an extra bed, if in case required kindly connect with the hotel directly on availability and charges.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Airline seats and hotel rooms are subject to availability at the time of booking.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            The final payment will be calculated as per the activities reflecting on the website which will be outlined in the confirmatory e-mail sent to you.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Personal expenses such as laundry, telephone calls, room service, alcoholic beverages, mini bar etc., are not included.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            In case your package needs to be cancelled due to any natural calamity, weather conditions etc. MakeMyTrip shall strive to give you the maximum possible refund subject to the agreement made with our trade partners/vendors.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            If payment is not made as per the schedule provided in the first booking confirmation e-mail, MakeMyTrip reserves the right to cancel the booking after attempting to get in touch with you. Refunds would be as per the package cancellation policy.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            The passenger names in the booking form should be exactly as per passports. . MakeMyTrip will not bear any liability for the name change fee, if incorrect names and ages have been added at the time of booking.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            To travel to any international destination, your passport must have a minimum validity of 06 months from your planned date of return.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            MakeMyTrip will not bear any liability for the name change fee, if incorrect names and ages have been added at the time of booking.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Please note that if your package includes a flight which is a low cost carrier (Indigo, Scoot Airlines, AirAsia) then baggage/food/drinks will not be included in the package unless mentioned. Baggage can be added as per your requirement at an additional cost depending on the airlines and destination.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Standard check-in time at the hotel is normally 3:00 pm and check-out is 11:00 am. An early check-in, or a late check-out is solely based on the discretion of the hotel. In case the selected hotel is unavailable for booking, an alternate arrangement will be offered to the customer in another hotel of a similar category.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Some hotels may ask for a security deposit during check-in, which is refundable at check-out subject to the hotels policy
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Please note that Day at Leisure essentially implies that no sightseeing activities have been included for that day
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Kindly be on time for your activities, tours and transfers. Most countries are quite strict about following a schedule
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            The package price do not include special dinner or mandatory charges at time levied by the hotels during New Year and Christmas or any special occasions.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            For any paid activity which is non-operational due to any unforeseen reason, we will process refund & same should reach the guest within 30 days of processing the refund.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Also, for any activity which is complimentary and not charged to MMT & guest, no refund will be processed.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            The activity changes are subject to availability and operational days, the itinerary might change due to the same on ground.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            If Visa is not visible in the package, then it is not included. Please note that the final decision regarding a visa application rests solely with the respective Embassy/Consulate.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Do check your flight status 24 hours before the scheduled flight departure, since airline schedules are subject to change without notice.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Cruise Gratuity & tourism taxes will be required to be paid directly unless mentioned/informed.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Cost of deviation and cost of extension of the validity on your ticket is not included.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            For queries regarding cancellations and refunds, please refer to our Cancellation Policy.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            Disputes, if any, shall be subject to the exclusive jurisdiction of the courts in New Delhi.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            TCS Conditions.
          </Text>

          <Text style={[commonStyles.ns400, { color: b3 }]}>
            TCS Conditions - As per section 206CCA of Income Tax Act 1961, w.e.f. 01-Jul-21 onwards, TCS will be charged @10% on overseas tour packages in case you have not filed your income tax returns for two preceding years; and the aggregate TDS and TCS is each tax year is INR 50,000 or more. - On validating the PAN if it is found that you have not filed your Income Tax Returns for two preceding years and aggregate TCS and TCS exceeds INR 50,000, an additional TCS @5% will be recovered from you or booking will get cancelled and cancellation ch
          </Text>
        </View>
      </View>
    </View>
  )
};

export default Policies;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    borderRadius: 4,
    marginHorizontal: 15,
    elevation: 3,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});