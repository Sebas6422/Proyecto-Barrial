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
      title: 'Evento de vacunación para la comunidad',
      date: 'Sabado, May 18, 2024',
      description:
        'Únete a nuestra campaña de vacunación comunitaria diseñada para proteger la salud de todos. Aprovecha esta oportunidad para recibir vacunas esenciales de manera gratuita, con atención médica profesional y un ambiente seguro. ¡Cuidemos nuestra salud juntos!',
      image: require('../assets/salud.jpg'),
    },
    {
      id: '2',
      title: 'Remodelación de local comunal',
      date: 'Domingo, Jun 22, 2024',
      description:
        'Durante esta actividad, se llevará a cabo la remodelación del local comunal, enfocándonos en pintar las paredes, reparar estructuras dañadas y reorganizar los espacios para mayor funcionalidad. Además, se realizarán mejoras en el mobiliario y áreas comunes, con el objetivo de revitalizar el espacio para beneficio de todos los vecinos.',
      image: require('../assets/remodelacion.jpg'),
    },
    {
      id: '3',
      title: 'Arreglo del Jardin de la calle principal',
      date: 'Domingo, Nov 22, 2024',
      description:
        'Actividad de limpieza y mantenimiento de áreas verdes, a cargo de los vecinos. Se realizará el día 20 de noviembre. Esperamos su participación.',
      image: require('../assets/actividad.jpg'),
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
