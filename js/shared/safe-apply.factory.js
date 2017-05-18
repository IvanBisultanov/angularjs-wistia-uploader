(function () {
    'use strict';

    angular
        .module('safe-apply', [])
        .factory('scopeFactory', function() {
            return {
                safeApply: function ($scope, fn) {
                    var phase = $scope.$root && $scope.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest') {
                        if (fn && typeof fn === 'function') {
                            fn();
                        }
                    } else {
                        $scope.$apply(fn);
                    }
                }
            };
        });

})();
