import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EventDetail', { id: item._id })}>
            <View style={styles.card}>
              <Text style={styles.sport}>{item.sport}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{new Date(item.date).toLocaleString()}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 15, backgroundColor: '#f9f9f9', marginVertical: 10, borderRadius: 5 },
  sport: { fontSize: 16, fontWeight: 'bold' },
  name: { fontSize: 14 },
  date: { color: '#555' },
  location: { color: '#777' },
});

export default HomeScreen;
