const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const registerUser = async (req, res) => {
    const { email, username, password, code } = req.body;
    const validCode = await db.query('SELECT * FROM codes WHERE code = $1', [code])

    if (!validCode) return res.status(401).json({ error: 'Registration code does not exist.' });
    
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await db.query(
        'INSERT INTO users (email, username, password, code) VALUES ($1, $2, $3, $4) RETURNING *',
        [email, username, hashedPassword, code]
    );

    return res.json(result.rows[0]);
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);

    if (!user.rows.length) return res.status(401).json({ error: 'User not found.' });

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid password.' });

    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return res.json({ token });
};

module.exports = { registerUser, loginUser };