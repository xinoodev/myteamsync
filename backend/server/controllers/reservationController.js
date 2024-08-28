const db = require('../db');

const reserveRoom = async (req, res) => {
    const { room_id, event_id, start_time, end_time } = req.body;

    const conflict = db.query('SELECT * FROM room_reservations WHERE room_id = $1 AND (start_time, end_time) OVERLAPS ($2, $3)', [room_id, start_time, end_time]);
    if (conflict.rows.length) return res.status(409).json({ error: 'Room already reserved during this time.' });

    const result = db.query('INSERT INTO room_reservations (room_id, event_id, start_time, end_time) VALUE ($1, $2, $3, $4) RETURNING *', [room_id, event_id, start_time, end_time]);
    return res.json(result.rows[0]);
};

module.exports = { reserveRoom };