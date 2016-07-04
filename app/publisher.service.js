System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PublisherService;
    return {
        setters:[],
        execute: function() {
            PublisherService = (function () {
                function PublisherService() {
                }
                PublisherService.prototype.getPublishers = function () {
                    return ["Publisher1", "Publisher2", "Publisher3"];
                };
                return PublisherService;
            }());
            exports_1("PublisherService", PublisherService);
        }
    }
});
//# sourceMappingURL=publisher.service.js.map