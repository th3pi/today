const express = require('express');

const repo = require('../repos/taskRepo')
const app = express.Router();

app.post('/create', (req, res) => {
    repo.createTask(req.query.name, req.query.description, req.query.status, req.query.dueBy,
        req.query.partners, req.query.groups, req.query.priority, req.query.archive, req.query.trash).then((task) => {
            res.json(task);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        })
})

app.get('/get-tasks', (req, res) => {
    repo.getAll().then((tasks) => {
        res.json(tasks);
    }).catch((error) => {
        console.log(error);
        res.json(error);
    })
})

app.get('/', (req, res) => {
    res.json("IT WORKS!");
})
module.exports = app;