import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const categories = ["Local", "Pet Cats", "Indoor", "Brunch", "Com"];
const items = [
    { id: '1', imageUrl: 'https://via.placeholder.com/150', favorite: false },
    { id: '2', imageUrl: 'https://via.placeholder.com/150', favorite: true },
    { id: '3', imageUrl: 'https://via.placeholder.com/150', favorite: false },
    { id: '4', imageUrl: 'https://via.placeholder.com/150', favorite: false },
    { id: '5', imageUrl: 'https://via.placeholder.com/150', favorite: true },
];

const JoinScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <Icon name="account-circle" size={30} color="#fff" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search events" placeholderTextColor="#666" />
        <Icon name="magnify" size={24} color="#666" />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.category}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Image Grid */}
      <FlatList
        data={items}
        numColumns={3}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.gridItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            {item.favorite && <Icon name="heart" size={18} color="#fff" style={styles.favoriteIcon} />}
            {item.id === '2' && (
              <View style={styles.upgradeBadge}>
                <Text style={styles.upgradeText}>UPGRADE PLAN</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 5,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  category: {
    backgroundColor: '#444',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
  },
  grid: {
    marginTop: 20,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  upgradeBadge: {
    position: 'absolute',
    top: '40%',
    left: '15%',
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
  },
  upgradeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default JoinScreen;
