import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Alert,
} from 'react-native';

type Event = {
  id: string;
  title: string;
};

type Participant = {
  id: string;
  name: string;
};

const events: Event[] = [
  { id: '1', title: 'Evento de vacunación para la comunidad' },
  { id: '2', title: 'Remodelación de local comunal' },
  { id: '3', title: 'Arreglo del Jardin de la calle principal' },
  { id: '4', title: 'Ejemplo de evento' },
];

const participants: Participant[] = [
  { id: '1', name: 'Javier Legua' },
  { id: '2', name: 'Sergio Gonzales' },
  { id: '3', name: 'Julia Lucano' },
  { id: '4', name: 'Casimiro Villegas' },
  { id: '5', name: 'Mónica Isla' },
  { id: '6', name: 'Hilda Gora' },
];

const AddDonationScreen: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedParticipant, setSelectedParticipant] = useState<string | null>(null);
  const [donationType, setDonationType] = useState<string | null>(null);
  const [donationAmount, setDonationAmount] = useState('');
  const [donationItems, setDonationItems] = useState('');
  const [eventModalVisible, setEventModalVisible] = useState(false);
  const [participantModalVisible, setParticipantModalVisible] = useState(false);

  const handleAddDonation = () => {
    if (
      !selectedEvent ||
      !selectedParticipant ||
      !donationType ||
      (donationType === 'dinero' && !donationAmount) ||
      (donationType === 'víveres' && !donationItems)
    ) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    const donationDetails = {
      evento: selectedEvent,
      donador: selectedParticipant,
      tipo: donationType,
      cantidad: donationType === 'dinero' ? donationAmount : donationItems,
    };

    console.log('Donación realizada:', donationDetails);
    Alert.alert('¡Éxito!', 'Tu donación ha sido registrada correctamente.');
    // Reset fields
    setSelectedEvent(null);
    setSelectedParticipant(null);
    setDonationType(null);
    setDonationAmount('');
    setDonationItems('');
  };

  const renderEventItem = ({ item }: { item: Event }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        setSelectedEvent(item.title);
        setEventModalVisible(false);
      }}
    >
      <Text style={styles.listItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderParticipantItem = ({ item }: { item: Participant }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        setSelectedParticipant(item.name);
        setParticipantModalVisible(false);
      }}
    >
      <Text style={styles.listItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registrar Donación</Text>

      {/* Selector de evento */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setEventModalVisible(true)}
      >
        <Text style={{ color: selectedEvent ? '#000' : '#aaa' }}>
          {selectedEvent || 'Seleccionar evento'}
        </Text>
      </TouchableOpacity>

      {/* Modal para seleccionar evento */}
      <Modal visible={eventModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Seleccionar Evento</Text>
            <FlatList
              data={events}
              keyExtractor={(item) => item.id}
              renderItem={renderEventItem}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setEventModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Selector de participante */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setParticipantModalVisible(true)}
      >
        <Text style={{ color: selectedParticipant ? '#000' : '#aaa' }}>
          {selectedParticipant || 'Seleccionar donador'}
        </Text>
      </TouchableOpacity>

      {/* Modal para seleccionar participante */}
      <Modal visible={participantModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Seleccionar Donador</Text>
            <FlatList
              data={participants}
              keyExtractor={(item) => item.id}
              renderItem={renderParticipantItem}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setParticipantModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Selector de tipo de donación */}
      <View style={styles.typeSelector}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            donationType === 'dinero' && styles.typeButtonSelected,
          ]}
          onPress={() => setDonationType('dinero')}
        >
          <Text
            style={[
              styles.typeButtonText,
              donationType === 'dinero' && styles.typeButtonTextSelected,
            ]}
          >
            Dinero
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            donationType === 'víveres' && styles.typeButtonSelected,
          ]}
          onPress={() => setDonationType('víveres')}
        >
          <Text
            style={[
              styles.typeButtonText,
              donationType === 'víveres' && styles.typeButtonTextSelected,
            ]}
          >
            Víveres
          </Text>
        </TouchableOpacity>
      </View>

      {/* Campos para cantidad o descripción */}
      {donationType === 'dinero' && (
        <TextInput
          style={styles.input}
          placeholder="Cantidad en Dinero"
          value={donationAmount}
          onChangeText={setDonationAmount}
          keyboardType="numeric"
        />
      )}
      {donationType === 'víveres' && (
        <TextInput
          style={styles.input}
          placeholder="Lista de Víveres"
          value={donationItems}
          onChangeText={setDonationItems}
          multiline
        />
      )}

      {/* Botón para registrar */}
      <TouchableOpacity style={styles.button} onPress={handleAddDonation}>
        <Text style={styles.buttonText}>Registrar Donación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  typeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  typeButton: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#FFF',
  },
  typeButtonSelected: {
    backgroundColor: '#FF6B6B',
  },
  typeButtonText: {
    color: '#333',
  },
  typeButtonTextSelected: {
    color: '#FFF',
  },
  button: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
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
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default AddDonationScreen;
