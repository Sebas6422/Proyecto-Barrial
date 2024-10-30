import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Imagen principal */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://example.com/your-image-url.jpg' }} // Reemplaza con la URL de tu imagen o usa una imagen local
          style={styles.image}
        />
      </View>

      {/* Texto de bienvenida */}
      <Text style={styles.title}>NeighborlyEvents</Text>
      <Text style={styles.subtitle}>
        Discover and organize local events easily
      </Text>

      {/* Botón de acción */}
      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Join now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  upgradeButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  upgradeText: {
    color: '#fff',
    fontSize: 12,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#bbb',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ff3b30',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
