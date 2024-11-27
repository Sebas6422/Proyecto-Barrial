import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AdminHomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Imagen central */}
      <Image source={require('../assets/Welcom.jpg')} style={styles.image} />
      {/* Mensaje de bienvenida */}
      <Text style={styles.text}>Bienvenido a la Comunidad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  image: {
    width: 200, // Ajusta el tamaño de la imagen
    height: 200,
    marginBottom: 20, // Espacio entre la imagen y el texto
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AdminHomeScreen;
