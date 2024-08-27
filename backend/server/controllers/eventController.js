const db = require('../db');

const createEvent = async (req, res) => {
    const { title, description, start_time, end_time } = req.body;
    const result = await db.query('INSERT INTO events (title, description, start_time, end_time) VALUES ($1, $2, $3, $4) RETURNING *', [title, description, start_time, end_time]);

    return res.json(result.rows[0]);
};

const getEvents = async (req, res) => {
    const result = db.query('SELECT * FROM events WHERE calendar_id = $1', [req.params.calendar_id]);

    return res.json(result.rows);
};

module.exports = { createEvent, getEvents };