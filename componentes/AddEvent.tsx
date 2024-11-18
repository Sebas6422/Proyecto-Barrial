import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddEventScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [seats, setSeats] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleCreateEvent = () => {
    // Aquí manejarías la lógica para guardar el evento
    console.log({ title, description, seats, startDate, endDate });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create Event</Text>

      {/* Campo del título */}
      <TextInput
        style={styles.input}
        placeholder="Event Title"
        value={title}
        onChangeText={setTitle}
      />

      {/* Subida de fotos */}
      <Text style={styles.sectionHeader}>Add Photos</Text>
      <View style={styles.photoContainer}>
        <TouchableOpacity style={styles.photoBox}>
          <Ionicons name="add" size={32} color="#FF6B6B" />
          <Text style={styles.photoText}>Thumbnail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoBox}>
          <Ionicons name="add" size={32} color="#FF6B6B" />
          <Text style={styles.photoText}>Past Events</Text>
        </TouchableOpacity>
      </View>

      {/* Campo de descripción */}
      <Text style={styles.sectionHeader}>Event Details</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Event Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Asientos */}
      <Text style={styles.sectionHeader}>Seats</Text>
      <TextInput
        style={styles.input}
        placeholder="Number of Seats"
        value={seats}
        onChangeText={setSeats}
        keyboardType="numeric"
      />

      {/* Selector de fecha */}
      <Text style={styles.sectionHeader}>Starts</Text>
      <TouchableOpacity
        style={styles.datePicker}
        onPress={() => setShowStartPicker(true)}
      >
        <Ionicons name="calendar" size={24} color="#FF6B6B" />
        <Text style={styles.dateText}>
          {startDate.toDateString()}
        </Text>
      </TouchableOpacity>
      {showStartPicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={(event: any, selectedDate: Date | undefined) => {
            setShowStartPicker(false);
            if (selectedDate) setStartDate(selectedDate);
          }}
        />
      )}

      <Text style={styles.sectionHeader}>Ends</Text>
      <TouchableOpacity
        style={styles.datePicker}
        onPress={() => setShowEndPicker(true)}
      >
        <Ionicons name="calendar" size={24} color="#FF6B6B" />
        <Text style={styles.dateText}>
          {endDate.toDateString()}
        </Text>
      </TouchableOpacity>
      {showEndPicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={(event: any, selectedDate: Date | undefined) => {
            setShowEndPicker(false);
            if (selectedDate) setEndDate(selectedDate);
          }}
        />
      )}

      {/* Botón para crear el evento */}
      <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
        <Text style={styles.buttonText}>Create Event</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  photoBox: {
    width: '45%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddEventScreen;
