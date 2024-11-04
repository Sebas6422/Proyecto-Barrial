import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LoginScreenNavigationProp } from './configuration';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const events = [
  { id: '1', title: 'Join us', description: 'Local market vibes', time: 'Starting', image: 'https://link.to/image1' },
  { id: '2', title: 'Local', description: 'Discover local culture', time: 'Just now', image: 'https://link.to/image2' },
  // Agrega más eventos aquí
];

type RootStackParamList = {
  Home: undefined;
  Join: undefined;  // Asegúrate de que 'Join' esté aquí
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Upcoming</Text>
        <TouchableOpacity style={styles.profileIcon}>
          <Image
            source={{ uri: 'https://link.to/your-icon' }} // Cambia esta URL por la de tu ícono
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Local meetups</Text>
        <Text style={styles.tabText}>Explore local</Text>
      </View>

      {/* Join Button */}
      <TouchableOpacity style={styles.joinButton}
      onPress={() => navigation.navigate('Join')}>
        <Text style={styles.joinButtonText}>Join now</Text>
      </TouchableOpacity>

      {/* Event List */}
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="search-outline" size={24} color="#888" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="add-circle-outline" size={24} color="#888" />
          <Text style={styles.navText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="chatbubble-outline" size={24} color="#888" />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="person-outline" size={24} color="#888" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  profileIcon: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden' },
  iconImage: { width: '100%', height: '100%' },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tabText: { color: '#888', fontSize: 16 },
  activeTab: { color: '#fff', fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: '#fff' },
  joinButton: { backgroundColor: '#e63946', borderRadius: 5, padding: 10, margin: 20 },
  joinButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  card: { backgroundColor: '#1a1a1a', borderRadius: 10, margin: 10, padding: 10 },
  image: { width: '100%', height: 150, borderRadius: 10 },
  cardContent: { padding: 5 },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  description: { color: '#aaa', fontSize: 14 },
  time: { color: '#aaa', fontSize: 12, textAlign: 'right' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingVertical: 10,
  },
  navButton: { alignItems: 'center' },
  navText: { color: '#888', fontSize: 12, marginTop: 2 },
});
