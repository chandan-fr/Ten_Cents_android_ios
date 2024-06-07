import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpcomingBooking from './core/UpcomingBooking';
import CompletedBooking from './core/CompletedBooking';
import CancelledBooking from './core/CancelledBooking';
import MyTripsBooking from './core/MyTripsBooking';
import MtFlights from './common/MtFlights';
import MtHotels from './common/MtHotels';
import MtRentalCars from './common/MtRentalCars';
import ManageBooking from './core/ManageBooking';

const MyTripsHomeNavStack = createNativeStackNavigator();

const MyTripsHomeNav = () => {
    return (
        <MyTripsHomeNavStack.Navigator
            initialRouteName="mtbkn"
            screenOptions={{ headerShown: false }}
        >
            <MyTripsHomeNavStack.Screen name="mtbkn" component={MyTripsBooking} />
            <MyTripsHomeNavStack.Screen name="upcmnbkn" component={UpcomingBooking} />
            <MyTripsHomeNavStack.Screen name="cmpltdbkn" component={CompletedBooking} />
            <MyTripsHomeNavStack.Screen name="cncldbkn" component={CancelledBooking} />
            <MyTripsHomeNavStack.Screen name="mtflights" component={MtFlights} />
            <MyTripsHomeNavStack.Screen name="mthotels" component={MtHotels} />
            <MyTripsHomeNavStack.Screen name="mtrntlcars" component={MtRentalCars} />
            <MyTripsHomeNavStack.Screen name="mngbkn" component={ManageBooking} />
        </MyTripsHomeNavStack.Navigator>
    )
};

export default MyTripsHomeNav;