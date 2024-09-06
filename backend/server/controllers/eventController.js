const db = require('../db');

const createEvent = async (req, res) => {
    const { title, description, start_time, end_time } = req.body;
    const result = await db.query('INSERT INTO events (title, description, start_time, end_time) VALUES ($1, $2, $3, $4) RETURNING *', [title, description, start_time, end_time]);

    return res.json(result.rows[0]);
};

const getEvents = async (req, res) => {
    const result = await db.query('SELECT * FROM events WHERE calendar_id = $1', [req.params.calendar_id]);

    return res.json(result.rows);
};

const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, description, start_time, end_time } = req.body;
    const result = await db.query(
        'UPDATE events SET title = $1, description = $2, start_time = $3, end_time = $4 WHERE id = $5 RETURNING *', 
        [title, description, start_time, end_time, id]
    );

    if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Event not found.' });
    }

    return res.json(result.rows[0])
};

const deleteEvent = async (req, res) => {
    const { id } = req.params;
    const result = await db.query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Event not found.' });
    }

    return res.json({ message: 'Event successfully deleted' });
}

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };