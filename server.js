const express = require('express');
const { initDB } = require('./models/index');
const cors = require('cors'); 

// Import Routes
const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Initialize DB
initDB();

// Use Routes
app.use('/api/courses', courseRoutes);
app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('API is running on SQLite!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});