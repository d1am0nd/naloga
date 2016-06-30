(function () {
    'use strict';

    angular
        .module('generalApp')
        .factory('PersonService', Service);

    function Service($http, $q) {
        var service = {};

        service.CreatePerson = CreatePerson;
        service.GetPeople = GetPeople;

        return service;

        function CreatePerson(person) {
            return $http.post('/api/people/create', person).then(handleSuccess, handleError);
        }

        function GetPeople() {
            return $http.get('/api/people').then(handleSuccess, handleError);
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
