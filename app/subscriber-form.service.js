System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SubscriberFormService;
    return {
        setters:[],
        execute: function() {
            SubscriberFormService = (function () {
                function SubscriberFormService() {
                }
                SubscriberFormService.prototype.getFrequencies = function () {
                    return [
                        { id: 1, label: 'Daily' },
                        { id: 2, label: 'Weekly' },
                        { id: 3, label: 'Monthly' }
                    ];
                };
                return SubscriberFormService;
            }());
            exports_1("SubscriberFormService", SubscriberFormService);
        }
    }
});
//# sourceMappingURL=subscriber-form.service.js.map