import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { b1, black, white } from '../../../config/colors';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const SearchPanel = ({ setOuterScrollEnabled }) => {
    const { airport_codes } = useSelector(state => state.flightSlice);

    return (
        <View style={{ flex: 1 }}>
            <GestureHandlerRootView style={{ flex: 1, justifyContent: "center" }}>
                {airport_codes.length ? <FlatList
                    // style={{ flex: 1 }}
                    data={airport_codes}
                    nestedScrollEnabled={true}
                    onTouchStart={() => setOuterScrollEnabled(false)}
                    onMomentumScrollEnd={() => setOuterScrollEnabled(true)}
                    onScrollEndDrag={() => setOuterScrollEnabled(true)}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(_, i) => i.toString()}
                    scrollEnabled={true}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={styles.airportNameWrap}
                        >
                            <Text>Name: {item.name}</Text>
                            <Text>Code: {item.iataCode}</Text>
                            <Text>Country: {item.country}</Text>
                        </TouchableOpacity>
                    )}
                />
                    :
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{color: b1, fontFamily: 'NunitoSans_10pt-SemiBold', fontSize: 17}}>No Cities Found!</Text>
                    </View>
                }
            </GestureHandlerRootView>
        </View>
    )
};

export default SearchPanel;

const styles = StyleSheet.create({
    airportNameWrap: {
        marginBottom: 8,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        backgroundColor: white,
        elevation: 2,
        borderRadius: 8,
        padding: 6,
    },
});