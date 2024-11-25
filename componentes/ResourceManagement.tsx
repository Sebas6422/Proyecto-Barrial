import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { PieChart, LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ResourceManagementScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📊 Resource Management</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Contribute</Text>
        </TouchableOpacity>
      </View>

      {/* Resource Usage Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resource Usage</Text>
        <PieChart
          data={[
            {
              name: 'Used',
              population: 45,
              color: '#FF6B6B',
              legendFontColor: '#333',
              legendFontSize: 14,
            },
            {
              name: 'Available',
              population: 55,
              color: '#4CAF50',
              legendFontColor: '#333',
              legendFontSize: 14,
            },
          ]}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      {/* Donations Over Time Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Donations Over Time</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: [10, 20, 15, 25, 30, 35],
                color: (opacity = 1) => `rgba(255, 107, 107, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
          }}
          bezier
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
  headerTitle: {
    fontSize: 20,
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
  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  chart: {
    marginTop: 10,
    borderRadius: 8,
  },
});

export default ResourceManagementScreen;
