var express = require('express');
var router = express.Router();
var personService = require('services/person.service');

// routes
router.get('/', getPeople);
router.post('/create', createPerson);

module.exports = router;

function getPeople(req, res) {
    personService.getPeople()
    .then(function (people) {
        if (people) {
            res.send(people);
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function createPerson(req, res) {
    personService.createPerson(req.body)
    .then(function(person) {
        res.send(person);
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}