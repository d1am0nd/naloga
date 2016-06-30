var express = require('express');
var router = express.Router();
var taskService = require('services/task.service');

// routes
router.get('/', getTasks);
router.post('/create', createTask);

module.exports = router;

function getTasks(req, res) {
    taskService.getTasks()
    .then(function (tasks) {
        if (tasks) {
            res.send(tasks);
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function createTask(req, res) {
    taskService.createTask(req.body)
    .then(function(task) {

        res.send(task);
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}