import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la pantalla de la Comunidad</Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CommunityHome; // Exportación por defecto
