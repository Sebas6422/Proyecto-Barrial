import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginScreenNavigationProp } from './configuration';
import Toast from 'react-native-simple-toast';

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validEmail = 'user@example.com';
  const validPassword = '123456';

  const handleLogin = () => {
    if (email === validEmail && password === validPassword) {
      navigation.navigate('Home');
    } else {
      Toast.show('Invalid email or password', Toast.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.logo}
      />
      <Text style={styles.title}>NeighborlyEvents</Text>
      
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
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
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
  },
  forgotPassword: {
    color: '#aaa',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff3b30',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;