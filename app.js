require('dotenv').config();
const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');
const  db  = require('./config/db');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/todo', todoRoutes);
app.use('/api/user', userRoutes);


const start = async () => {
    await db.connect();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

start();