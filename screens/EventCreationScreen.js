import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const EventCreationScreen = () => {
  const [sport, setSport] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const navigation = useNavigation();

  const createEvent = async () => {
    try {
      const token = 'your_jwt_token';  // Replace with actual token retrieval logic
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      const body = { sport, name, description, location, date, maxParticipants };
      await axios.post('http://localhost:5000/api/events', body, config);
      navigation.navigate('Home');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sport</Text>
      <TextInput style={styles.input} value={sport} onChangeText={setSport} />
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      <Text style={styles.label}>Location</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} />
      <Text style={styles.label}>Date</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} />
      <Text style={styles.label}>Max Participants</Text>
      <TextInput style={styles.input} value={maxParticipants} onChangeText={setMaxParticipants} />
      <Button title="Create Event" onPress={createEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});

export default EventCreationScreen;
