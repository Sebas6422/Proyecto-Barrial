import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './componentes/welcom'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnotherScreen from './componentes/Login';
import LoginScreen from './componentes/Login';
import HomeScreen from './componentes/Home';
import Toast from 'react-native-toast-message';
import JoinScreen from './componentes/Join';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcom' 
      screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='welcom'
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login Screen' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
          />
        <Stack.Screen
          name="Join"
          component={JoinScreen}
          options={{ title: 'Join Screen' }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

enableScreens();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
