import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';

type Task = {
  id: string;
  description: string;
  assignedTo: string;
  status: 'pending' | 'completed';
};

const initialTasks: Task[] = [
  {
    id: '1',
    description: 'Clean the community park',
    assignedTo: 'Marcos',
    status: 'pending',
  },
  {
    id: '2',
    description: 'Organize the food drive',
    assignedTo: 'Laura',
    status: 'completed',
  },
  {
    id: '3',
    description: 'Prepare for volunteer meeting',
    assignedTo: 'Diego',
    status: 'pending',
  },
  {
    id: '4',
    description: 'Distribute flyers for the event',
    assignedTo: 'Carmen',
    status: 'completed',
  },
];

const TaskListScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const handleFilterChange = (newFilter: 'all' | 'pending' | 'completed') => {
    setFilter(newFilter);
  };

  const toggleTaskStatus = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === 'pending' ? 'completed' : 'pending',
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Community Tasks</Text>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={() => handleFilterChange('all')}
          style={[styles.filterButton, filter === 'all' && styles.activeFilter]}
        >
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterChange('pending')}
          style={[
            styles.filterButton,
            filter === 'pending' && styles.activeFilter,
          ]}
        >
          <Text style={styles.filterText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterChange('completed')}
          style={[
            styles.filterButton,
            filter === 'completed' && styles.activeFilter,
          ]}
        >
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <View style={styles.taskInfo}>
              <Text style={styles.taskDescription}>{item.description}</Text>
              <Text style={styles.assignedTo}>
                Assigned to: {item.assignedTo}
              </Text>
            </View>
            <Switch
              trackColor={{ false: '#ccc', true: '#FF6B6B' }}
              thumbColor={item.status === 'completed' ? '#FF0000' : '#FFFFFF'}
              value={item.status === 'completed'}
              onValueChange={() => toggleTaskStatus(item.id)}
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No tasks to display</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#EEE',
  },
  activeFilter: {
    backgroundColor: '#FF6B6B',
  },
  filterText: {
    color: '#333',
    fontWeight: 'bold',
  },
  taskCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  taskInfo: {
    flex: 1,
    marginRight: 10,
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
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});

export default TaskListScreen;
