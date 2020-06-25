const repo = require('../repos/taskRepo')
const express = require('express');
const app = express.Router();

app.post('/create', (req, res) => {

    repo.createTask(req.query.name, req.query.description, req.query.status, req.query.dueBy,
        req.query.partners, req.query.groups, req.query.priority, req.query.archive, req.query.trash).then((task) => {
            res.json(task);
        })
})

app.get('/get-tasks', (req, res) => {
    repo.getAll().then((tasks) => {
        res.json(tasks);
    })
})
module.exports = app;