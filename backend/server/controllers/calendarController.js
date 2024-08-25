const db = require('../db');

const createCalendar = async (req, res) => {
    const { name } = req.body;
    const result = await db.query(
        'INSERT INTO calendars (name, owner_id) VALUES ($1, $2) RETURNING *', [name, req.user.id]);

    return res.json(result.rows[0]);
};

const getCalendars = async (req, res) => {
    const result = await db.query('SELECT * FROM calendars WHERE owner_id = $1', [req.user.id]);
    
    return res.json(result.rows);
};

module.exports = { createCalendar, getCalendars };