import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Task } from 'react-native';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Register: undefined;
  AdminHome: undefined;
  CommunityHome: undefined;
  OrganizerHome: undefined;
  AddEvent: undefined;
  Event: undefined;
  Resource: undefined;
  Notification: undefined;
  Home: undefined;
  Events: undefined;
  RegisterDonation: undefined;
  Tasks: undefined;
  Profile: undefined;
  EventDetails: { eventId: string; eventTitle: string; eventDescription: string }; // Nueva pantalla
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
