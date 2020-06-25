const express = require('express');

const repo = require('../repos/taskRepo')
const app = express.Router();

/**
 * POST request - Creates a new task
 * Refer to model documentation to understand each query parameter
 */
app.post('/create', (req, res) => {
    repo.createTask(req.query.title, req.query.description, req.query.status, req.query.dueBy,
        req.query.partners, req.query.groups, req.query.priority, req.query.archive, req.query.trash).then((task) => {
            res.json(task);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        })
})

/**
 * GET request - Get's all the tasks entry, including archived tasks, and trash
 */
app.get('/get-tasks', (req, res) => {
    repo.getAll().then((tasks) => {
        res.json(tasks);
    }).catch((error) => {
        console.log(error);
        res.json(error);
    })
})

/**
 * Only for testing purposes
 */
app.get('/test-connection', (req, res) => {
    res.json("IT WORKS!");
})
module.exports = app;