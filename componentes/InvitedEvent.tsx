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

type Event = {
  id: string;
  title: string;
  time: string;
};

const initialEvents: Record<string, Event[]> = {
  "2023-12-18": [
    { id: "1", title: "Cita con el dentista", time: "9:00-10:30AM" },
    { id: "2", title: "Pilates", time: "1:00-2:00PM" },
    { id: "3", title: "¡Cena!", time: "7:00-9:00PM" },
  ],
  "2023-12-19": [
    { id: "4", title: "Reunión con el equipo", time: "10:00-11:30AM" },
    { id: "5", title: "Almuerzo con amigos", time: "2:00-3:30PM" },
  ],
};

const UserCalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("2023-12-18");
  const [events, setEvents] = useState<Event[]>(initialEvents[selectedDate] || []);

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
    setEvents(initialEvents[day.dateString] || []);
  };

  const renderEvent = ({ item }: { item: Event }) => (
    <View style={styles.eventCard}>
      <Ionicons name="calendar" size={24} color="#FF6B6B" style={styles.icon} />
      <View>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header con imagen de usuario */}
      <View style={styles.header}>
        <Text style={styles.headerDate}>{selectedDate}</Text>
        <Image
          source={require("../assets/profile.jpeg")}
          style={styles.profileImage}
        />
      </View>

      {/* Calendario */}
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: "#FF6B6B" },
        }}
        theme={{
          todayTextColor: "#FF6B6B",
          arrowColor: "#FF6B6B",
          selectedDayBackgroundColor: "#FF6B6B",
        }}
      />

      {/* Lista de eventos */}
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderEvent}
        contentContainerStyle={styles.eventList}
        ListEmptyComponent={
          <Text style={styles.noEventsText}>No hay eventos para este día.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerDate: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  eventList: {
    marginTop: 10,
  },
  eventCard: {
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
  icon: {
    marginRight: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  eventTime: {
    fontSize: 14,
    color: "#666",
  },
  noEventsText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});

export default UserCalendarScreen;
