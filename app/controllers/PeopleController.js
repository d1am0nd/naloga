(function () {
    'use strict';

    angular
        .module('generalApp')
        .controller('PeopleController', PeopleController);

    function PeopleController($scope, PersonService){
        initController();

        function initController(){
            PersonService.GetPeople()
            .then(function(people) {
                $scope.people = people;
            });
        }
    }

})();
