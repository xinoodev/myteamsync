const express = require('express');
const { createCalendar, getCalendars, updateCalendar, deleteCalendar } = require('../controllers/calendarController');
const router = express.Router();

router.post('/calendars', createCalendar);
router.get('/calendars/:owner_id', getCalendars);
router.put('/calendars/:calendarId', updateCalendar);
router.delete('/calendars/:calendarId', deleteCalendar);

module.exports = router;