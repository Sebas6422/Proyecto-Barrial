import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Notification = {
  id: string;
  title: string;
  description: string;
  sender: string;
  time: string;
  avatar: any;
};

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Invitación al evento: Picnic',
    description: 'Estás invitado al picnic de este fin de semana.',
    sender: 'Carlos',
    time: 'Hace 2 horas',
    avatar: require('../assets/perfil1.jpg'), // Ruta ficticia
  },
  {
    id: '2',
    title: 'Comentario en el evento',
    description: 'María comentó: "¡Gran iniciativa, cuenta conmigo!"',
    sender: 'María',
    time: 'Hace 5 horas',
    avatar: require('../assets/perfil2.jpeg'),
  },
  {
    id: '3',
    title: 'Evento actualizado',
    description: 'La hora del evento "Reunión vecinal" ha cambiado.',
    sender: 'Organizador',
    time: 'Ayer',
    avatar: require('../assets/perfil3.jpg'),
  },
];

const NotificationsScreen: React.FC = () => {
  const renderNotificationItem = ({ item }: { item: Notification }) => (
    <TouchableOpacity style={styles.notificationCard}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.notificationInfo}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
        <View style={styles.notificationMeta}>
          <Text style={styles.notificationSender}>{item.sender}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bandeja de entrada</Text>
        <Ionicons name="search" size={24} color="gray" />
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        contentContainerStyle={styles.listContent}
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
    borderBottomColor: '#DDD',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    padding: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  notificationInfo: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  notificationMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationSender: {
    fontSize: 12,
    color: '#888',
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default NotificationsScreen;
