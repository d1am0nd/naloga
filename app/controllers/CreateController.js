(function () {
    'use strict';

    angular
        .module('generalApp')
        .controller('CreateController', CreateController);

    function CreateController($scope, PersonService, CustomerService, TaskService){
        initController();

        function initController(){
            $scope.person = {};
            $scope.customer = {};
            $scope.task = {};

            $scope.people = [];
            $scope.customers = [];
            $scope.tasks = [];

            $scope.createPerson = createPerson;
            $scope.createCustomer = createCustomer;
            $scope.createTask = createTask;

            PersonService.GetPeople()
            .then(function(people) {
                $scope.people = people;
            });

            CustomerService.GetCustomers()
            .then(function(customers) {
                $scope.customers = customers;
            });

            TaskService.GetTasks()
            .then(function(tasks) {
                $scope.tasks = tasks;
            });
        }

        function createPerson(person) {
            PersonService.CreatePerson(person)
            .then(function(person) {
                $scope.people.unshift(person);
            })
            .catch(function(err){
                alert(err.message);
            });
        }

        function createCustomer(customer) {
            CustomerService.CreateCustomer(customer)
            .then(function(customer) {
                $scope.customers.unshift(customer);
            })
            .catch(function(err){
                alert(err.message);
            });
        }

        function createTask(task) {
            TaskService.CreateTask(task)
            .then(function(task) {
                $scope.tasks.unshift(task);
            })
            .catch(function(err){
                alert(err.message);
            });
        }
    }

})();
