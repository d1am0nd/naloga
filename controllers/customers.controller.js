var express = require('express');
var router = express.Router();
var customerService = require('services/customer.service');

// routes
router.get('/', getCustomers);
router.post('/create', createCustomer);

module.exports = router;

function getCustomers(req, res) {
    customerService.getCustomers()
    .then(function (customers) {
        if (customers) {
            res.send(customers);
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function createCustomer(req, res) {
    console.log(req.body);
    customerService.createCustomer(req.body)
    .then(function(customer) {
        res.send(customer);
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}