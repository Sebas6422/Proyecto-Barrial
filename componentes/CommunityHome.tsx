import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Post = {
  id: string;
  user: string;
  location: string;
  time: string;
  image: any;
  likes: number;
};

const posts: Post[] = [
  {
    id: '1',
    user: 'Carlos',
    location: 'Madrid, España',
    time: 'Hace 4 horas',
    image: require('../assets/salud.jpg'),
    likes: 93,
  },
  {
    id: '2',
    user: 'Laura',
    location: 'Valencia, España',
    time: 'Hace 35 min',
    image: require('../assets/remodelacion.jpg'),
    likes: 98,
  },
];

const UserHomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Eventos</Text>
      </View>

      {/* Stories Section */}
      <View style={styles.storiesContainer}>
        <TouchableOpacity style={styles.storyButton}>
          <Text style={styles.storyText}>Amigos cercanos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.storyButton, styles.activeStory]}>
          <Text style={[styles.storyText, styles.activeStoryText]}>Historias públicas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addMomentButton}>
          <Ionicons name="add-circle" size={24} color="#FF6B6B" />
          <Text style={styles.addMomentText}>Añadir momento</Text>
        </TouchableOpacity>
      </View>

      {/* Posts Section */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <View style={styles.postHeader}>
              <Text style={styles.postUser}>{item.user}</Text>
              <Text style={styles.postLocation}>{item.location}</Text>
              <Text style={styles.postTime}>{item.time}</Text>
            </View>
            <Image source={item.image} style={styles.postImage} />
            <View style={styles.postFooter}>
              <Text style={styles.postLikes}>{item.likes} Likes</Text>
              <Ionicons name="heart-outline" size={24} color="#FF6B6B" />
            </View>
          </View>
        )}
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  storiesContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  storyButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#EEE',
    borderRadius: 20,
  },
  storyText: {
    color: '#333',
    fontSize: 14,
  },
  activeStory: {
    backgroundColor: '#FF6B6B',
  },
  activeStoryText: {
    color: '#FFF',
  },
  addMomentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  addMomentText: {
    marginLeft: 5,
    color: '#FF6B6B',
    fontSize: 14,
  },
  postCard: {
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  postHeader: {
    padding: 10,
  },
  postUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postLocation: {
    fontSize: 14,
    color: '#666',
  },
  postTime: {
    fontSize: 12,
    color: '#AAA',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  postLikes: {
    fontSize: 14,
    color: '#333',
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    padding: 10,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
  
});

export default UserHomeScreen;
