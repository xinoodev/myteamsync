const express = require('express');
const { reserveRoom } = require('../controllers/reservationController');
const router = express.Router();

router.post('/rooms/reserve', reserveRoom);

module.exports = router;