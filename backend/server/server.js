require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Routes imports:
const authRoutes = require('./routes/authRoutes');
const calendarRoutes = require('./routes/calendarRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Auth routes
app.use('/auth', authRoutes);
// Calendar routes
app.use('/api', calendarRoutes);
// Events routes
app.use('/api', eventRoutes);
// Reservation routes
app.use('/api', reservationRoutes);

const port = process.env.SERVER_PORT || 1202;
app.listen(port, () => {
    console.log(`Server running on PORT -> ${port}`);
});