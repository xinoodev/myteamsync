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

const updateCalendar = async (req, res) => {
    const { calendarId } = req.params;
    const { name } = req.body;

    const result = await db.query('UPDATE calendars SET name = $1 WHERE id = $2 AND owner_id = $3 RETURNING *', [name, calendarId, req.user.id]);

    if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Calendario no encontrado o no autorizado para actualizar.' });
    }

    return res.json(result.rows[0]);
};

const deleteCalendar = async (req, res) => {
    const { calendarId } = req.params;

    const result = await db.query('DELETE FROM calendars WHERE id = $1 AND owner_id = $2 RETURNING *', [calendarId, req.user.id]);

    if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Calendario no encontrado o no autorizado para eliminar.' });
    }

    return res.json({ message: 'Calendario eliminado con éxito.' });
};

module.exports = { createCalendar, getCalendars, updateCalendar, deleteCalendar };