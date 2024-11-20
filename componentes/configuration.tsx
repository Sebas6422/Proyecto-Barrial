import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Task } from 'react-native';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CommunityHome: undefined;
  OrganizerHome: undefined;
  AddEvent: undefined;
  Home: undefined;
  Events: undefined;
  Tasks: undefined;
  Profile: undefined;
  EventDetails: { eventId: string; eventTitle: string; eventDescription: string }; // Nueva pantalla
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
