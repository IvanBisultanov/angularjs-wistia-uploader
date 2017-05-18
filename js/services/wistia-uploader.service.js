(function() {
    'use strict';

    angular
        .module('wistia-ib')
        .service('wistiaUploaderService', wistiaUploaderService);

    function wistiaUploaderService() {

        var config = {
            progress: 0,
            hashedId: null,
            isUploaded: false,
            isError: false
        };

        this.reset = function () {
            this.local = Object.assign({}, config);
        };

        this.reset();
    }

})();
