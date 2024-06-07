import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'
import React from 'react'
import Icon from '../../utility/Icon';
import Search from './Search';
import Deals from './Deals';
import MyTrips from './MyTrips';
import Rewards from './Rewards';
import { black } from '../../config/colors';
import Label from '../../utility/Label';

const BottomStack = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <BottomStack.Navigator
            initialRouteName='search'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: (focused) => {
                    let rn = route.name;
                    return <Icon name={rn} size={25} iconColor={black} />
                },
                tabBarStyle: {
                    backgroundColor: "rgba(86, 175, 255, 1)",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...Platform.select({
                        ios: { 
                            height: 85,
                        },
                        android: { 
                            height: 60,
                        },
                    }),
                },
                tabBarLabel: ({ focused, children }) => <Label focused={focused} children={children} />,
            })}
        >
            <BottomStack.Screen
                name='Search'
                component={Search}
            />
            <BottomStack.Screen
                name='Deals'
                component={Deals}
            />
            <BottomStack.Screen
                name='My Trips'
                component={MyTrips}
            />
            <BottomStack.Screen
                name='Rewards'
                component={Rewards}
            />
        </BottomStack.Navigator>
    )
}

export default TabNavigation