import React, { useState, useEffect } from 'react';
import { createCalendar, getCalendars, deleteCalendar } from '../services/calendarController';

const CalendarManager = () => {
    const [calendars, setCalendars] = useState([]);
    const [newCalendarName, setNewCalendarName] = useState('');

    useEffect(() => {
        const fetchCalendars = async () => {
            try {
                const data = await getCalendars();
                setCalendars(data);
            } catch (error) {
                console.error('Error al cargar calendarios:', error);
            }
        };

        fetchCalendars();
    }, []);

    const handleCreate = async () => {
        try {
            const newCalendar = await createCalendar({ name: newCalendarName });
            setCalendars([...calendars, newCalendar]);
            setNewCalendarName('');
        } catch (error) {
            console.error('Error al crear calendario:', error);
        }
    };

    const handleDelete = async (calendarId) => {
        try {
            await deleteCalendar(calendarId);
            setCalendars(calendars.filter(calendar => calendar.id !== calendarId));
        } catch (error) {
            console.error('Error al eliminar calendario:', error);
        }
    };

    return (
        <div>
            <h2>Gestión de Calendarios</h2>
            <input 
                type='text'
                value={newCalendarName}
                onChange={(e) => setNewCalendarName(e.target.value)}
                placeholder='Nombre del Calendario'
            />
            <button onClick={handleCreate}>Crear Calendario</button>
            <ul>
                {calendars.map(calendar => (
                    <li key={calendar.id}>
                        {calendar.name}
                        <button onClick={() => handleDelete(calendar.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CalendarManager;