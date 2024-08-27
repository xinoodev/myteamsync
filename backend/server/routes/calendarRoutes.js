const express = require('express');
const { createCalendar, getCalendars } = require('../controllers/calendarController');
const router = express.Router();

router.post('/calendars', createCalendar);
router.get('/calendars/:owner_id', getCalendars);

module.exports = router;