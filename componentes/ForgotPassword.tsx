import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handlePasswordRecovery = () => {
    if (!email) {
      Alert.alert("Error", "Por favor, ingresa tu correo electrónico.");
      return;
    }
    Alert.alert(
      "Correo enviado",
      "Revisa tu correo para las instrucciones de recuperación de contraseña."
    );
  };

  return (
    <View style={styles.container}>
      {/* Botón de Volver */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#FF6B6B" />
      </TouchableOpacity>

      {/* Encabezado */}
      <View style={styles.header}>
        <Ionicons name="mail-outline" size={60} color="#FF6B6B" />
        <Text style={styles.title}>Ingresa tu correo</Text>
        <Text style={styles.subtitle}>Recupera tu contraseña</Text>
      </View>

      {/* Campo de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Botón de recuperación */}
      <TouchableOpacity
        style={styles.recoverButton}
        onPress={handlePasswordRecovery}
      >
        <Text style={styles.recoverButtonText}>Recuperar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#FFF",
  },
  recoverButton: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  recoverButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPasswordScreen;
