const jwt = require('jsonwebtoken');

const verifyRole = (roles) => (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(403).json({ error: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token is not valid' });
        if (!roles.includes(user.role)) return res.status(403).json({ error: 'Insufficient permissions' });
        next();
    });
};

module.exports = verifyRole;