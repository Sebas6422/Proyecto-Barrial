import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useEventContext } from './EventContext';

const participants = [
  { id: '1', name: 'Javier Legua', image: require('../assets/perfil1.jpg') },
  { id: '2', name: 'Sergio Gonzales', image: require('../assets/perfil2.jpeg') },
  { id: '3', name: 'Julia Lucano', image: require('../assets/perfil3.jpg') },
  { id: '4', name: 'Casimiro Villegas', image: require('../assets/perfil4.jpg') },
  { id: '5', name: 'Mónica Isla', image: require('../assets/perfil5.jpg') },
  { id: '6', name: 'Hilda Gora', image: require('../assets/perfil5.jpg') },
];



const AddActivityScreen = () => {
  const { addEvent } = useEventContext();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);

  const handleImageSelection = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Se necesita permiso para acceder a la galería.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]?.uri) {
      setThumbnail(result.assets[0].uri);
    }
  };

  const handleCreateEvent = () => {
    if (!title || !description) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }
  
    const newEvent = {
      id: Math.random().toString(),
      title,
      date: `${startDate.toDateString()}`,
      description,
      image: thumbnail ? { uri: thumbnail } : require('../assets/default-image.jpeg'), // Imagen predeterminada si no hay thumbnail
    };
  
    addEvent(newEvent); // Agregar al contexto
    navigation.goBack(); // Volver a la pantalla anterior
  };


  const toggleParticipantSelection = (id: string) => {
    if (selectedParticipants.includes(id)) {
      setSelectedParticipants(selectedParticipants.filter((participantId) => participantId !== id));
    } else {
      setSelectedParticipants([...selectedParticipants, id]);
    }
  };

  const renderParticipantItem = ({ item }: { item: { id: string; name: string; image: any } }) => (
    <TouchableOpacity
      style={[
        styles.participantItem,
        selectedParticipants.includes(item.id) && styles.participantSelected,
      ]}
      onPress={() => toggleParticipantSelection(item.id)}
    >
      <Image source={item.image} style={styles.participantImage} />
      <Text style={styles.participantName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Crear Actividad</Text>

      {/* Campo del título */}
      <TextInput
        style={styles.input}
        placeholder="Título de la Actividad"
        value={title}
        onChangeText={setTitle}
      />

      {/* Subida de fotos */}
      <Text style={styles.sectionHeader}>Añadir Fotos</Text>
      <TouchableOpacity style={styles.photoBox} onPress={handleImageSelection}>
        {thumbnail ? (
          <Image source={{ uri: thumbnail }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.photoText}>+ Miniatura</Text>
        )}
      </TouchableOpacity>

      {/* Campo de descripción */}
      <Text style={styles.sectionHeader}>Detalles de la Actividad</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descripción de la Actividad"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Participantes */}
      <Text style={styles.sectionHeader}>Participantes</Text>
      <TouchableOpacity style={styles.participantsButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.participantsButtonText}>
          {selectedParticipants.length > 0
            ? `Seleccionados (${selectedParticipants.length})`
            : 'Seleccionar Participantes'}
        </Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccionar Participantes</Text>
            <FlatList
              data={participants}
              keyExtractor={(item) => item.id}
              renderItem={renderParticipantItem}
              style={styles.participantList}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Selector de fecha */}
      <Text style={styles.sectionHeader}>Inicio</Text>
      <TouchableOpacity style={styles.datePicker} onPress={() => setShowStartPicker(true)}>
        <Ionicons name="calendar" size={24} color="#FF6B6B" />
        <Text style={styles.dateText}>{startDate.toDateString()}</Text>
      </TouchableOpacity>
      {showStartPicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowStartPicker(false);
            if (selectedDate) setStartDate(selectedDate);
          }}
        />
      )}
      {/* Botón para crear la actividad */}
      <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
        <Text style={styles.buttonText}>Crear Actividad</Text>
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
  photoBox: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  photoText: {
    fontSize: 14,
    color: '#666',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  participantsButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    marginBottom: 20,
  },
  participantsButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  participantList: {
    maxHeight: 200,
  },
  participantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  participantSelected: {
    backgroundColor: '#FF6B6B',
  },
  participantImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  participantName: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#FF6B6B',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default AddActivityScreen;
