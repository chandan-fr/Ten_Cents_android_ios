import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { b3, rs1, rs2, white } from '../../../config/colors';
import commonStyles from '../../../assets/css/CommonFonts';

const MtRentalCars = ({ navigation, route }) => {
  const { srcName } = route?.params;

  return (
    <View style={styles.container}>
      {/* heading */}
      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <Text style={[commonStyles.lbB1, { fontSize: 16, color: b3 }]}>
          {srcName}
        </Text>
      </View>

      {/* subheading */}
      <View style={{ alignItems: 'center', marginTop: 5 }}>
        <Text style={[commonStyles.lbB1, { fontSize: 14, color: b3 }]}>
          Rental Cars
        </Text>
      </View>

      <View style={styles.notFound}>
        <Text style={[commonStyles.ns400, { color: rs2 }]}>
          No Trips found - You have no upcoming trip scheduled
        </Text>
      </View>
    </View>
  )
};

export default MtRentalCars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  notFound: {
    backgroundColor: rs1,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    paddingHorizontal: 25,
    marginTop: 60,
    marginHorizontal: 6,
    paddingVertical: 5,
  },
});