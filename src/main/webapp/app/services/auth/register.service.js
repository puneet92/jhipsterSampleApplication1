(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplication1App')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
