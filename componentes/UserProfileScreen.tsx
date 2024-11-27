import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './configuration';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const PerfilUsuarioJavier = () => {
  const [notificacionesHabilitadas, setNotificacionesHabilitadas] = React.useState(false);
  const [modoOscuroHabilitado, setModoOscuroHabilitado] = React.useState(false);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const manejarCerrarSesion = () => {
    Alert.alert(
      'Confirmar Cierre de Sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Cerrar Sesión',
          style: 'destructive',
          onPress: () => navigation.navigate('Login'),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.encabezado}>
        <Text style={styles.tituloEncabezado}>Conexión Barrial</Text>
        <TouchableOpacity style={styles.botonGuardar}>
          <Text style={styles.textoBotonGuardar}>Guardar</Text>
        </TouchableOpacity>
      </View>

      {/* Sección de Imagen de Perfil */}
      <View style={styles.seccionPerfil}>
        <Image
          source={require('../assets/perfil2.jpeg')} // Imagen ficticia
          style={styles.imagenPerfil}
        />
        <TouchableOpacity style={styles.botonEditarFoto}>
          <Text style={styles.textoEditarFoto}>Editar</Text>
        </TouchableOpacity>
        <Text style={styles.nombreUsuario}>Javier Legua</Text>
        <Text style={styles.rolUsuario}>Miembro de la Comunidad</Text>
      </View>

      {/* Detalles de Contacto */}
      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>Detalles de Contacto</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value="javier.legua@gmail.com"
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value="+51 925 841 221"
          editable={false}
        />
      </View>

      {/* Preferencias */}
      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>Preferencias</Text>
        <View style={styles.filaPreferencias}>
          <Text style={styles.textoPreferencias}>Notificaciones</Text>
          <Switch
            value={notificacionesHabilitadas}
            onValueChange={setNotificacionesHabilitadas}
          />
        </View>
        <View style={styles.filaPreferencias}>
          <Text style={styles.textoPreferencias}>Modo Oscuro</Text>
          <Switch value={modoOscuroHabilitado} onValueChange={setModoOscuroHabilitado} />
        </View>
      </View>

      {/* Configuración de Cuenta */}
      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>Configuración de la Cuenta</Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.botonEliminar]}>
          <Text style={styles.textoBoton}>Eliminar Cuenta</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de Cerrar Sesión */}
      <TouchableOpacity style={styles.botonCerrarSesion} onPress={manejarCerrarSesion}>
        <Text style={styles.textoBotonCerrarSesion}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  tituloEncabezado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  botonGuardar: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  textoBotonGuardar: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  seccionPerfil: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagenPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  botonEditarFoto: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  textoEditarFoto: {
    color: '#FFF',
    fontSize: 14,
  },
  nombreUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  rolUsuario: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  seccion: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#F8F8F8',
  },
  filaPreferencias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  textoPreferencias: {
    fontSize: 16,
    color: '#333',
  },
  boton: {
    backgroundColor: '#FF6B6B',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  botonEliminar: {
    backgroundColor: '#D9534F',
  },
  textoBoton: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  botonCerrarSesion: {
    marginHorizontal: 20,
    marginBottom: 30,
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotonCerrarSesion: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PerfilUsuarioJavier;
