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

type Notificacion = {
  id: string;
  titulo: string;
  descripcion: string;
  remitente: string;
  tiempo: string;
  avatar: any;
};

const notificaciones: Notificacion[] = [
  {
    id: '1',
    titulo: 'Invitación a la actividad: ',
    descripcion: 'Estás invitado a la actividad Arreglo del Jardin de la calle principal.',
    remitente: 'Organizador: Javier Legua',
    tiempo: 'Ayer',
    avatar: require('../assets/perfil2.jpeg'),
  },
  {
    id: '2',
    titulo: 'Comentario en la actividad de ',
    descripcion: 'Julia Lucano comentó: "¡Gran iniciativa, cuenta conmigo!"',
    remitente: 'Julia Lucano',
    tiempo: 'Hace 5 horas',
    avatar: require('../assets/perfil3.jpg'),
  },
  {
    id: '3',
    titulo: 'Actividad actualizado',
    descripcion: 'La hora del evento "Reunión vecinal" ha cambiado.',
    remitente: 'Organizador: Javier Legua',
    tiempo: 'Hace 2 horas',
    avatar: require('../assets/perfil2.jpeg'),
  },
  {
    id: '4',
    titulo: 'Invitación a la actividad',
    descripcion: 'Estás invitado a la Actividad de Ejemplo.',
    remitente: 'Organizador: Javier Legua',
    tiempo: 'Hace 2 minutos',
    avatar: require('../assets/perfil2.jpeg'),
  },
  {
    id: '5',
    titulo: 'Se te asigno una tarea',
    descripcion: 'Realizarás ejemplo de la actividad.',
    remitente: 'Organizador: Javier Legua',
    tiempo: 'Hace 1 minuto',
    avatar: require('../assets/perfil2.jpeg'),
  },
  {
    id: '6',
    titulo: 'Completaste tu tarea con éxito',
    descripcion: 'Gracias por contribuir con la comunidad!!!!',
    remitente: 'Organizador: Javier Legua',
    tiempo: 'Hace 1 minuto',
    avatar: require('../assets/perfil2.jpeg'),
  },
];

const PantallaNotificaciones: React.FC = () => {
  const renderizarNotificacion = ({ item, index }: { item: Notificacion; index: number }) => {
    const esReciente = index >= notificaciones.length - 3;

    return (
      <TouchableOpacity
        style={[
          estilos.tarjetaNotificacion,
          esReciente && estilos.notificacionReciente, // Aplica estilo condicional
        ]}
      >
        <Image source={item.avatar} style={estilos.avatar} />
        <View style={estilos.informacionNotificacion}>
          <Text style={estilos.tituloNotificacion}>{item.titulo}</Text>
          <Text style={estilos.descripcionNotificacion}>{item.descripcion}</Text>
          <View style={estilos.metaNotificacion}>
            <Text style={estilos.remitenteNotificacion}>{item.remitente}</Text>
            <Text style={estilos.tiempoNotificacion}>{item.tiempo}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={estilos.contenedor}>
      <View style={estilos.encabezado}>
        <Text style={estilos.tituloEncabezado}>Bandeja de entrada</Text>
        <Ionicons name="search" size={24} color="gray" />
      </View>
      <FlatList
        data={notificaciones}
        keyExtractor={(item) => item.id}
        renderItem={renderizarNotificacion}
        contentContainerStyle={estilos.contenidoLista}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  tituloEncabezado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  contenidoLista: {
    padding: 20,
  },
  tarjetaNotificacion: {
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
  notificacionReciente: {
    backgroundColor: '#EEE', // Fondo gris para notificaciones recientes
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  informacionNotificacion: {
    flex: 1,
  },
  tituloNotificacion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  descripcionNotificacion: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  metaNotificacion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remitenteNotificacion: {
    fontSize: 12,
    color: '#888',
  },
  tiempoNotificacion: {
    fontSize: 12,
    color: '#888',
  },
});

export default PantallaNotificaciones;
