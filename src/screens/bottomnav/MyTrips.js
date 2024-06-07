import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTripsHome from "../../components/MyTrips/MyTripsHome";
import MyDetails from "../../components/MyTrips/MyDetails";
import MySettings from "../../components/MyTrips/MySettings";
import { NavigationContainer } from "@react-navigation/native";

const MyTripStack = createNativeStackNavigator();

const MyTrips = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <MyTripStack.Navigator
        initialRouteName="mthomenav"
        screenOptions={{ headerShown: false }}
      >
        <MyTripStack.Screen name="mthome" component={MyTripsHome} />
        <MyTripStack.Screen name="mydetails" component={MyDetails} />
        <MyTripStack.Screen name="mysettings" component={MySettings} />
      </MyTripStack.Navigator>
    </NavigationContainer>
  )
};

export default MyTrips;