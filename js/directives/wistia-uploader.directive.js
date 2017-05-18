(function () {
    'use strict';

    angular
        .module('wistia-ib')
        .directive('wistiaUploader', [
            '$sce', 'wistiaUploaderService', 'scopeFactory', 'WISTIA_API_PASSWORD', 'WISTIA_UPLOAD_URL', 'WISTIA_JSONP_SRC_URL',
            function($sce, wistiaUploaderService, scopeFactory, WISTIA_API_PASSWORD, WISTIA_UPLOAD_URL, WISTIA_JSONP_SRC_URL) {

            function link(scope, element) {
                element.fileupload({
                    dataType: 'json',
                    url: WISTIA_UPLOAD_URL,
                    formData: {
                        api_password: WISTIA_API_PASSWORD
                    },
                    progressall: function (e, data) {
                        scopeFactory.safeApply(scope, function() {
                            wistiaUploaderService.local.progress = parseInt(data.loaded / data.total * 100, 10);
                        });
                    },
                    done: function (e, data) {
                        scopeFactory.safeApply(scope, function() {
                            wistiaUploaderService.local.hashedId = data.result.hashed_id;
                            wistiaUploaderService.local.jsonpSrcUrl = $sce.trustAsResourceUrl(WISTIA_JSONP_SRC_URL.replace(/HASH/, data.result.hashed_id));
                        });
                    },
                    fail: function(event, data) {
                        scopeFactory.safeApply(scope, function() {
                            wistiaUploaderService.local.isError = true;
                        });
                    }
                });
            }

            return {
                restrict: 'A',
                link: link,
                scope: false
            };
        }]);

})();
