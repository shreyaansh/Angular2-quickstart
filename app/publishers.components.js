System.register(['angular2/core', './publisher.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, publisher_service_1;
    var PublisherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (publisher_service_1_1) {
                publisher_service_1 = publisher_service_1_1;
            }],
        execute: function() {
            PublisherComponent = (function () {
                function PublisherComponent(publisherService) {
                    this.publishers = publisherService.getPublishers();
                }
                PublisherComponent = __decorate([
                    core_1.Component({
                        selector: 'publishers',
                        template: "\n        <h2>Publishers</h2>\n        <ul>\n            <li *ngFor=\"#publisher of publishers\">\n            {{ publisher }}</li>\n        </ul>",
                        providers: [publisher_service_1.PublisherService]
                    }), 
                    __metadata('design:paramtypes', [publisher_service_1.PublisherService])
                ], PublisherComponent);
                return PublisherComponent;
            }());
            exports_1("PublisherComponent", PublisherComponent);
        }
    }
});
//# sourceMappingURL=publishers.components.js.map