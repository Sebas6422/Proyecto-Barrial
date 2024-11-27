import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { PieChart, LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './configuration';

const screenWidth = Dimensions.get('window').width;
type ResourceManagementScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Resource'>;

const ResourceManagementScreen = () => {
  const navigation = useNavigation<ResourceManagementScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.encabezado}>
        <Text style={styles.tituloEncabezado}>📊 Gestión de Recursos</Text>
        <TouchableOpacity
          style={styles.botonContribuir}
          onPress={() => navigation.navigate('RegisterDonation')} // Navegar a la vista de donación
        >
          <Text style={styles.textoBotonContribuir}>Contribuir</Text>
        </TouchableOpacity>
      </View>

      {/* Gráfico de uso de recursos */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Uso de Recursos</Text>
        <PieChart
          data={[
            {
              name: 'Realizadas',
              population: 1,
              color: '#FF6B6B',
              legendFontColor: '#333',
              legendFontSize: 14,
            },
            {
              name: 'Pendientes',
              population: 5,
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

      {/* Donaciones a lo largo del tiempo */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Donaciones a lo Largo del Tiempo</Text>
        <LineChart
          data={{
            labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov'],
            datasets: [
              {
                data: [0, 0, 0, 0, 10],
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
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  tituloEncabezado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  botonContribuir: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  textoBotonContribuir: {
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
