import api from './api';

export const createCalendar = async (calendarData) => {
    try {
        const response = await api.post('/calendars', calendarData);
        return response.data;
    } catch (error) {
        console.error('Error creando el calendario:', error);
        throw error;
    }
};

export const getCalendars = async (calendarId) => {
    try {
        const response = await api.get(`/calendars/${calendarId}`);
        return response.data;
    } catch (error) {
        console.error('Error obteniendo calendarios:', error);
        throw error;
    }
};

export const updateCalendar = async (calendarId, calendarData) => {
    try {
        const response = await api.put(`/calendars/${calendarId}`, calendarData);
        return response.data;
    } catch (error) {
        console.error('Error actualizando el calendario:', error);
        throw error;
    }
};

export const deleteCalendar = async (calendarId) => {
    try {
        const response = await api.delete(`/calendars/${calendarId}`);
        return response.data;
    } catch (error) {
        console.error('Error eliminando el calendario:', error);
        throw error;
    }
};