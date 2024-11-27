import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { event } from 'react-native-reanimated';

type Tarea = {
  id: string;
  descripcion: string;
  asignadoA: string;
  event: string;
  estado: 'pendiente' | 'completada';
};

const tareasIniciales: Tarea[] = [
  {
    id: '1',
    descripcion: 'Traer implementos para limpiar la basura de las plantas',
    asignadoA: 'Casimiro Villegas',
    event: 'Arreglo del Jardin de la calle principal',
    estado: 'pendiente',
  },
  {
    id: '2',
    descripcion: 'Conseguir nuevas plantas para el jardin',
    asignadoA: 'Mónico Isla',
    event: 'Arreglo del Jardin de la calle principal',
    estado: 'completada',
  },
  {
    id: '3',
    descripcion: 'Preparar la reunión de voluntarios para la limpieaz',
    asignadoA: 'Melchor Paulino',
    event: 'Arreglo del Jardin de la calle principal',
    estado: 'pendiente',
  },
  {
    id: '4',
    descripcion: 'Realizar translado de algunas plantas al jardin de la avenida',
    asignadoA: 'Javier Legua',
    event: 'Arreglo del Jardin de la calle principal',
    estado: 'completada',
  },
  {
    id: '5',
    descripcion: 'Ejemlo de actividad',
    asignadoA: 'Hilda Gora',
    event: 'Realizaras ejemplo de la actividad',
    estado: 'pendiente',
  },
];

const PantallaListaTareas: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales);
  const [filtro, setFiltro] = useState<'todas' | 'pendiente' | 'completada'>(
    'todas'
  );

  const cambiarFiltro = (nuevoFiltro: 'todas' | 'pendiente' | 'completada') => {
    setFiltro(nuevoFiltro);
  };

  const alternarEstadoTarea = (id: string) => {
    setTareas((tareasPrevias) =>
      tareasPrevias.map((tarea) =>
        tarea.id === id
          ? {
              ...tarea,
              estado: tarea.estado === 'pendiente' ? 'completada' : 'pendiente',
            }
          : tarea
      )
    );
  };

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'todas') return true;
    return tarea.estado === filtro;
  });

  return (
    <View style={styles.contenedor}>
      {/* Encabezado */}
      <Text style={styles.titulo}>Tareas Comunitarias</Text>

      {/* Botones de Filtro */}
      <View style={styles.contenedorFiltros}>
        <TouchableOpacity
          onPress={() => cambiarFiltro('todas')}
          style={[
            styles.botonFiltro,
            filtro === 'todas' && styles.filtroActivo,
          ]}
        >
          <Text style={styles.textoFiltro}>Todas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => cambiarFiltro('pendiente')}
          style={[
            styles.botonFiltro,
            filtro === 'pendiente' && styles.filtroActivo,
          ]}
        >
          <Text style={styles.textoFiltro}>Pendientes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => cambiarFiltro('completada')}
          style={[
            styles.botonFiltro,
            filtro === 'completada' && styles.filtroActivo,
          ]}
        >
          <Text style={styles.textoFiltro}>Completadas</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Tareas */}
      <FlatList
        data={tareasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarjetaTarea}>
            <View style={styles.infoTarea}>
              <Text style={styles.descripcionTarea}>{item.descripcion}</Text>
              <Text style={styles.asignadoA}>Asignado a: {item.asignadoA}</Text>
              <Text style={styles.event}>Actividad: {item.event}</Text>
            </View>
            <Switch
              trackColor={{ false: '#ccc', true: '#FF6B6B' }}
              thumbColor={item.estado === 'completada' ? '#FF0000' : '#FFFFFF'}
              value={item.estado === 'completada'}
              onValueChange={() => alternarEstadoTarea(item.id)}
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textoVacio}>No hay tareas para mostrar</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  contenedorFiltros: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  botonFiltro: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#EEE',
  },
  filtroActivo: {
    backgroundColor: '#FF6B6B',
  },
  textoFiltro: {
    color: '#333',
    fontWeight: 'bold',
  },
  tarjetaTarea: {
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
  infoTarea: {
    flex: 1,
    marginRight: 10,
  },
  descripcionTarea: {
    fontSize: 16,
    color: '#333',
  },
  asignadoA: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  event: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  textoVacio: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});

export default PantallaListaTareas;
