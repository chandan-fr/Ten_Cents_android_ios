import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { black, white } from '../../../config/colors';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

const SearchPanel = ({ data, setOuterScrollEnabled }) => {
    return (
        <View style={{ flex: 1, borderWidth: 0, }}>
            <GestureHandlerRootView>
                <FlatList
                    style={{ flex: 1 }}
                    data={data}
                    nestedScrollEnabled={true}
                    onTouchStart={() => setOuterScrollEnabled(false)}
                    onMomentumScrollEnd={() => setOuterScrollEnabled(true)}
                    onScrollEndDrag={() => setOuterScrollEnabled(true)}
                    showsVerticalScrollIndicator={true}
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