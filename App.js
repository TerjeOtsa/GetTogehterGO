import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import EventCreationScreen from './screens/EventCreationScreen';
import EventDetailScreen from './screens/EventDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import MapView, { Marker } from 'react-native-maps';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="CreateEvent" component={EventCreationScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;




function MapScreen() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <MapView style={{ flex: 1 }} initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
      {events.map(event => (
        <Marker
          key={event._id}
          coordinate={{
            latitude: event.location.coordinates[1],
            longitude: event.location.coordinates[0],
          }}
          title={event.name}
          description={event.description}
        />
      ))}
    </MapView>
  );
}

<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeStack} />
  <Tab.Screen name="CreateEvent" component={EventCreationScreen} />
  <Tab.Screen name="Map" component={MapScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>
