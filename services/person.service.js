var Q = require('q');
var Person = require('models/person');

var service = {};

service.getPeople = getPeople;
service.createPerson = createPerson;
service.addTask = addTask

module.exports = service;

function getPeople() {
    var deferred = Q.defer();

    Person.find({})
    .populate([
        { path: 'tasks' }
    ])
    .exec(function(err, people) {
        if(err) deferred.reject(err);

        deferred.resolve(people);
    });
    
    return deferred.promise;
}

function createPerson(person) {
    var deferred = Q.defer();

    Person.create(person, function(err, person){
        if(err) deferred.reject(err);

        deferred.resolve(person);
    });

    return deferred.promise;
}

function addTask(id, task) {
    var deferred = Q.defer();

    Person.update({ _id: id }, { $inc: { hours: task.hours }, $push: { tasks: task._id }}, {}, function(err, person) {
        if(err) deferred.reject(err);

        deferred.resolve(person);
    });

    return deferred.promise;
}