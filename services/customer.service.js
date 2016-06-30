var Q = require('q');
var Customer = require('models/customer');

var service = {};

service.getCustomers = getCustomers;
service.createCustomer = createCustomer;
service.addTask = addTask;

module.exports = service;

function getCustomers() {
    var deferred = Q.defer();

    Customer.find({})
    .populate([
        { path: 'tasks' }
    ])
    .exec(function(err, customers) {
        if(err) deferred.reject(err);

        deferred.resolve(customers);
    });

    return deferred.promise;
}

function createCustomer(customer) {
    var deferred = Q.defer();

    Customer.create(customer, function(err, customer){
        if(err) deferred.reject(err);

        deferred.resolve(customer);
    });

    return deferred.promise;
}


function addTask(id, task) {
    var deferred = Q.defer();

    Customer.update({ _id: id },  { $inc: { hours: task.hours }, $push: { tasks: task._id }}, {}, function(err, customer) {
        if(err) deferred.reject(err);

        deferred.resolve(customer);
    });

    return deferred.promise;
}