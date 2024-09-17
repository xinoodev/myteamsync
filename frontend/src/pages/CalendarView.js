import React from 'react';
import CalendarComponent from '../components/CalendarComponent';
import EventFrom from '../components/EventForm';

const CalendarView = () => {
    return (
        <div>
            <h1>Vista de Calendario</h1>
            <EventFrom />
            <CalendarComponent />
        </div>
    )
};

export default CalendarView;