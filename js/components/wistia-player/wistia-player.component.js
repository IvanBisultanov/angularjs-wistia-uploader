(function () {
    'use strict';

    angular
        .module('wistia-ib')
        .component('wistiaPlayer', {
            templateUrl: './js/components/wistia-player/wistia-player.html',
            controller: Controller,
            controllerAs: 'vm'
        });

    Controller.$inject = ['wistiaUploaderService'];

    function Controller(wistiaUploaderService) {

        this.wistiaUploaderService = wistiaUploaderService;

    }

})();
