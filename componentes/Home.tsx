import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const posts = [
  {
    id: '1',
    username: 'john_doe',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 120,
    comments: 32,
  },
  {
    id: '2',
    username: 'jane_smith',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 98,
    comments: 20,
  },
  {
    id: '3',
    username: 'samuel_jackson',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 200,
    comments: 45,
  },
];

const HomeScreen = () => {
  const renderItem = ({ item }: { item: typeof posts[0] }) => (
    <View style={styles.postContainer}>
      {/* Header del post con el nombre del usuario */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
        <Text style={styles.username}>{item.username}</Text>
      </View>

      {/* Imagen del post */}
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />

      {/* Footer del post */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="heart-outline" size={24} color="#fff" />
          <Text style={styles.iconText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="comment-outline" size={24} color="#fff" />
          <Text style={styles.iconText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="share-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header de la pantalla */}
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Upcoming</Text>
        <Icon name="account-circle" size={28} color="#fff" />
      </View>

      {/* Botones de filtro */}
      <View style={styles.filterButtons}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Landscapes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Pets</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de publicaciones */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
      
      {/* Footer de navegación */}
      <View style={styles.bottomNavigation}>
        <Icon name="home" size={28} color="#fff" />
        <Icon name="magnify" size={28} color="#fff" />
        <Icon name="plus-box" size={28} color="#fff" />
        <Icon name="bell-outline" size={28} color="#fff" />
        <Icon name="account-outline" size={28} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  screenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  screenTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  filterButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  postContainer: {
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    color: '#fff',
    marginLeft: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
});

export default HomeScreen;
