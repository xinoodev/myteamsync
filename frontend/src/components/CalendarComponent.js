import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { getEvents } from '../services/eventController';

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await getEvents();
                setEvents(eventsData.map(event => ({
                    title: event.title,
                    date: event.date,
                })));
            } catch (error) {
                console.error('Error al cargar los eventos:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <FullCalendar 
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            events={events}
        />
    );
};

export default CalendarComponent;