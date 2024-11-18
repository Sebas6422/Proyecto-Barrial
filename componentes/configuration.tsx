import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
