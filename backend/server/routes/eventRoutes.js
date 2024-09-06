const express = require('express');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const router = express.Router();

router.post('/events', createEvent);
router.get('/events/:calendar_id', getEvents);
router.put('/events/:id', updateEvent);
router.delete('/event/:id', deleteEvent);

module.exports = router;