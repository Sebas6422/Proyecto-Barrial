import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const events = [
  {
    id: '1',
    title: 'Farmers Market Weekend',
    date: 'Saturday, May 18, 2024, 9:00 AM - 2:00 PM',
    description:
      'Join us for a delightful day at the local farmers market, featuring fresh produce, artisanal goods, and live music in the heart of the city.',
    image: 'https://via.placeholder.com/150', // Cambia esto por una URL real o recurso local
  },
  {
    id: '2',
    title: 'Community Picnic',
    date: 'Sunday, May 22, 2024, 12:00 PM - 4:00 PM',
    description:
      'Gather with neighbors for a fun-filled picnic day at the central park. Enjoy great food and enjoy games and activities for all ages.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Summer Street Fair',
    date: 'Saturday, June 5, 2024, 10:00 AM - 6:00 PM',
    description:
      'Explore the annual street fair with a variety of vendors, food trucks, and entertainment for the whole family.',
    image: 'https://via.placeholder.com/150',
  },
];

const OrganizerHome = () => {
  const renderEvent = ({ item }: any) => (
    <View style={styles.eventCard}>
      <Image source={{ uri: item.image }} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>📅 Upcoming Events</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Event</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderEvent}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 20,
  },
  eventCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  eventImage: {
    width: '100%',
    height: 150,
  },
  eventDetails: {
    padding: 15,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 14,
    color: '#444',
  },
});

export default OrganizerHome; // Exportación por defecto