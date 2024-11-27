import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './configuration';
import { Calendar, DateData } from 'react-native-calendars';

type RegisterScreenProps = StackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleRegister = () => {
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !address ||
      !role ||
      !birthDate
    ) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    // Lógica para registrar al usuario
    Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada correctamente.');
    navigation.navigate('Login'); // Redirige a la pantalla de inicio de sesión
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>👥 Conexión Barrial</Text>
      <Text style={styles.header}>Registrar Usuario</Text>

      {/* Campo de Nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
      />

      {/* Campo de Correo */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de Teléfono */}
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Campo de Dirección */}
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={address}
        onChangeText={setAddress}
      />

      {/* Campo de Rol */}
      <TextInput
        style={styles.input}
        placeholder="Rol (Usuario o Administrador)"
        value={role}
        onChangeText={setRole}
      />

      {/* Campo de Fecha de Nacimiento */}
      <Text style={styles.label}>Fecha de Nacimiento</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowCalendar(!showCalendar)}
      >
        <Text style={styles.dateText}>
          {birthDate || 'Seleccionar fecha de nacimiento'}
        </Text>
      </TouchableOpacity>
      {showCalendar && (
        <Calendar
          onDayPress={(day: DateData) => {
            setBirthDate(day.dateString);
            setShowCalendar(false);
          }}
          markedDates={{
            [birthDate]: { selected: true, selectedColor: '#FF6B6B' },
          }}
          theme={{
            selectedDayBackgroundColor: '#FF6B6B',
            arrowColor: '#FF6B6B',
            todayTextColor: '#FF6B6B',
          }}
        />
      )}

      {/* Campo de Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Campo de Confirmación de Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Botón de registro */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      {/* Botón para volver */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    justifyContent: 'center',
  },
  label: {
    width: '100%',
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#FF0000',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: {
    color: '#FF0000',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default RegisterScreen;
