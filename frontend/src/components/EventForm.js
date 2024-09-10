import React, { useState } from 'react';
import { createEvent } from '../services/eventController';

const EventFrom = () => {
    const [ title, setTitle ] = useState('');
    const [ date, setDate ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEvent({ title, date });
            setTitle('');
            setDate('');
            alert('Evento creado con éxito.');
        } catch (error) {
            console.error('Error al crear evento:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Título del evento'
                required
            />
            <input
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder='Fecha del evento'
                required
            />
            <button type='submit'>Crear evento</button>
        </form>
    );
};

export default EventFrom;