require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Routes imports:
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Auth routers
app.use('/auth', authRoutes);

const port = process.env.SERVER_PORT || 1202;
app.listen(port, () => {
    console.log(`Server running on PORT -> ${port}`);
});