import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de instalar esta biblioteca: `npm install react-native-vector-icons`
import { RootStackParamList } from './configuration';

type EventDetailsRouteProp = RouteProp<RootStackParamList, 'EventDetails'>;

type Task = {
  id: string;
  description: string;
  assignedTo: string | null;
  assignedImage: ImageSourcePropType | null;
};

type Person = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

const people: Person[] = [
  { id: '1', name: 'Javier Legua', image: require('../assets/perfil1.jpg') },
  { id: '2', name: 'Sergio Gonzales', image: require('../assets/perfil2.jpeg') },
  { id: '3', name: 'Julia Lucano', image: require('../assets/perfil3.jpg') },
  { id: '4', name: 'Casimiro Villegas', image: require('../assets/perfil4.jpg') },
  { id: '5', name: 'Mónica Isla', image: require('../assets/perfil5.jpg') },
  { id: '6', name: 'Hilda Gora', image: require('../assets/perfil5.jpg') },
  { id: '7', name: 'Arián Gonzales', image: require('../assets/perfil5.jpg') },
];

const DetallesActividad: React.FC = () => {
  const route = useRoute<EventDetailsRouteProp>();
  const navigation = useNavigation();
  const { eventId, eventTitle, eventDescription } = route.params;

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [personName, setPersonName] = useState('');
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleSearchPerson = (query: string) => {
    setPersonName(query);

    if (query === '') {
      setFilteredPeople([]);
      return;
    }

    const filtered = people.filter((person) =>
      person.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPeople(filtered);
  };

  const handleSelectPerson = (person: Person) => {
    setPersonName(person.name);
    setSelectedPerson(person);
    setFilteredPeople([]); // Ocultar sugerencias después de seleccionar
  };

  const handleAddTask = () => {
    if (taskDescription && selectedPerson) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: Math.random().toString(),
          description: taskDescription,
          assignedTo: selectedPerson.name,
          assignedImage: selectedPerson.image,
        },
      ]);
      setTaskDescription('');
      setPersonName('');
      setSelectedPerson(null);
    }
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{eventTitle}</Text>
          <Text style={styles.eventDescription}>{eventDescription}</Text>
        </View>
      </View>

      {/* Sección de tareas */}
      <View style={styles.taskSection}>
        <Text style={styles.taskSectionTitle}>Añadir y Asignar Tareas</Text>

        <View style={styles.taskInputContainer}>
          <TextInput
            style={styles.taskInput}
            placeholder="Descripción de la tarea"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <TextInput
            style={styles.taskInput}
            placeholder="Buscar y asignar persona"
            value={personName}
            onChangeText={handleSearchPerson}
          />
          {filteredPeople.length > 0 && (
            <View style={styles.suggestionsContainer}>
              {filteredPeople.map((person) => (
                <TouchableOpacity
                  key={person.id}
                  style={styles.suggestionItem}
                  onPress={() => handleSelectPerson(person)}
                >
                  <Image source={person.image} style={styles.personImage} />
                  <Text style={styles.personName}>{person.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>Añadir</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de tareas */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <View style={styles.taskInfo}>
              <Text style={styles.taskDescription}>{item.description}</Text>
              <Text style={styles.assignedTo}>Asignado a: {item.assignedTo}</Text>
            </View>
            {item.assignedImage && (
              <Image source={item.assignedImage} style={styles.taskPersonImage} />
            )}
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  backButton: {
    marginRight: 10,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  taskSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  taskSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  taskInputContainer: {
    marginBottom: 20,
  },
  taskInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  addButton: {
    backgroundColor: '#FF6B6B',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  suggestionsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCC',
    marginTop: -5,
    marginBottom: 10,
    zIndex: 1,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  personImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  personName: {
    fontSize: 16,
    color: '#333',
  },
  taskCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  taskInfo: {
    flex: 1,
  },
  taskDescription: {
    fontSize: 16,
    color: '#333',
  },
  assignedTo: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  taskPersonImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default DetallesActividad;
