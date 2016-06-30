var Q = require('q');
var Task = require('models/task');
var customerService = require('services/customer.service');
var personService = require('services/person.service');

var service = {};

service.createTask = createTask;
service.getTasks = getTasks;

module.exports = service;

function createTask(task) {
    var deferred = Q.defer();

    Task.create(task, function(err, task){
        if(err) deferred.reject(err);

        console.log(task);

        customerService.addTask(task.customer, task);
        personService.addTask(task.person, task);

        deferred.resolve(task);
    });

    return deferred.promise;
}

function getTasks() {
    var deferred = Q.defer();

    Task.find({})
    .populate([
        { path: 'person' },
        { path: 'customer' }
    ])
    .exec(function(err, tasks) {
        if(err) deferred.reject(err);

        deferred.resolve(tasks);
    });

    return deferred.promise;
}