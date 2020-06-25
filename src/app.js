const express = require('express');
const path = require('path');
const cors = require('cors')
const createError = require('http-errors');
const mongoose = require('mongoose');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const taskRoutes = require('../routes/task_routes');

const config = require('../config/config');

const app = express();

mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    next(createError(404));
});
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})

app.use('/tasks', taskRoutes);

app.listen(config.APP_PORT);

console.log("Listening on: " + config.APP_PORT);

module.exports = app;