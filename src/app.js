const express = require('express');
const path = require('path');
const cors = require('cors')
const createError = require('http-errors');
const mongoose = require('mongoose');
const taskRoutes = require('../routes/task_routes');

const config = require('../config/config');

const app = express();

mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    next(createError(404));
});

app.use('/tasks', taskRoutes);

app.listen(config.APP_PORT);


app.listen(3000, () => {
    console.log('Server up port: 3000')
})