import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './componentes/welcom';
import LoginScreen from './componentes/Login';
import CommunityHomeScreen from './componentes/CommunityHome';
import OrganizerHomeScreen from './componentes/OrganizerHome';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CommunityHome: undefined;
  OrganizerHome: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function OrganizerTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // Mapear nombres de rutas a nombres válidos de iconos de Ionicons
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Events':
              iconName = 'calendar';
              break;
            case 'Tasks':
              iconName = 'list';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'help'; // Icono predeterminado en caso de error
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={CommunityHomeScreen} />
      <Tab.Screen name="Events" component={OrganizerHomeScreen} />
      <Tab.Screen name="Tasks" component={OrganizerHomeScreen} />
      <Tab.Screen name="Profile" component={OrganizerHomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CommunityHome"
          component={CommunityHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrganizerHome"
          component={OrganizerTabs} // Ahora OrganizerHome contiene las tabs
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
