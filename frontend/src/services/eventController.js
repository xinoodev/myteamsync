import api from './api';

export const createEvent = async (eventData) => {
    try {
        const response = await api.post('/events', eventData);
        return response.data;
    } catch (error) {
        console.error('Error creando evento:', error);
        throw error;
    }
};

export const getEvents = async (calendarId) => {
    try {
        const response = await api.get(`/events/${calendarId}`);
        return response.data;
    } catch (error) {
        console.error('Error obteniendo eventos:', error);
        throw error;
    }
};

export const updateEvent = async (eventId, eventData) => {
    try {
        const response = await api.put(`/events/${eventId}`, eventData);
        return response.data;
    } catch (error) {
        console.error('Error actualizando el evento:', error);
        throw error;
    }
};

export const deleteEvent = async (eventId) => {
    try {
        const response = await api.delete(`/events/${eventId}`);
        return response.data;
    } catch (error) {
        console.error('Error eliminando el evento:', error);
        throw error;
    }
};