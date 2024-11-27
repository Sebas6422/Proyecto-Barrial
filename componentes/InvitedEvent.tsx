import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Ionicons from "@expo/vector-icons/Ionicons";

type Evento = {
  id: string;
  titulo: string;
  hora: string;
};

const eventosIniciales: Record<string, Evento[]> = {
  "2023-12-18": [
    { id: "1", titulo: "Ejemplo de actividad", hora: "Pendiente"},
  ],
  "2023-11-27": [
    { id: "2", titulo: "Remodelación de local comunal", hora: "1:00-2:00PM" },
    { id: "3", titulo: "Arreglo del Jardin de la calle principal", hora: "10:00-11:30AM" },
  ],
};

const PantallaCalendarioUsuario: React.FC = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState("2023-12-18");
  const [eventos, setEventos] = useState<Evento[]>(eventosIniciales[fechaSeleccionada] || []);

  const manejarSeleccionDia = (dia: { dateString: string }) => {
    setFechaSeleccionada(dia.dateString);
    setEventos(eventosIniciales[dia.dateString] || []);
  };

  const renderizarEvento = ({ item }: { item: Evento }) => (
    <View style={estilos.tarjetaEvento}>
      <Ionicons name="calendar" size={24} color="#FF6B6B" style={estilos.icono} />
      <View>
        <Text style={estilos.tituloEvento}>{item.titulo}</Text>
        <Text style={estilos.horaEvento}>{item.hora}</Text>
      </View>
    </View>
  );

  return (
    <View style={estilos.contenedor}>
      {/* Encabezado con imagen de usuario */}
      <View style={estilos.encabezado}>
        <Text style={estilos.fechaEncabezado}>{fechaSeleccionada}</Text>
        <Image
          source={require("../assets/profile.jpeg")}
          style={estilos.imagenPerfil}
        />
      </View>

      {/* Calendario */}
      <Calendar
        onDayPress={manejarSeleccionDia}
        markedDates={{
          [fechaSeleccionada]: { selected: true, marked: true, selectedColor: "#FF6B6B" },
        }}
        theme={{
          todayTextColor: "#FF6B6B",
          arrowColor: "#FF6B6B",
          selectedDayBackgroundColor: "#FF6B6B",
        }}
      />

      {/* Lista de eventos */}
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={renderizarEvento}
        contentContainerStyle={estilos.listaEventos}
        ListEmptyComponent={
          <Text style={estilos.textoSinEventos}>No hay actividades para este día.</Text>
        }
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 10,
  },
  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  fechaEncabezado: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  imagenPerfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  listaEventos: {
    marginTop: 10,
  },
  tarjetaEvento: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  icono: {
    marginRight: 10,
  },
  tituloEvento: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  horaEvento: {
    fontSize: 14,
    color: "#666",
  },
  textoSinEventos: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});

export default PantallaCalendarioUsuario;
