import React, { createContext, useState, useContext } from 'react';
import {
    ImageSourcePropType,
  } from 'react-native';

export type Event = {
    id: string;
    title: string;
    date: string;
    description: string;
    image: ImageSourcePropType;
};

type EventContextType = {
  events: Event[];
  addEvent: (event: Event) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Farmers Market Weekend',
      date: 'Saturday, May 18, 2024, 9:00 AM - 2:00 PM',
      description:
        'Join us for a delightful day at the local farmers market, featuring fresh produce, artisanal goods, and live music in the heart of the city.',
      image: require('../assets/salud.jpg'),
    },
    {
      id: '2',
      title: 'Community Picnic',
      date: 'Sunday, May 22, 2024, 12:00 PM - 4:00 PM',
      description:
        'Gather with neighbors for a fun-filled picnic day at the central park. Enjoy great food and enjoy games and activities for all ages.',
      image: require('../assets/remodelacion.jpg'),
    },
  ]);

  const addEvent = (event: Event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = (): EventContextType => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
