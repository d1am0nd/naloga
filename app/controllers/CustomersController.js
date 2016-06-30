(function () {
    'use strict';

    angular
        .module('generalApp')
        .controller('CustomersController', CustomersController);

    function CustomersController($scope, CustomerService){
        initController();

        function initController(){
            CustomerService.GetCustomers()
            .then(function(customers) {
                $scope.customers = customers;
            });
        }
    }

})();