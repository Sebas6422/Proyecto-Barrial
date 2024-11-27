import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Importar los componentes correspondientes
import WelcomeScreen from './componentes/welcom';
import LoginScreen from './componentes/Login';
import CommunityHomeScreen from './componentes/AdminHome';
import OrganizerHomeScreen from './componentes/OrganizerHome';
import AddEventScreen from './componentes/AddEvent';
import { EventProvider } from './componentes/EventContext';
import EventDetailsScreen from './componentes/EventDetailScreen';
import UserProfileScreen from './componentes/UserProfileScreen';
import TaskListScreen from './componentes/InitialTask';
import ResourceManagementScreen from './componentes/ResourceManagement';
import UserHomeScreen from './componentes/CommunityHome'; // Pantalla inicial del usuario // Crear post (usuarios)
import InvitedEventsScreen from './componentes/InvitedEvent';
import NotificationsScreen from './componentes/Notifications';

// Definir las rutas del Stack
type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  AdminHome: undefined;
  CommunityHome: undefined;
  OrganizerHome: undefined;
  Eventos: undefined;
  Notification: undefined;
  AddEvent: undefined;
  EventDetails: { eventId: string; eventTitle: string; eventDescription: string };
};

// Crear navegadores
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

/// NAVIGATOR PARA ADMIN (Organizer)
function OrganizerTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
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
            case 'Management':
              iconName = 'stats-chart';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'help';
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
      <Tab.Screen name="Tasks" component={TaskListScreen} />
      <Tab.Screen name="Management" component={ResourceManagementScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}

/// NAVIGATOR PARA USUARIOS (User)
function UserTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Calendario':
              iconName = 'calendar-outline'; // Aquí el cambio
              break;
            case 'Perfil':
              iconName = 'person';
              break;
            case 'Notificaciones':
              iconName = 'notifications-outline';
              break;
            default:
              iconName = 'help';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={UserHomeScreen} />
      <Tab.Screen name="Calendario" component={InvitedEventsScreen} />
      <Tab.Screen name="Perfil" component={UserProfileScreen} />
      <Tab.Screen name="Notificaciones" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

/// STACK PRINCIPAL
export default function App() {
  return (
    <EventProvider>
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
          {/* Para Usuarios */}
          <Stack.Screen
            name="CommunityHome"
            component={UserTabs} // Aquí cargamos las tabs del usuario
            options={{ headerShown: false }}
          />
          {/* Para Admin */}
          <Stack.Screen
            name="OrganizerHome"
            component={OrganizerTabs} // Aquí cargamos las tabs del admin
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddEvent"
            component={AddEventScreen}
            options={{ headerShown: true, title: 'Add Event' }}
          />
          <Stack.Screen
            name="EventDetails"
            component={EventDetailsScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Eventos" 
          component={InvitedEventsScreen}
          options={{ headerShown: false }} />
          <Tab.Screen name="Notificaciones" 
          component={NotificationsScreen} 
          options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </EventProvider>
  );
}
