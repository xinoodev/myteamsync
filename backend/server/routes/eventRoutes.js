const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const router = express.Router();

router.post('/events', createEvent);
router.get('/events/:calendar_id', getEvents);

module.exports = router;