(function () {
    'use strict';

    angular
        .module('generalApp')
        .factory('TaskService', Service);

    function Service($http, $q) {
        var service = {};

        service.CreateTask = CreateTask;
        service.GetTasks = GetTasks;

        return service;

        function CreateTask(task) {
            return $http.post('/api/tasks/create', task).then(handleSuccess, handleError);
        }

        function GetTasks() {
            return $http.get('/api/tasks').then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
