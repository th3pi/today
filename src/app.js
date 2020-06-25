
// Network and backend configuration
const express = require('express');
const path = require('path');
const cors = require('cors')

// Logging configuration
const logger = require('morgan');
const cookieParser = require('cookie-parser');

// Database configuration
const mongoose = require('mongoose');
const prompt = require('prompt');
var port = 8181;
const props = [
    {
        name: 'ip',
        message: 'Enter Local IP Address: (e.g. 192.168.1.164) ',
        validator: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        warning: 'Invalid IP Address',
        required: true,
    },
    {
        name: 'port',
        message: 'Enter backend port: (e.g. 8181) ',
    }
]


// Database config input from admin
prompt.start();

prompt.get(props, (err, result) => {
    mongoose.connect(process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://' + result.ip + '/today-tasks', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    port = result.port;
})


const taskRoutes = require('../routes/task_routes');
const app = express();
app.use(logger('dev'));
app.use(cookieParser());

//Express configuration
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

//API Access point configuration
app.use('/tasks', taskRoutes);

app.listen(port);

console.log("Listening on: " + port);

module.exports = app;