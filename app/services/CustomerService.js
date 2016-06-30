(function () {
    'use strict';

    angular
        .module('generalApp')
        .factory('CustomerService', Service);

    function Service($http, $q) {
        var service = {};

        service.CreateCustomer = CreateCustomer;
        service.GetCustomers = GetCustomers;

        return service;

        function CreateCustomer(customer) {
            return $http.post('/api/customers/create', customer).then(handleSuccess, handleError);
        }

        function GetCustomers() {
            return $http.get('/api/customers').then(handleSuccess, handleError);
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
