import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const EventDetailScreen = ({ route }) => {
  const [event, setEvent] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(`http://localhost:5000/api/events/${id}`);
      setEvent(res.data);
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sport}>{event.sport}</Text>
      <Text style={styles.name}>{event.name}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <Text style={styles.date}>{new Date(event.date).toLocaleString()}</Text>
      <Text style={styles.location}>{event.location}</Text>
      <Text style={styles.participants}>Participants: {event.participants.length}/{event.maxParticipants}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  sport: { fontSize: 20, fontWeight: 'bold' },
  name: { fontSize: 18 },
  description: { marginVertical: 10 },
  date: { color: '#555' },
  location: { color: '#777' },
  participants: { marginTop: 10, fontWeight: 'bold' },
});

export default EventDetailScreen;
